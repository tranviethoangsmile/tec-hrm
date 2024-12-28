import Company from './companys.model';
import User from './users.model';
Company.hasMany(User, { foreignKey: 'company_id', as: 'company' });
User.belongsTo(Company, { foreignKey: 'company_id', as: 'company' });
export { Company, User };
