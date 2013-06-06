/**
 * Contains reference to the application controller and anyother functionality associated.
 * @module application-controller
 */
define(["ember"], function(Ember) {

	"use strict";

	/**
	 * The `ApplicationController` will be a place to store methods
	 * that the views and other controllers throughout the application
	 * will share. The object is available to any define that requires the
	 * namespace Application.
	 * @class ApplicationController
	 * @constructor
	 * @uses Ember.Evented
	 */
	var ApplicationController = Ember.Object.extend(Ember.Evented, {

		/**
		 * Overridden init method for custom initialization.
		 * @method init
		 */
		init: function() {
			this._super();
		}
	});

	return ApplicationController;

});