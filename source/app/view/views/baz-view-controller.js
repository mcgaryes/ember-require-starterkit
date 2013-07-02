define([
	"ember",
	"application",
	"text!view/views/baz-view.html"
], function(
	Ember,
	Application,
	BazViewTemplate
) {

	"use strict";

	var BazView = Application.Bar = Ember.View.extend({
		template: Ember.Handlebars.compile(BazViewTemplate),
		templateName: 'baz'
	});

	var BazController = Application.BazController = Ember.Controller.extend({
		init:function(){
			this._super();
			var v = BazView.create();
			v.append();
			$("#content").html(v);
		},
		doSomething: function() {
			alert("doing something");
		}
	});

	return BazController;

});