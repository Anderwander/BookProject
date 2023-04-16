import Book from "../../models/book.js";
import User from "../../models/user.js";
import Wish from "../../models/users_has_wishes.js";

async function addFavorite(req, res) {
  const idbook = req.params.idbook;
  const username = req.user.username;
  console.log("username:", username);
  console.log("idbook:", idbook);
  // Buscar usuario
  const user = await User.findOne({ username: username });
  console.log("username:", user);
  if (!user) throw new Error("El usuario no existe");

  // Buscar libro
  const book = await Book.findByPk(idbook);
  if (!book) throw new Error("El libro no existe");

  // Verificar si el libro ya está en favoritos
  const isInfav = await Wish.findOne({
    where: {
      idbook: idbook,
      username: user.username,
    },
  });
  console.log("libro devuelto: ", isInfav);
  if (isInfav) {
    throw new Error("El libro ya está en favoritos");
  }

  // Agregar libro a favoritos
  await Wish.create({ username: user.username, idbook: idbook });
  console.log("Guardado libro correctamente");
  return true;
}

const showFavorites = async (req, res) => {
  const username = req.user.username;
  console.log("username es:", username);
  const user = await User.findByPk(username, {
    include: {
      model: Book,
      through: {
        model: users_has_wishes,
        where: { username: user.username },
      },
    },
  });
  res.render("user/favs", { user });

  console.error(error);
  res.status(500).send("Ha ocurrido un error interno más o menos grande");
};

async function removeFavorite(req, res) {
  const idbook = req.params.idbook;
  const username = req.params.username;
  console.log("username:", username);
  console.log("idbook:", idbook);
  // Buscar usuario
  const user = await User.findOne({ username: username });
  console.log("username:", user);
  if (!user) throw new Error("El usuario no existe");

  // Buscar libro
  const book = await Book.findByPk(idbook);
  if (!book) throw new Error("El libro no existe");

  // Verificar si el libro fue agregado a favoritos
  const isInfav = await Wish.findOne({
    where: {
      idbook: idbook,
      username: user.username,
    },
  });
  console.log("libro devuelto: ", isInfav);
  if (isInfav) {
    // Eliminar libro de favoritos
    await Wish.destroy({
      where: {
        idbook: idbook,
        username: user.username,
      },
    });
    console.log("Libro eliminado correctamente");
    return true;
  }
}

export default {
  addFavorite,
  removeFavorite,
  showFavorites,
};
