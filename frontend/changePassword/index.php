<?php include'../controller/checkTimeOut.php'; 

if(!isset($_SESSION)){
	header('Location: ../login/');	
}

?>
<!DOCTYPE html>
<html class="loading">

    <head>
        <title>Techwidard</title>

        <!--   INCLUDE METAS Y LIBRERIAS -->
        <?php include'../includes/head.php'; ?>
        <!--    FIN INCLUDE METAS Y LIBRERIAS -->

       <!--    LIBRESRIAS LOCALES  -->      
        <script src="../js/changePassword/angular/app.js"></script>
        <script src="../lib/metro/js/metro-dropdown.js"></script>
        <script src="../js/changePassword/jquery/modalResize.js"></script>
		<script src="../js/changePassword/jquery/keypress.js"></script>  
<!--        <script src="../js/default/detectBrowser.js"></script> -->
        <script src="../js/changePassword/jquery/changePassword.js"></script>
        <script src="../js/lib/webtoolkit.md5.min.js"></script>
<!--        
        <script src="../lib/metro/js/jquery.dataTables.js" type="text/javascript"></script>
-->
		<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/modal.css"; ?>">
        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/hint.css"; ?>">

        <!--    FIN LIBRERIAS LOCALES   -->

        <style>		/*	css modal access	*/
        	/*	MODAL ACCESS	*/
			.modalAccessBox{
			    position: relative;
			    padding: 5px 20px 13px 20px;
			
			    border-radius:18px;         /*  originalmente era 15px pero para que se vea el borde del footer se le aumento a 18px */
			    -webkit-transition: all 500ms ease-in;
			    -moz-transition: all 500ms ease-in;
			    transition: all 500ms ease-in;  
		
			    background: #FFFFFF; /* old browsers */
			    background: -moz-linear-gradient(top,  #FFFFFF,  #cccccc); /* firefox */
			    background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#cccccc)) fixed; /* webkit */
			
			    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFFFF', endColorstr='#CCCCCC',GradientType=0 ); /* ie */ 
			    background-repeat: no-repeat;
			    background-attachment: fixed;
			}
        </style>
        
        </script>
        
        <script type="text/javascript" language="JavaScript">
			
		var validate = function() {
			
			var data = {
				"username"				: $("input[name='modalChangePasswordInputHiddenId']").val(),
				"password"				: $("input[name='modalChangePasswordInputHiddenPassword']").val(),
				"currentPassword" 		: $("input[name='modalChangePasswordInputCurrentPassword']").val().trim(),
				"newPassword" 			: $("input[name='modalChangePasswordInputNewPassword']").val().trim(),
				"confirmPassword" 		: $("input[name='modalChangePasswordInputConfirmNewPassword']").val().trim()					
			};
			
			if(vacio(data.currentPassword)){
				showErrorMessage("input","modalChangePasswordInputCurrentPassword",textErrorValidateTitle1,textErrorValidateSubTitle1_1);
				return false;
			}else if(rango(data.currentPassword,"6-10")){
				showErrorMessage("input","modalChangePasswordInputCurrentPassword",textErrorValidateTitle1,textErrorValidateSubTitle2_1);
				return false;
			}else if(!(stringHasUpperCase(data.currentPassword) && stringHasLowerCase(data.currentPassword) && stringHasNumber(data.currentPassword) && stringHasSpecialCharacter(data.currentPassword))){
				showErrorMessage("input","modalChangePasswordInputCurrentPassword",textErrorValidateTitle1,textErrorValidateSubTitle3_1);
				return false;
			}else if($.md5(data.currentPassword)!=data.password){
				showErrorMessage("input","modalChangePasswordInputCurrentPassword",textErrorValidateTitle1,textErrorValidateSubTitle4_1);
				return false;
			}else{
				cleanFormElements("input","modalChangePasswordInputCurrentPassword");
			}
			
			if(vacio(data.newPassword)){
				showErrorMessage("input","modalChangePasswordInputNewPassword",textErrorValidateTitle2,textErrorValidateSubTitle1_2);
				return false;
			}else if(rango(data.newPassword,"6-10")){
				showErrorMessage("input","modalChangePasswordInputNewPassword",textErrorValidateTitle2,textErrorValidateSubTitle2_2);
				return false;
			}else if(!(stringHasUpperCase(data.newPassword) && stringHasLowerCase(data.newPassword) && stringHasNumber(data.newPassword) && stringHasSpecialCharacter(data.newPassword))){
				showErrorMessage("input","modalChangePasswordInputNewPassword",textErrorValidateTitle2,textErrorValidateSubTitle3_2);
				return false;
			}else{
				cleanFormElements("input","modalChangePasswordInputNewPassword");
			}
			
			if(vacio(data.confirmPassword)){
				showErrorMessage("input","modalChangePasswordInputConfirmNewPassword",textErrorValidateTitle3,textErrorValidateSubTitle1_3);
				return false;
			}else if(rango(data.confirmPassword,"6-10")){
				showErrorMessage("input","modalChangePasswordInputConfirmNewPassword",textErrorValidateTitle3,textErrorValidateSubTitle2_3);
				return false;
			}else if(!(stringHasUpperCase(data.confirmPassword) && stringHasLowerCase(data.confirmPassword) && stringHasNumber(data.confirmPassword) && stringHasSpecialCharacter(data.confirmPassword))){
				showErrorMessage("input","modalChangePasswordInputConfirmNewPassword",textErrorValidateTitle3,textErrorValidateSubTitle3_3);
				return false;
			}else if(data.confirmPassword!=data.newPassword){
				showErrorMessage("input","modalChangePasswordInputConfirmNewPassword",textErrorValidateTitle3,textErrorValidateSubTitle4_3);
				return false;
			}else{
				cleanFormElements("input","modalChangePasswordInputConfirmNewPassword");
			}
				
			return true;		
		};
		
		// 	true 	si s vacio
		//	false	si no es requerido		
		function vacio(input){
	    	if(input.length==0){
	        	return true;
			}else{
				return false;
	        }
	    }
	    
	    function getNames(url){

			var result = null;
			
			$.ajax({
				type : "GET",
				async : false,
				url : url
			}).done(function(data) {
				result = data;
			}).fail(function(jqXHR, textStatus, errorThrown) {
				//failAjax(jqXHR);
			});
			
			return result;
		}
  
	    // 	true 	si se encuentra coincidencia
		//	false	si no se encuentra		
		function uniqueName(input,option){
	        var items = [];
	        var flag;
	        
	        var names=getNames(url.read);
	        
	        
	        $.each(names.data, function(index,value) {
			    items.push(value.username);
			});
	        
//	        console.log(option+" pase x aca");
	        
	        if(option=="add"){
	        	/*
	        	$.each(items, function( index, value ) {
	        		console.log(value+' '+input);
					if(value==input){
						flag=false;
					}else{
						flag=true;
					}
				});
				
				*/
	        	
				if(jQuery.inArray(input,items)!=-1){
					flag=true;
				}else{
					flag=false;
				}
				
	       	}else if(option=="update"){
	       		
	       	}
			return flag;
	        
	    }
	    
		// 	true 	si el rango no cumple con el rango establecido
		//	false	si el texto cumple con el rango establecido
		function rango(input,range){
			range= range.split('-');
		    if((input.length>=range[0] && input.length<=range[1]) && range!=""){
		       	return false;
		  	}else{
	        	return true;
	        }
		}
		
		function stringHasLowerCase(input){
			var regex = /[a-z ñ]/;
			return regex.test(input);
		}
		
		function stringHasUpperCase(input){
			var regex = /[A-Z Ñ]/;
			return regex.test(input);
		}
		
		function stringHasNumber(input){
			var regex = /\d/g;
			return regex.test(input);
		}
		
		function stringHasSpecialCharacter(input){
			var regex=/[^a-zA-Z0-9 ñÑ]/;
			return regex.test(input);
		} 
		       	
		function cleanFormElements(type,input){
			
			if(type=="input"){
				$("input[name='"+input+"']").css("background-color","#E2F7D8");
				$("input[name='"+input+"']").css("border-color","#9FDE9C");
				$("input[name='"+input+"']").parent().prev().css("color","rgba(0, 0, 0, 0.8)");
			}else if(type=="select"){
				$("select[name='"+input+"']").css("background-color","#E2F7D8");
				$("select[name='"+input+"']").css("border-color","#9FDE9C");
				$("select[name='"+input+"']").parent().prev().css("color","rgba(0, 0, 0, 0.8)");
			}
		
		}
	
		function showErrorMessage(type,input,titulo,mensaje){

			$('.modalMessageError').html(titulo+' '+mensaje);

			if(type=="input"){
				$("input[name='"+input+"']").attr("placeholder", textFieldRequired);
				$("input[name='"+input+"']").css("background-color","#F5CECE");
				$("input[name='"+input+"']").css("border-color","red");
				$("input[name='"+input+"']").parent().prev().css("color","red");
			}else if(type=="select"){
				$("select[name='"+input+"']").css("background-color","#F5CECE");
				$("select[name='"+input+"']").css("border-color","red");
				$("select[name='"+input+"']").parent().prev().css("color","red");
			}
			
		}

        </script>
       
    </head>
    
<body class="metro" ng-app ng-controller="mainController">
<div id="wrapper">

    <div id="content">

        <div id="main">
			<?php include'changePassword.php'; ?>
        </div>        
    </div>

    <footer>
        <?php include'../includes/footer.php'; ?>
    </footer>

</div>
        

</body>
</html>
