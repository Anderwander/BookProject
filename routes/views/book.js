import { Router } from "express";
import { isAuthorized, isAdmin } from "../../middlewares/auth.js";
import bookController from "../../controllers/book/bookViewController.js";
import upload from "../../middlewares/multer.js";

const router = Router();

router.get("/", isAuthorized, (req, res) => {
  bookController.getAll(req, res);
  // res.send("Mostrar todos los libros");
});

router.get("/book/:id", (req, res) => {
  bookController.getById(req, res);
  // res.send("Mostrar un libro con id " + req.params.id);
});

router.get("/new", isAuthorized, (req, res) => {
    bookController.createForm(req, res);
  }
);

// crear un nuego libro
router.post("/", [ isAuthorized, upload.single("book_cover")],(req, res) => {
    bookController.create(req, res);
    //res.send("Crear un nuevo libro");
  }
);

// editar un libro

router.get("/edit/:id", isAdmin, (req, res) => {
  bookController.updateForm(req, res);
  // res.send("Modificar un libro con id " + req.params.id);
});

router.post("/edit/:id",isAdmin,(req, res) => {
  bookController.update(req, res);
  // res.send("Modificar un libro con id " + req.params.id);
});

// eliminar un libro delete
router.post("/delete/:id", isAdmin, (req, res) => {
  bookController.deletes(req, res);
  // res.send("Eliminar un libro con id " + req.params.id);
});

export default router;
