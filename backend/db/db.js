const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nueva',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos está conectada!');
    }
})

module.exports = mysqlConnection;