const { authJwt, verifySignUp } = require("../middleware");
const adminController = require('../controllers').auth


module.exports = function (app) {

  /**
   * Users routes
   */
  app.get("/test", adminController.signup);
};
