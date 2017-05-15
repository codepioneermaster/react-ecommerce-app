var db = require("../models");

// ROUTES
function router(app) {
  // show all orders
  app.get("/orders", function(request, response) {
    db.Order.findAll({}).then(function(orders) {
      response.json(orders);
    });
  });

  // show order by user id
 app.get("/orders/user/:id", function(request, response) {
  db.Order
    .findAll({
      where: {
        UserId: request.params.id
      },
      include: [db.Product]
    })
    .then(function(orderItems) {
      response.json(orderItems);
    })
    .catch(function(err) {
      console.log(err.message);
      response.send(err);
    });
  });

    // show order by order id
 app.get("/order/:id", function(request, response) {
  db.Order
    .findAll({
      where: {
        orderId: request.params.id
      },
      include: [db.Product]
    })
    .then(function(orderItems) {
      response.json(orderItems);
    })
    .catch(function(err) {
      console.log(err.message);
      response.send(err);
    });
  });

  //create order from cart TODO
  app.post("/order/create/", function(request, response) {
    db.Cart.create({

    }).then(function(orders) {
      response.json(orders);
    });

    db.Cart.destroy({

    }).then(function(orders) {
      response.json(orders);
    });
    
  });

}

module.exports = router;