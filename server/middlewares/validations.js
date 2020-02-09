import Joi from '@hapi/joi';

const validationObj = (messages) => Joi.string().trim().required().messages(messages);
const joiMessageFunction = (error, req, res, next) => {
  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message.replace(/"/g, '')).join(', ');
    return res.status(400).json({ status: 400, error: message });
  }
  return next();
};

const validateAgent = (req, res, next) => {
  const schema = Joi.object({
    fullName: validationObj({ 'string.required': 'name is required', 'string.base': 'Invalid type, your name must be a string', 'string.empty': 'Please enter your name' }),
    serviceHours: validationObj({ 'string.required': 'Service hours are required', 'string.base': 'Invalid type, your service hours must be a string', 'string.empty': 'Please enter your service hours' }),
    email: validationObj({ 'string.base': 'Invalid type, your email must be a string', 'string.empty': 'Please enter your email', 'string.email': 'Your email is invalid, please enter a valid email' }).email(),
    password: validationObj({ 'string.base': 'Invalid type, your password must be a string', 'string.min': 'password must be at least 8 characters long', 'string.empty': 'Please enter your password' }).min(8).alphanum(),
    image: validationObj({ 'string.base': 'Invalid type, your image path must be a string', 'string.empty': 'Please enter your profile image' }),
    phoneNumber: validationObj({ 'string.required': 'Phone number is required', 'string.base': 'Invalid type, your phone number must be a string', 'string.empty': 'Please enter your phone number', 'string.min': 'Your phone number digits must be atleast be greater than 10' }).min(10)
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

const validatePlace = (req, res, next) => {
  const schema = Joi.object({
    placeName: validationObj({ 'string.required': 'name is required', 'string.base': 'Invalid type, your name must be a string', 'string.empty': 'Please enter your name' }),
    manager: validationObj({ 'string.required': 'Manager is required', 'string.base': 'Invalid type, your manager must be a string', 'string.empty': 'Please enter your manager' }),
    email: validationObj({ 'string.base': 'Invalid type, your email must be a string', 'string.empty': 'Please enter your email', 'string.email': 'Your email is invalid, please enter a valid email' }).email(),
    password: validationObj({ 'string.base': 'Invalid type, your password must be a string', 'string.min': 'password must be at least 8 characters long', 'string.empty': 'Please enter your password' }).min(8).alphanum(),
    image: validationObj({ 'string.base': 'Invalid type, your image path must be a string', 'string.empty': 'Please enter your profile image' }),
    phoneNumber: validationObj({ 'string.required': 'Phone number is required', 'string.base': 'Invalid type, your phone number must be a string', 'string.empty': 'Please enter your phone number', 'string.min': 'Your phone number digits must be atleast be greater than 10' }).min(10)
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

const validateSignin = (req, res, next) => {
  const schema = Joi.object({
    email: validationObj({ 'string.required': 'email is required', 'string.base': 'Invalid type, your email must be a string', 'string.empty': 'Please enter your email' }),
    password: validationObj({ 'string.required': 'Password is required', 'string.empty': 'Please enter your password' })
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

export {
  validateAgent,
  validatePlace,
  validateSignin
};
