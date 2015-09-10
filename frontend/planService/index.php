<?php 

include'../controller/checkTimeOut.php'; 
$permiso = split ("\|", $_SESSION['access']);
$permiso1 = split ("\,", $permiso[4]);

if($permiso1[1]==0){
	header('Location: ../errortw/');	
}

$_SESSION['place']=5;
$_SESSION['placeNavigationBar']=1;

?>
<!DOCTYPE html>
<html class="loading">

    <head>
        <title>TechWizard</title>

        <!--   INCLUDE METAS Y LIBRERIAS -->
        <?php include'../includes/head.php'; ?>
        <!--    FIN INCLUDE METAS Y LIBRERIAS -->

       <!--    LIBRESRIAS LOCALES  -->      
        <script src="../js/planService/angular/app.js"></script>
        <script src="../lib/metro/js/metro-dropdown.js"></script>
        <script src="../js/planService/jquery/modalResize.js"></script>
<!--        <script src="../js/planServicetest/jquery/validationElementsForm.js"></script> -->
<!--        <script src="../js/planServicetest/jquery/keypressed.js"></script> -->
		<script src="../js/planService/jquery/keypress.js"></script>
        <script src="http://cdn.datatables.net/1.10.1/js/jquery.dataTables.min.js" type="text/javascript"></script>  
<!--        <script src="http://cdn.datatables.net/1.10.0/js/jquery.dataTables.js"></script>	-->
<!--        <script src="http://cdn.datatables.net/plug-ins/28e7751dbec/api/fnReloadAjax.js"></script> -->
<!--        <script src="../js/default/detectBrowser.js"></script> -->
        <script src="../js/planService/jquery/tablePlanService.js"></script>

        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/modal.css"; ?>">
        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/hint.css"; ?>">
        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/navigationBar.css"; ?>">
        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/sideBar.css"; ?>">
        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/table.css"; ?>">
        

        <!--    FIN LIBRERIAS LOCALES   -->

        <style>

            .bottom{
                background-color: #FFF;
                height: 50px;
                margin: 5px;
            }
