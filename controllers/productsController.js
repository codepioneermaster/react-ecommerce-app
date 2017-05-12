// import model
var db = require('../models');

// HTML routing
function router(app) {

  // get all products
  app.get('/products', function(req, res) {
    
    db.Product.findAll({
    
    }).then(function(products) {
      // res.render('products', { products: products });
      res.json(products);
      console.log(products);
      
    });
  

  });

  // create a product
  app.post('/products', function(req, res) {
    db.Product.create({
      //product attributes on creation
      productName: req.body.productName
    }).then(function() {
      res.redirect('/products');
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
    });
  });

  app.delete('/products/:id', function(req, res) {
    db.Product.destroy({
      where: {
        id: params.req.id
      }
    }).then(function() {
      res.redirect('/products');
    });
  });

}

module.exports = router;
