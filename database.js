var dbUrl = "finances";
var collections = ["expenses"];


var db = require("mongojs").connect(dbUrl, collections);


module.exports = db;