'use strict'

const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 8080;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '19850123',
  database: 'reddit'
})

connection.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'index.html'))
});

app.get('/posts', function (req, res) {
  connection.query('Select * FROM posts;', function (err, results) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      posts: results
    });
  });
});

app.post('/posts', jsonParser, function (req, res) {
  connection.query(`INSERT INTO posts (title, url) VALUES ('${req.body.title}', '${req.body.url}');`, function (err, results) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    connection.query(`SELECT * FROM posts WHERE id=${results.insertId};`, function (err, selectedRow) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.status(200).json({
        results: selectedRow
      })
    })
  });
})

app.put('/posts/:id/upvote', jsonParser, function (req, res) {
  connection.query(`UPDATE posts SET score = score + 1 WHERE id=${req.params.id};`, function (err, results) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    connection.query(`SELECT * FROM posts WHERE id=${req.params.id};`, function (err, results) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.status(200).json({
        upvoted: results
      });
    })
  })
});

app.put('/posts/:id/downvote', jsonParser, function (req, res) {
  connection.query(`UPDATE posts SET score = score - 1 WHERE id=${req.params.id};`, function (err, results) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    connection.query(`SELECT * FROM posts WHERE id=${req.params.id};`, function (err, results) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.status(200).json({
        downvoted: results
      });
    });
  });
});

app.delete('/posts/:id', function (req, res) {
  connection.query(`DELETE FROM posts WHERE id=${req.params.id};`, function (err, results) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.status(200).send(`Deleting was succesful on id= ${req.params.id}`)
  })
});

app.put('/posts/:id', jsonParser, function (req, res) {
  connection.query(`UPDATE posts SET title="${req.body.title}", url="${req.body.url}" WHERE id=${req.params.id};`, function (err, results) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    connection.query(`SELECT * FROM posts WHERE id=${req.params.id};`, function (err, results) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.status(200).json({
        updated: results
      });
    })
  })
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});