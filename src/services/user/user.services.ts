import bcrypt from 'bcrypt';
import { Positions, Roles } from '../../enums';
import { UserRepo } from '../../repositorys';
import { valid_create_user, validation_id } from '../../validates';
import { get_company_by_id_service } from '../company/conpany.services';
const userRepo = new UserRepo();
const create_user_service = async (field: any) => {
    try {
        const isVlid = valid_create_user(field);
        if (isVlid?.error) {
            throw new Error(`${isVlid?.error.message}`);
        }
        const company_exist = await get_company_by_id_service(field.company_id);
        if (!company_exist?.success) {
            throw new Error(`${company_exist?.message}`);
        }
        if (!Object.values(Positions).includes(field.position)) {
            throw new Error(`${field.position} for position is not valid`);
        }
        if (!Object.values(Roles).includes(field.role)) {
            throw new Error(`${field.role} for role is not valid`);
        }
        const hashPass = await bcrypt.hash(field.password, 10);
        const fieldHashPassed = {
            ...field,
            password: hashPass,
        };

        const user = await userRepo.CREATE(fieldHashPassed);
        if (!user?.success) {
            throw new Error(`${user?.message}`);
        }
        return {
            success: true,
            data: user,
        };
    } catch (error: any) {
        return {
            success: false,
            message: `service message:  - { ${error?.message} }`,
        };
    }
};

const get_user_by_id_service = async (id: string) => {
    try {
        const isValid = validation_id(id);
        if (isValid?.error) {
            throw new Error(`${isValid?.error.message}`);
        }
        const user = await userRepo.GET_USER_BY_ID(id);
        if (!user?.success) {
            throw new Error(`${user?.message}`);
        }
        return {
            success: true,
            data: user?.data,
        };
    } catch (error: any) {
        return {
            success: false,
            message: `service message:  - { ${error?.message} }`,
        };
    }
};

const get_all_user_service = async () => {
    try {
        const users = await userRepo.GET_ALL_USER();
        if (!users?.success) {
            throw new Error(`${users?.message}`);
        }
        return {
            success: true,
            data: users?.data,
        };
    } catch (error: any) {
        return {
            success: false,
            message: `service message:  - { ${error?.message} }`,
        };
    }
};

const get_all_by_company_id_service = async (id: string) => {
    try {
        const isValid = validation_id(id);
        if (isValid?.error) {
            throw new Error(`${isValid?.error.message}`);
        }

        const users = await userRepo.GET_ALL_USER_BY_COMPANY_ID(id);
        if (!users?.success) {
            throw new Error(`${users?.message}`);
        }
        return {
            success: true,
            data: users?.data,
        };
    } catch (error: any) {
        return {
            success: false,
            message: `service message:  - { ${error?.message} }`,
        };
    }
};

const get_all_by_position_service = async (position: string) => {
    try {
        if (
            typeof position !== 'string' ||
            !Object.values(Positions).includes(position as Positions)
        ) {
            throw new Error(`${position} Invalid position`);
        }
        const users = await userRepo.GET_ALL_USER_BY_POSITION(position);
        if (!users?.success) {
            throw new Error(`${users?.message}`);
        }
        return {
            success: true,
            data: users?.data,
        };
    } catch (error: any) {
        return {
            success: false,
            message: `service message:  - { ${error?.message} }`,
        };
    }
};

export {
    create_user_service,
    get_user_by_id_service,
    get_all_user_service,
    get_all_by_company_id_service,
    get_all_by_position_service,
};
