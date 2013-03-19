var MonthModel = Backbone.Model.extend({

	url: 'data/month.json',

	/*initialize: function(){
		this.save({'month' : 'March', 'allotment' : '820'});
	}	*/

	defaults: {
		'id' : null,
		'month' : 'error',
		'allotment' : '800'
	},

	initialize: function(){

	}
});

var monthModel = new MonthModel;