import Book from "../../models/book.js";
 

const getAll = async () => {
    try{
        let books = await Book.findAll({
            attributes: ["idbook", "title","book_cover", "writer", /* "synopsis", "ISBN", */"type" ]
            });
            return [0, books];
        } catch (error) {
            return [1, error];
        }
    };
 

const getById = async (id) => {
     try{
         let book = await Book.findByPk(id, {
               attributes: ["idbook", "title","book_cover", "writer", /* "synopsis", "ISBN", */"type" ]
            
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
    deletes
};
