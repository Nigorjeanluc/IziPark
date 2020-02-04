import Router from 'express';

import authRoutes from './authRoutes';
import adminRoutes from './adminRoutes';

const router = Router();

router.use(authRoutes);
router.use(adminRoutes);

export default router;