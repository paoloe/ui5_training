/*global QUnit, opaTest*/

sap.ui.define([
	"sap/ui/demo/walkthrough/localService/mockserver",
	"sap/ui/test/opaQunit",
    "sap/ui/test/Opa",
	"./pages/App"
], function (mockserver,
	opaQunit,
	Opa,
	App) {
	"use strict";

	QUnit.module("Navigation");

	opaTest("Should open the Hello dialog", function (Given, When, Then) {
		// initialize the mock server
		mockserver.init();

		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "sap.ui.demo.walkthrough"
			}
		});

		//Actions
		When.onTheAppPage.iPressTheSayHelloWithDialogButton();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheHelloDialog();

		// Cleanup
		Then.iTeardownMyApp();
	});
});