/**
 * Contains functionality for application start-up. Includes a process for loading
 * bootstrap data needed for the applicaiton as well as creates and kicks-off the
 * Application build process.
 * @module main
 */
require([
		"ember",
		"emberData",
		"handlebars",
		"jquery",
		"application",
		"controller/application-controller",
		"model/application-model"
], function(
	Ember,
	EmberData,
	Handlebars,
	$,
	Application,
	ApplicationController,
	ApplicationModel) {

	'use strict';

	// load bootstrap data for applicaiton
	var loadBootstrap = function() {
		$.ajax({
			url: "/assets/data/bootstrap.json",
			type: "GET",
			dataType: "json",
			success: function(data, textStatus, jqXHR) {
				buildApplication(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert(errorThrown);
			}
		});
	};

	// build application
	var buildApplication = function(data) {

		// setup application wide models and controller
		Application.appController = ApplicationController.create();
		Application.appModel = ApplicationModel.create(data);

		// set up routes
		Application.Router.map(function() {
			this.route("foo");
			this.route("bar");
			this.route("baz");
		});

		Application.FooRoute = Ember.Route.extend({
			model: function() {
				return {
					title: "Foo"
				};
			}
		});

		Application.BarRoute = Ember.Route.extend({
			setupController: function(controller, model) {
				require(["view/views/bar-view-controller"]);
			}
		});

		Application.BazRoute = Ember.Route.extend({
			setupController: function(controller, model) {
				require(["view/views/baz-view-controller"],function(BazViewController){
					BazViewController.create();
				});
			}
		});

		// now trigger the first route
		Application.advanceReadiness();
	};

	// load the bootstrap data and kick-off the application
	loadBootstrap();

});