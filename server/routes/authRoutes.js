import Router from 'express';

import AuthController from '../controllers/authController';
import asyncErrorHandler from '../helpers/asyncErrorHandler';
import { validateSignin } from '../middlewares/validations';

const router = Router();

router.post(
  '/admin/login', validateSignin,
  asyncErrorHandler(AuthController.login)
);

router.post(
  '/place/login', validateSignin,
  asyncErrorHandler(AuthController.placeLogin)
);

router.post(
  '/agent/login', validateSignin,
  asyncErrorHandler(AuthController.agentLogin)
);

export default router;
