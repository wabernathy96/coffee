// Require necessary dependencies
const express = require('express');
const bodyParser = require('body-parser');
var methodOverride = require('method-override')
const hbs = require('express-handlebars');

// Connect to server
let PORT = process.env.PORT || 9001;

let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Override methods for html form in order to use put req w/o ajax
app.use(methodOverride('_method'));

// Serves css for the site
app.use(express.static('public/assets/css'));
// Serve images for the site
app.use(express.static('public/assets/img'));

// Setup Handlebars 
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');

// Import routes obj from coffee_controller.js 
let routes = require('./controllers/coffee_controller');

// Tell the server to use the imported routes
app.use('/', routes);

// HEY SERVER CAN U HEAR ME?
app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}`);
});


