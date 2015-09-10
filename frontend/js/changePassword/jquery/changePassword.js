
var url = {
	"update" 	: "/techwizard/changepassword/",
};

var textError,
	textErrorMessageFind,
	textErrorMessageDelete,
	textErrorMessageAdd,
	textErrorMessageUpdate,
	textSuccessMessageDelete,
	textSuccessMessageAdd,
	textSuccessMessageUpdate,
	nameLowercase,
	nameUppercase,
	textUpdate,
	textAdd,
	textUpdateButton,
	textDelete,
	textAccess,
	textInsert,
	textFieldRequired,
	textDeleteMessage,
	textErrorDataBase,
	textErrorValidateTitle1,
	textErrorValidateSubTitle1_1,
	textErrorValidateSubTitle2_1,
	textErrorValidateSubTitle3_1,
	textErrorValidateTitle2,
	textErrorValidateSubTitle1_2;

var textErrorValidateTitle1;
var	textErrorValidateSubTitle1_1;
var	textErrorValidateSubTitle2_1;
var	textErrorValidateSubTitle3_1;
			
var	textErrorValidateTitle2;
var	textErrorValidateSubTitle1_2;
var	textErrorValidateSubTitle2_2;
	
var	textErrorValidateTitle3;
var	textErrorValidateSubTitle1_3;
var	textErrorValidateSubTitle2_3;

var textChangeLoginSuccessful;
var textChangeLoginFail;

