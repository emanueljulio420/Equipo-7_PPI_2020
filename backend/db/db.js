const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'brvstqoa3kmfiwgrsajm-mysql.services.clever-cloud.com',
    user: 'ukrrwr2jj9i3ezc0',
    password: 'dHgpsn16OMvSnbofBiFS',
    database: 'brvstqoa3kmfiwgrsajm',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos esta conectada!');
    }
})

module.exports = mysqlConnection;