import { Router, Response, Request } from 'express';
import { get_user_by_id_controller } from '../../controllers';

const getUserByIdRouter: Router = Router();
getUserByIdRouter.post('/', async (req: Request, res: Response) => {
    try {
        const id: string = req.body.id;
        if (!id) {
            return res
                .status(400)
                .json({ success: false, message: 'id is required' });
        }
        const user = await get_user_by_id_controller(id);
        if (!user?.success) {
            return res.status(200).json(user);
        }
        return res.status(202).json(user);
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: `server message: - ${error.message}`,
        });
    }
});

export default getUserByIdRouter;
