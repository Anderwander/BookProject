import { Router } from "express";

const router = Router();

router.get('/aboutus', function(req, res) {
    res.render('aboutus');
  });

export default router;