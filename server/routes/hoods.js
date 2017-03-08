var express = require('express');
var router = express.Router();
var hood = require('../models/hood');
// var day = require('../models/day');

// Route: Add a hood
router.post("/", function(req, res) {
    var hoodToAdd = new hood(req.body);
    if (!hoodToAdd.description) {
        hoodToAdd.description = 'Test hood';
    }
    console.log('Adding new hood:', hoodToAdd);
    hoodToAdd.save(function(err) {
        if (err) {
            console.log('There was an error inserting new hood, ', err);
            res.sendStatus(500);
        } else {
            console.log('post successful');
            res.send(201);
        }
    });
}); // END: POST hood route


module.exports = router;
