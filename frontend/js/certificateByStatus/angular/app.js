function mainController($scope, $http) {
    
    var certificateByStatusSource;
    
    switch(language) {
	    case 'es':
			certificateByStatusSource="../json/certificateByStatus/certificateByStatus_Content-es.json";
	        break;
	    case 'en':
			certificateByStatusSource="../json/certificateByStatus/certificateByStatus_Content.json";
	        break;
		case 'pt_BR':
			certificateByStatusSource="../json/certificateByStatus/certificateByStatus_Content-pt_BR.json";
	        break;
	    default:   	
	}
	
    $http.get(certificateByStatusSource).
    success(function(data, status, headers, config) {
        
        $scope.certificateByStatusQuantity = data.table[0].quantity;
        $scope.certificateByStatusPercentage = data.table[0].percentage;
        
        console.log("data.table[0].quantity");
        
    }).
    error(function(data, status, headers, config) {
      // log error
    });

}