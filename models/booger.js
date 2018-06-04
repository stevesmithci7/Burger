const orm = require("../config/ORM");

/* cb stands for callback */

const burger = {
  selectAllBurgers: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  insertOneBurger: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  updateBurger: function(objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
