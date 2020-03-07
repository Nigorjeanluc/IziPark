import Joi from '@hapi/joi';

const joiMessageFunction = (error, req, res, next) => {
  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message.replace(/"/g, '')).join(', ');
    return res.status(400).json({ status: 400, error: message });
  }
  return next();
};

const addEntryValidator = (req, res, next) => {
  const schema = Joi.object({
    cardId: Joi.string().trim().required().messages({ 'string.required': 'Card ID is required', 'string.empty': 'Please enter your Card ID' })
  });
  const { error } = schema.validate(req.body, {
    abortEarly: false
  });
  return joiMessageFunction(error, req, res, next);
};

export {
  addEntryValidator
};