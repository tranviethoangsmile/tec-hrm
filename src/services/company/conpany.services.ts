import { CompanyRepo } from '../../repositorys';
import { valid_create_company, validation_id } from '../../validates';
import { Positions } from '../../enums';
const companyRp = new CompanyRepo();

const create_company_service = async (field: any) => {
    try {
        const isValid = valid_create_company(field);
        if (isValid?.error) {
            throw new Error(`${isValid?.error.message}`);
        }
        if (!Object.values(Positions).includes(field.position)) {
            throw new Error(`${field.position} -- Invalid position`);
        }
        const exist_company = await companyRp.SEARCH_WITH_NAME(field.name);
        if (exist_company?.success) {
            throw new Error(`${field.name} -- Company already exist`);
        }
        const company = await companyRp.CREATE(field);
        if (!company?.success) {
            throw new Error(`${company?.message}`);
        }
        return {
            success: true,
            data: company?.data,
        };
    } catch (error: any) {
        return {
            success: false,
            message: `service message:  - { ${error?.message} }`,
        };
    }
};

const get_all_company_service = async () => {
    try {
        const companies = await companyRp.GET_ALL_COMPANY();
        if (!companies?.success) {
            throw new Error(`${companies?.message}`);
        }
        return {
            success: true,
            data: companies?.data,
        };
    } catch (error: any) {
        return {
            success: false,
            message: `service message:  - { ${error?.message} }`,
        };
    }
};

const get_company_by_id_service = async (id: string) => {
    try {
        const isValid = validation_id(id);
        if (isValid?.error) {
            throw new Error(`${isValid?.error.message}`);
        }
        const company = await companyRp.GET_COMPANY_BY_ID(id);
        if (!company?.success) {
            throw new Error(`${company?.message}`);
        }
        return {
            success: true,
            data: company?.data,
        };
    } catch (error: any) {
        return {
            success: false,
            message: `service message:  - { ${error?.message} }`,
        };
    }
};

export {
    create_company_service,
    get_all_company_service,
    get_company_by_id_service,
};
