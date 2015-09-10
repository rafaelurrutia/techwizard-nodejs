<?php include'../controller/checkTimeOut.php'; ?>
<!DOCTYPE html>
<html class="loading">

    <head>
        <title>TechWizard</title>

        <!--   INCLUDE METAS Y LIBRERIAS -->
        <?php include'../includes/head.php'; ?>
        <!--    FIN INCLUDE METAS Y LIBRERIAS -->

       <!--    LIBRESRIAS LOCALES  -->      
<!--        <script src="../js/test/angular/app.js"></script> -->
        <script src="../lib/metro/js/metro-dropdown.js"></script>
<!--        <script src="../js/test/jquery/modalResize.js"></script> -->
<!--        <script src="../js/testtest/jquery/validationElementsForm.js"></script> -->
<!--        <script src="../js/testtest/jquery/keypressed.js"></script> -->
		<script src="../js/default/keypress.js"></script>
<!--        <script src="http://cdn.datatables.net/1.10.0/js/jquery.dataTables.js"></script>	-->
<!--        <script src="http://cdn.datatables.net/plug-ins/28e7751dbec/api/fnReloadAjax.js"></script> -->
<!--        <script src="../js/default/detectBrowser.js"></script> -->
<!--        <script src="../js/test/jquery/tableTest.js"></script> -->
<!--        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script> -->

		<link rel="stylesheet" href="../css/modal.css">
        <link rel="stylesheet" href="../css/hint.css">
        <link rel="stylesheet" href="../css/navigationBar.css">
        <link rel="stylesheet" href="../css/table.css">

        <!--    FIN LIBRERIAS LOCALES   -->

        <style>

            div[class="table_body"] > div[class="table_head"] > button{
                border-radius:8px;
                -moz-border-radius: 8px;
                -webkit-border-radius: 8px;
            }

            .bottom{
                background-color: #FFF;
                height: 50px;
                margin: 5px;
            }

            .row_selected{
                background-color: #9FAFD1 !important; 
            }
            
            .messageErrorAccess{
            	font-size: 12px;
            	color: red;
            }
            
            .countdown{
            	font-size: 12px;
            }
            
            .inputHover{
            	background-color: #FAFFBD;
            	border-color: ;	#EDDB5C;
            }
            
            .inputLeave{
				background-color: #FFFFFF;
            	border-color: #D9D9D9;	
            }
        
        </style>
        <script type="text/javascript" language="JavaScript">
			
            $(function( ) {		

                $("#childShow").css("display","block");
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
                
               // alert($("div.config1,div.config").find("input[type='text']").length);
                var description=["descriptionUrlDownload","descriptionTimeoutDownload","descriptionUrlPing","descriptionCountPings","descriptionVuMeter","descriptionRadioTest","descriptionAceptTest"];             	
                	                
                
                $("input[type='text']").on({
                	// configSoftwareInputUrlDownload

                //	var index = $("div.config1 input").index($(this));
                	
                	

					focus: function() {
						var index = $("div.formElements").find("input[type='text']").index($(this));
						
						$(".descriptionBox > div").hide();
				    	$("."+description[index]).show();
				    	$(this).removeClass("inputLeave");
				    	$(this).addClass("inputHover");
				    	if(index==-1){
				    		$("."+description[5]).show();
				    	}
				  	}, 
				  	blur: function() {
				  		$(".descriptionBox > div").hide();
				  		$(this).removeClass("inputHover");
				  		$(this).addClass("inputLeave");
				  	}
				  	/*
				  	, 
				  	mouseenter: function() {
				  		$(".description > div").hide();
				    	$(".descriptionUrlDownload").show();
				    	$(this).removeClass("inputLeave");
				    	$(this).addClass("inputHover");
				  	}	, 
				  	mouseleave: function() {
				  		$(".description > div").hide();
						$(this).removeClass("inputHover");
				  		$(this).addClass("inputLeave");
				  	}
				  	*/
				});
				
                              
            });

        </script>
        
        <script type="text/javascript" language="JavaScript">

		var validate = function() {
			
			var data = {
				"urlDownload" 		: $("input[name='aplicationSettingsInputUrlDownload']").val().trim(),
				"timeoutDownload" 	: $("input[name='aplicationSettingsInputTimeoutDownload']").val().trim(),
				"urlPing" 			: $("input[name='aplicationSettingsInputUrlPing']").val().trim(),
				"countPing" 		: $("input[name='aplicationSettingsInputCountPing']").val().trim(),
				"vuMeter" 			: $("input[name='aplicationSettingsInputVuMeter']").val().trim(),
				"radioTest" 		: $("input[name='aplicationSettingsInputRadioTest']").val().trim(),
			};
			
			if(vacio(data.urlDownload)){
				showErrorMessage("input","aplicationSettingsInputUrlDownload","Error Url Download, ","el texto es requerido.");
				return false;
			}else if(rango(data.urlDownload,"5-30")){
				showErrorMessage("input","aplicationSettingsInputUrlDownload","Error Nombre Plan de Servicio, ","solo puedes ingresar letras y números entre un rango de 5 a 30 caracteres.");
				return false;
			}else{
				cleanFormElements("input","aplicationSettingsInputUrlDownload");
			}
			
			if(vacio(data.timeoutDownload)){
				showErrorMessage("input","aplicationSettingsInputTimeoutDownload","Error Time out Download, ","el texto es requerido.");
				return false;
			}else if(rango(data.timeoutDownload,"2-6")){
				showErrorMessage("input","aplicationSettingsInputTimeoutDownload","Error valor upload Plan de Servicio, ","solo puedes ingresar números entre un rango de 2 a 6 caracteres.");
				return false;
			}else{
				cleanFormElements("input","aplicationSettingsInputTimeoutDownload");
			}
			/*
			if(vacio(data.download)){
				showErrorMessage("input","modalTestInputDownloadTest","Error valor download Plan de Servicio, ","el texto es requerido.");
				return false;
			}else if(rango(data.download,"2-6")){
				showErrorMessage("input","modalTestInputDownloadTest","Error valor download Plan de Servicio, ","solo puedes ingresar números entre un rango de 2 a 6 caracteres.");
				return false;
			}else{
				cleanFormElements("input","modalTestInputDownloadTest");
			}
			
			return true;		
			*/
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
				$("input[name='"+input+"']").attr("placeholder", "Campo Requerido");
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
        	
        	<legend><i class="icon-laptop"></i><i class="icon-phone-2"></i><i class="icon-tablet"></i> Configuración de Aplicaciones</legend>
			
			<div class="formElements" style="width:510px; float: left">
							
				<div style="width:350px; margin-right: 10px; float: left;">
					<label>URL Download</label>
					<div class="input-control text" data-role="input-control">
						<input type="text" name="aplicationSettingsInputUrlDownload" placeholder="URL Download" autocomplete="off" autofocus />
						<button class="btn-clear" tabindex="-1"></button>
					</div>
				</div>
					
				<div style="width:150px; float: left;">
					<label>Time out Download</label>
					<div class="input-control text size1" data-role="input-control">
						<input type="text" name="aplicationSettingsInputUrlDownload" placeholder="">
						<button class="btn-clear" tabindex="-1"></button>
					</div><span style="margin-left: 10px;">Seg.</span>
				</div>
					
				<div style="width:350px; margin-right: 10px; float: left;">
					<label>URL Ping</label>
					<div class="input-control text" data-role="input-control">
						<input type="text" name="aplicationSettingsInputUrlDownload" placeholder="URL Ping">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
				</div>
					
				<div style="width:150px; float: left;">
					<label>Cantidad de Pings</label>
					<div class="input-control text size1" data-role="input-control">
						<input type="text" name="aplicationSettingsInputUrlDownload" placeholder="">
						<button class="btn-clear" tabindex="-1"></button>
					</div><span style="margin-left: 10px;">Veces</span>
				</div>
					
				<div style="width:190px; float: left;">
					<label>VU Meter</label>
					<div class="input-control text size1" data-role="input-control">
						<input type="text" name="aplicationSettingsInputUrlDownload" placeholder="">
						<button class="btn-clear" tabindex="-1"></button>
					</div><span style="margin-left: 10px;">%</span>	
				</div>
					
				<div style="width:190px; ">
					<label>Radio aceptación prueba</label>
					<div class="input-control text size1" data-role="input-control">
						<input type="text" name="aplicationSettingsInputUrlDownload" placeholder="">
						<button class="btn-clear" tabindex="-1"></button>
					</div><span style="margin-left: 10px;">%</span>	
				</div>
					
				<div style="width:150px; float: left;">
					<label>Aceptación prueba</label>
					<div class="input-control checkbox" data-role="input-control">
						<label>
							<input type="checkbox"  />
							<span class="check"></span> Nacional 
						</label>
							
						<label>
							<input type="checkbox"  />
							<span class="check"></span> Internacional 
						</label>
					</div>
				</div>
						
			</div>
			
			<div class="descriptionBox" style="width: 220px; margin-left: 10px; float: left">
			
				<div class="descriptionUrlDownload" style="display: none;">								
					<legend>URL Download</legend>
					Corresponde a la dirección web del archivo a descargar. 	
				</div>
				
				<div class="descriptionTimeoutDownload" style="display: none;">								
					<legend>Time out Download</legend>
					Corresponde al tiempo que se le asigna para realizar la descarga del archivo. 	
				</div>
				
				<div class="descriptionUrlPing" style="display: none;">								
					<legend>URL Ping</legend>
					Corresponde al tiempo que se le asigna para realizar un ping. 	
				</div>
				
				<div class="descriptionCountPings" style="display: none;">								
					<legend>Cantidad Pings</legend>
					Representa a la cantidad de pings que se realizan en una prueba. 	
				</div>
				
				<div class="descriptionVuMeter" style="display: none;">								
					<legend>% Aceptación VU Meter</legend>
					lala 	
				</div>
				
				<div class="descriptionRadioTest" style="display: none;">								
					<legend>Radio aceptación prueba</legend>
					Corresponde al tiempo que se le asigna para realizar la descarga del archivo. 	
				</div>
				
				<div class="descriptionAceptTest" style="display: none;">								
					<legend>aceptación prueba</legend>
					Corresponde al tiempo que se le asigna para realizar la descarga del archivo. 	
				</div>				
				
			</div>
			
			
			<div style="clear: both; float: left">
				<button class="danger" type="submit">Aplicar Cambios</button>
				<button class="danger" type="button">Limpiar</button>
				<button class="danger" type="button">Restaurar</button>
			</div>
        	<!--
        	<form>
        	<div class="config1" style="width: 250px; float: left; margin-top: 5px;">
				
			
						<legend>Datos Prueba</legend>
						
						<label>URL Download</label>
						<div class="input-control text" data-role="input-control">
							<input type="text" name="configSoftwareInputUrlDownload" placeholder="URL Download" autocomplete="off" autofocus />
							<button class="btn-clear" tabindex="-1"></button>
						</div>
												
						<label>Time out Download</label>
						<div class="input-control text" data-role="input-control">
							<input type="text" placeholder="type text">
							<button class="btn-clear" tabindex="-1"></button>
						</div>
						
						<label>URL Ping</label>
						<div class="input-control text" data-role="input-control">
							<input type="text" placeholder="type text">
							<button class="btn-clear" tabindex="-1"></button>
						</div>
						
						<label>Cantidad de Pings</label>
						<div class="input-control text" data-role="input-control">
							<input type="text" placeholder="type text">
							<button class="btn-clear" tabindex="-1"></button>
						</div>
						
						<label>VU Meter (%)</label>
						<div class="input-control text" data-role="input-control">
							<input type="text" placeholder="type text">
							<button class="btn-clear" tabindex="-1"></button>
						</div>		
				      		
        	</div>

			<div class="config" style="width: 250px; float: left; margin-left: 20px; margin-top: 5px;">
								
				<legend>Speed Test</legend>
						
				<label>Radio aceptación prueba (%)</label>
				<div class="input-control text" data-role="input-control">
					<input type="text" placeholder="type text">
					<button class="btn-clear" tabindex="-1"></button>
				</div>
						
				<label>Aceptación prueba</label>
				<div class="input-control checkbox" data-role="input-control">
					<label>
						<input type="checkbox" checked />
						<span class="check"></span> Nacional 
					</label>
					
					<label>
						<input type="checkbox" checked />
						<span class="check"></span> Internacional 
					</label>
				</div>
				<br />
				<button class="danger" type="submit">Aplicar Cambios</button>
				<button class="danger" type="button">Limpiar</button>
				<button class="danger" type="button">Restaurar</button>
				
				
				       		
        	</div>
	            </form>

		<div class="config" style="width: 300px; float: left; margin-left: 40px;">

<div class="description">
	
	<div class="descriptionUrlDownload" style="display: none;">								
	<legend>URL Download</legend>
	Corresponde a la dirección web del archivo a descargar. 	
	</div>
	
	<div class="descriptionTimeoutDownload" style="display: none;">								
	<legend>Time out Download</legend>
	Corresponde al tiempo que se le asigna para realizar la descarga del archivo. 	
	</div>
	
	<div class="descriptionUrlPing" style="display: none;">								
	<legend>URL Ping</legend>
	Corresponde al tiempo que se le asigna para realizar la descarga del archivo. 	
	</div>
	
	<div class="descriptionCountPings" style="display: none;">								
	<legend>Cantidad Pings</legend>
	Corresponde al tiempo que se le asigna para realizar la descarga del archivo. 	
	</div>
	
	<div class="descriptionVuMeter" style="display: none;">								
	<legend>VU Meter(%)</legend>
	Corresponde al tiempo que se le asigna para realizar la descarga del archivo. 	
	</div>
	
	<div class="descriptionRadioTest" style="display: none;">								
	<legend>Radio aceptación prueba</legend>
	Corresponde al tiempo que se le asigna para realizar la descarga del archivo. 	
	</div>
	
</div>	
        	</div>  
	             -->     
        </div>
                
    </div>

    <footer>
        <?php include'../includes/footer.php'; ?>
    </footer>

</div>
        

</body>
</html>
