var validate22 = function() {

	var data = {
		"urlDownload" : $("input[name='settingAplicationInputUrlDownload']").val().trim(),
		"timeoutDownload" : $("input[name='settingAplicationInputTimeoutDownload']").val().trim(),

		"urlPing" : $("input[name='settingAplicationInputUrlPing']").val().trim(),
		"countPing" : $("input[name='settingAplicationInputCountPings']").val().trim(),

		"testNac" : $("input[name='settingAplicationInputTestSpeedtestNacional']").val().trim(),
		"testInt" : $("input[name='settingAplicationInputTestSpeedtestInternacional']").val().trim(),

		"vuMeter" : $("input[name='settingAplicationInputVuMeter']").val().trim(),
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

	/*fin download*/

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

	return true;

};

var validate = function() {

	var data = {
		"urlDownload" : $("input[name='settingAplicationInputUrlDownload']").val().trim(),
		"timeoutDownload" : $("input[name='settingAplicationInputTimeoutDownload']").val().trim(),
		"urlPing" : $("input[name='settingAplicationInputUrlPing']").val().trim(),
		"countPing" : $("input[name='settingAplicationInputCountPings']").val().trim(),
		"vuMeter" : $("input[name='settingAplicationInputVuMeter']").val().trim(),
		"testNac" : $("input[name='settingAplicationInputTestSpeedtestNacional']").val().trim(),
		"testInt" : $("input[name='settingAplicationInputTestSpeedtestInternacional']").val().trim(),
	};

	if (vacio(data.urlDownload)) {
		showErrorMessage("input", "settingAplicationInputUrlDownload", textErrorValidateTitle1, textErrorValidateSubTitle1_1);
		return false;
	} else if (rango(data.urlDownload, "5-300")) {
		showErrorMessage("input", "settingAplicationInputUrlDownload", textErrorValidateTitle1, textErrorValidateSubTitle2_1);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputUrlDownload");
	}

	if (vacio(data.timeoutDownload)) {
		showErrorMessage("input", "settingAplicationInputTimeoutDownload", textErrorValidateTitle2, textErrorValidateSubTitle1_2);
		return false;
	} else if (rango(data.timeoutDownload, "1-3")) {
		showErrorMessage("input", "settingAplicationInputTimeoutDownload", textErrorValidateTitle2, textErrorValidateSubTitle2_2);
		return false;
	} else if (rangoNumero(data.timeoutDownload, 1, 99)) {
		showErrorMessage("input", "settingAplicationInputTimeoutDownload", textErrorValidateTitle2, textErrorValidateSubTitle3_2);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputTimeoutDownload");
	}

	if (vacio(data.urlPing)) {
		showErrorMessage("input", "settingAplicationInputUrlPing", textErrorValidateTitle3, textErrorValidateSubTitle1_3);
		return false;
	} else if (rango(data.urlPing, "5-300")) {
		showErrorMessage("input", "settingAplicationInputUrlPing", textErrorValidateTitle3, textErrorValidateSubTitle2_3);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputUrlPing");
	}

	if (vacio(data.countPing)) {
		showErrorMessage("input", "settingAplicationInputCountPings", textErrorValidateTitle4, textErrorValidateSubTitle1_4);
		return false;
	} else if (rango(data.countPing, "1-3")) {
		showErrorMessage("input", "settingAplicationInputCountPings", textErrorValidateTitle4, textErrorValidateSubTitle2_4);
		return false;
	} else if (rangoNumero(data.countPing, 1, 99)) {
		showErrorMessage("input", "settingAplicationInputCountPings", textErrorValidateTitle4, textErrorValidateSubTitle3_4);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputCountPings");
	}

	if (vacio(data.vuMeter)) {
		showErrorMessage("input", "settingAplicationInputVuMeter", textErrorValidateTitle5, textErrorValidateSubTitle1_5);
		return false;
	} else if (rango(data.vuMeter, "1-3")) {
		showErrorMessage("input", "settingAplicationInputVuMeter", textErrorValidateTitle5, textErrorValidateSubTitle2_5);
		return false;
	} else if (rangoNumero(data.vuMeter, 0, 100)) {
		showErrorMessage("input", "settingAplicationInputVuMeter", textErrorValidateTitle5, textErrorValidateSubTitle3_5);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputVuMeter");
	}

	if (vacio(data.testNac)) {
		showErrorMessage("input", "settingAplicationInputTestSpeedtestNacional", textErrorValidateTitle6, textErrorValidateSubTitle1_6);
		return false;
	} else if (rango(data.testNac, "1-3")) {
		showErrorMessage("input", "settingAplicationInputTestSpeedtestNacional", textErrorValidateTitle6, textErrorValidateSubTitle2_6);
		return false;
	} else if (rangoNumero(data.testNac, 0, 100)) {
		showErrorMessage("input", "settingAplicationInputTestSpeedtestNacional", textErrorValidateTitle6, textErrorValidateSubTitle3_6);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputTestSpeedtestNacional");
	}

	if (vacio(data.testInt)) {
		showErrorMessage("input", "settingAplicationInputTestSpeedtestInternacional", textErrorValidateTitle7, textErrorValidateSubTitle1_7);
		return false;
	} else if (rango(data.testInt, "1-3")) {
		showErrorMessage("input", "settingAplicationInputTestSpeedtestInternacional", textErrorValidateTitle7, textErrorValidateSubTitle2_7);
		return false;
	} else if (rangoNumero(data.testInt, 0, 100)) {
		showErrorMessage("input", "settingAplicationInputTestSpeedtestInternacional", textErrorValidateTitle7, textErrorValidateSubTitle3_7);
		return false;
	} else {
		cleanFormElements("input", "settingAplicationInputTestSpeedtestInternacional");
	}

	return true;

}; 