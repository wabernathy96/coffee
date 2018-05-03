const orm = require('../config/orm');

module.exports.coffee = {
    all: (cb) => {
        orm.selectAll('coffee', 
            (res) => {
                cb(res);
            }
        );
    },
    insert: (col, vals, cb) => {
        orm.insertOne('coffee', cols, vals, 
            (res) => {
                cb(res);
            }
        );
    },
    update: (colVals, cond, cb) => {
        orm.updateOne('coffee', colVals, cond, 
            (res) => {
                cb(res);
            }
        );
    } 
};





