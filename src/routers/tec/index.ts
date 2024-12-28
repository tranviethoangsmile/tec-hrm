import { Router } from 'express';
import versionRouter from '../version';
const tecRouter: Router = Router();
tecRouter.use('/v1', versionRouter);
export default tecRouter;
