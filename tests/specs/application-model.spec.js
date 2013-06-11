define(["models/application-model"], function(ApplicationModel) {

	"use strict";

	describe("The application model", function() {

		beforeEach(function() {});
		afterEach(function() {});

		describe("initilizes", function() {

			var appModel;

			beforeEach(function() {
				appModel = ApplicationModel.create();
			});

			afterEach(function() {
				appModel = undefined;
			});

			it("and extends the ember evented mixin", function() {
				expect(appModel.on).toBeDefined();
			});
		});

	});
});