//orm.js

const connection = require("../config/connection.js");


// helper function 

function printQuestionMarks(num) {
    var arr = [];
    
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    
    return arr.toString();
    }

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }


    return arr.toString();
};

let orm = {

    selectAll: function (tableName, callback) {
        let dbQuery = "SELECT * FROM " + tableName + ";"; 
        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            callback(res); 
        });
    }, 

    insertOne: function (tableName, cols, vals, callback) {
        let dbQuery = "INSERT INTO " + tableName + "(" + cols.toString() + ")" + "VALUES (" + printQuestionMarks(vals.length) + ")"; 
        console.log(dbQuery); 
        connection.query(dbQuery, vals, function(err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },

    updateOne: function(tableName, objColsVals, condition, callback) {
        let dbQuery = "UPDATE " + tableName + "SET " + translateSql(objColsVals) + "WHERE " + condition; 
        console.log(dbQuery);
        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            callback(res);  
        });
    },

    deleteOne: function (tableName, condition, cb) {
        let dbQuery = "DELETE FROM " + tableName + "WHERE " + condition;
        console(dbQuery); 
        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            } 
            callback(res);   
        });
    }
   
};

module.exports = orm;








