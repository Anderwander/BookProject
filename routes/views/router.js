import { Router } from "express";
import bookRouter from "./book.js";
import userRouter from "./user.js";
import authRouter from "./auth.js";
import searchRouter from "./search.js";
import { isAuthorized, isAdmin } from "../../middlewares/auth.js";
//import lendRouter from "./lend.js";
import favsRouter from "./favs.js";

const router = Router();

//router.use("/lends", lendRouter);
router.use("/", bookRouter);
router.use("/users", isAuthorized, userRouter);
router.use("/", authRouter);
router.get("/", (req, res) => {
  const auth = req.user;
  res.render("index", { user: auth });
  res.render("users/user/profile", { user: auth });
  res.render("users/fav", { user: auth });
});
router.get("/users", (req, res) => {
  const auth = req.user;

  res.render("index", { user: auth });
  res.render("users/user/profile", { user: auth });
  res.render("users/fav", { user: auth });
});

router.use("/search", searchRouter);
router.use("/user/favs", favsRouter);

export default router;
