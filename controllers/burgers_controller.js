var express = require("express")
var router = express.Router(); 

var burger = require("../models/burger.js");

router.get('/', function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        }; 
        console.log(hbsObject); 
        res.render("index", hbsObject); 
    })

});

// render.post("/api/burgers", function(req, res){
//     burger.create([
//         "name", "devoured"
//     ], [
//         req.body.name, req.body.devoured
//     ], function(result){
//         // Send back the id of a new flavor
//         res.json({id: result.insertId});
//     });
// });

module.exports = router; 

