import { Router } from "express";

const router = Router();

router.get('/contacto', function(req, res) {
    res.render('contacto');
  });

export default router;