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

//require models for syncing
var db = require('./models');
// set up express to handle data parsing and HTTP requests
var app = express();

app.use('/public', express.static(path.join(__dirname, './public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
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
  layoutsDir: './views/layouts',
  partialsDir: './views/partials',
  helpers: {
      grouped_each: function(every, context, options) {
		    var out = "", subcontext = [], i;
		    if (context && context.length > 0) {
		        for (i = 0; i < context.length; i++) {
		            if (i > 0 && i % every === 0) {
		                out += options.fn(subcontext);
		                subcontext = [];
		            }
		            subcontext.push(context[i]);
		        }
		        out += options.fn(subcontext);
		    }
		    return out;
			},
			json: function(context) {
			    return JSON.stringify(context);
			}
    }
}));


app.set('view engine', '.hbs');

// import routes for controllers
require('./controllers/authController.js')(app);
require('./controllers/indexController.js')(app);
require('./controllers/usersController.js')(app);
require('./controllers/productsController.js')(app);
require('./controllers/categoriesController.js')(app);
require('./controllers/cartController.js')(app);
require('./controllers/ordersController.js')(app);
require('./controllers/temp.js')(app); //REMOVE for creating seed data
 
// start server
db.sequelize.sync({ force: false }).then(function() {
	app.listen(PORT, function() {
    console.log('App listening on port ' + PORT);
	});
});

