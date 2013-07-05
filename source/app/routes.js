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

		/**
		 * Kicks off the creation of routes. This is mainly here so that you can control
		 * when the routes are actually created in the application startup sequence.
		 * @method create
		 */
		create: function() {

			Application.Router.map(function() {
				// define routes here
			});
		}
	};

	return ApplicationRoutes;

});