var db = require("../models");

// ROUTES
function router(app) {
  // show all carts
  app.get("/carts", function(request, response) {
    db.Cart.findAll({}).then(function(carts) {
      response.json(carts);
    });
  });

  // show cart by user id
  app.get("/cart/:id", function(request, response) {
    db.Cart
      .findAll({
        where: {
          UserId: request.params.id
        },
        include: [db.Product]
      })
      .then(function(cartItems) {
        response.json(cartItems);
      })
      .catch(function(err) {
        console.log(err.message);
        response.send(err);
      });
  });
}

module.exports = router;
