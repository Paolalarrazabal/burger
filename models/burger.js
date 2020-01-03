let orm = require("../config/orm");

let burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    insertOne: function (callback, burger_name) {
        orm.insertOne("burgers", burger_name, function (res) {
            callback(res);
        });
    },
    updateOne: function (callback, burgerID) {
        orm.updateOne("burgers", burgerID, function (res) {
            callback(res);
        });
    },
    deleteOne: function (callback, burgerID) {
        orm.deleteOne("burgers", burgerID, function (res) {
            callback(res);
        });
    }
}

module.exports = burgers;