(function(Ember) {

	"use strict";

	var root = this;

	/**
	 * The `ApplicationController` will be a place to store methods
	 * that the views and other controllers throughout the application
	 * will share. The object is available to any define that requires the
	 * namespace Application.
	 * @class ApplicationController
	 * @constructor
	 * @uses Ember.Evented
	 */
	root.ApplicationController = Ember.Object.extend(Ember.Evented, {

		/**
		 * Overridden init method for custom initialization.
		 * @method init
		 */
		init: function() {
			this._super();
		}
	});

}).call(window, Ember);