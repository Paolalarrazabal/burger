const mysql = require("mysql"); 

const connection = mysql.createConnection({
    host: "localhost",
    port: 3000, 
    user: "root",
    password: "TT11lala:*", 
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) throw err; 
    console.log(`connected as id ${connection.threadId}`); 
    
}); 

module.exports = connection; 