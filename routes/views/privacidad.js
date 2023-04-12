import { Router } from "express";

const router = Router();

router.get('/privacidad', function(req, res) {
    res.render('privacidad');
  });

export default router;