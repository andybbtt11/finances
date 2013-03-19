var AppRouter = Backbone.Router.extend({ 

	routes: {
		'' : 'test',
		'march' : 'month'
	},

	test: function(){
		console.log('test');
	},

	month: function(){
		var monthView = new MonthView;
	}

});