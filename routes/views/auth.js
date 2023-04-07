import userController from "../../controllers/user/userController.js";
import { Router } from "express";
import { authenticate, isAdmin, isAuthorized } from "../../middlewares/auth.js";

const router = Router();

router.get("/login", (req, res) => {
  userController.loginForm(req, res);
});

router.post("/login", authenticate, (req, res) => {
  userController.login(req, res);
});

router.get("/logout", (req, res) => {
  userController.logout(req, res);
});

router.get("/register", (req, res) => {
  userController.registerForm(req, res);
});

router.post("/register", (req, res) => {
  userController.create(req, res);
});

export default router;
