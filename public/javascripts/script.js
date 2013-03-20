$(document).ready(function(){

	tpl.loadTemplates(['expense-item', 'month', 'allotment'], function () {
        app = new AppRouter();
        Backbone.history.start();
    });

});