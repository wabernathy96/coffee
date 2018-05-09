// Require express module 
// Require coffee obj from models
const express = require('express');
const coffee = require('../models/coffee');

// Load express router class in order to create routes w/built-in middleware
// Set routes obj equal to Router in order to use in server.js
let routes = express.Router();
    // Get method on routes obj for home (/) route
    // Gets all data from coffee table
    // Creates a handlebars obj out of data
    // Renders hbsObj to index.hbs
    routes.get('/', 
        (req, res) =>{
            coffee.all(
                (data) => {
                    let hbsObj = {
                        coffee:data
                    };
                    
                 res.render('index', hbsObj);
                }
            );
        }
    );
    // Post method on routes obj for route /coffee
    // Inserts a new coffee into the coffee table using the data passed through the post req from index.hbs
    // Once the data loads it redirects back to the home route
    routes.post('/coffee', 
        (req, res) => {
            coffee.insert(
                [
                    'coffee_name'
                ],
                [
                    req.body.coffee_name
                ],
                (data) => {
                    res.redirect('/');
                }
            );
        }
    );
    // Put method on routes obj for the coffee route of a specific coffee id
    routes.put('/coffee/:id',
        (req, res) => {
            // Sets condition in query from orm
            // id is equal to the id of the requested coffee from index.hbs
            let condition = `id = ${req.params.id}`;
            // For that specific coffee id update the drank boolean to true
            coffee.update(
                {
                    drank: 1
                },
                condition,
                (data) => {
                    res.redirect('/');
                }
            );
        }
    );

// Export routes obj for use in ./server.js
module.exports = routes;