import { User } from '../../../models';

export interface IUser {
    CREATE(field: any): Promise<{
        success: boolean;
        message?: string;
        data?: User;
    }>;
    GET_USER_BY_ID(id: string): Promise<{
        success: boolean;
        message?: string;
        data?: User;
    }>;
    GET_ALL_USER(): Promise<{
        success: boolean;
        message?: string;
        data?: User[];
    }>;
    GET_ALL_USER_BY_COMPANY_ID(id: string): Promise<{
        success: boolean;
        message?: string;
        data?: User[];
    }>;
    GET_ALL_USER_BY_POSITION(position: string): Promise<{
        success: boolean;
        message?: string;
        data?: User[];
    }>;
}
