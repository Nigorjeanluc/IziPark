import Router from 'express';

import PlaceController from '../controllers/placeController';
import asyncErrorHandler from '../helpers/asyncErrorHandler';
import passwordHasher from '../middlewares/passwordHasher';
import isManager from '../middlewares/isManager';

const router = Router();

router.post(
  '/place/employee', isManager, passwordHasher,
  asyncErrorHandler(PlaceController.addEmployee)
);

router.put(
  '/place/:id/employee', isManager, passwordHasher,
  asyncErrorHandler(PlaceController.editEmployee)
);

export default router;
