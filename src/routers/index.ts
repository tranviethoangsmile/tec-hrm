import { Router } from 'express';
import apiRouter from './api';
const rootRouter: Router = Router();

rootRouter.use('/api', apiRouter);

export default rootRouter;
