import {
    create_company_service,
    get_all_company_service,
} from '../../services';
const create_company_controller = async (field: any) => {
    return await create_company_service(field);
};

const get_all_company_controller = async () => {
    return await get_all_company_service();
};

export { create_company_controller, get_all_company_controller };
