/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"coms4integtobtp/s4integratedtobtp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
