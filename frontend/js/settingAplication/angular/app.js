function mainController($scope, $http) {
    
    var settingAplicationSource;
    
    switch(language) {
	    case 'es':
			settingAplicationSource="../json/settingAplication/settingAplication_Content-es.json";
	        break;
	    case 'en':
			settingAplicationSource="../json/settingAplication/settingAplication_Content.json";
	        break;
	    case 'pt_BR':
			settingAplicationSource="../json/settingAplication/settingAplication_Content-pt_BR.json";
	        break;
		default:
			settingAplicationSource="../json/settingAplication/settingAplication_Content.json";
	        break;
	}
	
    $http.get(settingAplicationSource).
    success(function(data, status, headers, config) {
        
        $scope.settingAplicationTitle = data.title[0].title;
        
        $scope.settingAplicationHeadTitle = data.head[0].title;
        $scope.settingAplicationHeadIconLaptop = data.head[0].iconLaptop;
        $scope.settingAplicationHeadIconPhone = data.head[0].iconPhone;
        $scope.settingAplicationHeadIconTablet = data.head[0].iconTablet;
        $scope.settingAplicationHeadDescription = data.head[0].description;
        
        $scope.settingAplicationHeadEnableSpeedtestText = data.head[0].enableSpeedtestText;
        $scope.settingAplicationHeadEnableSpeedtestTextOption1 = data.head[0].enableSpeedtestTextOption1;
        $scope.settingAplicationHeadEnableSpeedtestTextOption2 = data.head[0].enableSpeedtestTextOption2;
        
        
        /* FormUrlDownload */
		$scope.settingAplicationFormUrlDownloadLabelText =data.form[0].htmlLabel;
        $scope.settingAplicationFormUrlDownloadInputName =data.form[0].htmlFormElementName;
        $scope.settingAplicationFormUrlDownloadInputPlaceholder =data.form[0].htmlPlaceholder;
        $scope.settingAplicationFormUrlDownloadInputPlaceholderError =data.form[0].htmlErrorPlaceholder;
        
        /* FormTimeoutDownload */
        $scope.settingAplicationFormTimeoutDownloadLabelText =data.form[1].htmlLabel;
        $scope.settingAplicationFormTimeoutDownloadInputName =data.form[1].htmlFormElementName;
        $scope.settingAplicationFormTimeoutDownloadInputPlaceholder =data.form[1].htmlPlaceholder;
        $scope.settingAplicationFormTimeoutDownloadInputPlaceholderError =data.form[1].htmlErrorPlaceholder;
        $scope.settingAplicationFormTimeoutDownloadInputValue =data.form[1].htmlValue;
        
        /* FormSessionsDownload */
        $scope.settingAplicationFormSessionsDownloadLabelText =data.form[2].htmlLabel;
        $scope.settingAplicationFormSessionsDownloadInputName =data.form[2].htmlFormElementName;
        $scope.settingAplicationFormSessionsDownloadInputPlaceholder =data.form[2].htmlPlaceholder;
        $scope.settingAplicationFormSessionsDownloadInputPlaceholderError =data.form[2].htmlErrorPlaceholder;
        $scope.settingAplicationFormSessionsDownloadInputValue =data.form[2].htmlValue;
        
        /* FormAcceptTestDownload */
        $scope.settingAplicationFormAcceptTestDownloadLabelText =data.form[3].htmlLabel;
        $scope.settingAplicationFormAcceptTestDownloadInputName =data.form[3].htmlFormElementName;
        $scope.settingAplicationFormAcceptTestDownloadInputPlaceholder =data.form[3].htmlPlaceholder;
        $scope.settingAplicationFormAcceptTestDownloadInputPlaceholderError =data.form[3].htmlErrorPlaceholder;
        $scope.settingAplicationFormAcceptTestDownloadInputValue =data.form[3].htmlValue;
        
         /* FormUrlUpload */
		$scope.settingAplicationFormUrlUploadLabelText =data.form[4].htmlLabel;
        $scope.settingAplicationFormUrlUploadInputName =data.form[4].htmlFormElementName;
        $scope.settingAplicationFormUrlUploadInputPlaceholder =data.form[4].htmlPlaceholder;
        $scope.settingAplicationFormUrlUploadInputPlaceholderError =data.form[4].htmlErrorPlaceholder;
        
        /* FormTimeoutUpload */
        $scope.settingAplicationFormTimeoutUploadLabelText =data.form[5].htmlLabel;
        $scope.settingAplicationFormTimeoutUploadInputName =data.form[5].htmlFormElementName;
        $scope.settingAplicationFormTimeoutUploadInputPlaceholder =data.form[5].htmlPlaceholder;
        $scope.settingAplicationFormTimeoutUploadInputPlaceholderError =data.form[5].htmlErrorPlaceholder;
        $scope.settingAplicationFormTimeoutUploadInputValue =data.form[5].htmlValue;
        
        /* FormSessionsUpload */
        $scope.settingAplicationFormSessionsUploadLabelText =data.form[6].htmlLabel;
        $scope.settingAplicationFormSessionsUploadInputName =data.form[6].htmlFormElementName;
        $scope.settingAplicationFormSessionsUploadInputPlaceholder =data.form[6].htmlPlaceholder;
        $scope.settingAplicationFormSessionsUploadInputPlaceholderError =data.form[6].htmlErrorPlaceholder;
        $scope.settingAplicationFormSessionsUploadInputValue =data.form[6].htmlValue;
        
        /* FormAcceptTestUpload */
        $scope.settingAplicationFormAcceptTestUploadLabelText =data.form[7].htmlLabel;
        $scope.settingAplicationFormAcceptTestUploadInputName =data.form[7].htmlFormElementName;
        $scope.settingAplicationFormAcceptTestUploadInputPlaceholder =data.form[7].htmlPlaceholder;
        $scope.settingAplicationFormAcceptTestUploadInputPlaceholderError =data.form[7].htmlErrorPlaceholder;
        $scope.settingAplicationFormAcceptTestUploadInputValue =data.form[7].htmlValue;
        
        /* FormUrlPing */
		$scope.settingAplicationFormUrlPingLabelText =data.form[8].htmlLabel;
        $scope.settingAplicationFormUrlPingInputName =data.form[8].htmlFormElementName;
        $scope.settingAplicationFormUrlPingInputPlaceholder =data.form[8].htmlPlaceholder;
        $scope.settingAplicationFormUrlPingInputPlaceholderError =data.form[8].htmlErrorPlaceholder;
       
        /* FormCountPings */
        $scope.settingAplicationFormCountPingsLabelText =data.form[9].htmlLabel;
        $scope.settingAplicationFormCountPingsInputName =data.form[9].htmlFormElementName;
        $scope.settingAplicationFormCountPingsInputPlaceholder =data.form[9].htmlPlaceholder;
        $scope.settingAplicationFormCountPingsInputPlaceholderError =data.form[9].htmlErrorPlaceholder;
        
        /* FormUrlDns */
		$scope.settingAplicationFormUrlDnsLabelText =data.form[10].htmlLabel;
        $scope.settingAplicationFormUrlDnsInputName =data.form[10].htmlFormElementName;
        $scope.settingAplicationFormUrlDnsInputPlaceholder =data.form[10].htmlPlaceholder;
        $scope.settingAplicationFormUrlDnsInputPlaceholderError =data.form[10].htmlErrorPlaceholder;
        
        /* FormUrlTraceroute */
		$scope.settingAplicationFormUrlTracerouteLabelText =data.form[11].htmlLabel;
        $scope.settingAplicationFormUrlTracerouteInputName =data.form[11].htmlFormElementName;
        $scope.settingAplicationFormUrlTracerouteInputPlaceholder =data.form[11].htmlPlaceholder;
        $scope.settingAplicationFormUrlTracerouteInputPlaceholderError =data.form[11].htmlErrorPlaceholder;
       
        /* FormHopsTraceroute */
        $scope.settingAplicationFormHopsTracerouteLabelText =data.form[12].htmlLabel;
        $scope.settingAplicationFormHopsTracerouteInputName =data.form[12].htmlFormElementName;
        $scope.settingAplicationFormHopsTracerouteInputPlaceholder =data.form[12].htmlPlaceholder;
        $scope.settingAplicationFormHopsTracerouteInputPlaceholderError =data.form[12].htmlErrorPlaceholder;
        $scope.settingAplicationFormHopsTracerouteInputValue =data.form[12].htmlValue;
         
        /* FormUrlSpeedtest */
		$scope.settingAplicationFormUrlSpeedtestLabelText =data.form[13].htmlLabel;
        $scope.settingAplicationFormUrlSpeedtestInputName =data.form[13].htmlFormElementName;
        $scope.settingAplicationFormUrlSpeedtestInputPlaceholder =data.form[13].htmlPlaceholder;
        $scope.settingAplicationFormUrlSpeedtestInputPlaceholderError =data.form[13].htmlErrorPlaceholder;
        
        /* FormSizeSpeedtest */
        $scope.settingAplicationFormSizeSpeedtestLabelText =data.form[14].htmlLabel;
        $scope.settingAplicationFormSizeSpeedtestInputName =data.form[14].htmlFormElementName;
        $scope.settingAplicationFormSizeSpeedtestInputPlaceholder =data.form[14].htmlPlaceholder;
        $scope.settingAplicationFormSizeSpeedtestInputPlaceholderError =data.form[14].htmlErrorPlaceholder;
        $scope.settingAplicationFormSizeSpeedtestInputValue =data.form[14].htmlValue;
        
        /* FormPositionSpeedtest eje x */
        $scope.settingAplicationFormPositionSpeedtestLabelText =data.form[15].htmlLabel;
        $scope.settingAplicationFormPositionSpeedtestInputName =data.form[15].htmlFormElementName;
        $scope.settingAplicationFormPositionSpeedtestInputPlaceholder =data.form[15].htmlPlaceholder;
        $scope.settingAplicationFormPositionSpeedtestInputPlaceholderError =data.form[15].htmlErrorPlaceholder;
        $scope.settingAplicationFormPositionSpeedtestInputValue =data.form[15].htmlValue;
        
        // FormRadioTest	//	requisito prueba speedtest nacional
        $scope.settingAplicationForm_RequirementTestSpeedtestNacional_LabelText =data.form[16].htmlLabel;
        $scope.settingAplicationForm_RequirementTestSpeedtestNacional_InputName =data.form[16].htmlFormElementName;
        $scope.settingAplicationForm_RequirementTestSpeedtestNacional_InputPlaceholder =data.form[16].htmlPlaceholder;
        $scope.settingAplicationForm_RequirementTestSpeedtestNacional_InputPlaceholderError =data.form[16].htmlErrorPlaceholder;
        
        // FormRadioTest	//	requisito prueba speedtest internacional
        $scope.settingAplicationForm_RequirementTestSpeedtestInternacional_LabelText =data.form[17].htmlLabel;
        $scope.settingAplicationForm_RequirementTestSpeedtestInternacional_InputName =data.form[17].htmlFormElementName;
        $scope.settingAplicationForm_RequirementTestSpeedtestInternacional_InputPlaceholder =data.form[17].htmlPlaceholder;
        $scope.settingAplicationForm_RequirementTestSpeedtestInternacional_InputPlaceholderError =data.form[17].htmlErrorPlaceholder;
        
        //	Botones
        $scope.settingAplicationFormButtonApplyChangeText = data.listButton[0].applyChange;
		$scope.settingAplicationFormButtonApplyChangeName = data.listButton[0].name;        
        
        $scope.settingAplicationFormButtonCleanText = data.listButton[1].clean;
        $scope.settingAplicationFormButtonCleanName = data.listButton[1].name;
        
        $scope.settingAplicationFormButtonRestoreText = data.listButton[2].restore;
        $scope.settingAplicationFormButtonRestoreName = data.listButton[2].name;
        
        /* FormVuMeter */
        $scope.settingAplicationFormVuMeterLabelText =data.form[18].htmlLabel;
        $scope.settingAplicationFormVuMeterInputName =data.form[18].htmlFormElementName;
        $scope.settingAplicationFormVuMeterInputPlaceholder =data.form[18].htmlPlaceholder;
        $scope.settingAplicationFormVuMeterInputPlaceholderError =data.form[18].htmlErrorPlaceholder;
        
        /* FormPositionSpeedtest eje y */
        $scope.settingAplicationFormPositionYSpeedtestLabelText =data.form[19].htmlLabel;
        $scope.settingAplicationFormPositionYSpeedtestInputName =data.form[19].htmlFormElementName;
        $scope.settingAplicationFormPositionYSpeedtestInputPlaceholder =data.form[19].htmlPlaceholder;
        $scope.settingAplicationFormPositionYSpeedtestInputPlaceholderError =data.form[19].htmlErrorPlaceholder;
        $scope.settingAplicationFormPositionYSpeedtestInputValue =data.form[19].htmlValue;
        
        /* FormMinRoomsCertificate */
        $scope.settingAplicationFormMinRoomsCertificateLabelText =data.form[20].htmlLabel;
        $scope.settingAplicationFormMinRoomsCertificateInputName =data.form[20].htmlFormElementName;
        $scope.settingAplicationFormMinRoomsCertificateInputPlaceholder =data.form[20].htmlPlaceholder;
        $scope.settingAplicationFormMinRoomsCertificateInputPlaceholderError =data.form[20].htmlErrorPlaceholder;
        $scope.settingAplicationFormMinRoomsCertificateInputValue =data.form[20].htmlValue;
        
        /* FormMaxRoomsCertificate */
        $scope.settingAplicationFormMaxRoomsCertificateLabelText =data.form[21].htmlLabel;
        $scope.settingAplicationFormMaxRoomsCertificateInputName =data.form[21].htmlFormElementName;
        $scope.settingAplicationFormMaxRoomsCertificateInputPlaceholder =data.form[21].htmlPlaceholder;
        $scope.settingAplicationFormMaxRoomsCertificateInputPlaceholderError =data.form[21].htmlErrorPlaceholder;
        $scope.settingAplicationFormMaxRoomsCertificateInputValue =data.form[21].htmlValue;
        
		/* FormForceCertificateBothFrequencies */
        $scope.settingAplicationFormForceCertificateBothFrequenciesLabelText =data.form[22].htmlLabel;
        $scope.settingAplicationFormForceCertificateBothFrequenciesRadioButtonTextOption1 =data.form[22].radioButtonTextOption1;
        $scope.settingAplicationFormForceCertificateBothFrequenciesRadioButtonTextValue1 =data.form[22].radioButtonTextValue1;
        $scope.settingAplicationFormForceCertificateBothFrequenciesRadioButtonTextOption2 =data.form[22].radioButtonTextOption2;
        $scope.settingAplicationFormForceCertificateBothFrequenciesRadioButtonTextValue2 =data.form[22].radioButtonTextValue2;
        
        /* FormFormatDate */
        $scope.settingAplicationFormFormatDateLabelText =data.form[23].htmlLabel;
        $scope.settingAplicationFormFormatDateRadioButtonTextOption1 =data.form[23].radioButtonTextOption1;
        $scope.settingAplicationFormFormatDateRadioButtonTextValue1 =data.form[23].radioButtonValueOption1;
        $scope.settingAplicationFormFormatDateRadioButtonTextOption2 =data.form[23].radioButtonTextOption2;
        $scope.settingAplicationFormFormatDateRadioButtonTextValue2 =data.form[23].radioButtonValueOption2;
        
        /* FormFormatNumeric */
        $scope.settingAplicationFormFormatNumericLabelText =data.form[24].htmlLabel;
        $scope.settingAplicationFormFormatNumericRadioButtonTextOption1 =data.form[24].radioButtonTextOption1;
        $scope.settingAplicationFormFormatNumericRadioButtonTextValue1 =data.form[24].radioButtonValueOption1;
        $scope.settingAplicationFormFormatNumericRadioButtonHint1 =data.form[24].htmlHint1;
        
        $scope.settingAplicationFormFormatNumericRadioButtonTextOption2 =data.form[24].radioButtonTextOption2;
        $scope.settingAplicationFormFormatNumericRadioButtonTextValue2 =data.form[24].radioButtonValueOption2;
        $scope.settingAplicationFormFormatNumericRadioButtonHint2 =data.form[24].htmlHint2;
        
        $scope.settingAplicationFormFormatNumericRadioButtonTextOption3 =data.form[24].radioButtonTextOption3;
        $scope.settingAplicationFormFormatNumericRadioButtonTextValue3 =data.form[24].radioButtonValueOption3;  
        $scope.settingAplicationFormFormatNumericRadioButtonHint3 =data.form[24].htmlHint3;     
        
        $scope.settingAplicationFormText1 = data.content[0].text1;
        $scope.settingAplicationFormText2 = data.content[0].text2;
        $scope.settingAplicationFormText3 = data.content[0].text3;
        $scope.settingAplicationFormText4 = data.content[0].text4;
        $scope.settingAplicationFormText5 = data.content[0].text5;
        $scope.settingAplicationFormText6 = data.content[0].text6;
        $scope.settingAplicationFormText7 = data.content[0].text7;


    }).
    error(function(data, status, headers, config) {
      // log error
    });

}