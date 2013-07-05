/**
 * Contains ember routing and route functionality.
 * @module routes
 */
define([
	"ember",
	"application"
], function(
	Ember,
	Application
) {

	"use strict";

	/**
	 * Contains methods for creating initial routes for the applicaiton.
	 * @class ApplicationRoutes
	 * @constructor
	 */
	var ApplicationRoutes = {

		create: function() {

			Application.Router.map(function() {
				this.route("foo");
				this.route("bar");
				this.route("baz");
			});

			// this is an example of tradition implementation. where both the
			// template and controllers are defined from the begining
			// Application.FooController = Ember.Controller.extend({
			// 	title:"Foo",
			// 	doSomething:function(){
			// 		alert("do something");
			// 	}
			// });

			// this is an example where the handlebars template is already located
			// in the index.html page of the application
			Application.BarRoute = Ember.Route.extend({
				setupController: function(controller, model) {
					require(["view/views/bar-view-controller"],function(VC){
						VC.create();
					});
				}
			});

			/*
			// this example is showing how to support loading both the template 
			// and controller when they are absolutely needed. meaning that the user
			// has just (for the first time) navigated to this section of 
			// the application.
			Application.BazRoute = Ember.Route.extend({
				setupController: function(controller, model) {
					require(["text!view/views/baz-view.handlebars"],function(Template){
						//Ember.TEMPLATES.baz = Ember.Handlebars.compile(Template);
						//require(["view/views/baz-view-controller"],function(ViewController){
						//	var vc = ViewController.create();
						//	console.log(vc);
						//	vc.init();
						});
					});
				}
			});
			*/
		}
	};

	return ApplicationRoutes;

});