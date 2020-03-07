import Router from 'express';

import authRoutes from './authRoutes';
import adminRoutes from './adminRoutes';
import placeRoutes from './placeRoutes';
import deviceRoutes from './deviceRoutes';

const router = Router();

router.use(authRoutes);
router.use(adminRoutes);
router.use(placeRoutes);
router.use(deviceRoutes);

export default router;