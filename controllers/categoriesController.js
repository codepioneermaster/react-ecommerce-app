// import model
var db = require('../models');

// HTML routing
function router(app) {

	app.get('/category', function(req, res) {
    res.render('categories');
  });

  // get all products in category
  app.get('/category/:category', function(req, res) {
    
    db.Category.findOne({
    	where: {
    		name: req.params.category
    	},
    	include: [db.Product]
    }).then(function(dbCategory) {
      res.json(dbCategory);
      console.log(dbCategory);
      
    });
  

  });

}

module.exports = router;