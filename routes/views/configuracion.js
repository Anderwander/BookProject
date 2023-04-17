import { Router } from "express";

const router = Router();

router.get("/configuracion", function (req, res) {
  res.render("configuracion");
});

export default router;
