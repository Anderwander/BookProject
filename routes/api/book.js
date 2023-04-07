import { Router } from "express";
import {isAuthorized} from "../../middlewares/auth.js";
import bookController from "../../controllers/book/bookAPIController.js";

const router = Router();

router.get("/", (req,res) => {
    bookController.getAll(req,res);
    // res.send("Mostrar todos los libros");
});

router.get("/:id", (req,res) => {
    bookController.getById(req,res);
    // res.send("Mostrar un libro con id " + req.params.id);
});

// crear un nuego libro
router.post("/", isAuthorized, (req,res) => {
    bookController.create(req,res);
    //res.send("Crear un nuevo libro");
});

// editar un libro

router.put("/:id", isAuthorized, (req,res) => {
    bookController.update(req,res);
    // res.send("Modificar un libro con id " + req.params.id);
});

// eliminar un libro delete
router.delete("/:id", isAuthorized, (req,res) => {
    bookController.deletes(req,res);
    // res.send("Eliminar un libro con id " + req.params.id);
});
 
export default router;
