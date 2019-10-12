var express = require("express");
var router = express.Router(); 

var icecream = require("../models/icecream.js");

router.get("/", function(req,res){
	res.redirect("icecream")
});

router.get('/icecream', function(req, res){
    icecream.all(function(data){
        var hbsObject = {
            icecreams: data
        }; 
        console.log(hbsObject); 
        res.render("index", hbsObject); 
    })

});

//POST route to create/add a icecreams.
router.post("/api/icecream", function(req, res) {
  console.log(req.body.name)
    icecream.create([
      "name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

//PUT route to update icecreams devoured state.
router.put("/api/icecream/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    icecream.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });



  });


module.exports = router; 

