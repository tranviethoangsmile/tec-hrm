import { Company, User } from '../../models';
import { IUser } from '../interfaces';

class UserRepo implements IUser {
    async CREATE(field: any) {
        try {
            const user: User | null = await User.create({
                ...field,
            });
            if (user === null) {
                throw new Error('Failed to create user');
            }
            return {
                success: true,
                data: user,
            };
        } catch (error: any) {
            return {
                success: false,
                message: `repository message - { ${error?.message} }`,
            };
        }
    }

    async GET_USER_BY_ID(id: string) {
        try {
            const user: User | null = await User.findByPk(id, {
                attributes: [
                    'id',
                    'name',
                    'email',
                    'phone',
                    'address',
                    'dob',
                    'avatar',
                    'role',
                    'position',
                ],
                include: [
                    {
                        model: Company,
                        as: 'company',
                        attributes: ['name'],
                    },
                ],
            });
            if (user === null) {
                throw new Error('user not found');
            }
            return {
                success: true,
                data: user,
            };
        } catch (error: any) {
            return {
                success: false,
                message: `repository message - { ${error?.message} }`,
            };
        }
    }

    async GET_ALL_USER() {
        try {
            const users: User[] = await User.findAll({
                attributes: [
                    'id',
                    'name',
                    'email',
                    'phone',
                    'address',
                    'dob',
                    'avatar',
                    'role',
                    'position',
                ],
                include: [
                    {
                        model: Company,
                        as: 'company',
                        attributes: ['name'],
                    },
                ],
            });
            if (users.length === 0) {
                throw new Error('no user found');
            }
            return {
                success: true,
                data: users,
            };
        } catch (error: any) {
            return {
                success: false,
                message: `repository message - { ${error?.message} }`,
            };
        }
    }

    async GET_ALL_USER_BY_COMPANY_ID(id: string) {
        try {
            const users: User[] = await User.findAll({
                where: {
                    company_id: id,
                },
                attributes: [
                    'id',
                    'name',
                    'email',
                    'phone',
                    'address',
                    'dob',
                    'avatar',
                    'role',
                    'position',
                ],
                include: [
                    {
                        model: Company,
                        as: 'company',
                        attributes: ['name'],
                    },
                ],
            });
            if (users.length === 0) {
                throw new Error('no user found');
            }
            return {
                success: true,
                data: users,
            };
        } catch (error: any) {
            return {
                success: false,
                message: `repository message - { ${error?.message} }`,
            };
        }
    }

    async GET_ALL_USER_BY_POSITION(position: string) {
        try {
            const users: User[] = await User.findAll({
                where: {
                    position: position,
                },
                attributes: [
                    'id',
                    'name',
                    'email',
                    'phone',
                    'address',
                    'dob',
                    'avatar',
                    'role',
                    'position',
                ],
                include: [
                    {
                        model: Company,
                        as: 'company',
                        attributes: ['name'],
                    },
                ],
            });
            if (users.length === 0) {
                throw new Error('no user found');
            }
            return {
                success: true,
                data: users,
            };
        } catch (error: any) {
            return {
                success: false,
                message: `repository message - { ${error?.message} }`,
            };
        }
    }
}

export default UserRepo;
