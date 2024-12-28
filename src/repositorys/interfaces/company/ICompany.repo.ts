import { Company } from '../../../models';

export interface ICompany {
    CREATE(company_value: any): Promise<{
        success: boolean;
        data?: Company;
        message?: string;
    }>;
    SEARCH_WITH_NAME(name: string): Promise<{
        success: boolean;
        data?: Company;
        message?: string;
    }>;
    GET_ALL_COMPANY(): Promise<{
        success: boolean;
        data?: Company[];
        message?: string;
    }>;
    GET_COMPANY_BY_ID(id: string): Promise<{
        success: boolean;
        data?: Company;
        message?: string;
    }>;
}
