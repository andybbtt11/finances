var MonthsCollection = Backbone.Collection.extend({

	model: MonthModel,

	url: 'data/month.json'

});

var monthsCollection = new MonthsCollection;