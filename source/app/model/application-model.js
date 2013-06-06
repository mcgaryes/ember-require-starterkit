/**
 * Contains reference to the application model and anyother functionality associated.
 * @module application-model
 */
define(["ember"], function(Ember) {

	"use strict";

	/**
	 * The `ApplicationModel` object holds application wide properties that are
	 * shared between views. Properties that live here would be available to any
	 * define that requires the Application namespace.
	 * @class ApplicationModel
	 * @constructor
	 * @uses Ember.Evented
	 */
	var ApplicationModel = Ember.Object.extend(Ember.Evented, {

		/**
		 * Overridden init method for custom initialization.
		 * @method init
		 */
		init: function() {
			this._super();
		}
	});

	return ApplicationModel;

});