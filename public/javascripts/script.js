$(document).ready(function(){

	tpl.loadTemplates(['expense-item', 'month', 'allotment'], function () {
        app = new AppRouter();
        Backbone.history.start();
    });

	_.delay(function(){var addAmountsView = new AddAmountsView;}, 100);	
	var expenseListView = new ExpenseListView;



});