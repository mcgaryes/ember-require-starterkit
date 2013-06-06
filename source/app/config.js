'use strict';
require.config({
	deps: ["main"],
	paths: {

		// libraries
		ember: "../assets/js/ember",
		jquery: "../assets/js/jquery",
		handlebars: "../assets/js/handlebars",

		// require plugins
		text:"../assets/js/text",

		// view directories
		views:"view/views",
		components:"view/components",
		screens:"view/screens"

	},
	shim: {
		"jquery": {
			exports: "$"
		},
		"ember": {
			exports: "Ember",
			deps: ["jquery","handlebars"],
		},
		"handlebars": {
			exports: "handlebars"
		}
	}
});