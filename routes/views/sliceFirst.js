import { Router } from "express";

const router = Router();

router.get("/sliceFirst", function (req, res) {
  res.render("sliceFirst");
});

export default router;
