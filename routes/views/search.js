import { Router } from "express";
import {isAuthorized,isAdmin} from "../../middlewares/auth.js";
import upload from "../../middlewares/multer.js";
import searchController from "../../controllers/search/searchController.js";


const router = Router();

router.get("/", (req, res) => {
  searchController.getAll(req, res);
  // res.send("Mostrar todos los libros buscados");
});

  export default router;


