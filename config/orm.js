const connection = require("../config/connection"); 

let orm = {
    selectAll: function (callback) {
        connection.query("SELECT * FROM `burgers`", function(err, res) {
            if (err) throw err;
            callback(res); 
        });
    }, 

    insertOne: function (callback, burger_name) {
        connection.query("INSERT INTO `burgers` SET ?", {
            burger_name: burger_name,
            devoured: false
        }, function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    updateOne: function(callback, burgerID) {
        connection.query("UPDATE `burgers` SET `devoured` = ? WHERE `id` = ?", [true, burgerID], 
        function(err, res) {
            if (err) throw err;
            callback(res);  
        });
    },

    deleteOne: function (callback, burgerID) {
        connection.query("DELETE FROM `burgers` WHERE `id` = ?", [burgerID], 
        function(err, res) {
            if (err) throw err;
            callback(res);   
        });
    }
   
};

module.exports = orm;



