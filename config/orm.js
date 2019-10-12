var connection = require("../config/connection.js");


// Helper function for SQL syntax - ["?", "?", "?"].toString() => "?,?,?"; 
function printQuestionMarks(num){
    var arr = []; 

    for (var i = 0; i < num; i++){
        arr.push('?');
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = []; 

    // Loops through the keys and pushes the key/values as a string into an arr 
    for (var key in ob){
        var value = ob[key];
        // Checks to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)){
            // If string with spaces, and quotations ( ex. {name: burger 1}) => ["name='burger 1'"]
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value); 
        }
    }
    // Translates array of strings to a single coma-separated string 
    return arr.toString();
}

// // Object for all SQL statement functions
var orm = {

    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err) {
                throw err; 
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = " INSERT INTO " + table; 

        queryString += " ("; 
        queryString += cols.toString();
        queryString += ") ";
        queryString += " VALUES ("; 
        queryString += printQuestionMarks(vals.length);
        queryString += ")";

        console.log(queryString); 

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err; 
            }
            cb(result); 
        });
    },
    update: (table, objColVals, condition, cb) => {
        var queryString = " UPDATE " + table; 

        queryString += " SET "; 
        queryString += objToSql(objColVals);
        queryString += " WHERE "; 
        queryString += condition; 

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err; 
            }
            cb(result); 
        })
    }

}

module.exports = orm;