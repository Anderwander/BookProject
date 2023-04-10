import { Router } from "express";
import bookRouter from "./book.js";
import userRouter from "./user.js";
import authRouter from "./auth.js";
import searchRouter from "./search.js";
import { isAuthorized,isAdmin } from "../../middlewares/auth.js";
//import lendRouter from "./lend.js";
import favsRouter from "./favs.js";


const router = Router();

//router.use("/lends", lendRouter);
router.use("/books", bookRouter);
router.use("/users", isAuthorized, userRouter); // faltaria meter dentro userRouter
router.use("/", authRouter);
router.get("/", (req, res) => {
  const auth = req.user;
  res.render("index", { auth });
});
router.use("/search", searchRouter);
router.use("/favs", favsRouter);



export default router;



