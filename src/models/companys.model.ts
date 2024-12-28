import { Model, DataTypes } from 'sequelize';
import { postgress_db } from '../dbConfig';
import { Positions } from '../enums';

class Company extends Model {
    public id!: string;
    public name!: string;
    public image!: string;
    public phone!: string;
    public position!: Enumerator;
}

Company.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: postgress_db,
        modelName: 'company',
        tableName: 'companys',
        timestamps: true,
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    },
);

export default Company;
