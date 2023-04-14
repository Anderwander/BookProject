import { Router } from "express";

const router = Router();

router.get("/chat", function (req, res) {
  res.render("chat");
});

export default router;
