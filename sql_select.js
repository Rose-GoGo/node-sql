var mysql = require('mysql');
var TEST_DATABASE = 'blogback';
var TEST_TABLE = 'bloguser';
//创建连接
var client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'blogback'
});
client.connect();
client.query("use " + TEST_DATABASE);
client.query( //查询数据
    'SELECT * FROM ' + TEST_TABLE,
    function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        if (results) {
            for (var i = 0; i < results.length; i++) {
                console.log("%d\t%s\t%s", results[i].id, results[i].username, results[i].age);
            }
        }
        client.end();
    }
);
