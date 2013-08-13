(function(Ember) {

	"use strict";

	var root = this;
	
	/**
	 * The `ApplicationModel` object holds application wide properties that are
	 * shared between views. Properties that live here would be available to any
	 * define that requires the Application namespace.
	 * @class ApplicationModel
	 * @constructor
	 * @uses Ember.Evented
	 */
	root.ApplicationModel = Ember.Object.extend(Ember.Evented, {

		/**
		 * Overridden init method for custom initialization.
		 * @method init
		 */
		init: function() {
			this._super();
		}
	});

}).call(window, Ember);