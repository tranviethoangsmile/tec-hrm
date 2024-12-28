import Joi from 'joi';

const schema_create_user = Joi.object({
    name: Joi.string().min(5).max(99).required(),
    dob: Joi.date().required(),
    address: Joi.string().required(),
    company_id: Joi.string().guid(),
    position: Joi.string().required(),
    user_name: Joi.string().min(5).max(99).required(),
    password: Joi.string().min(5).max(99).required(),
    phone: Joi.string().regex(/^[0-9]{11}$/),
    avatar: Joi.string(),
    role: Joi.string().required(),
    email: Joi.string().email().required(),
});

const valid_create_user = (field: any) => {
    return schema_create_user.validate(field);
};

export { valid_create_user };
