const express = require('express');
const coffee = require('../models/coffee');

let router = express.Router();

module.exports.router = () => {
    get('/', 
        (req, res) =>{
            coffee.all(
                (data) => {
                    let hbsObj = {
                        coffee:data
                    };
                    
                    console.log(hbsObj);
                    res.render('index', hbsObj);
                }
            );
        }
    );

    post('/coffee', 
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

    put('/burgers/:id',
        (req, res) => {
            let condition = `ID = ${req.params.id}`;

            coffee.update(
                {
                    drank: true
                },
                cond,
                (data) => {
                    res.redirect('/');
                }
            );
        }
    );
};