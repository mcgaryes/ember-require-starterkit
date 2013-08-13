(function(Application) {

	"use strict";

	var root = this;

	/**
	 * Contains methods for creating initial routes for the applicaiton.
	 * @class ApplicationRoutes
	 * @constructor
	 */
	root.ApplicationRoutes = {

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

}).call(window, Application);