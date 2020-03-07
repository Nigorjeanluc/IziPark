import Router from 'express';

import AuthController from '../controllers/authController';
import asyncErrorHandler from '../helpers/asyncErrorHandler';
import {signIn, signInDevice} from '../middlewares/authValidator';

const router = Router();

router.post(
  '/admin/login', signIn,
  asyncErrorHandler(AuthController.login)
);

router.post(
  '/place/login', signIn,
  asyncErrorHandler(AuthController.placeLogin)
);

router.post(
  '/agent/login', signIn,
  asyncErrorHandler(AuthController.agentLogin)
);

router.post(
  '/device/login', signInDevice,
  asyncErrorHandler(AuthController.deviceLogin)
);
export default router;
