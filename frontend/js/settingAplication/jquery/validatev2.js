var validate = function() {

	var data = {
		"urlDownload" : $("input[name='settingAplicationInputUrlDownload']").val().trim(),
		"timeoutDownload" : $("input[name='settingAplicationInputTimeoutDownload']").val().trim(),
		"sessionlDownload" : $("input[name='settingAplicationInputSessionsDownload']").val().trim(),
		"acceptTestDownload" : $("input[name='settingAplicationInputAcceptTestDownload']").val().trim(),

		"urlUpload" : $("input[name='settingAplicationInputUrlUpload']").val().trim(),
		"timeoutUpload" : $("input[name='settingAplicationInputTimeoutUpload']").val().trim(),
		"sessionlUpload" : $("input[name='settingAplicationInputSessionsUpload']").val().trim(),
		"acceptTestUpload" : $("input[name='settingAplicationInputAcceptTestUpload']").val().trim(),

		"urlPing" : $("input[name='settingAplicationInputUrlPing']").val().trim(),
		"countPing" : $("input[name='settingAplicationInputCountPings']").val().trim(),

		"urlDns" : $("input[name='settingAplicationInputUrlDns']").val().trim(),

		"urlTraceroute" : $("input[name='settingAplicationInputUrlTraceroute']").val().trim(),
		"hopsTraceroute" : $("input[name='settingAplicationInputHopsTraceroute']").val().trim(),

		// others
		"vuMeter" : $("input[name='settingAplicationInputVuMeter']").val().trim(),
		"min_rooms_certificate" : $("input[name='settingAplicationInputMinRoomsCertificate']").val().trim(),
		"max_rooms_certificate" : $("input[name='settingAplicationInputMaxRoomsCertificate']").val().trim(),

		"urlSpeedtest" : $("input[name='settingAplicationInputUrlSpeedtest']").val().trim(),
		"testNac" : $("input[name='settingAplicationInputTestSpeedtestNacional']").val().trim(),
		"testInt" : $("input[name='settingAplicationInputTestSpeedtestInternacional']").val().trim(),
		"sizeSpeedtest" : $("input[name='settingAplicationInputSpeedtestSize']").val().trim(),
		"positionSpeedtest" : $("input[name='settingAplicationInputSpeedtestPosition']").val().trim(),
		"positionYSpeedtest" : $("input[name='settingAplicationInputSpeedtestYPosition']").val().trim(),

	};

	/*inicio download*/

	/* url */
	if (rangoEmptyField(data.urlDownload, "5-300")) {
		showErrorMessage("input", "settingAplicationInputUrlDownload", textErrorValidateTitle1, textErrorValidateSubTitle2_1);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputUrlDownload");
	}

	/* timeout */
	if (rangoEmptyField(data.timeoutDownload, "1-3")) {
		showErrorMessage("input", "settingAplicationInputTimeoutDownload", textErrorValidateTitle2, textErrorValidateSubTitle2_2);
		return false;
	} else if (rangoNumero(data.timeoutDownload, 0, 120)) {
		showErrorMessage("input", "settingAplicationInputTimeoutDownload", textErrorValidateTitle2, textErrorValidateSubTitle3_2);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputTimeoutDownload");
	}

	/* sessions */
	if (rangoEmptyField(data.sessionlDownload, "1-2")) {
		showErrorMessage("input", "settingAplicationInputTimeoutDownload", textErrorValidateTitle2, textErrorValidateSubTitle2_2);
		return false;
	} else if (rangoNumero(data.sessionlDownload, 0, 15)) {
		showErrorMessage("input", "settingAplicationInputSessionsDownload", textErrorValidateTitle2, textErrorValidateSubTitle3_2);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputSessionsDownload");
	}

	/* acceptTest */
	if (rangoEmptyField(data.acceptTestDownload, "1-3")) {
		showErrorMessage("input", "settingAplicationInputAcceptTestDownload", textErrorValidateTitle2, textErrorValidateSubTitle2_2);
		return false;
	} else if (rangoNumero(data.acceptTestDownload, 0, 100)) {
		showErrorMessage("input", "settingAplicationInputAcceptTestDownload", textErrorValidateTitle2, textErrorValidateSubTitle3_2);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputAcceptTestDownload");
	}

	/*fin download*/

	/*inicio upload*/

	/* url */
	if (rangoEmptyField(data.urlUpload, "5-300")) {
		showErrorMessage("input", "settingAplicationInputUrlUpload", textErrorValidateTitle1, textErrorValidateSubTitle2_1);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputUrlUpload");
	}

	/* timeout */
	if (rangoEmptyField(data.timeoutUpload, "1-3")) {
		showErrorMessage("input", "settingAplicationInputTimeoutUpload", textErrorValidateTitle2, textErrorValidateSubTitle2_2);
		return false;
	} else if (rangoNumero(data.timeoutUpload, 0, 120)) {
		showErrorMessage("input", "settingAplicationInputTimeoutUpload", textErrorValidateTitle2, textErrorValidateSubTitle3_2);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputTimeoutUpload");
	}

	/* sessions */
	if (rangoEmptyField(data.sessionlUpload, "1-2")) {
		showErrorMessage("input", "settingAplicationInputSessionsUpload", textErrorValidateTitle2, textErrorValidateSubTitle2_2);
		return false;
	} else if (rangoNumero(data.sessionlUpload, 0, 15)) {
		showErrorMessage("input", "settingAplicationInputSessionsUpload", textErrorValidateTitle2, textErrorValidateSubTitle3_2);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputSessionsUpload");
	}

	/* acceptTest */
	if (rangoEmptyField(data.acceptTestUpload, "1-3")) {
		showErrorMessage("input", "settingAplicationInputAcceptTestUpload", textErrorValidateTitle2, textErrorValidateSubTitle2_2);
		return false;
	} else if (rangoNumero(data.acceptTestUpload, 0, 100)) {
		showErrorMessage("input", "settingAplicationInputAcceptTestUpload", textErrorValidateTitle2, textErrorValidateSubTitle3_2);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputAcceptTestUpload");
	}

	/*fin upload*/

	/*inicio ping*/

	/* url */
	if (rangoEmptyField(data.urlPing, "5-300")) {
		showErrorMessage("input", "settingAplicationInputUrlPing", textErrorValidateTitle3, textErrorValidateSubTitle2_3);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputUrlPing");
	}
	/* count */
	if (rangoEmptyField(data.countPing, "1-2")) {
		showErrorMessage("input", "settingAplicationInputCountPings", textErrorValidateTitle4, textErrorValidateSubTitle2_4);
		return false;
	} else if (rangoNumero(data.countPing, 0, 15)) {
		showErrorMessage("input", "settingAplicationInputCountPings", textErrorValidateTitle4, textErrorValidateSubTitle3_4);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputCountPings");
	}

	/*fin ping*/

	/*inicio dns*/

	/* url */
	if (rangoEmptyField(data.urlDns, "5-300")) {
		showErrorMessage("input", "settingAplicationInputUrlDns", textErrorValidateTitle3, textErrorValidateSubTitle2_3);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputUrlDns");
	}

	/*fin dns*/

	/*inicio traceroute*/

	/* url */
	if (rangoEmptyField(data.urlDns, "5-300")) {
		showErrorMessage("input", "settingAplicationInputUrlTraceroute", textErrorValidateTitle3, textErrorValidateSubTitle2_3);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputUrlTraceroute");
	}
	/* hops */
	if (rangoEmptyField(data.hopsTraceroute, "1-2")) {
		showErrorMessage("input", "settingAplicationInputHopsTraceroute", textErrorValidateTitle16, textErrorValidateSubTitle2_16);
		return false;
	} else if (rangoNumero(data.hopsTraceroute, 20, 50)) {
		showErrorMessage("input", "settingAplicationInputHopsTraceroute", textErrorValidateTitle16, textErrorValidateSubTitle3_16);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputHopsTraceroute");
	}

	/*fin traceroute*/

	/*inicio speedtest*/

	/* accept test nacional */
	if (rangoEmptyField(data.testNac, "1-3")) {
		showErrorMessage("input", "settingAplicationInputTestSpeedtestNacional", textErrorValidateTitle6, textErrorValidateSubTitle2_6);
		return false;
	} else if (rangoNumero(data.testNac, 0, 100)) {
		showErrorMessage("input", "settingAplicationInputTestSpeedtestNacional", textErrorValidateTitle6, textErrorValidateSubTitle3_6);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputTestSpeedtestNacional");
	}
	/* accept test internacional */
	if (rangoEmptyField(data.testInt, "1-3")) {
		showErrorMessage("input", "settingAplicationInputTestSpeedtestInternacional", textErrorValidateTitle7, textErrorValidateSubTitle2_7);
		return false;
	} else if (rangoNumero(data.testInt, 0, 100)) {
		showErrorMessage("input", "settingAplicationInputTestSpeedtestInternacional", textErrorValidateTitle7, textErrorValidateSubTitle3_7);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputTestSpeedtestInternacional");
	}

	/* url */
	if (rangoEmptyField(data.urlSpeedtest, "5-300")) {
		showErrorMessage("input", "settingAplicationInputUrlSpeedtest", textErrorValidateTitle3, textErrorValidateSubTitle2_3);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputUrlSpeedtest");
	}
	/* size */
	if (rangoEmptyField(data.sizeSpeedtest, "1-3")) {
		showErrorMessage("input", "settingAplicationInputSpeedtestSize", textErrorValidateTitle7, textErrorValidateSubTitle2_7);
		return false;
	} else if (rangoNumero(data.sizeSpeedtest, 0, 100)) {
		showErrorMessage("input", "settingAplicationInputSpeedtestSize", textErrorValidateTitle7, textErrorValidateSubTitle3_7);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputSpeedtestSize");
	}
	/* position */
	if (rangoEmptyField(data.positionSpeedtest, "1-4")) {
		showErrorMessage("input", "settingAplicationInputSpeedtestPosition", textErrorValidateTitle7, textErrorValidateSubTitle2_7);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputSpeedtestPosition");
	}
	/* position y */
	if (rangoEmptyField(data.positionYSpeedtest, "1-4")) {
		showErrorMessage("input", "settingAplicationInputSpeedtestYPosition", textErrorValidateTitle7, textErrorValidateSubTitle2_7);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputSpeedtestYPosition");
	}

	/*fin speedtest*/

	/*inicio vu meter*/

	/* vu meter */
	if (rangoEmptyField(data.vuMeter, "1-3")) {
		showErrorMessage("input", "settingAplicationInputVuMeter", textErrorValidateTitle5, textErrorValidateSubTitle2_5);
		return false;
	} else if (rangoNumero(data.vuMeter, 0, 100)) {
		showErrorMessage("input", "settingAplicationInputVuMeter", textErrorValidateTitle5, textErrorValidateSubTitle3_5);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputVuMeter");
	}

	/*fin vu meter*/

	/*inicio min rooms */

	/* min rooms */
	if (rangoEmptyField(data.min_rooms_certificate, "1-2")) {
		showErrorMessage("input", "settingAplicationInputMinRoomsCertificate", textErrorValidateTitle19, textErrorValidateSubTitle2_19);
		return false;
	} else if (rangoNumero(data.min_rooms_certificate, 0, 50)) {
		showErrorMessage("input", "settingAplicationInputMinRoomsCertificate", textErrorValidateTitle19, textErrorValidateSubTitle3_19);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputMinRoomsCertificate");
	}

	/* fin min rooms */

	/*inicio max rooms */

	/* max rooms */
	if (rangoEmptyField(data.max_rooms_certificate, "1-2")) {
		showErrorMessage("input", "settingAplicationInputMaxRoomsCertificate", textErrorValidateTitle20, textErrorValidateSubTitle2_20);
		return false;
	} else if (rangoNumero(data.max_rooms_certificate, 0, 50)) {
		showErrorMessage("input", "settingAplicationInputMaxRoomsCertificate", textErrorValidateTitle20, textErrorValidateSubTitle3_20);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputMaxRoomsCertificate");
	}

	/* fin max rooms */

	return true;

}; 