var AddAmountsView = Backbone.View.extend({

	el: '.first-allot',

	$otherel: $('#total'),

	collection: expensesCollection,

	initialize: function(){
		//this.collection.bind('reset', this.render, this);	

		this.template = _.template(tpl.get('allotment'));
		
		var array = this.collection.pluck('amount'),
			sum = 0;

		while (array.length > 0) {
		    sum += parseInt(array.pop(), 10);
		}

		var total = accounting.formatMoney(sum);

		this.render(total);

	},

	render:function(total){
		this.$el.html(this.template());
		this.$el.find('#total').text(total);
	}

});

