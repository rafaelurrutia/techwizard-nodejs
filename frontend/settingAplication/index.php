<?php

include '../controller/checkTimeOut.php';
$permiso = split("\|", $_SESSION['access']);
$permiso1 = split("\,", $permiso[10]);

if ($permiso1[1] == 0) {
	header('Location: ../errortw/');
}

$_SESSION['place'] = 5;
$_SESSION['placeNavigationBar'] = 1;

$version=1;

?>
<!DOCTYPE html>
<html class="loading">

	<head>
		<title>TechWizard</title>

		<!--   INCLUDE METAS Y LIBRERIAS -->
		<?php
			include '../includes/head.php';
 ?>
		<!--    FIN INCLUDE METAS Y LIBRERIAS -->

		<!--    LIBRESRIAS LOCALES  -->
		<script src="../js/settingAplication/angular/app.js"></script>	
		<script src="../lib/metro/js/metro-dropdown.js"></script>
		<script src="../js/default/keypress.js"></script>
<?php if($version==1){ ?> 
		<script src="../js/settingAplication/jquery/settingAplication.js"></script>
		<script src="../js/settingAplication/jquery/validate.js"></script>
<?php }else if($version==2){ ?>
		<script src="../js/settingAplication/jquery/settingAplicationv2.js"></script>
		<script src="../js/settingAplication/jquery/validatev2.js"></script>
<?php } ?>

		<link rel="stylesheet" href="<?php echo "../css/" . $_SERVER["SERVER_NAME"] . "/settingAplication.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/" . $_SERVER["SERVER_NAME"] . "/navigationBar.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/" . $_SERVER["SERVER_NAME"] . "/sideBar.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/" . $_SERVER["SERVER_NAME"] . "/hint.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/" . $_SERVER["SERVER_NAME"] . "/table.css"; ?>">
		<style>

            .parentValueText{
                background-color: #FA6800;
            }
            
  
        </style>
		<!--    FIN LIBRERIAS LOCALES   -->

		<script type="text/javascript" language="JavaScript">

			// 	true 	si s vacio
			//	false	si no es requerido
			function vacio(input) {
				if (input.length == 0) {
					return true;
				} else {
					return false;
				}
			}

			// 	true 	si el rango no cumple con el rango establecido
			//	false	si el texto cumple con el rango establecido
			function rango(input, range) {
				range = range.split('-');
				if ((input.length >= range[0] && input.length <= range[1]) && range != "") {
					return false;
				} else {
					return true;
				}
			}
			
			// 	true 	si el rango no cumple con el rango establecido
			//	false	si el texto cumple con el rango establecido
			function rangoEmptyField(input, range) {
				range = range.split('-');
				if(input.length > 0){
					if (input.length >= range[0] && input.length <= range[1]) {
						return false;
					} else {
						return true;
					}
				}
				
			}

			function rangoNumero(input, min, max) {
				var input1 = input.length;
//				console.log(input1 + " " + min + " " + max);

				if (input > max) {
//					console.log(" 1");
					return true;
				} else if (input < min) {
//					console.log(" 2");
					return true;
				} else {
//					console.log(" 3");
					return false;
				}
			}

			function cleanFormElements(type, input) {

				if (type == "input") {
					$("input[name='" + input + "']").css("background-color", "#E2F7D8");
					$("input[name='" + input + "']").css("border-color", "#9FDE9C");
					$("input[name='" + input + "']").parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
				} else if (type == "select") {
					$("select[name='" + input + "']").css("background-color", "#E2F7D8");
					$("select[name='" + input + "']").css("border-color", "#9FDE9C");
					$("select[name='" + input + "']").parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
				}

			}

			function showErrorMessage(type, input, titulo, mensaje) {

				$('#main_ValidationMessage').html(titulo + ' ' + mensaje);

				if (type == "input") {
					//	$("input[name='"+input+"']").attr("placeholder", "Campo Requerido");
					$("input[name='" + input + "']").css("background-color", "#F5CECE");
					$("input[name='" + input + "']").css("border-color", "red");
					$("input[name='" + input + "']").parent().prev().css("color", "red");
				} else if (type == "select") {
					$("select[name='" + input + "']").css("background-color", "#F5CECE");
					$("select[name='" + input + "']").css("border-color", "red");
					$("select[name='" + input + "']").parent().prev().css("color", "red");
				}

			}

		</script>

	</head>

	<body class="metro" ng-app ng-controller="mainController">
		<div id="wrapper">

			<div id="header">
				<!--    MENU    -->
				<?php
					include "../layouts/menu.php";
 ?>
				<!--  END MENU    -->
			</div>

			<div id="content">

				<div id="sidebar">
					<!--    SIDEBAR    -->
					<?php
					$sidebar = 0;
					include "../layouts/sidebar.php";
 ?>
					<!--  END SIDEBAR    -->
				</div>

				<div id="main">

					<?php 
					
					if($version==1){
						include 'settingAplication.php'; 
					}else if($version==2){
						include 'settingAplicationv2.php'; 	
					}
					
					?>
					
				</div>

			</div>

			<footer>
				<?php
				include '../includes/footer.php';
 ?>
			</footer>

		</div>

	</body>
</html>