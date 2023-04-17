import { Router } from "express";

const router = Router();

router.get("/aboutus", function (req, res) {
  const user = req.user;
  res.render("aboutus"), { user: user };
});

export default router;
