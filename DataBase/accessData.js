const mysql = require('mysql2');
const mysqlConnection = mysql.createConnection({
    user: '',
    password: '',
    host: '',
    database: ''
});
mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Conexión éxitosa");
    }
});
module.exports = mysqlConnection;