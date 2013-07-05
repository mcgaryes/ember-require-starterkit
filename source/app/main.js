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
	"routes",
	"controller/application-controller",
	"model/application-model"
], function(
	Ember,
	EmberData,
	Handlebars,
	$,
	Application,
	ApplicationRoutes,
	ApplicationController,
	ApplicationModel
) {

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
		Application.appController = ApplicationController.create();
		Application.appModel = ApplicationModel.create(data);
		ApplicationRoutes.create();
		Application.advanceReadiness();
	};

	// kick-off the application
	loadBootstrap();

});