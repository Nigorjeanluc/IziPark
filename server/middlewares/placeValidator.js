import Joi from '@hapi/joi';

const joiMessageFunction = (error, req, res, next) => {
  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message.replace(/"/g, '')).join(', ');
    return res.status(400).json({ status: 400, error: message });
  }
  return next();
};

const adminPlace = (req, res, next) => {
  const schema = Joi.object({
    placeName: Joi.string().trim().required().messages({ 'string.required': 'Place name is required', 'string.empty': 'Please enter your Place name' }),
    manager: Joi.string().trim().required().messages({ 'string.required': 'Manager is required', 'string.empty': 'Please enter your Manager' }),
    email: Joi.string().email().trim().required().messages({ 'string.required': 'email is required', 'string.base': 'Invalid type, your email must be a string', 'string.empty': 'Please enter your email', 'string.empty': 'Please enter your email' }),
    image: Joi.string().trim().required().messages({ 'string.required': 'Image is required', 'string.empty': 'Please enter your Image' }),
    password: Joi.string().trim().required().messages({ 'string.required': 'Password is required', 'string.empty': 'Please enter your password' }),
    phoneNumber: Joi.string().trim().required().min(10).max(13).messages({
      'string.required': 'Phone number is required',
      'string.empty': 'Please enter your Phone number',
      'string.min': 'Phone number length must be greater than or equal to 10 characters long',
      'string.max': 'Phone number length must be less than or equal to 13 characters long' })
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

const addEmployeeValidator = (req, res, next) => {
  const schema = Joi.object({
    fullName: Joi.string().trim().required().messages({ 'string.required': 'Place name is required', 'string.empty': 'Please enter your Place name' }),
    email: Joi.string().email().trim().required().messages({ 'string.required': 'email is required', 'string.base': 'Invalid type, your email must be a string', 'string.empty': 'Please enter your email', 'string.empty': 'Please enter your email' }),
    image: Joi.string().trim().required().messages({ 'string.required': 'Image is required', 'string.empty': 'Please enter your Image' }),
    password: Joi.string().trim().required().messages({ 'string.required': 'Password is required', 'string.empty': 'Please enter your password' }),
    phoneNumber: Joi.string().trim().required().min(10).max(13).messages({
      'string.required': 'Phone number is required',
      'string.empty': 'Please enter your Phone number',
      'string.min': 'Phone number length must be greater than or equal to 10 characters long',
      'string.max': 'Phone number length must be less than or equal to 13 characters long' }),
      serviceHours: Joi.string().trim().required().messages({ 'string.required': 'Service Hours is required', 'string.empty': 'Please enter your Service Hours' }),
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

export {
  adminPlace,
  addEmployeeValidator
};