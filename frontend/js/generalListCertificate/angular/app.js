function mainController($scope, $http) {
    
    var generalListCertificateSource;
    
    switch(language) {
	    case 'es':
			generalListCertificateSource="../json/generalListCertificate/reportCertificate_Content-es.json";
	        break;
	    case 'en':
			generalListCertificateSource="../json/generalListCertificate/reportCertificate_Content.json";
	        break;
		case 'pt_BR':
			generalListCertificateSource="../json/generalListCertificate/reportCertificate_Content-pt_BR.json";
	        break;
	    default:   	
	}
	
    $http.get(generalListCertificateSource).
    success(function(data, status, headers, config) {
        
        $scope.generalListCertificateTitle = data.title[0].title;
        
        $scope.generalListCertificateHeadTitle = data.head[0].title;
        $scope.generalListCertificateHeadIcon = data.head[0].icon;
        
        $scope.generalListCertificateListButtonFilterGeneralListCertificateIcon = data.listButton[0].icon;
        $scope.generalListCertificateListButtonFilterGeneralListCertificateHint = data.listButton[0].hint;
        $scope.generalListCertificateListButtonFilterGeneralListCertificateText = data.listButton[0].text;
        
        $scope.generalListCertificateListButtonDetailGeneralListCertificateText = data.listButton[4].text;
        
        $scope.generalListCertificateListButtonRefreshTableIcon = data.listButton[1].icon;
        $scope.generalListCertificateListButtonRefreshTableHint = data.listButton[1].hint;
        $scope.generalListCertificateListButtonRefreshTableText = data.listButton[1].text;
        
        $scope.generalListCertificateListButtonDownloadExcelFileIcon = data.listButton[2].icon;
        $scope.generalListCertificateListButtonDownloadExcelFileHint = data.listButton[2].hint;
        $scope.generalListCertificateListButtonDownloadExcelFileText = data.listButton[2].text;
        
/*        
        $scope.generalListCertificateListButtonDownloadPdfFileIcon = data.listButton[3].icon;
        $scope.generalListCertificateListButtonDownloadPdfFileHint = data.listButton[3].hint;
*/
      
        $scope.generalListCertificateListButtonDownloadFullExcelFileIcon = data.listButton[4].icon;
        $scope.generalListCertificateListButtonDownloadFullExcelFileHint = data.listButton[4].hint;
        $scope.generalListCertificateListButtonDownloadFullExcelFileText = data.listButton[4].text;
        
		$scope.generalListCertificateTableFilterOptionText1 = data.table[0].filterOption[0].text;
		$scope.generalListCertificateTableFilterOptionText2 = data.table[0].filterOption[1].text;
		$scope.generalListCertificateTableFilterOptionText3 = data.table[0].filterOption[2].text;
		$scope.generalListCertificateTableFilterOptionText4 = data.table[0].filterOption[3].text;
		$scope.generalListCertificateTableFilterOptionText5 = data.table[0].filterOption[4].text;
		
		$scope.generalListCertificateModalDetailCertificateTitleHead = data.modalDetailCertificate[0].titleHead;
		$scope.generalListCertificateModalDetailCertificateTitle1 = data.modalDetailCertificate[0].title1;
		$scope.generalListCertificateModalDetailCertificateTitle2 = data.modalDetailCertificate[0].title2;
		$scope.generalListCertificateModalDetailCertificateTitle3 = data.modalDetailCertificate[0].title3;		
		$scope.generalListCertificateModalDetailCertificateWiredTest = data.modalDetailCertificate[0].titleWiredTest;
		
		$scope.generalListCertificateModalDetailCertificateVisitType = data.modalDetailCertificate[0].visitType;
		$scope.generalListCertificateModalDetailCertificateBroadcastDate = data.modalDetailCertificate[0].broadcastDate;
		$scope.generalListCertificateModalDetailCertificateIdTechnical = data.modalDetailCertificate[0].idTechnical;
		$scope.generalListCertificateModalDetailCertificateEmailClient = data.modalDetailCertificate[0].emailClient;
		$scope.generalListCertificateModalDetailCertificateServicePlan = data.modalDetailCertificate[0].servicePlan;
		$scope.generalListCertificateModalDetailCertificateCpeType = data.modalDetailCertificate[0].cpeType;
		$scope.generalListCertificateModalDetailCertificateCpeModel = data.modalDetailCertificate[0].cpeModel;
		$scope.generalListCertificateModalDetailCertificateCpeMac = data.modalDetailCertificate[0].cpeMac;	
		$scope.generalListCertificateModalDetailCertificateHousingType = data.modalDetailCertificate[0].housingType;
		$scope.generalListCertificateModalDetailCertificateCpeLocation = data.modalDetailCertificate[0].cpeLocation;
		$scope.generalListCertificateModalDetailCertificateAcceptProposalLocation = data.modalDetailCertificate[0].acceptProposalLocation;
		$scope.generalListCertificateModalDetailCertificateObservation = data.modalDetailCertificate[0].observation;
		$scope.generalListCertificateModalDetailCertificateWifiOwn = data.modalDetailCertificate[0].wifiOwn;		
		$scope.generalListCertificateModalDetailCertificateCertificateState = data.modalDetailCertificate[0].certificateState;
		$scope.generalListCertificateModalDetailCertificateDateActive = data.modalDetailCertificate[0].dateActive;
		$scope.generalListCertificateModalDetailCertificateReceptorName = data.modalDetailCertificate[0].receptorName;
		$scope.generalListCertificateModalDetailCertificateRelationship = data.modalDetailCertificate[0].relationship;
		$scope.generalListCertificateModalDetailCertificateFloor = data.modalDetailCertificate[0].floor;
		$scope.generalListCertificateModalDetailCertificateTechnicalOrder = data.modalDetailCertificate[0].technicalOrder;
		$scope.generalListCertificateModalDetailCertificateIdClient = data.modalDetailCertificate[0].idClient;
		$scope.generalListCertificateModalDetailCertificateButtonReportDetails = data.modalDetailCertificate[0].buttonReportDetails;
				
		$scope.generalListCertificateModalDetailCertificateTbodyLocation = data.modalDetailCertificate[0].tbodyLocation;
		$scope.generalListCertificateModalDetailCertificateTbodyNacUp = data.modalDetailCertificate[0].tbodyNacUp;
		$scope.generalListCertificateModalDetailCertificateTbodyNacDown = data.modalDetailCertificate[0].tbodyNacDown;
		$scope.generalListCertificateModalDetailCertificateTbodyIntUp = data.modalDetailCertificate[0].tbodyIntUp;
		$scope.generalListCertificateModalDetailCertificateTbodyIntDown = data.modalDetailCertificate[0].tbodyIntDown;
		$scope.generalListCertificateModalDetailCertificateTbodySignal = data.modalDetailCertificate[0].tbodySignal;
		
		$scope.generalListCertificateModalDetailCertificateTbodyType = data.modalDetailCertificate[0].tbodyType;
		$scope.generalListCertificateModalDetailCertificateTbodyModel = data.modalDetailCertificate[0].tbodyModel;
		$scope.generalListCertificateModalDetailCertificateTbodyMac = data.modalDetailCertificate[0].tbodyMac;
		$scope.generalListCertificateModalDetailCertificateTbodyAcceptLocation = data.modalDetailCertificate[0].tbodyAcceptLocation;
		$scope.generalListCertificateModalDetailCertificateTbodyStatus = data.modalDetailCertificate[0].tbodyStatus;
		
		$scope.generalListCertificateModalDetailCertificateFrequency = data.modalDetailCertificate[0].frequency;
		$scope.generalListCertificateModalDetailCertificateEmptyWifiCertificateMessage = data.modalDetailCertificate[0].emptyWifiCertificateMessage;
		$scope.generalListCertificateModalDetailCertificateEmptyExtensorCertificateMessage = data.modalDetailCertificate[0].emptyExtensorCertificateMessage;
		$scope.generalListCertificateModalDetailCertificateButtonClose = data.modalDetailCertificate[0].buttonClose;
				
		$scope.generalListCertificateModalDetailCertificateExtensortitleHead = data.modalDetailCertificateExtensor[0].titleHead;
		$scope.generalListCertificateModalDetailCertificateExtensortitle1 = data.modalDetailCertificateExtensor[0].title1;
		$scope.generalListCertificateModalDetailCertificateExtensortitle2 = data.modalDetailCertificateExtensor[0].title2;
		
		$scope.generalListCertificateModalDetailCertificateExtensorCpeType = data.modalDetailCertificateExtensor[0].cpeType;
		$scope.generalListCertificateModalDetailCertificateExtensorCpeModel = data.modalDetailCertificateExtensor[0].cpeModel;
		$scope.generalListCertificateModalDetailCertificateExtensorCpeMac = data.modalDetailCertificateExtensor[0].cpeMac;
		$scope.generalListCertificateModalDetailCertificateExtensorCpeLocation = data.modalDetailCertificateExtensor[0].cpeLocation;
		$scope.generalListCertificateModalDetailCertificateExtensorAcceptProposalLocation = data.modalDetailCertificateExtensor[0].acceptProposalLocation;
		$scope.generalListCertificateModalDetailCertificateExtensorObservation = data.modalDetailCertificateExtensor[0].observation;
		
		$scope.generalListCertificateModalDetailCertificateExtensorTbodyLocation = data.modalDetailCertificateExtensor[0].tbodyLocation;
		$scope.generalListCertificateModalDetailCertificateExtensorTbodyNacUp = data.modalDetailCertificateExtensor[0].tbodyNacUp;
		$scope.generalListCertificateModalDetailCertificateExtensorTbodyNacDown = data.modalDetailCertificateExtensor[0].tbodyNacDown;
		$scope.generalListCertificateModalDetailCertificateExtensorTbodyIntUp = data.modalDetailCertificateExtensor[0].tbodyIntUp;
		$scope.generalListCertificateModalDetailCertificateExtensorTbodyIntDown = data.modalDetailCertificateExtensor[0].tbodyIntDown;
		$scope.generalListCertificateModalDetailCertificateExtensorTbodySignal = data.modalDetailCertificateExtensor[0].tbodySignal;
		
		$scope.generalListCertificateModalDetailCertificateExtensorFrequency = data.modalDetailCertificateExtensor[0].frequency;
		$scope.generalListCertificateModalDetailCertificateExtensorEmptyWifiCertificateMessage = data.modalDetailCertificateExtensor[0].emptyWifiCertificateMessage;
		$scope.generalListCertificateModalDetailCertificateExtensorButtonBack = data.modalDetailCertificateExtensor[0].buttonBack;
		$scope.generalListCertificateModalDetailCertificateExtensorButtonClose = data.modalDetailCertificateExtensor[0].buttonClose;
		
		//
		$scope.generalListCertificate_ModalDetailCertificateTest_Title = data.modalDetailCertificateTest[0].title;
		
		$scope.generalListCertificate_ModalDetailCertificateTest_TitleTestDownload = data.modalDetailCertificateTest[0].titleTestDownload;
		$scope.generalListCertificate_ModalDetailCertificateTest_TitleTestPing = data.modalDetailCertificateTest[0].titleTestPing;
		$scope.generalListCertificate_ModalDetailCertificateTest_TitleTestSniffer = data.modalDetailCertificateTest[0].titleTestSniffer;
		$scope.generalListCertificate_ModalDetailCertificateTest_TitleTestSpeedtest = data.modalDetailCertificateTest[0].titleTestSpeedtest;
		$scope.generalListCertificate_ModalDetailCertificateTest_TitleTestNetworksAvailable = data.modalDetailCertificateTest[0].titleTestNetworksAvailable;
		$scope.generalListCertificate_ModalDetailCertificateTest_TitleTestInformationTest = data.modalDetailCertificateTest[0].titleTestInformationTest;
		$scope.generalListCertificate_ModalDetailCertificateTest_TitleTestDescription = data.modalDetailCertificateTest[0].titleDescription;
		
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestDownloadSpe = data.modalDetailCertificateTest[0].subtitleTestDownloadSpe;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestDownloadAvg = data.modalDetailCertificateTest[0].subtitleTestDownloadAvg;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestDownloadTim = data.modalDetailCertificateTest[0].subtitleTestDownloadTim;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestDownloadSiz = data.modalDetailCertificateTest[0].subtitleTestDownloadSiz;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestDownloadTlo = data.modalDetailCertificateTest[0].subtitleTestDownloadTlo;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestDownloadTco = data.modalDetailCertificateTest[0].subtitleTestDownloadTco;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestDownloadTpr = data.modalDetailCertificateTest[0].subtitleTestDownloadTpr;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestDownloadTst = data.modalDetailCertificateTest[0].subtitleTestDownloadTst;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestDownloadUrl = data.modalDetailCertificateTest[0].subtitleTestDownloadUrl;
		
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestPingSend = data.modalDetailCertificateTest[0].subtitleTestPingSend;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestPingReceived = data.modalDetailCertificateTest[0].subtitleTestPingReceived;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestPingLost = data.modalDetailCertificateTest[0].subtitleTestPingLost;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestPingAverage = data.modalDetailCertificateTest[0].subtitleTestPingAverage;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestPingMinimo = data.modalDetailCertificateTest[0].subtitleTestPingMinimo;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestPingMaximo = data.modalDetailCertificateTest[0].subtitleTestPingMaximo;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestPingJitter = data.modalDetailCertificateTest[0].subtitleTestPingJitter;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestPingUrl = data.modalDetailCertificateTest[0].subtitleTestPingUrl;
		
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestNetworksAvailable = data.modalDetailCertificateTest[0].subtitleTestNetworksAvailable;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestInformationTestSecurity = data.modalDetailCertificateTest[0].subtitleTestInformationTestSecurity;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestInformationTestChannel = data.modalDetailCertificateTest[0].subtitleTestInformationTestChannel;
		$scope.generalListCertificate_ModalDetailCertificateTest_SubtitleTestInformationTestOrigin = data.modalDetailCertificateTest[0].subtitleTestInformationTestOrigin;
		$scope.generalListCertificate_ModalDetailCertificateTest_TitleDescription = data.modalDetailCertificateTest[0].titleDescription;
		
		$scope.generalListCertificateTableFilter_StateCertificateText1 = data.generalListCertificateStateCertificate[0].stateCertificateText1;
		$scope.generalListCertificateTableFilter_StateCertificateText2 = data.generalListCertificateStateCertificate[0].stateCertificateText2;
		$scope.generalListCertificateTableFilter_StateCertificateText3 = data.generalListCertificateStateCertificate[0].stateCertificateText3;
		$scope.generalListCertificateTableFilter_StateCertificateText4 = data.generalListCertificateStateCertificate[0].stateCertificateText4;
		$scope.generalListCertificateTableFilter_StateCertificateText5 = data.generalListCertificateStateCertificate[0].stateCertificateText5;
		$scope.generalListCertificateTableFilter_StateCertificateText6 = data.generalListCertificateStateCertificate[0].stateCertificateText6;
		
		$scope.generalListCertificateTableFilter_StateCertificateText7 = data.generalListCertificateStateCertificate[0].stateCertificateText7;
		
		$scope.generalListCertificateTableFilter_StateCertificateText8 = data.generalListCertificateStateCertificate[0].stateCertificateText8;
		$scope.generalListCertificateTableFilter_StateCertificateText9 = data.generalListCertificateStateCertificate[0].stateCertificateText9;
				
		//
				
    }).
    error(function(data, status, headers, config) {
      // log error
    });

}