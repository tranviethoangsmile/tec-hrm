import Joi from 'joi';

const schema_create_company = Joi.object({
    name: Joi.string()
        .trim()
        .required()
        .pattern(/^[A-Z\s]+$/) // Chỉ chấp nhận chữ in hoa và khoảng trắng
        .messages({
            'string.pattern.base': 'Name must be in uppercase letters only.',
        }),
    phone: Joi.string().allow(null).empty('').default(null),
    image: Joi.string().allow(null).empty('').default(null),
    position: Joi.string().required(),
});

const valid_create_company = (field: any) => {
    return schema_create_company.validate(field);
};

export { valid_create_company };
