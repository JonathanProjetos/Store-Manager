const Joi = require('joi');
require('express-async-errors');

const validate = (name) => {
  const products = Joi.object({
    name: Joi.string().required(),
  });

  const { error, value } = products.validate(name);
};

module.exports = validate;