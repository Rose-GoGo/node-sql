var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'blogback'
});
connection.connect();
var userDelSql = 'DELETE FROM bloguser WHERE id = 0';
//ɾ
connection.query(userDelSql, function(err, result) {
    if (err) {
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }
    console.log('-------------DELETE--------------');
    console.log('DELETE affectedRows', result.affectedRows);
    console.log('&&&&&&&&&&&&&&&&&');
});
connection.end();
