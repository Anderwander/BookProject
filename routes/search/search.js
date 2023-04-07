import { Router } from "express";
import {isAuthorized,isAdmin} from "../../middlewares/auth.js";
import bookController from "../../controllers/book/bookViewController.js";
import upload from "../../middlewares/multer.js";


const router = Router();

router.get('/search', async (req, res) => {
    try {
      const query = req.query.q; // Obtener la cadena de búsqueda de la URL de la solicitud
      const results = await bookController.search(query); // Realizar la búsqueda en la base de datos utilizando el controlador de libros
      res.render('book/search', { results }); // Renderizar la vista de resultados de búsqueda con los resultados obtenidos
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while searching for books."
      });
    }
  });
  

  export default router;