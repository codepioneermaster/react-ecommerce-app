var db = require("../models");
var isAuthenticated = require('../config/middleware/isAuthenticated.js');

// ROUTES
function router(app) {
  // show all orders
  app.get("/orders", isAuthenticated, function(request, response) {
    db.Cart.findAll({}).then(function(orders) {
      response.json(orders);
    });
  });
}

module.exports = router;
