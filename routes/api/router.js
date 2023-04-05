import { Router } from "express";
import bookRouter from "./book.js";
import userRouter from "./user.js";

const router = Router();

router.use("/books", bookRouter);
router.use("/users", userRouter);


export default router;
