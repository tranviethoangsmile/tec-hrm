import Joi from 'joi';
import { valid_create_company } from './company/company.valid';
import { valid_create_user } from './user/user.valid';

const schema_id = Joi.string().guid().required();
const validation_id = (id: string) => {
    return schema_id.validate(id);
};
export { valid_create_company, valid_create_user, validation_id };
