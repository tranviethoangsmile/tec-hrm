import { Router } from 'express';
import tecRouter from '../tec';
const apiRouter: Router = Router();
apiRouter.use('/tec', tecRouter);
export default apiRouter;
