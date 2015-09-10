<?php include'../controller/checkTimeOut.php'; 
        	 	
$permiso = split ("\|", $_SESSION['access']);
$permiso1 = split ("\,", $permiso[2]);

if($permiso1[1]==0){
	header('Location: ../errortw/');	
}

$_SESSION['place']=3;
$_SESSION['placeNavigationBar']=1;

?>
<!DOCTYPE html>
<html class="loading">

    <head>
        <title>Techwizard</title>

        <!--   INCLUDE METAS Y LIBRERIAS -->
        <?php include'../includes/head.php'; ?>
        <!--    FIN INCLUDE METAS Y LIBRERIAS -->

       <!--    LIBRESRIAS LOCALES  -->      
        <script src="../js/group/angular/app.js"></script>
        <script src="../lib/metro/js/metro-dropdown.js"></script>
<!--        <script src="../js/group/jquery/modalResize.js"></script> -->
		<script src="../js/group/jquery/keypress.js"></script>  
<!--        <script src="../js/default/detectBrowser.js"></script> -->
        <script src="../js/group/jquery/tableGroup.js"></script>
<!--        
        <script src="../lib/metro/js/jquery.dataTables.js" type="text/javascript"></script>
-->
        
        <script src="http://cdn.datatables.net/1.10.1/js/jquery.dataTables.min.js" type="text/javascript"></script>

		<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/modal.css"; ?>">
        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/hint.css"; ?>">
        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/navigationBar.css"; ?>">
        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/sideBar.css"; ?>">
        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/table.css"; ?>">

        <!--    FIN LIBRERIAS LOCALES   -->

        <style>
			.modalaccessgroup{
				width: 840px;
				height: 480px;
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
            
           /* permisos opciones administracion	*/
            .optionManager > div{
            	margin-bottom: 15px;
            	padding: 0.5px 10px;
            }
        
        	.optionManager > div:hover{
            	background-color: #FA6800;
            }
            
            .reports:hover, .manager:hover, .software:hover{
            	background-color: #FA6800;
            }
            
            .reports:active, .manager:active, .software:active{
            	background-color: #FA6800;
            }
            /*
        	.optionManager > div:after {
			    background-color: #FA6800;
			    content: '';
			}
			*/
			.optionGraphics > div{
            	margin-bottom: 15px;
            	padding: 0.5px 10px;
            }
        
        	.optionGraphics > div:hover{
            	background-color: #FA6800;
            }
        </style>
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
			.nivel1{
				margin-left: 5px;
				margin-bottom: 15px;
				font-size: 14px;	
			}   
			.nivel2{
				margin-left: 10px;
				font-size: 12px;
				
			}
			.nivel3{
				margin-left: 15px;
				font-size: 12px;
				display:none;
			}     	
			.nivel4{
				margin-left: 20px;
				font-size: 12px;
				display:none;
			}
        </style>
        <script>	/*	js modal access		*/
			
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
				    case 'privileges':
						return <?php echo $permiso1[5]; ?>;
				        break;
				}
        	 	
			};	
			
        	 $(function( ) {
        	 	var styles = {
			      width : "1840px",
			      height: "480px"
			    };
			    
			//	$( "#GroupsModalAccessGroup div:first-child" ).css(styles);
				$( "#accessGroup" ).css(styles);
        	 	
				if(getAccess("add")==0 && location!=""){
        			$("#GroupsModalGroup").hide(); 	
        	 	}
        	 	
        	 	$(".reports, .manager, .software, div.optionReports div, div.optionManager div, div.optionSoftware div").hover(function() {
				    $(this).css('cursor', 'pointer');
				});
				
				$("div.optionReports div, div.optionSoftware div").click(function() {
					var rowCount = $('div.optionManager div').length;
				});
				
				$("div.optionManager div").click(function() {
					var optionClass=["Group","User","", "PlanService","Room","CPEType","CPEModel","ExtensorType","ExtensorModel","ApplicationSettings"];
					var index = $("div.optionManager div").index($(this));

					$('.box3 > div').hide();					
					$(".section"+optionClass[index]).show();
				
				});
				
				$("div.optionGraphics div").click(function() {
					var optionClass=["CertifiedHomeCoverage","CertifiedHighPropagation","CertifiedTime","Speedtest"];
					var index = $("div.optionGraphics div").index($(this))-1;

					$('.box3 > div').hide();					
					$(".section"+optionClass[index]).show();
				
				});
        	 	
        	 	$('.box2 input, .box3 input').change(function() {
	        	 	var totalBoxCheckbox = $('.box2 input:checkbox, .box3 input:checkbox').length;
	        	 	var totalBoxChecked = $('.box2 input:checkbox:checked, .box3 input:checkbox:checked').length;
	        	 	var totalBoxNotChecked=totalBoxCheckbox-totalBoxChecked;
	        	 
	        	    $("#checkboxChecked").text(totalBoxChecked);
	        	    $("#checkboxNotChecked").text(totalBoxNotChecked);
					
					if($(this).is(':checked')){
						$(this).next().next().removeClass();
						$(this).next().next().addClass("padlock fg-green icon-unlocked");
	        	   	}else{
	        	   		$(this).next().next().removeClass();
						$(this).next().next().addClass("padlock fg-red icon-locked");
	        	   	}
	        	   
	        	    $("#disabledAllAccess").attr('checked',false);
	        	    $("#enabledAllAccess").attr('checked',false);
	        	    
	        	    $("#disabledAllAccess").attr('disabled',false);
	        	    $("#enabledAllAccess").attr('disabled',false);
			    });
			    
			    
			    $("#enabledAllAccess").change(function() {
			    	if($(this).is(':checked')){
			    		$("#disabledAllAccess").attr('disabled',true);
			    		$("#disabledAllAccess").off('click');
					    
					    $(".box2, .box3").find("input:checkbox:not(:checked)").prop("checked", true);
			    		$(".box2, .box3").find("i.padlock").removeClass().addClass("padlock fg-green icon-unlocked");
			    
			    		var totalBoxCheckbox = $('.box2 input:checkbox, .box3 input:checkbox').length;
		        	 	var totalBoxChecked = $('.box2 input:checkbox:checked, .box3 input:checkbox:checked').length;
		        	 	var totalBoxNotChecked=totalBoxCheckbox-totalBoxChecked;
		        	 
		        	    $("#checkboxChecked").text(totalBoxChecked);
		        	    $("#checkboxNotChecked").text(totalBoxNotChecked);
			    	}else{
			    		$("#disabledAllAccess").attr('disabled',false);
			    		$("#disabledAllAccess").on('click');
			    	}	
			    });
			    
			    $("#disabledAllAccess").change(function() {
			    	if($(this).is(':checked')){
			    		$("#enabledAllAccess").attr('disabled',true);
			    		$("#enabledAllAccess").off('click');
			    		
			    		$(".box2, .box3").find("input:checkbox:checked").attr("checked", false);			    		
			    		$(".box2, .box3").find("i.padlock").removeClass().addClass("padlock fg-red icon-locked");
			    		
			    		var totalBoxCheckbox = $('.box2 input:checkbox, .box3 input:checkbox').length;
		        	 	var totalBoxChecked = $('.box2 input:checkbox:checked, .box3 input:checkbox:checked').length;
		        	 	var totalBoxNotChecked=totalBoxCheckbox-totalBoxChecked;
		        	 	
		        	 	$("#checkboxChecked").text(totalBoxChecked);
		        	    $("#checkboxNotChecked").text(totalBoxNotChecked);
			    	}else{
			    		$("#enabledAllAccess").attr('disabled',false);
			    	}
			    });
				
				$("div.optionManager > div").on("click", function () {
					$(this).children(':eq(1)').show();	
				});

        	 	$(".reports").on("click", function () {
        	 		$(".optionManager").hide();
        	 		$(".optionSoftware").hide();
        	 		$('.box3 > div').hide();
        	 		$(".optionReports").show("slow");
        	 		
        	 		$(".reports").children(':eq(1)').show();
        	 		$(".manager").children(':eq(1)').hide();
        	 		$(".software").children(':eq(1)').hide();
        	 	});
        	 	
        	 	$(".manager").on("click", function () {
        	 		$(".optionReports").hide();
        	 		$(".optionSoftware").hide();
        	 		$(".optionManager").show("slow");
        	 		
        	 		$(".reports").children(':eq(1)').hide();
        	 		$(".manager").children(':eq(1)').show();
        	 		$(".software").children(':eq(1)').hide();
        	 	});
        	 	
        	 	$(".software").on("click", function () {
        	 		$(".optionReports").hide();
        	 		$(".optionManager").hide();
        	 		$('.box3 > div').hide();
        	 		$(".optionSoftware").show("slow");
        	 		
        	 		$(".reports").children(':eq(1)').hide();
        	 		$(".manager").children(':eq(1)').hide();
        	 		$(".software").children(':eq(1)').show();
        	 	});
        	 				
        	 	$("div.nivel1").on("click", function () {
        	 	
					$("div.nivel2").toggle( "slow", function() {
						if($(".nivel1").find("i").hasClass("icon-arrow-right-4")){
							$(".nivel1").children(':eq(0)').removeClass().addClass("icon-arrow-down-4");
						}else{
							$(".nivel1").children(':eq(0)').removeClass().addClass("icon-arrow-right-4");
						}
					});
				
        	 	});

        	 	$("button[name='GroupsModalButtonCloseModalGroup']").on("click", function () {

					$(".box2, .box3").find("input:checkbox:checked").attr("checked", false);
					$(".box2, .box3").find("i.padlock").removeClass().addClass("padlock fg-red icon-locked");
					
					$(".sectionSoftware").find("input:checkbox:checked").attr("checked", false);
					$(".sectionSoftware").find("i.padlock").removeClass().addClass("padlock fg-red icon-locked");
					
					var totalBoxCheckbox = $('.box2 input:checkbox, .box3 input:checkbox').length;
					var totalBoxChecked = $('.box2 input:checkbox:checked, .box3 input:checkbox:checked').length;						
					var totalBoxNotChecked = $('.box2 input:checkbox:not(:checked), .box3 input:checkbox:not(:checked)').length;

					$("#checkboxChecked").text(totalBoxChecked);
					$("#checkboxNotChecked").text(totalBoxNotChecked);
					
					$("#disabledAllAccess").attr('checked',false);
	        	    $("#enabledAllAccess").attr('checked',false);
	        	    
	        	    $("#disabledAllAccess").attr('disabled',false);
	        	    $("#enabledAllAccess").attr('disabled',false);
					
				});
				
				$("button[name='GroupsModalButtonRestoreGroup']").on("click", function () {

				//	var restoreAccess="sectionDashboard,0|sectionGeneralListCertificate,1|sectionGroup,1,0,1,1,1|sectionUser,1,1,0,1|sectionPlanService,1,1,1,0|sectionRoom,0,1,1,1|sectionCPEType,1,0,1,1|sectionCPEModel,1,1,0,1|sectionExtensorType,1,1,1,0|sectionExtensorModel,0,1,1,1|sectionApplicationSettings,1,0|sectionSoftware,0";
					var restoreAccess="<?php echo $_SESSION['access'] ?>";				
					var sections = restoreAccess.split('|');
					var options=[];
			    	
			    	$("#enabledAllAccess").attr('disabled',false);
		    		$("#disabledAllAccess").attr('disabled',false);
		    		
		    		$("#disabledAllAccess").attr('checked',false);
	        	    $("#enabledAllAccess").attr('checked',false);
			    	
			    	var totalBoxCheckbox = $('.box2 input:checkbox, .box3 input:checkbox').length;
					var totalBoxChecked = $('.box2 input:checkbox:checked, .box3 input:checkbox:checked').length;						
					var totalBoxNotChecked = $('.box2 input:checkbox:not(:checked), .box3 input:checkbox:not(:checked)').length;
					
					$("#checkboxChecked").text(totalBoxChecked);
					$("#checkboxNotChecked").text(totalBoxNotChecked);
												
					$.each(sections, function( index, value ) {

						options = sections[index].split(',');	
												
						if(index==0 || index==1){
							$("div.box2 > div.optionReports > div."+options[0]).each(function () {
								$(this).find("input:checkbox").each(function (index) {	
									if(options[index+1]==1 && ($(this).is(':not(:checked)'))){
										$(this).prop('checked',true);	//	no funciona con attr pero si con prop
										$(this).next().next().removeClass().addClass("padlock fg-green icon-unlocked");
									}else if(options[index+1]==1 && ($(this).next().next().hasClass("fg-red"))){
										$(this).prop('checked',true);
										$(this).next().next().removeClass().addClass("padlock fg-green icon-unlocked");
									}else if(options[index+1]==0){
										$(this).attr('checked',false);
										$(this).next().next().removeClass().addClass("padlock fg-red icon-locked");
									}
								});
							});
						}else if(index>=2 && index <11){
							$("div.box3 > div."+options[0]).each(function () {
								$(this).find("input:checkbox").each(function (index) {
									if(options[index+1]==1 && ($(this).is(':not(:checked)'))){
										$(this).prop('checked',true);
										$(this).next().next().removeClass().addClass("padlock fg-green icon-unlocked");					
									}else if(options[index+1]==1 && ($(this).next().next().hasClass("fg-red"))){
										$(this).prop('checked',true);
										$(this).next().next().removeClass().addClass("padlock fg-green icon-unlocked");
									}else if(options[index+1]==0){
										$(this).prop('checked',false);
										$(this).next().next().removeClass().addClass("padlock fg-red icon-locked");
									}
								});
							});
						}else if(index==11){
							$("div.box2 > div.optionSoftware").each(function () {
								$(this).find("input:checkbox").each(function (index) {
									if(options[index+1]==1 && ($(this).is(':not(:checked)'))){
										$(this).attr('checked',true);
										$(this).next().next().removeClass().addClass("padlock fg-green icon-unlocked");
									}else if(options[index+1]==1 && ($(this).next().next().hasClass("fg-red"))){
										$(this).prop('checked',true);
										$(this).next().next().removeClass().addClass("padlock fg-green icon-unlocked");
									}else if(options[index+1]==0){
										$(this).attr('checked',false);
										$(this).next().next().removeClass().addClass("padlock fg-red icon-locked");
									}
								});
							});
						}
						
					});
					
					var totalBoxCheckbox = $('.box2 input:checkbox, .box3 input:checkbox').length;
					var totalBoxChecked = $('.box2 input:checkbox:checked, .box3 input:checkbox:checked').length;						
					var totalBoxNotChecked = $('.box2 input:checkbox:not(:checked), .box3 input:checkbox:not(:checked)').length;
					
					$("#checkboxChecked").text(totalBoxChecked);
					$("#checkboxNotChecked").text(totalBoxNotChecked);
					
				});
				
				 
        	 		
        	 });
        	 
        	 

        </script>
        <script type="text/javascript" language="JavaScript">
			
            $(function( ) {		

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
                    $(".modalMain select").css("border","1px solid "+item);  
                });
