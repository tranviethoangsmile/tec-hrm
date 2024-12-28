import {
    create_user_service,
    get_user_by_id_service,
    get_all_user_service,
    get_all_by_company_id_service,
    get_all_by_position_service,
} from '../../services';

const create_user_controller = async (field: any) => {
    return await create_user_service(field);
};
const get_user_by_id_controller = async (id: any) => {
    return await get_user_by_id_service(id);
};
const get_all_user_controller = async () => {
    return await get_all_user_service();
};
const get_all_user_by_company_id_controller = async (id: string) => {
    return await get_all_by_company_id_service(id);
};
const get_all_user_by_position_controller = async (position: string) => {
    return await get_all_by_position_service(position);
};

export {
    create_user_controller,
    get_user_by_id_controller,
    get_all_user_controller,
    get_all_user_by_company_id_controller,
    get_all_user_by_position_controller,
};
