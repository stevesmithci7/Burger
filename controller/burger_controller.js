const express = require('express');
const burger = require('../models/booger.js');

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
    burger.selectAllBurgers(function(data) {
      let hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  router.post('/api/burgers', function(req, res) {
    burger.insertOneBurger([
      'burger_name', 'devoured',
    ], [
      req.body.burger_name, req.body.devoured,
    ], function(result) {
      // Send back the ID of the new quote
      res.json({id: result.insertId});
    });
  });

  router.put('/api/burgers/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.updateBurger({
      devoured: req.body.devoured,
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  // Export routes for server.js to use.
  module.exports = router;