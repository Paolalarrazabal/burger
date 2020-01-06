//burger_controller.js

const express = require("express"); 
let burger = require("../models/burger.js"); 

let router = express.Router(); 

router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        let handleBarsObj = {
            burgers: data
        }; 
        console.log(handleBarsObj); 
        res.render("index", handleBarsObj);
    });

    router.post("/api/burgers", function(req, res) {
        burger.insertOne(["burger_name", "devoured"],[req.body.burger_name, req.body.devoured],
        function(result) {
            res.json({ id: result.insertedID}); 
        });
    });

    router.put("/api/burgers/:id", function (req,res) {
        let condition = "id = " + req.params.id;
        console.log("condition", condition);
        burger.updateOne( {
            devoured: req.body.devoured
        }, condition, function(result){
            if (err) {

                return res.status(500).end();
                }
                else if (result.changedRows === 0) {

                return res.status(404).end();
                }
                res.status(200).end();
        
        });
    });

    router.delete("/api/burgers/delete", function(req,res){
        let condition = "id = " + req.params.id;
        burger.deleteOne(condition,function(result){
            if (err) {

                return res.status(500).end();
                }
                else if (result.changedRows === 0) {
    
                return res.status(404).end();
                }
                res.status(200).end();
        });
    });
});

module.exports = router;
