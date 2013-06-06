define([
	"ember",
	"application",
	"text!views/templates/example-view.html"
], function(
	Ember,
	Application,
	ExampleViewTemplate
) {

	"use strict";

	var vTitle = "Example View";
	var vContent = "Content for the example view...";

	return Ember.View.extend({
		classNames: ["example-view"],
		template: Ember.Handlebars.compile(ExampleViewTemplate),
		title:vTitle,
		content:vContent,
		init: function() {
			var appController = Application.appController;
			var delegate = this;
			/*
			Application.appModel.addObserver(this.countBindingProperty, this, function(model) {
				delegate.set("count", Application.appModel.get(delegate.countBindingProperty));
			});
			*/
			this._super();
		}
	});
});