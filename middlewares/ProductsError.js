const Joi = require('joi');
require('express-async-errors');

const validateProducts = (dados) => {
  const products = Joi.object({
    name: Joi.string().min(5).required().messages({
      'any.required': '400|"name" is required',
      'string.min': '422|"name" length must be at least 5 characters long',
    }),
  });
  
  const { error, value } = products.validate(dados);
  
  if (error) {
    throw error;
  }
  return value;
};

const ValidateSales = (salesData) => {
  const body = Joi.array()
    .items({
      productId: Joi.number().integer().required().messages({
        'any.required': '400|"productId" is required',
      }),
      quantity: Joi.number().integer().greater(0).required()
        .messages({
          'any.required': '400|"quantity" is required',
          'number.greater': '422|"quantity" must be greater than or equal to 1',
        }),
    });
  
  const { error, value } = body.validate(salesData);
  if (error) throw error;
  return value;
};

module.exports = {
  validateProducts,
  ValidateSales,
};
