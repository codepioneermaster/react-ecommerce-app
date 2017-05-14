// Import User Model
var db = require("../models");

// ROUTES
function router(app) {
  // show all categories
  app.get("/categories", function(request, response) {
    db.Category.findAll({}).then(function(categories) {
      response.json(categories);
    });
  });

  // show products by category name
  app.get("/products/category/:categoryName", function(request, response) {
    db.sequelize.Promise.all([
      db.Product.findAll({
        where: {
          CategoryId: request.body.categoryId
        }
      }),
      db.Category.findAll({})
    ]).spread(function(products, categories) {
      res.render('products', {products, categories, user: req.user});
    });
     
    db.Category
      .findAll({
        where: {
          name: request.params.categoryName
        },
        include: [db.Product]
      })
      .then(function(categoryProducts) {
        response.json(categoryProducts);
      })
      .catch(function(err) {
        console.log(err.message);
        response.send(err);
      });
  });

  // create new category
  app.post("/category", function(request, response) {
    db.Category
      .create({
        name: request.body.name
      })
      .then(function(result) {
        response.send("created " + request.body.name);
      })
      .catch(function(err) {
        console.log(err.message);
        response.send(err);
      });
  });
}

module.exports = router;


