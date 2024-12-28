import { Model, DataTypes } from 'sequelize';
import { postgress_db } from '../dbConfig';

class Visa extends Model {
    public id!: string;
    public visa_number!: string;
    public start_date!: string;
    public end_date!: string;
}

Visa.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        visa_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
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

export default Visa;
