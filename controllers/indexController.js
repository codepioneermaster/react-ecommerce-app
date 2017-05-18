function router(app) {

  app.get('/', function(req, res) {
    res.redirect('/products');
  });
   
}

module.exports = router;
