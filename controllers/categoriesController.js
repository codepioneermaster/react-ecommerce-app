// import model
var db = require('../models');

// HTML routing
function router(app) {

  // get all products
  app.get('/categories', function(req, res) {
    
    db.Category.findAll({
    
    }).then(function(category) {
      res.json(category);
      console.log(category);
      
    });
  

  });

}