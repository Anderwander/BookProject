import Book from "../../models/book.js";
import User from "../../models/user.js";
import Usersql from "../../models/usersql.js";

/* const show = async (req, res) => {
  const book = await Book.findById(req.params.bookId);
  res.render('book/show', { book, userId: req.params.userId });
};

const addToFavorites = async (req, res) => {
  const { userId } = req.params;
  const { bookId } = req.body;
  await User.findByIdAndUpdate(userId, { $addToSet: { favoriteBooks: bookId } });
  res.redirect(`/users/${userId}/favs`);
};

const showFavorites = async (req, res) => {
  const user = await User.findById(req.params.userId).populate('favoriteBooks');
  res.render('user/favorites', { user });
}; */

  /* async function getFavorites(userId) {
    try {
      const user = await User.findByPk(userId, { include: Book });
      return user.books; // Devuelve los libros favoritos del usuario
    } catch (error) {
      throw new Error(error.message);
    }
  }
 */








const getAll = async () => {
    try{
        let books = await Book.findAll({
            attributes: ["idbook", "title","book_cover", "writer", "synopsis", /*"ISBN",*/ "type" ]
            });
            return [0, books];
        } catch (error) {
            return [1, error];
        }
    };
 

const getById = async (id) => {
     try{
         let book = await Book.findByPk(id, {
               attributes: ["idbook", "title","book_cover", "writer", "synopsis", /*"ISBN",*/"type" ]
            
                });
                return [0, book];
            }catch (error) {
                return [1, error];
            }
};

const create = async (data) => {
    try{
            let book = await Book.create(data);
            return [0, book];
        } catch (error) {
            return [1, error];
        }
    };

const update = async (data,idbook) => {
        try{
            let book = await Book.update(data,{
            where: {
                    idbook: idbook
                }
            });
            return [0, book];
        } catch (error) {
            return [1, error];
    }
};


const deletes = async (idbook) => {
    try{
        let book = await Book.destroy({
            where: {
                idbook: idbook
            }
        });
        return [0, book];
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
    //addFavorite,
    //removeFavorite,
    //getFavorites
    //show,
    //addToFavorites,
    //showFavorites,

};
