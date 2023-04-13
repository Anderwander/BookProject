import bookController from "./bookController.js";

const getAll = async (req, res) => {
  let result = await bookController.getAll();
  let auth = req.user;
  if (result[0] === 0) {
    res.render("book/list", { books: result[1], auth: auth }); // llamamos al layout
  } else {
    let error = result[1];
    res.status(500).send({
      message: error.message || "some error occurred while retrieving books.",
    });
  }
};

const getById = async (req, res) => {
  let id = req.params.id;
  let user = req.user;
  let result = await bookController.getById(id);
  if (result[0] === 0) {
    let book = result[1];
    if (!book) {
      res.status(404).send({
        message: `Cannot find book with id=${id}.`,
      });
    } else {
      res.render("book/show", { book: book, user: user });
    }
  } else {
    let error = result[1];
    res.status(500).send({
      message: error.message || "some error occurred while retrieving book.",
    });
  }
};

const createForm = async (req, res) => {
  let results = await bookController.getAll();
  let error = req.query.error;
  if (results[0] === 1 || results[1] === []) {
    res.render("book/new", { error: error });
  } else {
    let book = results[1];
    res.render("book/new", { book: book, error: error });
  }
};

const create = async (req, res) => {
  console.log(req.file.path);
  let data = {
    book_cover: req.file ? req.file.path.split("img/")[1] : undefined,
    title: req.body.title == "" ? null : req.body.title,
    writer: req.body.writer == "" ? null : req.body.writer,
    type: req.body.type == "" ? null : req.body.type,
    synopsis: req.body.synopsis == 0 ? null : req.body.synopsis,
    username: req.user.username,
  };

  let result = await bookController.create(data);
  if (result[0] === 0) {
    res.redirect("/books");
  } else {
    let error = result[1];
    let errorUri = encodeURIComponent(error.message);
    res.redirect(`/books/new?error=${errorUri}`);
  }
};

const updateForm = async (req, res) => {
  let idbook = req.params.id;
  let result = await bookController.getById(idbook);

  const book = result[1];

  res.render("book/edit", { book: book });
};

const update = async (req, res) => {
  let data = {
    book_cover: req.body.book_cover === "" ? null : req.body.book_cover,
    title: req.body.title == "" ? null : req.body.title,
    writer: req.body.writer == "" ? null : req.body.writer,
    type: req.body.type == "" ? null : req.body.type,
    synopsis: req.body.synopsis == 0 ? null : req.body.synopsis,
  };
  let idbook = req.params.id;
  let result = await bookController.update(data, idbook);
  if (result[0] === 0) {
    res.redirect("/books");
  } else {
    let error = result[1];
    let errorUri = encodeURIComponent(error.message);
    res.redirect(`/books?error=${errorUri}`);
  }
};

const deletes = async (req, res) => {
  let idbook = req.params.id;
  let result = await bookController.deletes(idbook);
  res.redirect("/books");
};

const deleteMyBook = async (req, res) => {
  let idbook = req.params.id;
  let result = await bookController.deleteMyBook(idbook);
  res.redirect("/books");
};

export default {
  getAll,
  getById,
  createForm,
  create,
  update,
  updateForm,
  deletes,
  deleteMyBook,
};
