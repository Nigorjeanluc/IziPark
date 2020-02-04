import Router from 'express';

import AdminController from '../controllers/adminController';
import asyncErrorHandler from '../helpers/asyncErrorHandler';

const router = Router();

router.post(
  '/admin/place',
  asyncErrorHandler(AdminController.addPlace)
);

export default router;
