// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var path = require('path');

// set up express app
var app = express();
var PORT = process.env.PORT || 8080;

//require models for syncing
var db = require('./models')
// set up express to handle data parsing and HTTP requests
app.use('/public', express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// set up app to use express handlebars
app.set('views', path.join(__dirname, './views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: './views/layouts'
}));
app.set('view engine', '.hbs');

// import routes for models
require('./controllers/indexController.js')(app);
require('./controllers/usersController.js')(app);
require('./controllers/productsController.js')(app);
 
// start server
db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function() {
	  console.log('App listentin on port ' + PORT);
	});
});

