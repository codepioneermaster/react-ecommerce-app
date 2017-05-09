// Import User Model
var User = require('../models/user.js');

// ROUTES  
function router(app) {

  // view table of all users - ADMIN
  app.get('/users', function(request, response) {
    User.findAll({}).then(function(users) {
      response.render('users', {users});
    });

  });

  // view specific user - ADMIN or USER viewing self
  app.get('/users/:id', function(request, response) {
    User.findOne({
      where: {
        id: request.params.id
      }
    }).then(function(user) {
      response.render('user', {user});
    });
  });

  // create new user - might change once we figure out authentication 
  app.post('/users', function(request, response) {
    User.create({
      admin: request.body.admin, 
      email: request.body.email,
      password: request.body.password
    }).then(function(result) {
      response.redirect('/users');
    });
  });

  // update user information - might change once we figure out authentication 
  app.put('/users/:id', function(request, response) {
    User.update({
      email: request.body.email,
      password: request.body.password
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
    User.destroy({
      where: {
        id: request.params.id
      }
    }).then(function(result) {
      response.redirect('/users');
    });
  });
}

module.exports = router;
