import Router from 'express';

import DeviceController from '../controllers/deviceController';
import asyncErrorHandler from '../helpers/asyncErrorHandler';
import isDevice from '../middlewares/isDevice';
import {addEntryValidator} from '../middlewares/deviceValidator';

const router = Router();

router.post(
  '/device/entry', isDevice, addEntryValidator,
  asyncErrorHandler(DeviceController.addEntry)
);

export default router;
