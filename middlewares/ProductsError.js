const Joi = require('joi');
require('express-async-errors');

const validate = (name) => {
  const products = Joi.object({
    name: Joi.string().required(),
  });

  const { error, value } = products.validate(name);
  if (error.message === 'Product not found') {
    error.code = 404;
    throw error;
  }
  return value;
};

module.exports = validate;