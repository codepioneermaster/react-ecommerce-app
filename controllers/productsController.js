// import model
// var Product = require('../models/product.js');

// HTML routing
function router(app) {

  // get all products
  app.get('/products', function(req, res) {
    /*
    Product.findAll({
    
    }).then(function(products) {
      res.render('products', { products });
    });
    */
    res.render('products');
  });

  // create a product
  app.post('/products', function(req, res) {
    Product.create({
      //product attributes on creation
      productName: req.body.productName
    }).then(function() {
      res.redirect('/products');
    });
  });

  app.put('/products/:id', function(req, res) {
    let id = req.params.id;
    Product.update({
      // product attributes to update
    }, {
      where: {
        id: id
      }
    }).then(function() {
      res.redirect('/products/' + id);
    });
  });

  app.delete('/products/:id', function(req, res) {
    Product.destroy({
      where: {
        id: params.req.id
      }
    }).then(function() {
      res.redirect('/products');
    });
  });

}

module.exports = router;
