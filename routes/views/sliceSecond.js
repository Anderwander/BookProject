import { Router } from "express";

const router = Router();

router.get("/sliceSecond", function (req, res) {
  res.render("sliceSecond");
});

export default router;
