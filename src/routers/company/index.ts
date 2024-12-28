import { Router } from 'express';
import createCompanyRouter from './create.router';
import getAllCompanyRouter from './get_all.router';
const companyRouter: Router = Router();
companyRouter.use('/create', createCompanyRouter);
companyRouter.use('/get-all', getAllCompanyRouter);
export default companyRouter;
