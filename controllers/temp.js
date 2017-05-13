var seeds = require('../db/seeds.js')
function router(app) {

  app.get('/createSeeds', function(req, res) {
    seeds.createSeedData()
    res.send('initiated');
  
   });

};

module.exports = router;