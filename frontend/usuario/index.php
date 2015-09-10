<?php

include '../controller/checkTimeOut.php';
$permiso = split("\|", $_SESSION['access']);
$permiso1 = split("\,", $permiso[3]);

if ($permiso1[1] == 0) {
	header('Location: ../errortw/');
}

$_SESSION['place'] = 4;
$_SESSION['placeNavigationBar'] = 1;
?>
<!DOCTYPE html>
<html class="loading">
	<head>

		<title>TechWizard</title>

		<!-- INCLUDE METAS Y LIBRERIAS -->
		<?php
		include '../includes/head.php';
		?>
		<!-- FIN INCLUDE METAS Y LIBRERIAS -->

		<!-- LIBRESRIAS LOCALES -->
		<script src="../js/user/angular/app.js"></script>
		<script src="../lib/metro/js/metro-dropdown.js"></script>
		<script src="../js/user/jquery/modalResize.js"></script>
		<script src="../js/user/jquery/keypress.js"></script>
		<script src="http://cdn.datatables.net/1.10.1/js/jquery.dataTables.min.js" type="text/javascript"></script>
		<script src="../js/user/jquery/tableUser.js"></script>

		<link rel="stylesheet" href="<?php echo "../css/" . $_SERVER["SERVER_NAME"] . "/navigationBar.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/" . $_SERVER["SERVER_NAME"] . "/sideBar.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/" . $_SERVER["SERVER_NAME"] . "/hint.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/" . $_SERVER["SERVER_NAME"] . "/table.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/" . $_SERVER["SERVER_NAME"] . "/modal.css"; ?>">

		<!-- FIN LIBRERIAS LOCALES -->
		<style>			
			#main{
				margin-bottom:25px;
			}
		</style>
		<script type="text/javascript" language="JavaScript">

			var getAccess = function(access) {
var location = window.location.hash;

switch(access) {
case 'add':
return <?php echo $permiso1[2]; ?>
	;
	break;
	case 'update':
	return
<?php echo $permiso1[3]; ?>
	;
	break;
	case 'delete':
	return
<?php echo $permiso1[4]; ?>
	;
	break;
	}

	};

	$(function() {
		if (getAccess("add") == 0 && location != "") {
			$("#UsersModalUser").hide();
		}

		// FUNCION PARA HABILITAR USO DE LOS BOTONES
		$.getJSON("../json/user/user_Modal_User.json", function(data) {
			$.each(data.elements, function(i, item) {
				if (item.htmlFormElementType == 'button') {
					$.each(item.htmlFormElementTypeButtonActive, function(i, subItem) {
						$("button[name=" + subItem.buttonElementName + "]").click(function() {
							$("button[name='userModalUserButtonActive']").val(0);
							$(this).hide();
							$(this).next().show();
						});
					});

					$.each(item.htmlFormElementTypeButtonInactive, function(i, subItem) {
						$("button[name=" + subItem.buttonElementName + "]").click(function() {
							$("button[name='userModalUserButtonActive']").val(1);
							$(this).hide();
							$(this).prev().show();
						});
					});
				}
			});
		});
		// END GETJSON

	});

	var Fn = {
		validaRut : function(rutCompleto) {
			if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto))
				return false;
			var tmp = rutCompleto.split('-');
			if (tmp[1] == 'K')
				tmp[1] = 'k';
			return (Fn.dv(tmp[0])) == tmp[1];
		},
		dv : function(T) {
			var M = 0, S = 1;
			for (; T; T = Math.floor(T / 10))
				S = (S + T % 10 * (9 - M++ % 6)) % 11;
			return S ? S - 1 : 'k';
		}
	}

	function validateUserInputPassword(data_password, textErrorValidateTitle5, textErrorValidateSubTitle1_5, textErrorValidateSubTitle2_5) {
		if (vacio(data_password)) {
			showErrorMessage("input", "modalUserInputPasswordUser", textErrorValidateTitle5, textErrorValidateSubTitle1_5);
			return false;
		} else if (rango(data_password, "6-10")) {
			showErrorMessage("input", "modalUserInputPasswordUser", textErrorValidateTitle5, textErrorValidateSubTitle2_5);
			return false;
		} else if (!(stringHasUpperCase(data_password) && stringHasLowerCase(data_password) && stringHasNumber(data_password) && stringHasSpecialCharacter(data_password))) {
			showErrorMessage("input", "modalUserInputPasswordUser", textErrorValidateTitle5, " debe ingresar al menos, una letra mayúscula, otra minúscula, un número y un carácter especial");
			return false;
		} else {
			cleanFormElements("input", "modalUserInputPasswordUser");
			return true;
		}
	}

	var validate = function(option) {

		var data = {
			"group" : $("select[name='modalUserSelectGroupUser']").val(),
			"username" : $("input[name='modalUserInputUsernameUser']").val().trim(),
			"name" : $("input[name='modalUserInputNameUser']").val().trim(),
			"lastName" : $("input[name='modalUserInputLastNameUser']").val().trim(),
			"password" : $("input[name='modalUserInputPasswordUser']").val(),
			"confirmPassword" : $("input[name='modalUserInputConfirmPasswordUser']").val(),
			"email" : $("input[name='modalUserInputEmailUser']").val().trim(),
			"phone" : $("input[name='modalUserInputPhoneUser']").val().trim(),
			"active" : ($("button[name='userModalUserButtonActive']:visible").length) ? "true" : "false"
		};

		if (vacio(data.group)) {
			showErrorMessage("select", "modalUserSelectGroupUser", textErrorValidateTitle1, textErrorValidateSubTitle1_1);
			return false;
		} else {
			cleanFormElements("select", "modalUserSelectGroupUser");
		}
		//
		var message1, message2;
		if (data.group == "String") {
			message1 = "Error username, ";
			message2 = "el texto es requerido.";
		} else if (data.group == "Numérico") {
			message1 = "Error username, ";
			message2 = "el texto es requerido.";
		} else if (data.group == "Rut") {
			message1 = "Error rut, ";
			message2 = "el texto es requerido.";
		} else {
			message1 = "Error username, ";
			message2 = "el texto es requerido.";
		}

		if (vacio(data.username)) {
			showErrorMessage("input", "modalUserInputUsernameUser", message1, textErrorValidateSubTitle1_2);
			return false;
		} else if (data.group == "String") {
			if (rango(data.username, "4-15")) {
				showErrorMessage("input", "modalUserInputUsernameUser", textErrorValidateTitle2, textErrorValidateSubTitle2_2);
				return false;
			} else if (uniqueName(data.username, option)) {
				showErrorMessage("input", "modalUserInputUsernameUser", textErrorValidateTitle2, textErrorValidateSubTitleUsuario);
				return false;
			} else {
				cleanFormElements("input", "modalUserInputUsernameUser");
			}
		} else if (data.group == "Numerico") {
			if (rango(data.username, "4-15")) {
				showErrorMessage("input", "modalUserInputUsernameUser", textErrorValidateTitle2, textErrorValidateSubTitle3_2);
				return false;
			} else if (uniqueName(data.username, option)) {
				showErrorMessage("input", "modalUserInputUsernameUser", textErrorValidateTitle2, textErrorValidateSubTitleUsuario);
				return false;
			} else {
				cleanFormElements("input", "modalUserInputUsernameUser");
			}
		} else if (data.group == "Rut") {
			if (!Fn.validaRut(data.username)) {
				showErrorMessage("input", "modalUserInputUsernameUser", message1, textErrorValidateSubTitle4_2);
				return false;
			} else if (uniqueName(data.username, option)) {
				showErrorMessage("input", "modalUserInputUsernameUser", textErrorValidateTitle2, textErrorValidateSubTitleUsuario);
				return false;
			} else {
				cleanFormElements("input", "modalUserInputUsernameUser");
			}
		} else {
			cleanFormElements("input", "modalUserInputUsernameUser");
		}
		//
		if (vacio(data.name)) {
			showErrorMessage("input", "modalUserInputNameUser", textErrorValidateTitle3, textErrorValidateSubTitle1_3);
			return false;
		} else if (rango(data.name, "3-20")) {
			showErrorMessage("input", "modalUserInputNameUser", textErrorValidateTitle3, textErrorValidateSubTitle2_3);
			return false;
		} else {
			cleanFormElements("input", "modalUserInputNameUser");
		}
		//
		if (vacio(data.lastName)) {
			showErrorMessage("input", "modalUserInputLastNameUser", textErrorValidateTitle4, textErrorValidateSubTitle1_4);
			return false;
		} else if (rango(data.lastName, "3-20")) {
			showErrorMessage("input", "modalUserInputLastNameUser", textErrorValidateTitle4, textErrorValidateSubTitle2_4);
			return false;
		} else {
			cleanFormElements("input", "modalUserInputLastNameUser");
		}
		//

		if (validateUserInputPassword(data.password, textErrorValidateTitle5, textErrorValidateSubTitle1_5, textErrorValidateSubTitle2_5)) {
			cleanFormElements("input", "modalUserInputConfirmUser");
			//				return true;
		} else {
			return false;
		}

		if (vacio(data.confirmPassword)) {
			showErrorMessage("input", "modalUserInputConfirmPasswordUser", textErrorValidateTitle6, textErrorValidateSubTitle1_6);
			return false;
		} else if (data.confirmPassword != data.password) {
			showErrorMessage("input", "modalUserInputConfirmPasswordUser", textErrorValidateTitle6, textErrorValidateSubTitle2_6);
			return false;
		} else {
			cleanFormElements("input", "modalUserInputConfirmPasswordUser");
			return true;
		}

		return true;
	};

	// 	true 	si s vacio
	//	false	si no es requerido
	function vacio(input) {
		if (input.length == 0) {
			return true;
		} else {
			return false;
		}
	}

	function getNames(url) {

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
	function uniqueName(input, option) {
		var items = [];
		var flag;

		var names = getNames(url.read);

		$.each(names.data, function(index, value) {
			items.push(value.username);
		});

		//	        console.log(option+" pase x aca");

		if (option == "add") {

			if (jQuery.inArray(input, items) != -1) {
				flag = true;
			} else {
				flag = false;
			}

		} else if (option == "update") {

		}
		return flag;

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

	function stringHasLowerCase(input) {
		var regex = /[a-z ñ]/;
		return regex.test(input);
	}

	function stringHasUpperCase(input) {
		var regex = /[A-Z Ñ]/;
		return regex.test(input);
	}

	function stringHasNumber(input) {
		var regex = /\d/g;
		return regex.test(input);
	}

	function stringHasSpecialCharacter(input) {
		var regex = /[^a-zA-Z0-9 ñÑ]/;
		return regex.test(input);
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

		$('.modalMessageError').html(titulo + ' ' + mensaje);

		if (type == "input") {
			$("input[name='" + input + "']").attr("placeholder", textFieldRequired);
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
				<!-- MENU --> <?php
				include "../layouts/menu.php";
				?>
				<!-- END MENU -->
			</div>
			<div id="content">
				<div id="sidebar">
					<!-- SIDEBAR -->
					<?php
					//	$c = 1;
					$sidebar = 1;
					include "../layouts/sidebar.php";
					?>
					<!-- END SIDEBAR -->
				</div>
				<div id="main">

					<?php
					include 'user.php';
					?>

					<?php

					if ($permiso1[2] == 0 && $permiso1[3] == 0) {

					} else {
						include 'user_Modal_User.php';
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