const adminController = require('../controllers').main

module.exports = function (app) {

  /**
   * Users routes
   */
  app.get("/main/tickers", adminController.getTickers);
  app.get("/main/historical/:ticker/:date", adminController.getHistorical);
};
