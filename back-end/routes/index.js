var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const config = require('../config/config');

const { db } = config;
const connection = mysql.createConnection(db);
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', (req, res) => {
  const selectionQuery = `SELECT * from test;`;
  connection.query(selectionQuery, [], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.json(results);
    }
  });
});

router.get('/images', (req, res) => {
  const selectionQuery = `SELECT * from images;`;
  connection.query(selectionQuery, [], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
