define([
	"ember",
	"application"
], function(
	Ember,
	Application
) {

	"use strict";

	var BarController = Application.BarController = Ember.Controller.extend({
		init:function(){
			this._super();
		},
		doSomething: function() {
			alert("doing something");
		}
	});

	return BarController;

});