*/                
/*
                //$("#childShow").show();
                $("#childShow").css("display","block");
                 $.each($("nav ul li"), function( i, item ) {
                    // 1=grupos 2=usuarios 3=provisiones
                    if(i==1){
                        $(this).children(":first").css("background-color","rgb(154, 22, 22)");
                    }
                 });
*/
/*
                 $.each($("div div ul a"), function( i, item ) {
                    // 0=reportes 1=administracion
                    if(i==1){
                        $(this).css("background-color","rgb(154, 22, 22)");
                    }        
                });
  */              
                // FUNCION PARA HABILITAR USO DE LOS BOTONES
                $.getJSON( "../json/group/group_Modal_Group.json", function(data){
			        $.each( data.elements, function( i, item ) {
			            if(item.htmlFormElementType=='button'){
			                $.each( item.htmlFormElementTypeButtonActive, function( i, subItem ) {
			                    $("button[name="+subItem.buttonElementName+"]").click(function() {
			                    	$("button[name='groupModalGroupButtonActive']").val(0);
			                        $(this).hide();
			                        $(this).next().show();
			                    });                    
			                });
			
			                $.each(item.htmlFormElementTypeButtonInactive, function( i, subItem ) {
			                    $("button[name="+subItem.buttonElementName+"]").click(function() {
			                        $("button[name='groupModalGroupButtonActive']").val(1);
			                        $(this).hide();
			                        $(this).prev().show();
			                    });                    
			                });
			            }
			        });  
			    });	// END GETJSON
			                    
            });	// END DOCUMENT READY

        </script>
        
        <script type="text/javascript" language="JavaScript">
			
		var validate = function(option) {
			
			var data = {
				"name" 		: $("input[name='modalGroupInputNameGroup']").val().trim(),
				"typeId" 	: $("select[name='modalGroupSelectIdTypeGroup']").val(),
				"active" 	: ($("button[name='groupModalGroupButtonActive']:visible").length)? "true":"false"					
			};
			
			if(vacio(data.name)){
				showErrorMessage("input","modalGroupInputNameGroup",textErrorValidateTitle1,textErrorValidateSubTitle1_1);
				return false;
			}else if(rango(data.name,"3-30")){
				showErrorMessage("input","modalGroupInputNameGroup",textErrorValidateTitle1,textErrorValidateSubTitle2_1);
				return false;
			}else if(uniqueName(data.name,option)){
				showErrorMessage("input","modalGroupInputNameGroup",textErrorValidateTitle1,textErrorValidateSubTitle3_1);
				return false;
			}else{
				cleanFormElements("input","modalGroupInputNameGroup");
			}
			
			if(vacio(data.typeId)){
				showErrorMessage("select","modalGroupSelectIdTypeGroup",textErrorValidateTitle2,textErrorValidateSubTitle1_2);
				return false;
			}else{
				cleanFormElements("select","modalGroupSelectIdTypeGroup");
			}
			
			return true;		
		};
		
		// 	true 	si es vacio
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
/*
	        var items = [];
	        
	        $.getJSON("/techwizard/general/getGroup/", function( data ) {				
			  	$.each( data.data, function(index,value) {
			    	items.push(value.name);
			  	});			  	
	        });
	       
			return items;	        
	    }
*/	    
	    // 	true 	si se encuentra coincidencia
		//	false	si no se encuentra		
		function uniqueName(input,option){
	        var items = [];
	        var flag;
	        
	        var names=getNames(url.read);
	        
	        $.each(names.data, function(index,value) {
			    items.push(value.name);
			});
	        
	        if(option=="add"){
				if(jQuery.inArray(input, items)!=-1){
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

            <?php include'group.php'; ?>            
            <?php 
            
            if($permiso1[2]==0 && $permiso1[3]==0 && $permiso1[5]==0){
				
			}else{
				include'group_Modal_Group.php';
			}
             
            ?>
            
            <?php // include'group_Modal_Group_Access.php'; ?>

        </div>        
    </div>

    <footer>
        <?php include'../includes/footer.php'; ?>
    </footer>

</div>
        

</body>
</html>
