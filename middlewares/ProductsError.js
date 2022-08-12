/* const Joi = require('joi');
require('express-async-errors');

const validate = (dados) => {
  const products = Joi.object({
    name: Joi.string().required(),
  });

  const { error, value } = products.validate(dados);
  if (error.message === 'Product not found') {
    error.code = 404;
    throw error;
  }
  return value;
};

module.exports = validate; */