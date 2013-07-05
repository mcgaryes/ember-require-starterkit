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
				// define route maps here
			});
		}
	};

	return ApplicationRoutes;

});