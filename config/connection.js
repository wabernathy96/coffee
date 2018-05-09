const mysql = require('mysql');
let con;

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

con.connect(
    (err) => {
        if (err) {
            console.error(`Error Connecting: ${err.stack}`);
            return;
        }
        console.log(`Connected as Id ${con.threadId}`);
    }
);

module.exports = con;