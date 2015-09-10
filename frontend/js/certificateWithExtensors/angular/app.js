function mainController($scope, $http) {
    
    var certificateWithExtensorsSource;
    
    switch(language) {
	    case 'es':
			certificateWithExtensorsSource="../json/certifiedHighPropagation/certifiedHighPropagation_Content-es.json";
	        break;
	    case 'en':
			certificateWithExtensorsSource="../json/certifiedHighPropagation/certifiedHighPropagation_Content.json";
	        break;
		case 'pt_BR':
			certificateWithExtensorsSource="../json/certifiedHighPropagation/certifiedHighPropagation_Content-pt_BR.json";
	        break;
	    default:   	
	}
	
    $http.get(certificateWithExtensorsSource).
    success(function(data, status, headers, config) {
        
        $scope.certificateWithExtensorsWithExtensor = data.table[0].withExtensor;
        $scope.certificateWithExtensorsWithoutExtensor = data.table[0].withoutExtensor;
        $scope.certificateWithExtensorsQuantity = data.table[0].quantity;
        $scope.certificateWithExtensorsPercentage = data.table[0].percentage;
        
    }).
    error(function(data, status, headers, config) {
      // log error
    });

}