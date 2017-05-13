var db = require("../models");

// ROUTES
function router(app) {
  // show all orders
  app.get("/orders", function(request, response) {
    db.Cart.findAll({}).then(function(orders) {
      response.json(orders);
    });
  });
}

module.exports = router;