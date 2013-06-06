'use strict';
require.config({
	deps: ["main"],
	paths: {
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
		"handlebars": {
			exports: "handlebars"
		}
	}
});