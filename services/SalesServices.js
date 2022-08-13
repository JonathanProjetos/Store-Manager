const SalesModels = require('../models/SalesModels');

const SalesServices = {
  IsertSales: async () => {
    const result = await SalesModels.InsertSales();
    return result;
  },
};

module.exports = SalesServices;