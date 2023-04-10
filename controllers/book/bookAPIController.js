import bookController from "./bookController.js";

const getAll = async (req,res) => {
    let result = await bookController.getAll();
    if(result[0] === 0) {
        res.send(result[1]);
    }else {
        let error = result [1];
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving books."
        });
    }
};
 

const getById = async (req,res) => {
    let id= req.params.id;
    let result = await bookController.getById(id);
            if(result[0] === 0) {
                let book = result[1];
                if (!book) {
                    res.status(404).send({
                        message: `Cannot find book with id=${id}.`
                    });
                } else {
                    res.send(book);
                }
            } else {
                let error = result[1];
                res.status(500).send({
                    message: error.message || "some error occurred while retrieving book."
                });
            }
};

const create = async (req,res) => {
        let data ={
            book_cover: req.body.book_cover,
            title: req.body.title,
            type: req.body.type,
            writer: req.body.writer,
            synopsis: req.body.synopsis,
            //ISBN: req.body.ISBN,
        }
        let result = await bookController.create(data);

        if(result[0] === 0) {
            res.send(result[1]);
        } else {
            let error = result[1];
            res.status(500).send({
                message: error.message || "some error occurred while creating book."
            });
     }
};

const update = async (req,res) => {
            let data = {
                book_cover: req.body.book_cover,
                title: req.body.title,
                type: req.body.type,
                writer: req.body.writer,
                synopsis: req.body.synopsis,
                //ISBN: req.body.ISBN,
            }
            let idbook=req.params.id
        
            let result = await bookController.update(data,idbook);
            if(result[0] === 0) {
                res.send(result[1]);
            } else {
                let error = result[1];
                res.status(500).send({
                message: error.message || "some error occurred while updating book."
        });
    }
} 

const deletes = async (req,res) => {
        let idbook = req.params.id;
        let result = await bookController.deletes(idbook);
        if(result[0] === 0) {
            if(result[1] === 0){
                res.status(404).send({
                message: `Book with id=${idbook} not found.`
                });
            }
            else {
            res.send("Book deleted");
            }
        } else {
            let error = result[1];
            res.status(500).send({
                message: error.message || "some error occurred while updating book."
            });
        }  
}


export default {
    getAll,
    getById,
    create,
    update,
    deletes
}