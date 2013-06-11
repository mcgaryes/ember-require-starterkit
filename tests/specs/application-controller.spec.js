define(["controllers/application-controller"], function(ApplicationController) {

	"use strict";

	describe("The application controller", function() {

		beforeEach(function() {});

		afterEach(function() {});

		describe("initilizes", function() {

			var appController;

			beforeEach(function() {
				appController = ApplicationController.create();
			});

			afterEach(function() {
				appController = undefined;
			});

			it("and extends the ember evented mixin", function() {
				expect(appController.on).toBeDefined();
			});

		});
	});

});