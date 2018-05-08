const con = require('./connection');

let printQMarks = (input) => {
    let arr = [];

    for(let i=0;i<input;i++) {
        arr.push('?');
    }

    return arr.toString();
};

let objToSql = (obj) => {
    let arr = [];

    for (var key in obj) {
        arr.push(`${key} = ${obj[key]}`);
    }

    return arr.toString();
};

let orm = {
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

module.exports = orm;