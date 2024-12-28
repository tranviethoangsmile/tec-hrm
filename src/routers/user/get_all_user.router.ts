import { Router, Request, Response } from 'express';
import { get_all_user_controller } from '../../controllers';

const getAllUserRouter: Router = Router();

getAllUserRouter.post('/', async (req: Request, res: Response) => {
    try {
        const users = await get_all_user_controller();
        if (!users?.success) {
            return res.status(200).json(users);
        }
        return res.status(202).json(users);
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: `server message: - ${error.message} `,
        });
    }
});

export default getAllUserRouter;
