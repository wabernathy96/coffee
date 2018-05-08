const express = require('express');
const coffee = require('../models/coffee');


let routes = express.Router();

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

    routes.put('/coffee/:id',
        (req, res) => {
            let condition = `id = ${req.params.id}`;

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

module.exports = routes;