function mainController($scope, $http) {
    
    var changePasswordSource;
    var changePassword =[]; 
    
    switch(language) {
	    case 'es':
	    	changePassword[0] ="Cambiar contraseña";
	    	
	    	changePassword[1] ="* Ingrese contraseña actual:";
	    	changePassword[2] ="Ingrese contraseña actual";
	    	
	    	changePassword[3] ="* Ingrese nueva contraseña:";
	    	changePassword[4] ="Ingrese nueva contraseña";
	    	
	    	changePassword[5] ="* Confirme nueva contraseña:";
	    	changePassword[6] ="Confirme nueva contraseña";
	    	
	    	changePassword[7] ="Todos los elementos con * son requeridos";
	    	changePassword[8] ="Cambiar contraseña";
	    	changePassword[9] ="Volver";
	    	
	    break;
	    case 'en':
			changePassword[0] ="Change password";
	    	
	    	changePassword[1] ="* Current password:";
	    	changePassword[2] ="Current password";
	    	
	    	changePassword[3] ="* New password:";
	    	changePassword[4] ="New password";
	    	
	    	changePassword[5] ="* Confirm new password:";
	    	changePassword[6] ="Confirm new password";
	    	
	    	changePassword[7] ="All elements with * are required";
	    	changePassword[8] ="Change password";
	    	changePassword[9] ="Back";
	    	
	    break;
	    case 'pt_BR':
	    	changePassword[0] ="Alterar senha";
	    	
	    	changePassword[1] ="* Insira senha atual:";
	    	changePassword[2] ="Insira senha atual";
	    	
	    	changePassword[3] ="* Insira nova senha:";
	    	changePassword[4] ="Insira nova senha";
	    	
	    	changePassword[5] ="* Confirme nova senha:";
	    	changePassword[6] ="Confirme nova senha";
	    	
	    	changePassword[7] ="Todos os elementos com * são requeridos.";
	    	changePassword[8] ="Mudar senha";
	    	changePassword[9] ="Voltar";
	    	
	    break;
	    
	    default:  
	    	changePassword[0] ="Change password";
	    	
	    	changePassword[1] ="* Current password:";
	    	changePassword[2] ="Current password";
	    	
	    	changePassword[3] ="* New password:";
	    	changePassword[4] ="New password";
	    	
	    	changePassword[5] ="* Confirm new password:";
	    	changePassword[6] ="Confirm new password";
	    	
	    	changePassword[7] ="All elements with * are required";
	    	changePassword[8] ="Change password";
	    	changePassword[9] ="Back";
	    	
	    break; 	
	}
	
    $http.get(changePasswordSource).
    success(function(data, status, headers, config) {
        
        $scope.text0=changePassword[0];
        $scope.text1=changePassword[1];
        $scope.text2=changePassword[2];
        $scope.text3=changePassword[3];
        $scope.text4=changePassword[4];
        $scope.text5=changePassword[5];
        $scope.text6=changePassword[6];
        $scope.text7=changePassword[7];
        $scope.text8=changePassword[8];
        $scope.text9=changePassword[9];
        $scope.text10=changePassword[10];
        $scope.text11=changePassword[11];
        $scope.text12=changePassword[12];
        
    }).
    error(function(data, status, headers, config) {
      // log error
    });

 /*
    $scope.planServiceOpenModal = function() {
        window.location.href="#planServicesModalAddplanService";
    }
*/


}