define([
	"ember",
	"application",
	"text!view/views/baz-view.handlebars"
], function(
	Ember,
	Application,
	BazViewTemplate
) {

	"use strict";

	//Ember.TEMPLATES.baz = Ember.Handlebars.compile(BazViewTemplate);

	var BazController = Application.BazController = Ember.Controller.extend({
		doSomething: function() {
			alert("doing something");
		}
	});

	var BazView = Application.Bar = Ember.View.extend({
		classNames:["baz"],
		template: Ember.Handlebars.compile(BazViewTemplate),
		templateName: 'baz',
		controller:BazController.create()
	});

	//return BazView.create({
	//	templateName:"baz"
	//});

	return BazController;

});