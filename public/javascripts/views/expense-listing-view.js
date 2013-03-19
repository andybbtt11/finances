var ExpenseListView = Backbone.View.extend({

	el: '.list.firstcheck',

	collection: expensesCollection,

	initialize: function(){
		this.collection.bind('reset', this.render, this);	
		this.collection.fetch();
	},

	render: function(){
		_.each( this.collection.models, function( expenseModel ){
			var view = new ExpenseItemView( { model: expenseModel } );
			this.$el.append( view.render() );
		}, this);

		return this.el;
	}

});

var ExpenseItemView = Backbone.View.extend({

	tagName:'li',

	events: {
		'click .amount': 'editAmount',
		'click .name': 'editName',
		'click .duedate' : 'editDuedate',
		'keypress input' : 'handleEnter'
	},

	collection: expensesCollection,

	initialize: function(){
		this.template = _.template(tpl.get('expense-item'));
		this.bind('reset', this.render, this);	
	},

	render: function(){
		this.$el.html( this.template( this.model.toJSON() ));
		this.$el.find('.amount').each(function(){
				$(this).text(accounting.formatMoney( parseInt($(this).text()) ));
			});
		return this.el
	},

	// FUNCTIONS --------------------------------------------------------

	makeItMoney: function(){
		$('.amount').each(function(){
			value = parseInt($(this).text());
			$(this).text(accounting.formatMoney(value));
		});
	},

	editAmount: function(){
		var amount = this.$('.amount')
			amountval = this.$('.amount').text(),
			that = this,
			type = 'number';

		amount.html('<input type="' + type + '" />');
		amount.find('input').focus().on('blur', 
			function(){
				that.updateMoney(amount, amountval);
		});
	},

	
	editName: function(){	
		var name = this.$('.name')
			nameval = this.$('.name').text(),
			that = this,
			type = 'text';

		name.html('<input type="' + type + '" />');

		name.find('input').focus().on('blur', 
			function(){
				that.updateText(name, nameval);
		});
	},

	editDuedate: function(){	
		var date = this.$('.duedate')
			dateval = this.$('.duedate').text(),
			that = this,
			type = 'number';

		date.html('<input type="' + type + '" />');
		date.find('input').focus().on('blur', 
			function(){
				that.updateText(date, dateval);
		});
	},

	updateText: function(ele, val){
		var initialvalue = val,
			newvalue = ele.find('input').val();

			if( newvalue === '' ){
				newvalue = initialvalue;
			}

			ele.html(newvalue);
			// If initialvalue is new, save to model and update collection 	
	},

	updateMoney: function(ele, val){
		var initialvalue = accounting.unformat( val ) ,
			newvalue = ele.find('input').val();

			if(newvalue === ''){
				newvalue = accounting.formatMoney( initialvalue );
			}

			ele.html( accounting.formatMoney(newvalue) );
			var addAmountsView = new AddAmountsView;
			// If initialvalue is new, save to model and update collection 	

	},

	handleEnter: function(e){
		var keycode = e.which;
		if(keycode === 13){
			this.$('input').blur();
		}
	}
});
