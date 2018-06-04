const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'burgers_db'
});
};
connection.connect(err => {
  if (err) {
    console.error(`error connecting my dude, check: ${err.stack}`);
    return;
  }
  console.log(`Connected! Connection id: ${connection.threadId} `);
});

module.exports = connection;