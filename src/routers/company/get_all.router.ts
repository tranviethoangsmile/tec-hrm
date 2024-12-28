import { Router, Request, Response } from 'express';
import { get_all_company_controller } from '../../controllers';
const getAllCompanyRouter: Router = Router();

getAllCompanyRouter.post('/', async (req: Request, res: Response) => {
    try {
        const result = await get_all_company_controller();
        if (!result?.success) {
            return res
                .status(200)
                .json({ success: false, message: result?.message });
        }
        return res.status(202).json({ success: true, data: result?.data });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: `server response: ${error?.message}`,
        });
    }
});

export default getAllCompanyRouter;
