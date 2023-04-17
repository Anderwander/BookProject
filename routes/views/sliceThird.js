import { Router } from "express";

const router = Router();

router.get("/sliceThird", function (req, res) {
  res.render("sliceThird");
});

export default router;
