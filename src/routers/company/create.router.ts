import { Request, Response, Router } from 'express';
import { create_company_controller } from '../../controllers';
import { create_company } from '../../interfaces';
const createCompanyRouter: Router = Router();

createCompanyRouter.post('/', async (req: Request, res: Response) => {
    try {
        const { name, position, phone, image }: create_company = req.body;
        if (!name || !position) {
            return res
                .status(400)
                .json({ success: false, message: 'Missing required fields' });
        }
        const company = await create_company_controller({
            name,
            position,
            phone,
            image,
        });

        if (!company?.success) {
            return res.status(200).json(company);
        }
        return res.status(201).json(company);
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: `server response: ${error?.message}`,
        });
    }
});
export default createCompanyRouter;
