const orm = require('../config/orm');

let coffee = {
    all: (cb) => {
        orm.selectAll('coffee', 
            (res) => {
                cb(res);
            }
        );
    },
    insert: (cols, vals, cb) => {
        orm.insertOne('coffee', cols, vals, 
            (res) => {
                cb(res);
            }
        );
    },
    update: (colVal, condition, cb) => {
        orm.updateOne('coffee', colVal, condition, 
            (res) => {
                cb(res);
            }
        );
    } 
};

module.exports = coffee;




