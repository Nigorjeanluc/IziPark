import Router from 'express';

import DeviceController from '../controllers/deviceController';
import asyncErrorHandler from '../helpers/asyncErrorHandler';
import isDevice from '../middlewares/isDevice';

const router = Router();

router.post(
  '/device/entry', isDevice,
  asyncErrorHandler(DeviceController.addEntry)
);

export default router;
