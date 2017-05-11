// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');

// import passport configuration
var passport = require('./config/passport.js');

// set up port 
var PORT = process.env.PORT || 8080;

// set up express to handle data parsing and HTTP requests
var app = express();
app.use('/public', express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'));

// set up express to use passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// set up app to use express handlebars
app.set('views', path.join(__dirname, './views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: './views/layouts'
}));
app.set('view engine', '.hbs');

// import routes for controllers
require('./controllers/authController.js')(app);
require('./controllers/indexController.js')(app);
require('./controllers/usersController.js')(app);
require('./controllers/productsController.js')(app);
 
// start server
app.listen(PORT, function() {
  console.log('App listening on port ' + PORT);
});

