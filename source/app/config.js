'use strict';
require.config({
	deps: ["main"],
	paths: {

		// libraries
		ember: "../assets/js/ember",
		emberData: "../assets/js/ember-data",
		jquery: "../assets/js/jquery",
		handlebars: "../assets/js/handlebars",

		// require plugins
		text: "../assets/js/text",

		// view directories
		views: "view/views",
		components: "view/components",
		screens: "view/screens"

	},
	shim: {
		"jquery": {
			exports: "$"
		},
		"ember": {
			exports: "Ember",
			deps: ["jquery", "handlebars"],
		},
		"emberData": {
			exports: "DS",
			deps: ["ember"],
		},
		"handlebars": {
			exports: "handlebars"
		}
	}
});