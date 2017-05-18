// import model
var db = require('../models');
var isAdmin = require('../config/middleware/isAdmin.js');
var isAuthenticated = require('../config/middleware/isAuthenticated.js');

// HTML routing
function router(app) {

  // get all products
  app.get('/products', function(req, res) {
    db.sequelize.Promise.all([
      db.Product.findAll({}),
      db.Category.findAll({})
    ]).spread(function(products, categories) {
      //res.json(products);
      res.render('products', {products, categories, user: req.user});
    });
    // db.Product.findAll({
    
    // }).then(function(products) {
    //   res.render('products', { products, user: req.user}); 
    // });
  });

  app.get('/products/:id', function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(product) {
      res.render('product', { product, user: req.user, id: req.params.id });
    })
  })

  // create a product
  app.post('/products', function(req, res) {
    db.Product.create({
      //product attributes on creation
      productName: req.body.productName
    }).then(function() {
      res.redirect('/products');
    }).catch(function(err) {
        console.log(err.message);
        response.send(err);
    });
  });

  app.put('/products/:id', function(req, res) {
    // let id = req.params.id;
    db.Product.update({
      // product attributes to update
    }, {
      where: {
        id: id
      }
    }).then(function() {
      res.redirect('/products/' + id);
    }).catch(function(err) {
        console.log(err.message);
        response.send(err);
    });
  });

  app.delete('/products/:id', function(req, res) {
    db.Product.destroy({
      where: {
        id: params.req.id
      }
    }).then(function() {
      res.redirect('/products');
    }).catch(function(err) {
        console.log(err.message);
        response.send(err);
    });
  });

}

module.exports = router;
