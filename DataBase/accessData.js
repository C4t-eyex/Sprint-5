const mysql = require('mysql2');
const mysqlConnection = mysql.createConnection({
    user: 'root',
    password: 'reto1',
    host: 'localhost',
    database: 'nodetest'
});
mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connection ok");
    }
});
module.exports = mysqlConnection;