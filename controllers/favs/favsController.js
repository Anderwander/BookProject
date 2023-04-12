import Book from "../../models/book.js";
import User from "../../models/user.js";
import Wish from "../../models/users_has_wishes.js";
import Usersql from "../../models/usersql.js";

async function addFavorite(req, res) {

  const idbook = req.params.idbook;
  const username = req.user.username;
  console.log("username:", username);
  console.log("idbook:", idbook);
  // Buscar usuario
  const user = await Usersql.findOne({ username: username });
  console.log("username:", user);
  if (!user) throw new Error("El usuario no existe");

  // Buscar libro
  const book = await Book.findByPk(idbook);
  if (!book) throw new Error("El libro no existe");

  // Verificar si el libro ya está en favoritos
  const isInfav = await Wish.findOne({
    where: {
      idbook: idbook,
      iduser: user.iduser,
    },
  });
  console.log("libro devuelto: ", isInfav);
  if (isInfav) {
    throw new Error("El libro ya está en favoritos");
  }

  // Agregar libro a favoritos
  await Wish.create({ iduser: user.iduser, idbook: idbook });
  return true;
}


const showFavorites = async (req, res) => {
  const username = req.params.username;
  console.log("iduser es:", username);
  const user = await Usersql.findByPk(username, {
    include: {
      model: Book,
      through: {
        model: users_has_wishes,
        where: { iduser: user.iduser },
      },
    },
  });
  res.render("user/favs", { user });

  console.error(error);
  res.status(500).send("Ha ocurrido un error interno más o menos grande");
};


async function removeFavorite(req, res) {
    const { iduser, idbook } = req.params;
    console.log("iduser:", iduser);
    console.log("idbook:", idbook);
    // Buscar usuario
    const user = await Usersql.findOne({where: {username: username}});
    if (!user) throw new Error("El usuario no existe");
    // Buscar libro
    const book = await Book.findByPk(idbook);
    if (!book) throw new Error("El libro no existe");

    // Verificar si el libro fue agregado a favoritos
    const favorite = await Wish.findOne({
      where: { iduser: iduser, idbook: idbook },
    });
    if (!favorite) {
      throw new Error("El libro no fue agregado a favoritos");
    }
    // Eliminar libro de favoritos
    await favorite.destroy(book);
    return true;
}



export default {
  addFavorite,
  removeFavorite,
  showFavorites,
};
