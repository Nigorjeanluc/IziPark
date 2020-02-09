import Router from 'express';

import AdminController from '../controllers/adminController';
import asyncErrorHandler from '../helpers/asyncErrorHandler';
import passwordHasher from '../middlewares/passwordHasher';
import isAdmin from '../middlewares/isAdmin';
import { validatePlace } from '../middlewares/validations';

const router = Router();

router.post(
  '/admin/place', validatePlace, isAdmin, passwordHasher,
  asyncErrorHandler(AdminController.addPlace)
);

router.put(
  '/admin/:id/place', isAdmin, passwordHasher,
  asyncErrorHandler(AdminController.editPlace)
);

export default router;
