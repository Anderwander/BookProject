import Book from "../../models/book.js";
import { Op } from "sequelize";

const getAll = async (req, res) => {
  try {
    const query = req.query["search-text"];
    console.log(`Query received: ${query}`);
    if (!query) {
      return res
        .status(400)
        .json({ message: "El parámetro de búsqueda no se proporcionó" });
    }
    const books = await Book.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { writer: { [Op.like]: `%${query}%` } },
        ],
      },
    });

    const results = [];

    books.forEach((book) => {
      const index = results.findIndex((result) => result.id === book.id);
      if (index === -1) {
        results.push(book);
      }
    });

    console.log(results);
    res.render("search/list", { books: books, query: query, search: books });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default { getAll };
