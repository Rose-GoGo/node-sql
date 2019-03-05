var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'blogback'
});
connection.connect();
var userAddSql = 'INSERT INTO bloguser(id,username,age) VALUES(2,"guest","20")';

//增 add
connection.query(userAddSql, [], function(err, result) {
    if (err) {
        console.log()
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }
    console.log('-------INSERT----------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT ID:', result);
    console.log('#######################');
});
connection.end();
