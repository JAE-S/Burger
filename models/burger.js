var orm = require("../config/orm.js")

var burger = {
all: function(cb) {
    orm.all("burgers", (res) => {
      cb(res);
      console.log(res)
    });
}, 
// update: (objColVals, condition, cb) => {
//   orm.update("burgers", objColVals, condition, (res) => {
//     cb(res);
//   });
// },

}

module.exports = burger; 