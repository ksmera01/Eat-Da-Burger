var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//Get all burgers
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Create/Post New Burger
router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    burger.create([
        "name",
    ], [
        req.body.name,
    ], function (result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});


module.exports = router;
