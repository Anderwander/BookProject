import Book from "../../models/book.js";
 



const search = async (query) => {
    try {
      const results = await Book.findAll({
        where: {
            [Op.or]: [
              { title: { [Op.like]: `%${query}%` } },
              { writer: { [Op.like]: `%${query}%` } }
            ]
          }
        });
      return [0, results]; // Devuelve un arreglo con un código de éxito (0) y los resultados de búsqueda
    } catch (error) {
      return [1, error]; // Devuelve un arreglo con un código de error (1) y el error producido
    }
  };
  






const getAll = async () => {
    try{
        let books = await Book.findAll({
            attributes: ["idbook", "title","book_cover", "writer", "synopsis", "ISBN", "type" ]
            });
            return [0, books];
        } catch (error) {
            return [1, error];
        }
    };
 

const getById = async (id) => {
     try{
         let book = await Book.findByPk(id, {
               attributes: ["idbook", "title","book_cover", "writer", "synopsis", "ISBN","type" ]
            
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
    search,
    getAll,
    getById,
    create,
    update,
    deletes
};
