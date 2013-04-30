'use strict';
require.config({
	deps: ["main"],
	paths: {
		underscore: "../assets/js/underscore",
		ember: "../assets/js/ember",
		jquery: "../assets/js/jquery",
		handlebars: "../assets/js/handlebars",
	},
	shim: {
		"jquery": {
			exports: "$"
		},
		"ember": {
			exports: "Ember",
			deps: ["jquery","handlebars"],
		},
		"underscore": {
			exports: "_"
		},
		"handlebars": {
			exports: "handlebars"
		}
	}
});