switch(language) {
case 'es':

	textError="Error";
	textErrorMessageFind="No se pudo encontrar la información seleccionada";
	textErrorMessageDelete="No se pudo eliminar la información seleccionada";
	textErrorMessageAdd="No se pudo agregar la información seleccionada";
	textErrorMessageUpdate="No se pudo modificar la información seleccionada";

	textSuccessMessageDelete="Información eliminada satisfactoriamente";
	textSuccessMessageAdd="Información agregada satisfactoriamente";
	textSuccessMessageUpdate="Información modificada satisfactoriamente";

	textInsert="Modificando...";
	textFieldRequired="Campo Requerido";
	
	textUpdate="Cambiar contraseña";

	textErrorDataBase="Error en la base de datos";

	textErrorValidateTitle1="Error contraseña actual, ";
	textErrorValidateSubTitle1_1="el texto es requerido.";
	textErrorValidateSubTitle2_1="solo puede ingresar letras, números y letras especiales entre un rango de 6 a 10 caracteres.";
	textErrorValidateSubTitle3_1="debe ingresar al menos, una letra mayúscula, otra minúscula, un número y un carácter especial";
	textErrorValidateSubTitle4_1="esta contraseña no concuerda con la que tiene asignada actualmente, intente de nuevo.";
	
	textErrorValidateTitle2="Error contraseña nueva, ";
	textErrorValidateSubTitle1_2="el texto es requerido.";
	textErrorValidateSubTitle2_2="solo puede ingresar letras, números y letras especiales entre un rango de 6 a 10 caracteres.";
	textErrorValidateSubTitle3_2="debe ingresar al menos, una letra mayúscula, otra minúscula, un número y un carácter especial";
	
	textErrorValidateTitle3="Error confirmar contraseña, ";
	textErrorValidateSubTitle1_3="el texto es requerido.";
	textErrorValidateSubTitle2_3="solo puede ingresar letras, números y letras especiales entre un rango de 6 a 10 caracteres.";
	textErrorValidateSubTitle3_3="debe ingresar al menos, una letra mayúscula, otra minúscula, un número y un carácter especial";
	textErrorValidateSubTitle4_3="esta contraseña no coincide con la nueva, intente de nuevo.";

	textChangeLoginSuccessful="Contraseña cambiada satisfactoriamente, a continuacón será redireccionado a la página anterior.";
	textChangeLoginFail="Lo sentimos, por el momento no es posible cambiar su contraseña";
	
	break;
	
case 'en':
	
	textError="Error";
	textErrorMessageFind="Could not find information selected";
	textErrorMessageDelete="Could not remove information selected";
	textErrorMessageAdd="Could not add information";
	textErrorMessageUpdate="Could not update information selected";

	textSuccessMessageDelete="Information deleted successfully";
	textSuccessMessageAdd="Information added successfully";
	textSuccessMessageUpdate="Information modified successfully";

	textInsert="Update...";
	textFieldRequired="Field Required";

	textUpdate="Change password";
	
	textDeleteMessage="Are you sure to remove ";
	textErrorDataBase="Error Database";

	textErrorValidateTitle1="Error current password, ";
	textErrorValidateSubTitle1_1="this field is required.";
	textErrorValidateSubTitle2_1="you can only enter letters, numbers and special characters from a range of 6-10 characters.";
	textErrorValidateSubTitle3_1="must enter at least one uppercase letter, one lowercase, one number and one special character";
	textErrorValidateSubTitle4_1="this password does not match the currently assigned to try again.";
	
	textErrorValidateTitle2="Error new password, ";
	textErrorValidateSubTitle1_2="this field is required.";
	textErrorValidateSubTitle2_2="you can only enter letters, numbers and special characters from a range of 6-10 characters.";
	textErrorValidateSubTitle3_2="must enter at least one uppercase letter, one lowercase, one number and one special character";
	
	textErrorValidateTitle3="Error confirm password, ";
	textErrorValidateSubTitle1_3="this field is required.";
	textErrorValidateSubTitle2_3="you can only enter letters, numbers and special characters from a range of 6-10 characters.";
	textErrorValidateSubTitle3_3="must enter at least one uppercase letter, one lowercase, one number and one special character";
	textErrorValidateSubTitle4_3="this password does not match the new, try again.";
	
	textChangeLoginSuccessful="Password changed successfully, will be redirected to the previous page.";
	textChangeLoginFail="Sorry, for the moment you can not change your password";
	
	break;

case 'pt_BR':

	textError="Erro";
	textErrorMessageFind="Não foi possível encontrar informações selecionadas";
	textErrorMessageDelete="Falha ao excluir as informações selecionadas";
	textErrorMessageAdd="Falha ao adicionar as informações selecionadas";
	textErrorMessageUpdate="Falha ao modificar as informações selecionadas";

	textSuccessMessageDelete="Informações excluído com sucesso";
	textSuccessMessageAdd="Informação adicionada com sucesso";
	textSuccessMessageUpdate="Informações modificado com sucesso";

	nameLowercase= "modelo CPE";
	nameUppercase= "Modelo CPE";

	textAdd="Adicionar";
	textUpdateButton="Gravar";
	textDelete="Eliminar";

	textInsert="Acessando...";
	textFieldRequired="Campo Requerido";
	
	textUpdate="Mudar senha";

	textDeleteMessage="Tem certeza de que deseja eliminar ";
	textErrorDataBase="Erro no banco de dados";
//
	textErrorValidateTitle1="Erro senha atual, ";
	textErrorValidateSubTitle1_1="o texto é requerido.";
	textErrorValidateSubTitle2_1="você só pode digitar letras, números e caracteres especiais de uma escala de 6-10 caracteres.";
	textErrorValidateSubTitle3_1="deve entrar pelo menos uma letra maiúscula, uma minúscula, um número e uma personagem especial.";
	textErrorValidateSubTitle4_1="essa senha não corresponde ao atribuído atualmente para tentar novamente.";
	
	textErrorValidateTitle2="Erro senha nova, ";
	textErrorValidateSubTitle1_2="o texto é requerido.";
	textErrorValidateSubTitle2_2="você só pode digitar letras, números e caracteres especiais de uma escala de 6-10 caracteres.";
	textErrorValidateSubTitle3_2="deve entrar pelo menos uma letra maiúscula, uma minúscula, um número e uma personagem especial.";
	
	textErrorValidateTitle3="Erro confirme senha, ";
	textErrorValidateSubTitle1_3="o texto é requerido.";
	textErrorValidateSubTitle2_3="você só pode digitar letras, números e caracteres especiais de uma escala de 6-10 caracteres.";
	textErrorValidateSubTitle3_3="deve entrar pelo menos uma letra maiúscula, uma minúscula, um número e uma personagem especial.";
	textErrorValidateSubTitle4_3="essa senha não coincide com o novo, tente novamente.";

	textChangeLoginSuccessful="Password changed successfully, will be redirected to the previous page.";
	textChangeLoginFail="Sorry, for the moment you can not change your password";
	
	break;
		
default:
	
	textError="Error";
	textErrorMessageFind="Could not find information selected";
	textErrorMessageDelete="Could not remove information selected";
	textErrorMessageAdd="Could not add information";
	textErrorMessageUpdate="Could not update information selected";

	textSuccessMessageDelete="Information deleted successfully";
	textSuccessMessageAdd="Information added successfully";
	textSuccessMessageUpdate="Information modified successfully";

	textInsert="Update...";
	textFieldRequired="Field Required";

	textUpdate="Change password";
	
	textDeleteMessage="Are you sure to remove ";
	textErrorDataBase="Error Database";

	textErrorValidateTitle1="Error current password, ";
	textErrorValidateSubTitle1_1="this field is required.";
	textErrorValidateSubTitle2_1="you can only enter letters, numbers and special characters from a range of 6-10 characters.";
	textErrorValidateSubTitle3_1="must enter at least one uppercase letter, one lowercase, one number and one special character";
	textErrorValidateSubTitle4_1="this password does not match the currently assigned to try again.";
	
	textErrorValidateTitle2="Error new password, ";
	textErrorValidateSubTitle1_2="this field is required.";
	textErrorValidateSubTitle2_2="you can only enter letters, numbers and special characters from a range of 6-10 characters.";
	textErrorValidateSubTitle3_2="must enter at least one uppercase letter, one lowercase, one number and one special character";
	
	textErrorValidateTitle3="Error confirm password, ";
	textErrorValidateSubTitle1_3="this field is required.";
	textErrorValidateSubTitle2_3="you can only enter letters, numbers and special characters from a range of 6-10 characters.";
	textErrorValidateSubTitle3_3="must enter at least one uppercase letter, one lowercase, one number and one special character";
	textErrorValidateSubTitle4_3="this password does not match the new, try again.";
	
	textChangeLoginSuccessful="Password changed successfully, will be redirected to the previous page.";
	textChangeLoginFail="Sorry, for the moment you can not change your password";
	
	break;
}

