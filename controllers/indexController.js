function router(app) {

  app.get('/', function(req, res) {
    res.render('index');
  });
   
}

module.exports = router;
