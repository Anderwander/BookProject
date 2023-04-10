import { Router } from "express";
import {isAuthorized,isAdmin} from "../../middlewares/auth.js";
import upload from "../../middlewares/multer.js";
import favsController from "../../controllers/favs/favsController.js";
import users_has_wishes from "../../models/users_has_wishes.js";

const router = Router();

// Agregar libro a favoritos
router.post('/:iduser/favs/:idbook/add', isAuthorized, (req, res) => {
    const iduser = req.params.iduser;
    const idbook = req.body.idbook;
    favsController.addFavorite(iduser,idbook)
      .then(() => {
        res.redirect(`/users/${iduser}/favs`);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Ha ocurrido un error interno');
      });
  });

// Eliminar libro de favoritos
router.post('/:iduser/favs/:idbook/remove', isAuthorized, (req, res) => {
    const iduser = req.params.iduser;
    const idbook = req.body.idbook;
    favsController.removeFavorite(iduser, idbook)
      .then(() => {
        res.redirect(`/users/${iduser}/favs`);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Ha ocurrido un error interno');
      });
  });

// Mostrar lista de libros favoritos
router.get('/:iduser/favs', isAuthorized, (req, res) => {
    const iduser = req.params.iduser;
    favsController.showFavorites(iduser)
      .then((user) => {
        res.render('user/favs', { user });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Ha ocurrido un error interno');
      });
  });

export default router;
