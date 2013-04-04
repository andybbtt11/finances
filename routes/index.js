var db = require('../database.js');

exports.expenses={};

exports.expenses.all = function(req,res){
	db.expenses.find(function(err, expenses){
	    if(err) return;
	    res.json(expenses);
  	});
};

exports.expenses.one = function(req, res){
	var expenseId = db.ObjectId(req.params.id);
	db.expenses.findOne({"_id" : expenseId}, function(err,expense){
		if(err) return;
		res.json(expense);
	});
};

exports.expenses.create = function(req, res){
	res.json(req.body);
	db.expenses.save(req.body);
};