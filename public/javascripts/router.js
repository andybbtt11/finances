var AppRouter = Backbone.Router.extend({ 

	routes: {
		'' : 'test',
		'march' : 'month'
	},

	test: function(){
		alert('URL needs a month, try appending #march to the url');
	},

	month: function(){
		var expenseListView = new ExpenseListView;
		var monthView = new MonthView;
	}

});