var ExpenseModel = Backbone.Model.extend({

	urlRoot: 'data/',

	defaults:{
		'_id' : null,
		'name' : 'Default Expense Item',
		'amount' : '100',
		'status' : false,
		'dueMonth' : 3,
		'dueDay' : 12,
		'category' : 'General Expenses',
		'period' : 'first'
	},

	initialize: function(){

	}

});

var expenseModel = new ExpenseModel;