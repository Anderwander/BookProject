import lendController from "./lendController.js";

const getAll = async (req, res) => {
  let result = await lendController.getAll();
  let auth = req.user;
  if (result[0] === 0) {
    res.render("lend/list", { books: result[1], auth: auth }); // llamamos al layout
  } else {
    let error = result[1];
    res.status(500).send({
      message: error.message || "some error occurred while retrieving lends.",
    });
  }
};

const getById = async (req, res) => {
  let id = req.params.id;
  let result = await lendController.getById(id);
  if (result[0] === 0) {
    let lend = result[1];
    if (!lend) {
      res.status(404).send({
        message: `Cannot find lend with id=${id}.`,
      });
    } else {
      res.render("lend/show", { lend: lend });
    }
  } else {
    let error = result[1];
    res.status(500).send({
      message: error.message || "some error occurred while retrieving lend.",
    });
  }
};

const createForm = async (req, res) => {
  let results = await lendController.getAll();
  let error = req.query.error;
  if (results[0] === 1 || results[1] === []) {
    res.render("lend/new", { error: error });
  } else {
    let lend = results[1];
    res.render("lend/new", { lend: lend, error: error });
  }
};

const create = async (req, res) => {
  let data = {
    request_date: req.body.request_date,
    return_date: req.body.return_date,
    idreceiver: req.body.idreceiver,
    idsender: req.body.idsender,
    idbook: req.body.idbook,
    finish: req.body.finish,
  };

  let result = await lendController.create(data);
  if (result[0] === 0) {
    res.redirect("/lends");
  } else {
    let error = result[1];
    let errorUri = encodeURIComponent(error.message);
    res.redirect(`/lends/new?error=${errorUri}`);
  }
};

const updateForm = async (req, res) => {
  let idlend = req.params.id;
  let result = await lendController.getById(idlend);

  const lend = result[1];

  res.render("lend/edit", { lend: lend });
};

const update = async (req, res) => {
  let data = {
    request_date: req.body.request_date,
    return_date: req.body.return_date,
    idreceiver: req.body.idreceiver,
    idsender: req.body.idsender,
    idbook: req.body.idbook,
    finish: req.body.finish,
  };
  let idlend = req.params.id;
  let result = await lendController.update(data, idlend);
  if (result[0] === 0) {
    res.redirect("/lends");
  } else {
    let error = result[1];
    let errorUri = encodeURIComponent(error.message);
    res.redirect(`/lends?error=${errorUri}`);
  }
};

const deletes = async (req, res) => {
  let idlend = req.params.id;
  let result = await lendController.deletes(idlend);
  res.redirect("/lends");
};

export default {
  getAll,
  getById,
  createForm,
  create,
  update,
  updateForm,
  deletes,
};
