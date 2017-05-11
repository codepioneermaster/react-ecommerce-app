var passport = require('passport');

function router(app) {

  app.get('/auth/google', passport.authenticate('google', { scope: [ 'profile',
    'email'] }));

  app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

  app.get('/login', function(req, res){
    if (req.user) {
      res.redirect('/products');
    } 
    res.render('login'); // TODO
  });

  app.post('/login', passport.authenticate('local',{
    successRedirect: '/products',
    failureRedirect: '/login'
  }));

}

module.exports = router;
