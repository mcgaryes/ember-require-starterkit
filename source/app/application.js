(function(Ember) {

	"use strict";

	var root = this;

	/**
	 * This is the Applicaiton singleton object. Its main job is to create an
	 * Ember.Application instance and hold reference to it for any other defines
	 * that wish to use it.
	 * @class Application
	 * @constructor
	 */
	var Application = function() {
		if (Application.instance) {
			throw new Error("Use 'getInstance' method.");
		}
	};

	/**
	 * @method getInstance
	 * @for Application
	 * @return {Ember.Application} An instance of Ember.Application
	 */
	Application.getInstance = function() {
		if (!Application.instance) {
			Application.instance = Ember.Application.create({
				NAME: "Ember-Starterkit Namespace",
				VERSION: "0.1.0",
				LOG_TRANSITIONS: true
			});
			Application.instance.deferReadiness();
		}
		return Application.instance;
	};

	root.Application = Application.getInstance();

}).call(window, Ember);