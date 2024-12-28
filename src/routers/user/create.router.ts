import { Router, Request, Response } from 'express';
import { create_user } from '../../interfaces';
import { create_user_controller } from '../../controllers';
const createUserRouter: Router = Router();
createUserRouter.post('/', async (req: Request, res: Response) => {
    try {
        const field: create_user = req.body;
        if (
            !field.name ||
            !field.user_name ||
            !field.email ||
            !field.password ||
            !field.dob ||
            !field.address ||
            !field.company_id ||
            !field.role ||
            !field.position
        ) {
            return res
                .status(400)
                .json({ success: false, message: 'Please fill all fields' });
        }
        const user = await create_user_controller(field);
        if (!user?.success) {
            return res.status(200).json(user);
        }
        return res.status(201).json(user);
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: `server message: ${error?.message}`,
        });
    }
});
export default createUserRouter;
