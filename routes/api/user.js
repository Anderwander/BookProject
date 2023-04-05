import {Router} from "express";
import userControler from "../../controllers/user/userControler.js";

const router = Router ();

router.get("/", (req, res) => {
    userControler.getAll(req,res);
}
);


router.post("/", (req, res) => {
    userControler.create(req,res);
}
);

router.get("/login", (req, res) => {
    userControler.loginForm(req,res);
}
);

router.post("/login", (req, res) => {
    userControler.login(req,res);
}
);


export default router;