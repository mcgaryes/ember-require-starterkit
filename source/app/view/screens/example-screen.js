define([
	"ember",
	"views/example-view"
],function(
	Ember,
	ExampleView
){

	"use strict";

	var exampleView = ExampleView.create({
		// ...
	});

	var ExampleScreen = Ember.ContainerView.extend({
		classNames:["example-screen"],
		childViews:[exampleView]
	});

	return ExampleScreen;

});