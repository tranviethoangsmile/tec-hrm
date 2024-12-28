import { Router, Request, Response } from 'express';
import { get_all_user_by_company_id_controller } from '../../controllers';

const getAllUserByCompanyIdRouter: Router = Router();

getAllUserByCompanyIdRouter.post('/', async (req: Request, res: Response) => {
    try {
        const id: string = req.body.company_id;
        if (!id) {
            return res.status(400).json({ message: 'Company ID is required' });
        }
        const users = await get_all_user_by_company_id_controller(id);
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

export default getAllUserByCompanyIdRouter;
