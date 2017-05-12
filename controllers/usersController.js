// Import User Model
var db = require("../models");


// ROUTES  
function router(app) {

  // view table of all users - ADMIN
  app.get('/users', function(request, response) {
    db.User.findAll({}).then(function(users) {
      response.render('users', {users});
    });
  });

  // view update form for specific user 
  app.get('/users/:id', function(request, response) {
    db.User.findOne({
      where: {
        id: request.params.id
      }
    }).then(function(user) {
      response.render('user-update', {user});
    });
  });

  // create new user - might change once we figure out authentication 
  app.post('/users', function(request, response) {
    db.User.create({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      pwd: request.body.password
    }).then(function(result) {
      response.redirect('/users');
    });
  });

  // update user information - might change once we figure out authentication 
  app.put('/users/:id', function(request, response) {
    db.User.update({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email
    }, { 
      where : {
        id: request.params.id
      }
    }).then(function(result){
      response.redirect('/users');
    });
  });

  // delete user 
  app.delete('/users/:id', function(request, response) {
    db.User.destroy({
      where: {
        id: request.params.id
      }
    }).then(function(result) {
      response.redirect('/users');
    });
  });
}

module.exports = router;
