import Lend from "../../models/lend.js";
import Book from "../../models/book.js";
import Usersql from "../../models/usersql.js";

const getAll = async () => {
  try {
    let lends = await Lend.findAll({
      attributes: [
        "idlend",
        "request_date",
        "return_date",
        "idreceiver",
        "idsender",
        "idbook",
        "finish",
      ],
      include: [
        {
          model: Book,
          attributes: ["idbook", "title", "book_cover", "writer"],
        },
        {
          model: Usersql,
          attributes: ["iduser", "username"],
        },
      ],
    });
    return [0, lends];
  } catch (error) {
    return [1, error];
  }
};

const getById = async (id) => {
  try {
    let lend = await Lend.findByPk(id, {
      attributes: [
        "idlend",
        "request_date",
        "return_date",
        "idreceiver",
        "idsender",
        "idbook",
        "finish",
      ],
      include: [
        {
          model: Book,
          attributes: ["idbook", "title", "book_cover", "writer"],
        },
        {
          model: Usersql,
          attributes: ["iduser", "username"],
        },
      ],
    });
    return [0, lend];
  } catch (error) {
    return [1, error];
  }
};

const create = async (data) => {
  try {
    let lend = await Lend.create(data);
    return [0, lend];
  } catch (error) {
    return [1, error];
  }
};

const update = async (data, idlend) => {
  try {
    let lend = await Lend.update(data, {
      where: {
        idlend: idlend,
      },
    });
    return [0, lend];
  } catch (error) {
    return [1, error];
  }
};

const deletes = async (idlend) => {
  try {
    let lend = await Lend.destroy({
      where: {
        idlend: idlend,
      },
    });
    return [0, lend];
  } catch (error) {
    return [1, error];
  }
};

export default {
  getAll,
  getById,
  create,
  update,
  deletes,
};
