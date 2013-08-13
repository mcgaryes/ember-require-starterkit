(function(
	$,
	Application,
	ApplicationRoutes,
	ApplicationModel,
	ApplicationController
) {

	"use strict";

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
	$(function() {
		loadBootstrap();
	});

}).call(window, $, Application, ApplicationRoutes, ApplicationModel, ApplicationController);