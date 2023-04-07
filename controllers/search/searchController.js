import Book from "../../models/book.js";
import { Op } from'sequelize';


const getAll = async (req, res) => {
    try {
      const query = req.query.q;
      console.log(`Query received: ${query}`);
      const results = await Book.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.like]: `%${query}%` } },
            { writer: { [Op.like]: `%${query}%` } }
          ]
        }
      });
        console.log(results);
        res.render('search/list', { books: results, query: query, search: results }); 
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };



export default { getAll };
