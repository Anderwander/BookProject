import { Router } from "express";
import userController from "../../controllers/user/userController.js";

const router = Router();

router.get("/", (req, res) => {
  userController.getAll(req, res);
});

router.post("/", (req, res) => {
  userController.create(req, res);
});

router.get("/login", (req, res) => {
  userController.loginForm(req, res);
});

router.post("/login", (req, res) => {
  userController.login(req, res);
});

export default router;
