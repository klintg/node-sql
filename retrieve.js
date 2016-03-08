var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'milgo366',
  database: 'star'
});
connection.connect();


connection.query('select * from articles', function(err, result) {
  console.log(result);
})
