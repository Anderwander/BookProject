import { Router } from "express";
import {
  isAuthorized,
  isAdmin,
  isAdminOrOwner,
} from "../../middlewares/auth.js";
import upload from "../../middlewares/multer.js";
import favsController from "../../controllers/favs/favsController.js";

const router = Router();

// Agregar libro a favoritos

router.post("/:username/favs/:idbook/add", isAuthorized, (req, res) => {
  favsController
    .addFavorite(req, res)

    .then(() => {
      res.redirect(`/users/user/profile/${req.params.username}`);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Ha ocurrido un error internorl");
    });
  //console.log("ESTO ESSSS:", req);
});

// Eliminar libro de favoritos
router.post("/:username/favs/:idbook/remove", isAdminOrOwner, (req, res) => {
  favsController
    .removeFavorite(req, res)
    .then(() => {
      res.redirect(`/users/user/profile/${req.user.username}`);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Ha ocurrido un error interno probandoooooo");
    });
});

// Mostrar favoritos

router.get("/user/favs", isAuthorized, (req, res) => {
  console.log("USERRRRR: ", req.user);
  favsController.renderFavorites(req, res);
});

export default router;
