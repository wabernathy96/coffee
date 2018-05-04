const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');

let PORT = process.env.PORT || 5900;

let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('public/assets/css'));
// Serve images for the site
app.use(express.static('public/assets/img'));

// Setup Handlebars 
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');

// Import routes from coffee_controller.js 
let routes = require('./controllers/coffee_controller');

// Tell the server to use the routes imported from controller
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}`);
});


