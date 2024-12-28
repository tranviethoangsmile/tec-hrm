import { Router } from 'express';
import companyRouter from '../company';
import userRouter from '../user';
const versionRouter: Router = Router();

versionRouter.use('/company', companyRouter);
versionRouter.use('/user', userRouter);
export default versionRouter;
