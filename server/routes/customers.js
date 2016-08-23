var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/omicron';

router.get('/', function (req, res) {
  pg.connect(connectionString, function(err, client, done){
    if (err) {
      res.sendStatus(500);
    }

    client.query('SELECT * FROM customers', function(err, result){
      done();

      if (err) {
        res.sendStatus(500);
      }
      res.send(result.rows);
    });
  });
});

router.get('/:id', function (req, res) {
  var id = req.params.id;
  pg.connect(connectionString, function(err, client, done){
    if (err) {
      res.sendStatus(500);
    }

    client.query('SELECT * FROM customers JOIN addresses ON customer_id = customers.id JOIN orders ON address_id = addresses.id JOIN line_items ON order_id = orders.id JOIN products ON product_id = products.id WHERE customer_id = $1', [id],
      function(err, result){
      done();

      if (err) {
        res.sendStatus(500);
      }
      res.send(result.rows);
    });
  });
});


module.exports = router;
