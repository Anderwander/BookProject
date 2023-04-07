import { Router } from "express";
import { isAuthorized, isAdmin } from "../../middlewares/auth.js";
import userViewController from "../../controllers/user/userViewController.js";
import upload from "../../middlewares/multer.js";

const router = Router();

router.get("/", isAuthorized, (req, res) => {
  userViewController.getAll(req, res);
  // res.send("Mostrar todos los users");
});

router.get("/user/:id", isAuthorized, (req, res) => {
  userViewController.getById(req, res);
  // res.send("Mostrar un user con id " + req.params.id);
});

// editar un user

router.get("/user/edit/:id",isAdmin, (req, res) => {
  userViewController.updateForm(req,res);
  //res.send("Mostrar un equipo con id "+req.params.id);
});


/* router.get("/new",isAdmin,  (req, res) => {
    userViewController.createForm(req, res);
  }
)
 */
// crear un nuego user
router.post("/",[ isAuthorized,  upload.single("user_cover")],(req, res) => {
    userViewController.create(req, res);
    //res.send("Crear un nuevo user");
  }
);


router.post("/user/edit/:id", [isAdmin,upload.single("image")], (req,res) =>{
  userViewController.update(req,res);
  //res.send("Modificar un equipo con id "+req.params.id);
}
)

// eliminar un user delete
router.post("/delete/:id", isAdmin, (req, res) => {
  userViewController.deletes(req, res);
  // res.send("Eliminar un user con id " + req.params.id);
});

export default router;
