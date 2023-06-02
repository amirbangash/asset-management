
import mongoose from 'mongoose';
import Joi from 'joi'
import moment from 'moment'

const userSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': 'Please Provide Email Address',
        'string.email': 'Please Provide a valid Email',
    }),
    password: Joi.string().min(6).required().messages({
        'any.required': 'Please provide your password',
        'string.min': 'Password cannot be less than 6 characters',
    }),
    cnic: Joi.string().min(13).max(13).messages({
        'any.required': 'Please provide your CNIC',
        'string.min': 'CNIC cannot be less than 13 characters',
        'string.max': 'CNIC cannot be more than 13 characters',
    }),
    role: Joi.string().default('user')
});

function validateUserCreate(req, res, next) {
    const { error, value } = userSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        const errorObject = { Error: errors };
        return res.status(422).json(errorObject);
    }

    req.body = value;
    next();
}
const profileSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': 'Please Provide Email Address',
        'string.email': 'Please Provide a valid Email',
    }),
    // password: Joi.string().min(6).required().messages({
    //     'any.required': 'Please provide your password',
    //     'string.min': 'Password cannot be less than 6 characters',
    // }),
    cnic: Joi.string().min(13).max(13).messages({
        'any.required': 'Please provide your CNIC',
        'string.min': 'CNIC cannot be less than 13 characters',
        'string.max': 'CNIC cannot be more than 13 characters',
    }),
    role: Joi.string().default('user'),
    firstName: Joi.string().required().messages({
        'any.required': 'Please provide User First Name',
        'string.base': 'Please provide a valid user First Name',
    }),
    lastName: Joi.string().required().messages({
        'any.required': 'Please provide User Last Name',
        'string.base': 'Please provide a valid user Last Name',
    }),
    phoneNo: Joi.string().required().messages({
        'any.required': 'Please provide User Phone Number',
        'string.base': 'Please provide a valid user Phone Number',
    }),
    level: Joi.number().valid(0, 1, 2, 3, 4, 5).required().messages({
        'any.required': 'Please provide seniority Level Number',
        'number.base': 'Please provide a valid Level Number',
        'any.only': 'Please provide a valid Level Number between: 0 and 5'
    }),
    team: Joi.string().required().messages({
        'any.required': 'Please provide a team name',
        'number.base': 'Please provide a valid team',
        // 'any.only': 'Please provide a valid Level Number from the enum: 0, 1, 2, 3, 4, 5'
    }),
    organization: Joi.string().required().messages({
        'any.required': 'Please provide organization name',
        'number.base': 'Please provide a valid organization name',
        // 'any.only': 'Please provide a valid Level Number from the enum: 0, 1, 2, 3, 4, 5'
    }),
    image: Joi.string().default('null')
})
function validateUserProfile(req, res, next) {
    const { error, value } = profileSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        const errorObject = { Error: errors };
        return res.status(422).json(errorObject);
    }

    req.body = value;
    next();
}


export { validateUserCreate, validateUserProfile }