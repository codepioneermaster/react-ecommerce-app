var db = require("../models");

// ROUTES
function router(app) {
   
  // show cart by user id
  app.get("/cart/", function(request, response) {
    console.log(request.user);
    db.Cart
      .findAll({
        where: {
          UserId: request.user.id
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
