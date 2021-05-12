/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		// had to update below to work (navigation... instead of Navigation...)
		"sap/ui/demo/walkthrough/test/integration/navigationJourney"
	], function () {
		QUnit.start();
	});
});