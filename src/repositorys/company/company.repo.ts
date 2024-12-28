import { Company } from '../../models';
import { ICompany } from '../interfaces';

class CompanyRepo implements ICompany {
    async CREATE(field: any) {
        try {
            const company: Company | null = await Company.create({
                ...field,
            });
            if (company === null) {
                throw new Error('Company not created');
            }
            return {
                success: true,
                data: company,
            };
        } catch (error: any) {
            return {
                success: false,
                message: `repository message - { ${error?.message} }`,
            };
        }
    }

    async SEARCH_WITH_NAME(name: string) {
        try {
            const company: Company | null = await Company.findOne({
                where: {
                    name: name,
                },
            });
            if (company === null) {
                throw new Error('Company not found');
            }
            return {
                success: true,
                data: company,
            };
        } catch (error: any) {
            return {
                success: false,
                message: `repository message - { ${error?.message} }`,
            };
        }
    }

    async GET_ALL_COMPANY() {
        try {
            const companies: Company[] = await Company.findAll();
            if (companies.length < 1) {
                throw new Error('Company not found');
            }
            return {
                success: true,
                data: companies,
            };
        } catch (error: any) {
            return {
                success: false,
                message: `repository message - { ${error?.message} }`,
            };
        }
    }

    async GET_COMPANY_BY_ID(id: string) {
        try {
            const company: Company | null = await Company.findByPk(id, {
                attributes: ['id', 'name', 'image', 'position', 'phone'],
            });

            if (company === null) {
                throw new Error('Company not found');
            }
            return {
                success: true,
                data: company,
            };
        } catch (error: any) {
            return {
                success: false,
                message: `repository message - { ${error?.message} }`,
            };
        }
    }
}

export default CompanyRepo;
