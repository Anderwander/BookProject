import { Router } from "express";
import bookRouter from "./book.js";
// import userRouter from "./user.js";
import authRouter from "./auth.js";
import {isAuthorized} from "../../middlewares/auth.js";

const router = Router();

router.use("/books", bookRouter);
router.use("/users", isAuthorized, ); // faltaria meter dentro userRouter
router.use("/", authRouter);
router.get("/",(req,res) => {
    const auth = req.user;
    res.render("index",{auth});
});


export default router;
