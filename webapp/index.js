// // task 1
// sap.ui.define([

// ], function () {
// 	"use strict";

// 	/* eslint-disable no-alert */
// 	alert("UI5 is ready");
// 	/* eslint-enable no-alert */
// });

// // task 2
// sap.ui.define([
// 	"sap/m/Text"

// ], function (Text) {
// 	"use strict";

// 	new Text({
// 		text: "Hello World: From task 2 in the JS file!"
// 	}).placeAt("content");

// });

// // task 3
// sap.ui.define([
// 	"sap/ui/core/mvc/XMLView"
// ], function (XMLView) {
// 	"use strict";

// 	XMLView.create({
// 		viewName: "sap.ui.demo.walkthrough.view.App"
// 	}).then(function (oView) {
// 		oView.placeAt("content");
// 	});

// });

sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});