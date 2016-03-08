var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'milgo366',
  database: 'star'
});

connection.connect(function(err) {
  if(err) {
    console.log('error connection:' + err.stack)
  }
  console.log('Connection established');
});

var message = {
  author: 'klint git',
  title: 'git',
  body: 'balah blahh'
};
var query= connection.query('INSERT into articles set ?', message, function(err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result)
})
module.exports = connection;
