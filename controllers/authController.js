var passport = require('passport');
var db = require('../models/index.js');

function router(app) {

  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/'}), function(req, res) {
    res.redirect('/');
  });

  app.get('/login', function(req, res){
    if (req.user) {
      return res.redirect('/products');
    } 
    res.render('login');
  });

  app.post('/login', passport.authenticate('local',{
    successRedirect: '/products',
    failureRedirect: '/login'
  }));

  app.get('/signup', function(req, res) {
    if (req.user) {
      res.redirect('/products');
    }
    res.render('signup');
  });

  app.post('/signup', function(req, res) {

    console.log(req.body);
    // create new User
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      pwd: req.body.pwd
    },
    {
      fields: ['firstName', 'lastName', 'email', 'pwd']
    }).then(function(result) {
      res.redirect('/products');
    }).catch(function(err) {
      console.log(err);
      res.redirect('/signup');
    });
     
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });

}

module.exports = router;
