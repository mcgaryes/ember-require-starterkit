define(["app/application"], function(Application) {

	"use strict";

	describe("The application", function() {

		beforeEach(function() {});

		afterEach(function() {});

		it("'getInstance' returns an Ember.Application instance", function() {
			expect(Application.isNamespace).toBeTruthy();
		});

	});

});