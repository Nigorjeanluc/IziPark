import Router from 'express';

import AdminController from '../controllers/adminController';
import asyncErrorHandler from '../helpers/asyncErrorHandler';
import passwordHasher from '../middlewares/passwordHasher';
import { adminPlace } from '../middlewares/placeValidator';
import { adminDevice } from '../middlewares/adminValidator';
import isAdmin from '../middlewares/isAdmin';

const router = Router();
router.post(
  '/admin/device', isAdmin, adminDevice,
  asyncErrorHandler(AdminController.addDevice)
);

router.post(
  '/admin/place', isAdmin, adminPlace, passwordHasher,
  asyncErrorHandler(AdminController.addPlace)
);

router.put(
  '/admin/:id/place', isAdmin, passwordHasher,
  asyncErrorHandler(AdminController.editPlace)
);

export default router;
