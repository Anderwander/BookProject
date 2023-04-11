import { Router } from "express";
import { isAuthorized, isAdmin } from "../../middlewares/auth.js";
import userController from "../../controllers/user/userController.js";
import upload from "../../middlewares/multer.js";

const router = Router();

router.get("/", isAuthorized, (req, res) => {
  userController.getAll(req, res);
  // res.send("Mostrar todos los users");
});

router.get("/user/:id", isAuthorized, (req, res) => {
  userController.getById(req, res);
  // res.send("Mostrar un user con id " + req.params.id);
});

// editar un user

router.get("/user/edit/:username",isAdmin, (req, res) => {
  userController.updateForm(req,res);
  //res.send("Mostrar un equipo con id "+req.params.id);
});


/* router.get("/new",isAdmin,  (req, res) => {
    userViewController.createForm(req, res);
  }
)
 */
// crear un nuego user
router.post("/",(req, res) => {
    userController.create(req, res);
    //res.send("Crear un nuevo user");
  }
);


router.post("/user/edit/:username", [isAdmin,upload.single("image")], (req,res) =>{
  userController.update(req,res);
  //res.send("Modificar un equipo con id "+req.params.id);
}
);

router.post("/user/delete/:username", isAdmin, (req,res) => {
    userController.deletes(req,res);
    //res.send("Eliminar un equipo con id "+req.params.id);
});

export default router;
