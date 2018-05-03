const mysql = require('mysql');


let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'coffee_db'
});

con.connect((err) => {
    if (err) {
        console.error(`Error Connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as Id ${con.threadId}`);
});

module.exports = con;