var orm = require("../config/orm.js")

var icecreams = {
all: function(cb) {
    orm.all("icecreams", function(res) {
      cb(res);
      // console.log(res)
    });
}, 
 // The variables cols and vals are arrays.
 create: function(cols, vals, cb) {
  orm.create("icecreams", cols, vals, function(res) {
    cb(res);
  });
},

update: function(objColVals, condition, cb) {
  orm.update("icecreams", objColVals, condition, function(res) {
    cb(res);
  });
},

}

module.exports = icecreams; 