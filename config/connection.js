var mysql = require('mysql'); 

    // Database is local
   var connection = mysql.createConnection({
    host: "fnx6frzmhxw45qcb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", 
    port: 3306,
    user: "g048xd30cmlejii8", 
    password: "wv2pw6n2rx1hb0h9", 
    database: "uxxl166rgbnzsved"
}); 

connection.connect(function(err) {
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

module.exports = connection; 
