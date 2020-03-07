import Router from 'express';

import AdminController from '../controllers/adminController';
import asyncErrorHandler from '../helpers/asyncErrorHandler';
import passwordHasher from '../middlewares/passwordHasher';
import isAdmin from '../middlewares/isAdmin';

const router = Router();
router.post(
  '/admin/device', isAdmin,
  asyncErrorHandler(AdminController.addDevice)
);

router.post(
  '/admin/place', isAdmin, passwordHasher,
  asyncErrorHandler(AdminController.addPlace)
);

router.put(
  '/admin/:id/place', isAdmin, passwordHasher,
  asyncErrorHandler(AdminController.editPlace)
);

export default router;
