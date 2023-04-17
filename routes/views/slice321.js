import { Router } from "express";

const router = Router();

router.get("/slice321", function (req, res) {
  res.render("slice321");
});

export default router;
