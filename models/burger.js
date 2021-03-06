var orm = require("../config/orm.js");

var burger = {
    //Read all burgers
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // Create new burger function
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;