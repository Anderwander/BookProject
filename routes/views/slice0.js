import { Router } from "express";

const router = Router();

router.get("/slice0", function (req, res) {
  res.render("slice0");
});

export default router;
