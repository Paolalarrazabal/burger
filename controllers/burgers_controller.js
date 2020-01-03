const express = require("express"); 
let burger = require("../models/burger"); 

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
        burger.insertOne(["burger_name"],[req.body.burger_name],
        function(result) {
            res.json({ id: result.insertedID}); 
        });
    });

    router.put("/api/burgers/:id", function (req,res) {
        let condition = "id = " + req.params.id;
        burger.updateOne( {
            devoured: true
        }, condition, function(result){
        
        });
    });

    router.delete("/api/burgers/delete", function(req,res){
        let condition = "id = " + req.params.id;
        burger.deleteOne(condition,function(result){

        })
    })
});