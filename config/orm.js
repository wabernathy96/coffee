const con = require('./connection');

let printQuestionMarks = (input) => {
    let arr = [];

    for(let i=0;i<input;i++) {
        arr.push('?');
    }

    return arr.toString();
};

let objToSql = (obj) => {
    let arr = [];

    for (var key in obj) {
        arr.push(`${key} = ${obj.key}`)
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
        (${printQuestionMarks(colVals.length)});`;

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
    updateOne: (tableName, colVals, cond, cb) => {
        let queryString = `UPDATE ${tableName} SET ${objToSql(colVals)} WHERE ${condition};`;

        console.log(queryString);

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