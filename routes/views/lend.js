import { Router } from "express";
import { isAuthorized, isAdmin } from "../../middlewares/auth.js";
import lendController from "../../controllers/lend/lendViewController.js";
import upload from "../../middlewares/multer.js";

const router = Router();

router.get("/", isAuthorized, (req, res) => {
  lendController.getAll(req, res);
  // res.send("Mostrar todos los libros");
});

router.get("/lend/:id", (req, res) => {
  lendController.getById(req, res);
  // res.send("Mostrar un libro con id " + req.params.id);
});

router.get(
  "/new",
  /* isAdmin, */ (req, res) => {
    lendController.createForm(req, res);
  }
);

// crear un nuego lend????????????????????
//router.post(
//    "/",
// [/* isAuthorized, */ upload.single("book_cover")],
//(req, res) => {
//lendController.create(req, res);
//res.send("Crear un nuevo libro");
// }
//);

// editar un libro

router.get("/edit/:id", (req, res) => {
  lendController.updateForm(req, res);
  // res.send("Modificar un libro con id " + req.params.id);
});

router.post("/edit/:id", (req, res) => {
  lendController.update(req, res);
  // res.send("Modificar un libro con id " + req.params.id);
});

// eliminar un libro delete
router.post("/delete/:id", isAuthorized, (req, res) => {
  lendController.deletes(req, res);
  // res.send("Eliminar un libro con id " + req.params.id);
});

export default router;
