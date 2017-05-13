// import model
var db = require('../models');

// HTML routing
function router(app) {

  // get all products
  app.get('/products', function(req, res) {
    
    db.Product.findAll({
    
    }).then(function(products) {
      res.render('products', { products });

      // res.json(products);
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
