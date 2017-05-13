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
  // this won't work because of price changes!!
  // app.get("/orders/:id", function(request, response) {
  //   db.Order
  //     .findAll({
  //       where: {
  //         UserId: request.params.id
  //       },
  //       include: [db.Product]
  //     })
  //     .then(function(orderItems) {
  //       response.json(orderItems);
  //     })
  //     .catch(function(err) {
  //       console.log(err.message);
  //       response.send(err);
  //     });
  // });

  //create order from cart TODO
  app.post("/order/create/", function(request, response) {
    db.Order.create({

    }).then(function(orders) {
      response.json(orders);
    });
  });
}

module.exports = router;