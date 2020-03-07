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

const signIn = (req, res, next) => {
  const schema = Joi.object({
    email: validationObj({ 'string.required': 'email is required', 'string.base': 'Invalid type, your email must be a string', 'string.empty': 'Please enter your email' }).email(),
    password: validationObj({ 'string.required': 'Password is required', 'string.empty': 'Please enter your password' })
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

const signInDevice = (req, res, next) => {
  const schema = Joi.object({
    device_id: validationObj({ 'string.required': 'Device ID is required', 'string.base': 'Invalid type, your Device ID must be a string', 'string.empty': 'Please enter your Device ID' })
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

export {
  signIn,
  signInDevice
};