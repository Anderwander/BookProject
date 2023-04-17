import { Router } from "express";
import { isAuthorized, isAdminOrOwner } from "../../middlewares/auth.js";
import bookController from "../../controllers/book/bookViewController.js";
import upload from "../../middlewares/multer.js";

const router = Router();

router.get("/", isAuthorized, (req, res) => {
  bookController.getAll(req, res);
  // res.render("book/list", { books: result[1], user: user, route: "list" });
  // res.send("Mostrar todos los libros");
});

router.get("/book/:id", isAuthorized, (req, res) => {
  bookController.getById(req, res);
  // res.send("Mostrar un libro con id " + req.params.id);
});

router.get("/new", isAuthorized, (req, res) => {
  bookController.createForm(req, res);
});

// crear un nuego libro
router.post("/", [isAuthorized, upload.single("book_cover")], (req, res) => {
  bookController.create(req, res);
  //res.send("Crear un nuevo libro");
});

// editar un libro

router.get("/edit/:id", isAdminOrOwner, (req, res) => {
  bookController.updateForm(req, res);
  // res.send("Modificar un libro con id " + req.params.id);
});

router.post("/edit/:id", isAdminOrOwner, (req, res) => {
  bookController.update(req, res);
  // res.send("Modificar un libro con id " + req.params.id);
});

// eliminar un libro delete
router.post("/delete/:id", isAdminOrOwner, (req, res) => {
  bookController.deletes(req, res);
  // res.send("Eliminar un libro con id " + req.params.id);
});

// eliminar un libro mio
router.post("/delete/:id", isAdminOrOwner, (req, res) => {
  bookController.deleteMyBook(req, res);
  // res.send("Eliminar un libro con id " + req.params.id);
});

export default router;