var updateChangePassword = function(ajax_data) {
	
	var ajax_data_update = {
		"username"		: ajax_data.username.val(),
		"oldpass" 		: ajax_data.currentPassword.val(),
		"newpass" 		: ajax_data.newPassword.val(),
		"confpass"		: ajax_data.confirmPassword.val()
	};

	$("button[name='ChangePasswordModalButtonUpdateChangePassword']").html('<i class="icon-loading"></i> '+textInsert);
//	$("button[name='ChangePasswordModalButtonUpdateChangePassword'] > i").show();	
	$("button[name='ChangePasswordModalButtonUpdateChangePassword']").text(textInsert);
	$("button[name='ChangePasswordModalButtonUpdateChangePassword']").prop("disabled", true);

	$.ajax({
		type 		: "POST",
		url 		: url.update,
		data 		: ajax_data_update,
		dataType 	: "json",
		encode 		: true
	}).done(function(data) {
		
		if(data.status=="false"){
		
			alert(textChangeLoginFail);
			
		}else if (data.status=="true") {
			$("#modalMessageError").html("");
			alert(textChangeLoginSuccessful);
			window.history.back();
		}
		
		

	}).fail(function(jqXHR, textStatus, errorThrown) {

		alert(textChangeLoginFail);
		
		if (jqXHR.status == 0) {
			console.log('You are offline!!\n Please Check Your Network.');
		} else if (jqXHR.status == 404) {
			console.log('Requested URL not found.');
		} else if (jqXHR.status == 500) {
			console.log('Internel Server Error.');
		} else if (textStatus == 'parsererror') {
			console.log('Error.\nParsing JSON Request failed.');
		} else if (textStatus == 'timeout') {
			console.log('Request Time out.');
		} else {
			console.log('Unknow Error.\n' + jqXHR.responseText);
		}

	}).always(function() {
		
		
		$("button[name='ChangePasswordModalButtonUpdateChangePassword'] > i").hide();			
		$("button[name='ChangePasswordModalButtonUpdateChangePassword']").text(textUpdate);
		$("button[name='ChangePasswordModalButtonUpdateChangePassword']").prop("disabled", false);

		$("div.modalMain").find('input[type="password"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="password"]').css("border-color", $("button[name='ChangePasswordModalButtonUpdateChangePassword']").css("background-color"));
	});
	//	end ajax

};
//	end	updatePlanService





$(document).ready(function() {

	var ajax_data = {
		"username"				: $("input[name='modalChangePasswordInputHiddenId']"),
		"currentPassword" 		: $("input[name='modalChangePasswordInputCurrentPassword']"),
		"newPassword" 			: $("input[name='modalChangePasswordInputNewPassword']"),
		"confirmPassword" 		: $("input[name='modalChangePasswordInputConfirmNewPassword']")
	};

	$("button[name='ChangePasswordModalButtonUpdateChangePassword']").on("click", function(event) {
		if(validate()){
			updateChangePassword(ajax_data);
		}
	});

	$("input[type='password']").on({
  		keydown: function(e) {
    		if (e.which === 32)
      			return false;
  		}
	});
    
    $("input[type='password']").bind("paste", function(e) {
		e.preventDefault();
	});
	
});

