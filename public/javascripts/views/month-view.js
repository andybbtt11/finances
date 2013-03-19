var MonthView = Backbone.View.extend({

	el:'.month',

	events: {

	},

	collection: monthsCollection,

	expensesCollection: expensesCollection,

	initialize: function(){
		this.template = _.template(tpl.get('month'));
		this.collection.bind('reset', this.render, this);	
		this.collection.fetch();
	},

	render: function(){
		this.$el.html(this.template( this.collection.get({'id' : 1}).toJSON() ));
		this.updateAllotment();
		this.getTotal();
	},

	updateAllotment: function(){
		var allotment = $('.allotment-amount').text();
		$('.allotment-amount').html( accounting.formatMoney(allotment));
	},

	getTotal: function(){
		var array = this.expensesCollection.pluck('amount'),
			sum = 0;

		while (array.length > 0) {
		    sum += parseInt(array.pop(), 10);
		}

		var totalSpent = sum,
			totalAllotment = this.collection.pluck('allotment'),
			remainder = totalAllotment - totalSpent;

		$('.remaining').html(accounting.formatMoney(remainder));

	}
});