import Router from 'express';

import authRoutes from './authRoutes';
import adminRoutes from './adminRoutes';
import placeRoutes from './placeRoutes';

const router = Router();

router.use(authRoutes);
router.use(adminRoutes);
router.use(placeRoutes);

export default router;