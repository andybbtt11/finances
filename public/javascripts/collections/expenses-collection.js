var ExpensesCollection = Backbone.Collection.extend({

	model: ExpenseModel,

	url: 'data/data.json'

});

var expensesCollection = new ExpensesCollection;