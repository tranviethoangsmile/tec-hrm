import { Router, Request, Response } from 'express';
import { get_all_user_by_position_controller } from '../../controllers';

const getAllByPositionRouter: Router = Router();
getAllByPositionRouter.post('/', async (req: Request, res: Response) => {
    try {
        const position: string = req.body.position;
        if (!position) {
            return res.status(400).json({ message: 'position is required' });
        }
        const users = await get_all_user_by_position_controller(position);
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
export default getAllByPositionRouter;
