import { Router } from 'express';
import authRoutes from './auth.routes.js';
import carRoutes from './car.routes.js';

const router = Router();

router.use(authRoutes);
router.use(carRoutes);

export default router;
