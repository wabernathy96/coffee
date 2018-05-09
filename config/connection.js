const mysql = require('mysql');

// Create connection var
let con;

// If jawsDB connection is detected, connect
// Else connect to local DB
if (process.env.JAWSDB_URL) {
    con = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'coffee_db'
    });
}

// Connection to server
con.connect(
    (err) => {
        if (err) {
            console.error(`Error Connecting: ${err.stack}`);
            return;
        }
        console.log(`Connected as Id ${con.threadId}`);
    }
);

// Export connection for use in orm.js
module.exports = con;