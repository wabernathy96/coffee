// Require connection to server from connection.js
const con = require('./connection');

// Helper functions for generating mySQL syntax
// Replaces column vals with question marks in query
let printQMarks = (input) => {
    let arr = [];

    for(let i=0;i<input;i++) {
        arr.push('?');
    }

    return arr.toString();
};

// Sets the key of the object equal to the key from the database
let objToSql = (obj) => {
    let arr = [];

    for (var key in obj) {
        arr.push(`${key} = ${obj[key]}`);
    }

    return arr.toString();
};

// Create orm var to put query methods on for use in model
let orm = {
    // Selects all from table
    // Returns result in callback (cb())
    selectAll: (tableName, cb) => {
        let queryString = `SELECT * FROM 
        ${tableName};`;

        con.query(queryString, [tableName], 
            (err, result) => {
                if (err) {
                    throw err.stack;
                }
                cb(result);
            }
        );
    },
    // Inserts one row of data into the table for a specific column where values equal ?
    insertOne: (tableName, colName, colVals, cb) => {
        let queryString = `INSERT INTO ${tableName}(${colName.toString()}) VALUES 
        (${printQMarks(colVals.length)});`;

        console.log(queryString);

        con.query(queryString, colVals, 
            (err, result) => {
                if (err) {
                    throw err.stack;
                }

                cb(result);
            }
        );
    },
    // Updates a row of data in the table where a certain condition is met
    updateOne: (tableName, colVal, condition, cb) => {
        let queryString = `UPDATE ${tableName} SET ${objToSql(colVal)} WHERE ${condition};`;

        con.query(queryString, 
            (err, result) => {
                if (err) {
                    throw err.stack;
                }

                cb(result);
            }
        );
    }
};

// Export orm obj for use in /models/coffee.js
module.exports = orm;