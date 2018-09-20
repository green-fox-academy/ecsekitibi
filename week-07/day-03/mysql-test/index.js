let mysql = require('mysql');
const express = require('express');
const app = express();
let PORT = 8080;
const path = require('path');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '19850123',
  database: 'bookstore'
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('Connection established');
});

conn.query('SELECT * FROM table_name;', function (err, rows) {
  console.log('Data received from Db:\n');
  console.log(rows);
});

const selectAuthor = (name) => {
  conn.query(`SELECT * FROM author WHERE aut_name LIKE '%${name}%';`, function (err, results) {
    console.log(results);
  });
}

selectAuthor('william');

conn.end();


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});


