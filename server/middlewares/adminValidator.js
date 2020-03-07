import Joi from '@hapi/joi';

const joiMessageFunction = (error, req, res, next) => {
  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message.replace(/"/g, '')).join(', ');
    return res.status(400).json({ status: 400, error: message });
  }
  return next();
};

const adminDevice = (req, res, next) => {
  const schema = Joi.object({
    model: Joi.string().trim().required().messages({ 'string.required': 'Device model is required', 'string.empty': 'Please enter your Device model' }),
    device_id: Joi.string().trim().required().messages({ 'string.required': 'Device ID is required', 'string.empty': 'Please enter your Device ID' }),
    placeId: Joi.number().integer().required().messages({ 'number.base': 'Invalid type, your place id must be a integer', 'number.empty': 'Please enter your place id' }),
    description: Joi.string().trim().required().messages({ 'string.required': 'Device description is required', 'string.empty': 'Please enter your Device description' }),
    // plateNumber: Joi.string().trim().required().min(7).max(7).messages({
    //   'string.required': 'Plate number description is required',
    //   'string.empty': 'Please enter your Plate number description',
    //   'string.min': 'Plate number length must be greater than or equal to 7 characters long',
    //   'string.max': 'Plate number length must be less than or equal to 7 characters long'
    // }),
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

export {
  adminDevice
};