/*
            .row_selected{
                background-color: #9FAFD1 !important; 
            }
            
			div.modalMain input {
			    text-transform: uppercase;
			}
*/			
            .messageErrorAccess{
            	font-size: 12px;
            	color: red;
            }
            
            .countdown{
            	font-size: 12px;
            }
            
            
        
        </style>
        
        <script type="text/javascript" language="JavaScript">
	        var getAccess = function(access) {
				var location = window.location.hash;
        	 	
        	 	switch(access) {
				    case 'add':
				        return <?php echo $permiso1[2]; ?>;
				        break;
				    case 'update':
						return <?php echo $permiso1[3]; ?>;
				        break;
				    case 'delete':
						return <?php echo $permiso1[4]; ?>;
				        break;
				}
        	 	
			};	
		</script>	
        <script type="text/javascript" language="JavaScript">

            $(function( ) {
            	if(getAccess("add")==0 && location!=""){
        			$("#PlanServicesModalPlanService").hide(); 	
        	 	}		
/*
                // CAMBIA EL COLOR DEL MODAL CADA VEZ QUE SE RECARGUE LA PÁGINA
                $.getJSON( "../json/default/modal.json", function( data ) {
                    var items = [];
                    $.each( data.data, function( i, item ) {
                        if(item.modalActive==1)
                            items.push(item.modalColor);
                    });
                    var item=items[Math.floor(Math.random()*items.length)];
                    $(".modalFooter,.modalFoot button,.modalFoot a").css({"background-color":item,"color":"#FFFFFF"});
                    $(".modalMain input").css("border","1px solid "+item);  
                });
*/
                //$("#childShow").show();
                $("#childShow").css("display","block");
/*                
                 $.each($("nav ul li"), function( i, item ) {
                    // 1=grupos 2=usuarios 3=provisiones
                  //  if(i==3){
                    //    $(this).addClass('active');
                  //  }
                    if(i==3){
//                        $($(this)+ " a").css("background-color","rgb(154, 22, 22)");
//                        $(this+" a").css("background-color","rgb(154, 22, 22)");
                        $(this).children(":first").css("background-color","rgb(154, 22, 22)");
                    }
                 });

                 $.each($("div div ul a"), function( i, item ) {
                    // 0=reportes 1=administracion
                    if(i==1){
                        $(this).css("background-color","rgb(154, 22, 22)");
                    }        
                });
*/                                
            });

        </script>
        
        <script type="text/javascript" language="JavaScript">

		var validate = function(option) {
			
			var data = {
				"name" 		: $("input[name='modalPlanServiceInputNamePlanService']").val().trim(),
				"upload" 	: $("input[name='modalPlanServiceInputUploadPlanService']").val().replace('.','').trim(),
				"download" 	: $("input[name='modalPlanServiceInputDownloadPlanService']").val().replace('.','').trim(),
			};
			
			if(vacio(data.name)){
				showErrorMessage("input","modalPlanServiceInputNamePlanService",textErrorValidateTitle1,textErrorValidateSubTitle1_1);
				return false;
			}else if(rango(data.name,"5-30")){
				showErrorMessage("input","modalPlanServiceInputNamePlanService",textErrorValidateTitle1,textErrorValidateSubTitle2_1);
				return false;
			}else if(uniqueName(data.name,option)){
				showErrorMessage("input","modalPlanServiceInputNamePlanService",textErrorValidateTitle1,textErrorValidateSubTitle3_1);
				return false;
			}else{
				cleanFormElements("input","modalPlanServiceInputNamePlanService");
			}
			
			if(vacio(data.upload)){
				showErrorMessage("input","modalPlanServiceInputUploadPlanService",textErrorValidateTitle2,textErrorValidateSubTitle1_2);
				return false;
			}else if(rango(data.upload,"2-7")){
				showErrorMessage("input","modalPlanServiceInputUploadPlanService",textErrorValidateTitle2,textErrorValidateSubTitle2_2);
				return false;
			}else{
				cleanFormElements("input","modalPlanServiceInputUploadPlanService");
			}
			
			if(vacio(data.download)){
				showErrorMessage("input","modalPlanServiceInputDownloadPlanService",textErrorValidateTitle3,textErrorValidateSubTitle1_3);
				return false;
			}else if(rango(data.download,"2-7")){
				showErrorMessage("input","modalPlanServiceInputDownloadPlanService",textErrorValidateTitle3,textErrorValidateSubTitle2_3);
				return false;
			}else{
				cleanFormElements("input","modalPlanServiceInputDownloadPlanService");
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
			});
			
			return result;
		}
		
		// 	true 	si se encuentra coincidencia
		//	false	si no se encuentra		
		function uniqueName(input,option){
	        var items = [];
	        var flag;
	        
	        var names=getNames("/techwizard/general/getPlan/");
	        
	        $.each(names.data, function(index,value) {
			    items.push(value.name.toLowerCase());
			});
	        
	        if(option=="add"){
				if(jQuery.inArray(input.toLowerCase(), items)!=-1){
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

    <div id="header">
        <!--    MENU    -->
        <?php include "../layouts/menu.php"; ?>
        <!--  END MENU    -->
    </div>

    <div id="content">

        <div id="sidebar">
            <!--    SIDEBAR    -->
            <?php 
            $sidebar=0;
            include "../layouts/sidebar.php"; ?>
            <!--  END SIDEBAR    -->
        </div>

        <div id="main">

            <?php include'planService.php'; ?>            
            
            <?php 
            
            if($permiso1[2]==0 && $permiso1[3]==0){
				
			}else{
				include'planService_Modal_PlanService.php';
			}
			
            ?>

        </div>        
    </div>

    <footer>
        <?php include'../includes/footer.php'; ?>
    </footer>

</div>
        

</body>
</html>
