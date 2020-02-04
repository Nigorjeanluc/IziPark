import Router from 'express';

import AuthController from '../controllers/authController';
import asyncErrorHandler from '../helpers/asyncErrorHandler';

const router = Router();

router.post(
  '/admin/login',
  asyncErrorHandler(AuthController.login)
);

router.post(
  '/place/login',
  asyncErrorHandler(AuthController.placeLogin)
);

export default router;
