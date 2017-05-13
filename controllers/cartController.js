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

  //update quantity
   app.put("/cart/:userId/:itemId/:quantity", function(request, response) {
    db.Cart
      .update({quantity: request.params.quantity},{
        where: {
          UserId: request.params.userId,
          ProductId: request.params.itemId
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

   //delete item from cart
   app.delete('/cart/:userId/:itemId', function(request, response) {
    db.Cart.destroy({
      where: {
        UserId: request.params.userId,
        ProductId: request.params.itemId
      }
    }).then(function() {
      response.redirect('/carts');
    }).catch(function(err) {
        console.log(err.message);
        response.send(err);
    });
  });
}

module.exports = router;
