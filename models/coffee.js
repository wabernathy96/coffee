// Require the orm obj from /config/orm.js
// Use methods on orm obj below
const orm = require('../config/orm');

// Create coffee obj to put js methods on for use in controller
let coffee = {
    // Gets all results from coffee table 
    // Returns results in a cb function
    all: (cb) => {
        orm.selectAll('coffee', 
            (res) => {
                cb(res);
            }
        );
    },
    // Inserts one row into coffee table for a certain column with a certain value
    insert: (cols, vals, cb) => {
        orm.insertOne('coffee', cols, vals, 
            (res) => {
                cb(res);
            }
        );
    },
    // Update one row of data in table coffee for a column with a certain column value (key) that meets a certain condition
    update: (colVal, condition, cb) => {
        orm.updateOne('coffee', colVal, condition, 
            (res) => {
                cb(res);
            }
        );
    } 
};

// Export coffee obj for use in controllers/coffee_controller.js
module.exports = coffee;




