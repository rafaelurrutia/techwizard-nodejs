function changeFormatNumeric(value){

	if(FORMAT0002=="0,000"){
		value=Number(value);
		value=value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
		value=value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");	
	}else if(FORMAT0002=="0.000"){
		value=Number(value);
		value=value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
		value=value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");		
	}else if(FORMAT0002=="0,000.00"){
		if(value.toString().indexOf(".")){
			value=Number(value);
			value=value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
		}else if(value.toString().indexOf(",")){
			
		}
	}
	
	return value;
	
}

function mainController($scope, $http) {
    
    var dashboardSource;
    var d = new Date();
	var month = new Array();
    
    switch(language) {
	    case 'es':
			dashboardSource="../json/dashboard/dashboard_Content-es.json";
	        break;
	    case 'en':
			dashboardSource="../json/dashboard/dashboard_Content.json";
	        break;
		case 'pt_BR':
			dashboardSource="../json/dashboard/dashboard_Content-pt_BR.json";
	        break;	        
	    default:   	
	}
	
	switch(language) {
	    case 'es':
			month[0] = "Enero";
			month[1] = "Febrero";
			month[2] = "Marzo";
			month[3] = "Abril";
			month[4] = "Mayo";
			month[5] = "Junio";
			month[6] = "Julio";
			month[7] = "Agosto";
			month[8] = "Septiembre";
			month[9] = "Octubre";
			month[10] = "Noviembre";
			month[11] = "Diciembre";	
	        break;
	    case 'en':
			month[0] = "January";
			month[1] = "February";
			month[2] = "March";
			month[3] = "April";
			month[4] = "May";
			month[5] = "June";
			month[6] = "July";
			month[7] = "August";
			month[8] = "September";
			month[9] = "October";
			month[10] = "November";
			month[11] = "December";		
	        break;
		case 'pt_BR':
			month[0] = "Janeiro";
			month[1] = "Fevereiro";
			month[2] = "Março";
			month[3] = "Abril";
			month[4] = "Maio";
			month[5] = "Junho";
			month[6] = "Julho";
			month[7] = "Agosto";
			month[8] = "Septembro";
			month[9] = "Outubro";
			month[10] = "Novembro";
			month[11] = "Dezembro";		
	        break;
	    default:
	    	month[0] = "January";
			month[1] = "February";
			month[2] = "March";
			month[3] = "April";
			month[4] = "May";
			month[5] = "June";
			month[6] = "July";
			month[7] = "August";
			month[8] = "September";
			month[9] = "October";
			month[10] = "November";
			month[11] = "December";		
	        break; 		   	
	}
	
	var n = month[d.getMonth()];
		
    /* get text dashboard */    
    
    $http.get(dashboardSource).
    success(function(data, status, headers, config) {
        
        $scope.dashboardTitle = data.title[0].title;
        
        $scope.dashboardHeadTitle = data.head[0].title;
        $scope.dashboardHeadIcon = data.head[0].icon;
        
        $scope.dashboardWidgetGetCertificateQuantity_titleText = data.widgets[0].titleText;
        
        $scope.dashboardWidgetGetCertificateQuantity_titleMonthJan = data.widgets[0].titleMonthJan;        
        $scope.dashboardWidgetGetCertificateQuantity_titleMonthFeb = data.widgets[0].titleMonthFeb;
        $scope.dashboardWidgetGetCertificateQuantity_titleMonthMar = data.widgets[0].titleMonthMar;
        $scope.dashboardWidgetGetCertificateQuantity_titleMonthApr = data.widgets[0].titleMonthApr;
        $scope.dashboardWidgetGetCertificateQuantity_titleMonthMay = data.widgets[0].titleMonthMay;
        $scope.dashboardWidgetGetCertificateQuantity_titleMonthJun = data.widgets[0].titleMonthJun;
        $scope.dashboardWidgetGetCertificateQuantity_titleMonthJul = data.widgets[0].titleMonthJul;
        $scope.dashboardWidgetGetCertificateQuantity_titleMonthAug = data.widgets[0].titleMonthAug;
        $scope.dashboardWidgetGetCertificateQuantity_titleMonthSep = data.widgets[0].titleMonthSep;
        $scope.dashboardWidgetGetCertificateQuantity_titleMonthOct = data.widgets[0].titleMonthOct;
        $scope.dashboardWidgetGetCertificateQuantity_titleMonthNov = data.widgets[0].titleMonthNov;
        $scope.dashboardWidgetGetCertificateQuantity_titleMonthDec = data.widgets[0].titleMonthDec;
                
        $scope.dashboardWidgetGetCertificateByYear_titleText = data.widgets[1].titleText;
        $scope.dashboardWidgetGetCertificateByYear_footerText = data.widgets[1].footerText;
		$scope.dashboardWidgetGetCertificateByYear_hintCertificatesClosedText = data.widgets[1].hintCertificatesClosedText;
        $scope.dashboardWidgetGetCertificateByYear_hintCertificatesSlopeText = data.widgets[1].hintCertificatesSlopeText;
        $scope.dashboardWidgetGetCertificateByYear_hintCertificatesActiveReadyCreatedText = data.widgets[1].hintCertificatesActiveReadyCreatedText;


        $scope.dashboardWidgetGetCertificateByMonth_titleText = data.widgets[2].titleText;
		$scope.dashboardWidgetGetCertificateByMonth_middleText = n;
        $scope.dashboardWidgetGetCertificateByMonth_footerText = data.widgets[2].footerText;		
		$scope.dashboardWidgetGetCertificateByMonth_hintCertificatesClosedText = data.widgets[2].hintCertificatesClosedText;
        $scope.dashboardWidgetGetCertificateByMonth_hintCertificatesSlopeText = data.widgets[2].hintCertificatesSlopeText;
        $scope.dashboardWidgetGetCertificateByMonth_hintCertificatesActiveReadyCreatedText = data.widgets[2].hintCertificatesActiveReadyCreatedText;

        $scope.dashboardWidgetGetCertificateByWeek_titleText = data.widgets[3].titleText;
        $scope.dashboardWidgetGetCertificateByWeek_middleText = data.widgets[3].middleText;
        $scope.dashboardWidgetGetCertificateByWeek_footerText = data.widgets[3].footerText;
		$scope.dashboardWidgetGetCertificateByWeek_hintCertificatesClosedText = data.widgets[3].hintCertificatesClosedText;
        $scope.dashboardWidgetGetCertificateByWeek_hintCertificatesSlopeText = data.widgets[3].hintCertificatesSlopeText;
        $scope.dashboardWidgetGetCertificateByWeek_hintCertificatesActiveReadyCreatedText = data.widgets[3].hintCertificatesActiveReadyCreatedText;        

        $scope.dashboardWidgetGetCertificateByDay_titleText = data.widgets[4].titleText;
        $scope.dashboardWidgetGetCertificateByDay_middleText = data.widgets[4].middleText;
        $scope.dashboardWidgetGetCertificateByDay_footerText = data.widgets[4].footerText;
		$scope.dashboardWidgetGetCertificateByDay_hintCertificatesClosedText = data.widgets[4].hintCertificatesClosedText;
        $scope.dashboardWidgetGetCertificateByDay_hintCertificatesSlopeText = data.widgets[4].hintCertificatesSlopeText;
        $scope.dashboardWidgetGetCertificateByDay_hintCertificatesActiveReadyCreatedText = data.widgets[4].hintCertificatesActiveReadyCreatedText;
        
        $scope.dashboardWidgetGetCertificateCreatedAtMonth_titleText = data.widgets[5].titleText;
        $scope.dashboardWidgetGetCertificateCreatedAtMonth_footerText = data.widgets[5].footerText;
        
        $scope.dashboardWidgetGetCertificateAtLastSevenDays_titleText = data.widgets[6].titleText;
        $scope.dashboardWidgetGetCertificateAtLastSevenDays_footerText = data.widgets[6].footerText;
        
        $scope.dashboardWidgetGetCertificateAtLastHours_titleText = data.widgets[7].titleText;
        $scope.dashboardWidgetGetCertificateAtLastHours_middleText = data.widgets[7].middleText;
        $scope.dashboardWidgetGetCertificateAtLastHours_footerText = data.widgets[7].footerText;      
        $scope.dashboardWidgetGetCertificateAtLastHours_hintCertificatesText1 = data.widgets[7].hintCertificatesText1;
        $scope.dashboardWidgetGetCertificateAtLastHours_hintCertificatesText2 = data.widgets[7].hintCertificatesText2;
        
        $scope.dashboardWidgetGetCertificateByApartmentType_titleText = data.widgets[8].titleText;
        $scope.dashboardWidgetGetCertificateByApartmentType_footerText = data.widgets[8].footerText;       
        $scope.dashboardWidgetGetCertificateByApartmentType_hintCertificatesText1 = data.widgets[8].hintCertificatesText1;
        $scope.dashboardWidgetGetCertificateByApartmentType_hintCertificatesText2 = data.widgets[8].hintCertificatesText2;
        $scope.dashboardWidgetGetCertificateByApartmentType_hintCertificatesText3 = data.widgets[8].hintCertificatesText3;
        $scope.dashboardWidgetGetCertificateByApartmentType_hintCertificatesText4 = data.widgets[8].hintCertificatesText4;
        
        $scope.dashboardWidgetGetCertificateByExtensor_titleText = data.widgets[9].titleText;
        $scope.dashboardWidgetGetCertificateByExtensor_footerText = data.widgets[9].footerText;        
        $scope.dashboardWidgetGetCertificateByExtensor_middleText1 = data.widgets[9].middleText1;
        $scope.dashboardWidgetGetCertificateByExtensor_middleText2 = data.widgets[9].middleText2;              
        $scope.dashboardWidgetGetCertificateByExtensor_hintCertificatesText1 = data.widgets[9].hintCertificatesText1;
        $scope.dashboardWidgetGetCertificateByExtensor_hintCertificatesText2 = data.widgets[9].hintCertificatesText2;
        $scope.dashboardWidgetGetCertificateByExtensor_hintCertificatesText3 = data.widgets[9].hintCertificatesText3;
        $scope.dashboardWidgetGetCertificateByExtensor_hintCertificatesText4 = data.widgets[9].hintCertificatesText4;
        
        $scope.dashboardWidgetGetCertificateByVisitTypeMonth_titleText = data.widgets[10].titleText;
        $scope.dashboardWidgetGetCertificateByVisitTypeMonth_footerText = data.widgets[10].footerText;        
        $scope.dashboardWidgetGetCertificateByVisitTypeMonth_middleText1 = data.widgets[10].middleText1;
        $scope.dashboardWidgetGetCertificateByVisitTypeMonth_middleText2 = data.widgets[10].middleText2;              
        $scope.dashboardWidgetGetCertificateByVisitTypeMonth_hintCertificatesText1 = data.widgets[10].hintCertificatesText1;
        $scope.dashboardWidgetGetCertificateByVisitTypeMonth_hintCertificatesText2 = data.widgets[10].hintCertificatesText2;
        $scope.dashboardWidgetGetCertificateByVisitTypeMonth_hintCertificatesText3 = data.widgets[10].hintCertificatesText3;
        $scope.dashboardWidgetGetCertificateByVisitTypeMonth_hintCertificatesText4 = data.widgets[10].hintCertificatesText4;
        
        $scope.dashboardWidgetGetCertificateByVisitTypeWeek_titleText = data.widgets[11].titleText;
        $scope.dashboardWidgetGetCertificateByVisitTypeWeek_footerText = data.widgets[11].footerText;        
        $scope.dashboardWidgetGetCertificateByVisitTypeWeek_middleText = data.widgets[11].middleText;
        $scope.dashboardWidgetGetCertificateByVisitTypeWeek_middleText1 = data.widgets[11].middleText1;
        $scope.dashboardWidgetGetCertificateByVisitTypeWeek_middleText2 = data.widgets[11].middleText2;              
        $scope.dashboardWidgetGetCertificateByVisitTypeWeek_hintCertificatesText1 = data.widgets[11].hintCertificatesText1;
        $scope.dashboardWidgetGetCertificateByVisitTypeWeek_hintCertificatesText2 = data.widgets[11].hintCertificatesText2;
        $scope.dashboardWidgetGetCertificateByVisitTypeWeek_hintCertificatesText3 = data.widgets[11].hintCertificatesText3;
        $scope.dashboardWidgetGetCertificateByVisitTypeWeek_hintCertificatesText4 = data.widgets[11].hintCertificatesText4;
        
    }).
    error(function(data, status, headers, config) {
      // log error
    });
    
    /* get values dashboard */
//    var dashboardSourceData="../json/dashboard/dashboard.json";
    var dashboardSourceData="/techwizard/stats/dashboard/";
       
    $http.get(dashboardSourceData).
    success(function(data, status, headers, config) {

        /* values table certificate by year */	
     
        $scope.dashboardWidgetGetCertificateQuantity_jan = changeFormatNumeric(data.data.widgettable[0].certificatesQuantityActivesJan);
        $scope.dashboardWidgetGetCertificateQuantity_feb = changeFormatNumeric(data.data.widgettable[0].certificatesQuantityActivesFeb);
        $scope.dashboardWidgetGetCertificateQuantity_mar = changeFormatNumeric(data.data.widgettable[0].certificatesQuantityActivesMar);
        $scope.dashboardWidgetGetCertificateQuantity_apr = changeFormatNumeric(data.data.widgettable[0].certificatesQuantityActivesApr);
        $scope.dashboardWidgetGetCertificateQuantity_may = changeFormatNumeric(data.data.widgettable[0].certificatesQuantityActivesMay);
        $scope.dashboardWidgetGetCertificateQuantity_jun = changeFormatNumeric(data.data.widgettable[0].certificatesQuantityActivesJun);
        $scope.dashboardWidgetGetCertificateQuantity_jul = changeFormatNumeric(data.data.widgettable[0].certificatesQuantityActivesJul);
        $scope.dashboardWidgetGetCertificateQuantity_aug = changeFormatNumeric(data.data.widgettable[0].certificatesQuantityActivesAug);
        $scope.dashboardWidgetGetCertificateQuantity_sep = changeFormatNumeric(data.data.widgettable[0].certificatesQuantityActivesSep);
        $scope.dashboardWidgetGetCertificateQuantity_oct = changeFormatNumeric(data.data.widgettable[0].certificatesQuantityActivesOct);
        $scope.dashboardWidgetGetCertificateQuantity_nov = changeFormatNumeric(data.data.widgettable[0].certificatesQuantityActivesNov);
        $scope.dashboardWidgetGetCertificateQuantity_dec = changeFormatNumeric(data.data.widgettable[0].certificatesQuantityActivesDec);
          
		$scope.dashboardWidgetGetCertificateByYear_quantity = changeFormatNumeric(data.data.widgets[0].certificatesQuantity);		
		$scope.dashboardWidgetGetCertificateByYear_slopeQuantity = changeFormatNumeric(data.data.widgets[0].certificatesSlopeQuantity);
	    $scope.dashboardWidgetGetCertificateByYear_slopePercentage = data.data.widgets[0].certificatesSlopePercentage;
	    	    		 		
		$scope.dashboardWidgetGetCertificateByYear_closedQuantity = changeFormatNumeric(data.data.widgets[0].certificatesClosedQuantity);
	    $scope.dashboardWidgetGetCertificateByYear_closedPercentage = data.data.widgets[0].certificatesClosedPercentage;
		
		$scope.dashboardWidgetGetCertificateByYear_activeReadyCreatedQuantity = changeFormatNumeric(data.data.widgets[0].certificatesActiveReadyCreatedQuantity);
		$scope.dashboardWidgetGetCertificateByYear_activeReadyCreatedPercentage = data.data.widgets[0].certificatesActiveReadyCreatedPercentage;
		
		
		$scope.dashboardWidgetGetCertificateByMonth_quantity = changeFormatNumeric(data.data.widgets[1].certificatesQuantity);		
		$scope.dashboardWidgetGetCertificateByMonth_slopeQuantity = changeFormatNumeric(data.data.widgets[1].certificatesSlopeQuantity);
	    $scope.dashboardWidgetGetCertificateByMonth_slopePercentage = data.data.widgets[1].certificatesSlopePercentage;	    		 		
		$scope.dashboardWidgetGetCertificateByMonth_closedQuantity = changeFormatNumeric(data.data.widgets[1].certificatesClosedQuantity);
	    $scope.dashboardWidgetGetCertificateByMonth_closedPercentage = data.data.widgets[1].certificatesClosedPercentage;
		$scope.dashboardWidgetGetCertificateByMonth_activeReadyCreatedQuantity = changeFormatNumeric(data.data.widgets[1].certificatesActiveReadyCreatedQuantity);
		$scope.dashboardWidgetGetCertificateByMonth_activeReadyCreatedPercentage = data.data.widgets[1].certificatesActiveReadyCreatedPercentage;
/*		
		$scope.dashboardWidgetGetCertificateByWeek_quantity = data.data.widgets[2].certificatesQuantity;		
		$scope.dashboardWidgetGetCertificateByWeek_slopeQuantity = data.data.widgets[2].certificatesSlopeQuantity;
	    $scope.dashboardWidgetGetCertificateByWeek_slopePercentage = data.data.widgets[2].certificatesSlopePercentage;	    		 		
		$scope.dashboardWidgetGetCertificateByWeek_closedQuantity = data.data.widgets[2].certificatesClosedQuantity;
	    $scope.dashboardWidgetGetCertificateByWeek_closedPercentage = data.data.widgets[2].certificatesClosedPercentage;
		$scope.dashboardWidgetGetCertificateByWeek_activeReadyCreatedQuantity = data.data.widgets[2].certificatesActiveReadyCreatedQuantity;
		$scope.dashboardWidgetGetCertificateByWeek_activeReadyCreatedPercentage = data.data.widgets[2].certificatesActiveReadyCreatedPercentage;
*/
// correspondiente a dia pero sin semana
		$scope.dashboardWidgetGetCertificateByDay_quantity = changeFormatNumeric(data.data.widgets[2].certificatesQuantity);		
		$scope.dashboardWidgetGetCertificateByDay_slopeQuantity = changeFormatNumeric(data.data.widgets[2].certificatesSlopeQuantity);
	    $scope.dashboardWidgetGetCertificateByDay_slopePercentage = data.data.widgets[2].certificatesSlopePercentage;	    		 		
		$scope.dashboardWidgetGetCertificateByDay_closedQuantity = changeFormatNumeric(data.data.widgets[2].certificatesClosedQuantity);
	    $scope.dashboardWidgetGetCertificateByDay_closedPercentage = data.data.widgets[2].certificatesClosedPercentage;
		$scope.dashboardWidgetGetCertificateByDay_activeReadyCreatedQuantity = changeFormatNumeric(data.data.widgets[2].certificatesActiveReadyCreatedQuantity);
		$scope.dashboardWidgetGetCertificateByDay_activeReadyCreatedPercentage = data.data.widgets[2].certificatesActiveReadyCreatedPercentage;

		
/*		
		$scope.dashboardWidgetGetCertificateByDay_quantity = data.widgets[3].certificatesQuantity;		
		$scope.dashboardWidgetGetCertificateByDay_slopeQuantity = data.widgets[3].certificatesSlopeQuantity;
	    $scope.dashboardWidgetGetCertificateByDay_slopePercentage = data.widgets[3].certificatesSlopePercentage;	    		 		
		$scope.dashboardWidgetGetCertificateByDay_closedQuantity = data.widgets[3].certificatesClosedQuantity;
	    $scope.dashboardWidgetGetCertificateByDay_closedPercentage = data.widgets[3].certificatesClosedPercentage;
		$scope.dashboardWidgetGetCertificateByDay_activeReadyCreatedQuantity = data.widgets[3].certificatesActiveReadyCreatedQuantity;
		$scope.dashboardWidgetGetCertificateByDay_activeReadyCreatedPercentage = data.widgets[3].certificatesActiveReadyCreatedPercentage;

		$scope.dashboardWidgetGetCertificateWeek1_quantity = data.widgets[4].certificatesWeek1Quantity;
		$scope.dashboardWidgetGetCertificateWeek2_quantity = data.widgets[4].certificatesWeek2Quantity;
		$scope.dashboardWidgetGetCertificateWeek3_quantity = data.widgets[4].certificatesWeek3Quantity;
		$scope.dashboardWidgetGetCertificateWeek4_quantity = data.widgets[4].certificatesWeek4Quantity;
		
		$scope.dashboardWidgetGetCertificateDay1_quantity = data.widgets[5].certificatesDay1Quantity;
		$scope.dashboardWidgetGetCertificateDay2_quantity = data.widgets[5].certificatesDay2Quantity;
		$scope.dashboardWidgetGetCertificateDay3_quantity = data.widgets[5].certificatesDay3Quantity;
		$scope.dashboardWidgetGetCertificateDay4_quantity = data.widgets[5].certificatesDay4Quantity;
		$scope.dashboardWidgetGetCertificateDay5_quantity = data.widgets[5].certificatesDay5Quantity;
		$scope.dashboardWidgetGetCertificateDay6_quantity = data.widgets[5].certificatesDay6Quantity;
		$scope.dashboardWidgetGetCertificateDay7_quantity = data.widgets[5].certificatesDay7Quantity;
		
		$scope.dashboardWidgetGetCertificateLast24Hours_quantity = data.widgets[6].certificatesLast24HoursQuantity;

		$scope.dashboardWidgetGetCertificateByApartmentType_quantity = data.widgets[7].certificatesQuantity;
		$scope.dashboardWidgetGetCertificateByApartmentType_homeQuantity = data.widgets[7].certificatesHomeQuantity;
		$scope.dashboardWidgetGetCertificateByApartmentType_homePercentage = data.widgets[7].certificatesHomePercentage;
		$scope.dashboardWidgetGetCertificateByApartmentType_apartmentQuantity = data.widgets[7].certificatesApartmentQuantity;
		$scope.dashboardWidgetGetCertificateByApartmentType_apartmentPercentage = data.widgets[7].certificatesApartmentPercentage;
		
		$scope.dashboardWidgetGetCertificateByExtensor_quantity = data.widgets[8].certificatesQuantity;
		$scope.dashboardWidgetGetCertificateByExtensor_withExtensorQuantity = data.widgets[8].certificatesWithExtensorQuantity;
		$scope.dashboardWidgetGetCertificateByExtensor_withExtensorPercentage = data.widgets[8].certificatesWithExtensorPercentage;
		$scope.dashboardWidgetGetCertificateByExtensor_withOutExtensorQuantity = data.widgets[8].certificatesWithOutExtensorQuantity;
		$scope.dashboardWidgetGetCertificateByExtensor_withOutExtensorPercentage = data.widgets[8].certificatesWithOutExtensorPercentage;
		
		$scope.dashboardWidgetGetCertificateByVisitType_monthQuantity = data.widgets[9].certificatesQuantity;
		$scope.dashboardWidgetGetCertificateByVisitType_monthTypeVisitAltaQuantity = data.widgets[9].certificatesMonthTypeVisitAltaQuantity;
		$scope.dashboardWidgetGetCertificateByVisitType_monthTypeVisitAltaPercentage = data.widgets[9].certificatesMonthTypeVisitAltaPercentage;
		$scope.dashboardWidgetGetCertificateByVisitType_monthTypeVisitSoporteQuantity = data.widgets[9].certificatesMonthTypeVisitSoporteQuantity;
		$scope.dashboardWidgetGetCertificateByVisitType_monthTypeVisitSoportePercentage = data.widgets[9].certificatesMonthTypeVisitSoportePercentage;
		
		$scope.dashboardWidgetGetCertificateByVisitType_weekQuantity = data.widgets[10].certificatesQuantity;
		$scope.dashboardWidgetGetCertificateByVisitType_weekTypeVisitAltaQuantity = data.widgets[10].certificatesWeekTypeVisitAltaQuantity;
		$scope.dashboardWidgetGetCertificateByVisitType_weekTypeVisitAltaPercentage = data.widgets[10].certificatesWeekTypeVisitAltaPercentage;
		$scope.dashboardWidgetGetCertificateByVisitType_weekTypeVisitSoporteQuantity = data.widgets[10].certificatesWeekTypeVisitSoporteQuantity;
		$scope.dashboardWidgetGetCertificateByVisitType_weekTypeVisitSoportePercentage = data.widgets[10].certificatesWeekTypeVisitSoportePercentage;
*/
    }).
    error(function(data, status, headers, config) {
      // log error
    });    
    
}