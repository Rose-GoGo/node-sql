var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'blogback'
});
connection.connect();
var userModSql = 'UPDATE bloguser SET username = "Rose",age = "17" WHERE id = 1';
var userModSql_Params = ['Hello World', 99, 7];
//改 up
connection.query(userModSql, userModSql_Params, function(err, result) {
    if (err) {
        console.log('[UPDATE ERROR] - ', err.message);
        return;
    }
    console.log('----------UPDATE-------------');
    console.log('UPDATE affectedRows', result.affectedRows);
    console.log('******************************');
});
connection.end();
