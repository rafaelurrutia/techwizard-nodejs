function mainController($scope, $http) {
    
    var loginSource;
	
    switch(language) {
	    case 'es':
			loginSource="../json/login/login_Content-es.json";
	        break;
	    case 'en':
			loginSource="../json/login/login_Content.json";
	        break;
		case 'pt_BR':
			loginSource="../json/login/login_Content-pt_BR.json";
	        break;
	    default:   	
	}
	    
    $http.get(loginSource).
    success(function(data, status, headers, config) {
        
        $scope.login_text1 = data.content[0].text1;
        $scope.login_text2 = data.content[0].text2;
        $scope.login_text3 = data.content[0].text3;
        $scope.login_text4 = data.content[0].text4;
        $scope.login_text5 = data.content[0].text5;
        $scope.login_text6 = data.content[0].text6;
        $scope.login_text7 = data.content[0].text7;
        $scope.login_text8 = data.content[0].text8;
        $scope.login_text9 = data.content[0].text9;
        $scope.login_text10 = data.content[0].text10;
		$scope.login_text11 = data.content[0].text11;

    }).
    error(function(data, status, headers, config) {
      // log error
    });

 /*
    $scope.loginOpenModal = function() {
        window.location.href="#loginsModalAddlogin";
    }
*/


}