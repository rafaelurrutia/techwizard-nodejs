
var url = {
	"create" 		: "/techwizard/general/addUser/",
	"read" 			: "/techwizard/general/findAlluser/",
	"update" 		: "/techwizard/general/editUser/",
	"delete" 		: "/techwizard/general/removeUser/",
	"find" 			: "/techwizard/general/getUser/",
	"groupUrlRead"	: "/techwizard/general/getGroup/",
	"resetPassword"	: "/techwizard/resetpasword/",
};	

var hash = {
	"create" 	: "#UsersModalUser",
	"update" 	: "#UsersModalUser",
	"delete" 	: "#UsersModalDeleteUser",
};

var timeToRefreshDatatables=10;	//	seconds
var maxRowLoad=50;

var textError,textErrorMessageFind,textErrorMessageDelete,textErrorMessageAdd,textErrorMessageUpdate,textSuccessMessageDelete,textSuccessMessageAdd,textSuccessMessageUpdate,nameLowercase,nameUppercase,textResetPassword,textResetPassword1,textResetPassword12,textUpdate,textAdd,textUpdateButton,textDelete,textAccess,textInsert,textFieldRequired,textResetPasswordMessage,textDeleteMessage,textErrorDataBase,textErrorValidateTitle1,textErrorValidateSubTitle1_1,textErrorValidateSubTitle2_1,textErrorValidateSubTitle3_1,textErrorValidateTitle2,textErrorValidateSubTitle1_2;
var textInactive="Inactivo";
var textActive="Activo";

var	textErrorValidateTitle1;
var	textErrorValidateSubTitle1_1;	
			
var	textErrorValidateTitle2;
var	textErrorValidateSubTitle1_2;
var	textErrorValidateSubTitle2_2;
var	textErrorValidateSubTitle3_2;
var	textErrorValidateSubTitle4_2;
var textErrorValidateSubTitleUsuario;
	
var	textErrorValidateTitle3;
var	textErrorValidateSubTitle1_3;
var	textErrorValidateSubTitle2_3;
	
var	textErrorValidateTitle4;
var	textErrorValidateSubTitle1_4;
var	textErrorValidateSubTitle2_4;
	
var	textErrorValidateTitle5;
var	textErrorValidateSubTitle1_5;
var	textErrorValidateSubTitle2_5;
var	textErrorValidateSubTitle3_5;

var textErrorValidateTitle6,textErrorValidateSubTitle1_6,textErrorValidateSubTitle2_6;

var textHtmlUsernameLabel1;
var textHtmlUsernameLabel2;
var textHtmlUsernameLabel3;
var textHtmlUsernameLabel4;

var textYes;
var textNo;

var datatableTitles;
var datatableData = ["name","lastname","group","username","email","phone","active","expira"];
var urlDatatableLanguageUrl;

switch(language) {
case 'es':
	urlDatatableLanguageUrl = "http://cdn.datatables.net/plug-ins/be7019ee387/i18n/Spanish.json";
	break;
case 'en':
	urlDatatableLanguageUrl = "http://cdn.datatables.net/plug-ins/a5734b29083/i18n/English.json";
	break;
case 'pt_BR':
	urlDatatableLanguageUrl = "http:////cdn.datatables.net/plug-ins/f2c75b7247b/i18n/Portuguese-Brasil.json";
	break;
default:
}


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

	nameLowercase= "usuario";
	nameUppercase= "Usuario";

	textResetPassword="Resetear";
	textResetPassword1="La nueva contraseña es 'Vtr123#'";
	textResetPassword2="Contraseña reseteada satisfactoriamente";
	
	textUpdate="Modificar";
	textAdd="Agregar";
	textUpdateButton="Grabar";
	textDelete="Eliminar";

	textInsert="Ingresando...";
	textFieldRequired="Campo Requerido";

	textResetPasswordMessage="¿Está seguro que desea resetear la contraseña de ";
	textDeleteMessage="¿Está seguro que desea eliminar ";
	textErrorDataBase="Error en la base de datos";

	textErrorValidateTitle1="Error tipo grupo, ";
	textErrorValidateSubTitle1_1="el texto es requerido.";	
			
	textErrorValidateTitle2="Error username, ";
	textErrorValidateSubTitle1_2="el campo es requerido.";
	textErrorValidateSubTitle2_2="solo puedes ingresar letras entre un rango de 4 a 15 caracteres.";
	textErrorValidateSubTitle3_2="solo puedes ingresar números entre un rango de 4 a 15 caracteres.";
	textErrorValidateSubTitle4_2="rut inválido.";
	textErrorValidateSubTitleUsuario="este username ya ha sido ingresado previamente, ingrese uno distinto";
	
	textErrorValidateTitle3="Error nombre usuario, ";
	textErrorValidateSubTitle1_3="el campo es requerido.";
	textErrorValidateSubTitle2_3="solo puedes ingresar letras y números entre un rango de 3 a 20 caracteres.";
	
	textErrorValidateTitle4="Error apellido usuario, ";
	textErrorValidateSubTitle1_4="el campo es requerido.";
	textErrorValidateSubTitle2_4="solo puedes ingresar letras y números entre un rango de 3 a 20 caracteres.";
	
	textErrorValidateTitle5="Error contraseña usuario, ";
	textErrorValidateSubTitle1_5="el campo es requerido.";
	textErrorValidateSubTitle2_5="debe ingresar al menos, una letra mayúscula, otra minúscula, un número y un carácter especial entre un rango de 6 a 10 caracteres.";
	textErrorValidateSubTitle3_5=" debe ingresar al menos, una letra mayúscula, otra minúscula, un número y un carácter especial";
	
	textErrorValidateTitle6="Error confirmación contraseña, ";
	textErrorValidateSubTitle1_6="el campo es requerido.";
	textErrorValidateSubTitle2_6="Contraseñas no coinciden.";
	
	textInactive="Inactivo";
	textActive="Activo";
	
	textHtmlUsernameLabel1="* Username: <small><strong>(letras y/o números)</strong></small>";
	textHtmlUsernameLabel2="* Username: <small><strong>(Solo números)</strong></small>";
	textHtmlUsernameLabel3="* Rut:";
	textHtmlUsernameLabel4="* Username:";
	
	textYes="Si";
	textNo="No";
	
	datatableTitles = ["Nombre","Apellido","Grupo","Usuario","E-mail","Teléfono","Estado","Expiración cuenta usuario","Opciones"];	

	break;
case 'en':
	
	textError="Error";
	textErrorMessageFind="Could not find information selected";
	textErrorMessageDelete="Could not remove information selected";
	textErrorMessageAdd="Could not add information";
	textErrorMessageUpdate="Could not update information selected";

	textSuccessMessageDelete="Information deleted successfully";
	textSuccessMessageAdd="Information added successfully";
	textSuccessMessageUpdate="Info modified successfully";

	nameLowercase= "user";
	nameUppercase= "User";

	textResetPassword="Reset";
	textResetPassword1="Your new password will be 'Vtr123#'";
	textResetPassword2="Password user reset successfully";
	textUpdate="Update";
	textAdd="Add";
	textUpdateButton="Update";
	textDelete="Delete";
	textAccess="Access";

	textInsert="Insert...";
	textFieldRequired="Field Required";

	textResetPasswordMessage="Are you sure to reset password from ";
	textDeleteMessage="Are you sure to remove ";
	textErrorDataBase="Database Error";

	textErrorValidateTitle1="Error type group, ";
	textErrorValidateSubTitle1_1="must select one.";
	
//	textErrorValidateSubTitle2_1="you can only enter letters and numbers in a range of 3 to 30 characters.";
	textErrorValidateSubTitle3_1="this username has been previously entered, enter a different username.";
			
	textErrorValidateTitle2="Error username, ";
	textErrorValidateSubTitle1_2="Field Required.";
	textErrorValidateSubTitle2_2="you can only enter letters in a range of 4 to 15 characters.";
	textErrorValidateSubTitle3_2="you can only enter numbers in a range of 4 to 15 characters.";
	textErrorValidateSubTitle4_2="invalid rut.";
	textErrorValidateSubTitleUsuario="this username has been previously entered, enter a different username.";
	
	textErrorValidateTitle3="Error first name, ";
	textErrorValidateSubTitle1_3="Field Required.";
	textErrorValidateSubTitle2_3="you can only enter letters and numbers in a range of 3 to 20 characters.";
	
	textErrorValidateTitle4="Error last name, ";
	textErrorValidateSubTitle1_4="Field Required.";
	textErrorValidateSubTitle2_4="you can only enter letters in a range of 3 to 20 characters.";
	
	textErrorValidateTitle5="Error password, ";
	textErrorValidateSubTitle1_5="Field Required.";
	textErrorValidateSubTitle2_5="you must enter at least one uppercase letter, one lowercase, one number and one special character in a range of 6 to 10 characters.";
	textErrorValidateSubTitle3_5=" you must enter at least one uppercase letter, one lowercase, one number and one special character";
	
	textErrorValidateTitle6="Error confirm password, ";
	textErrorValidateSubTitle1_6="Field Required.";
	textErrorValidateSubTitle2_6="Passwords do not match.";

	textHtmlUsernameLabel1="* Username: <small><strong>(Letters and numbers)</strong></small>";
	textHtmlUsernameLabel2="* Username: <small><strong>(Numbers only)</strong></small>";
	textHtmlUsernameLabel3="* Rut:";
	textHtmlUsernameLabel4="* Username:";
		
	textInactive="Inactive";
	textActive="Active";	
	
	textYes="Yes";
	textNo="No";
	
	datatableTitles = ["First name","Last name","Group name","Username","E-mail","Phone","Status","Expire account user","Options"];
	break;
case 'pt_BR':
	
	textError="Error";
	textErrorMessageFind="Não foi possível encontrar informações selecionadas";
	textErrorMessageDelete="Falha ao excluir as informações selecionadas";
	textErrorMessageAdd="Falha ao adicionar as informações selecionadas";
	textErrorMessageUpdate="Falha ao modificar as informações selecionadas";

	textSuccessMessageDelete="Informações excluído com sucesso";
	textSuccessMessageAdd="Informação adicionada com sucesso";
	textSuccessMessageUpdate="Informações modificado com sucesso";

	nameLowercase= "usuário";
	nameUppercase= "Usuário";

	textResetPassword="Redefinir";
	textResetPassword1="La nueva contraseña es 'Vtr123#'";
	textResetPassword2="Contraseña reseteada satisfactoriamente";
	
	textUpdate="Alterar";
	textAdd="Adicionar";
	textUpdateButton="Alterar";
	textDelete="Eliminar";
	textAccess="Access";

	textInsert="Acessar...";
	textFieldRequired="Elemento Necessário";

	textResetPasswordMessage="Tem certeza de que deseja redefinir a senha de ";
	textDeleteMessage="Certifique-se de remover ";
	textErrorDataBase="Erro de banco de dados";

	textErrorValidateTitle1="Erro tipo grupo, ";
	textErrorValidateSubTitle1_1="deve selecionar uma.";
	
//	textErrorValidateSubTitle2_1="you can only enter letters and numbers in a range of 3 to 30 characters.";
	textErrorValidateSubTitle3_1="este usuário foi inserido anteriormente, digite um nome de usuário diferente.";
			
	textErrorValidateTitle2="Erro username, ";
	textErrorValidateSubTitle1_2="Campo Requerido.";
	textErrorValidateSubTitle2_2="você só pode digitar letras em uma faixa de 4 a 15 caracteres.";
	textErrorValidateSubTitle3_2="você só pode digitar números em um intervalo de 4 a 15 caracteres.";
	textErrorValidateSubTitle4_2="inválido rut.";
	textErrorValidateSubTitleUsuario="este nome foi inserido anteriormente, digite um username diferente.";
	
	textErrorValidateTitle3="Erro nome, ";
	textErrorValidateSubTitle1_3="Campo Requerido.";
	textErrorValidateSubTitle2_3="você só pode digitar letras e números em um intervalo de 3-20 caracteres.";
	
	textErrorValidateTitle4="Erro sobrenome, ";
	textErrorValidateSubTitle1_4="Campo Requerido.";
	textErrorValidateSubTitle2_4="você só pode digitar letras e números em um intervalo de 3-20 caracteres.";
	
	textErrorValidateTitle5="Erro senha, ";
	textErrorValidateSubTitle1_5="Campo Requerido.";
	textErrorValidateSubTitle2_5="você deve inserir pelo menos uma letra maiúscula, uma minúscula, um número e uma caractere especial em um intervalo de 6-10 caracteres.";
	textErrorValidateSubTitle3_5=" você deve inserir pelo menos uma letra maiúscula, uma minúscula, um número e uma caractere especial";
	
	textErrorValidateTitle6="Erro confirmar senha, ";
	textErrorValidateSubTitle1_6="Campo Requerido.";
	textErrorValidateSubTitle2_6="Senhas não coincidem.";

	textHtmlUsernameLabel1="* Usuário: <small><strong>(letras e/ou números)</strong></small>";
	textHtmlUsernameLabel2="* Usuário: <small><strong>(Só números)</strong></small>";
	textHtmlUsernameLabel3="* Rut:";
	textHtmlUsernameLabel4="* Usuário:";
		
	textInactive="Inativo";
	textActive="Ativo";	
	
	textYes="Sim";
	textNo="Não";
	
	datatableTitles = ["Nome","Sobrenome","Grupo","Username","E-mail","Telefone","Estado","Expiração conta usuário","Opções"];
	break;	
default:
}

function html_CleanElementsValues(){
	
}

function get_JsonCall(url){

    var result = null;  
	$.ajax({
		type 	: "GET",
		async	: false,
		url		: url
	}).done(function(data) {
		result = data;
	}).fail(function(jqXHR, textStatus, errorThrown) {
		failAjax(jqXHR);
	});
	return result;

}

function showMessageErrorServer() {

	showMessageNotify("#FFFFFF", "red", "Error", messageNotify, 5);
	eventButtonLoginClickDisable(messagePanel, 10);

};

function showMessageNotify(fgColor, bgColor, caption, messageNotify, timeout) {

	var not = $.Notify({
		caption : caption,
		content : messageNotify,
		timeout : (timeout * 1000), /* 5 seconds */
		style : ( {
			background : bgColor,
			color : fgColor
		})
	});

};

function get_FailErrorLoadAjax(jqXHR, textStatus, errorThrown) {
	
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
	
}

function deleteUser(idUser) {

	$.ajax({
		type 		: "POST",
		url 		: url.delete, 
		data		: {id:idUser}, 
		dataType 	: "json",
		encode      : true
	})
	.
	done(function(data) {

		if (!data.status) {
			var message = textErrorMessageDelete;

			var not = $.Notify({
				caption : "Error",
				content : message,
				timeout : 5000, // 5 seconds
				style : ( {
					background : 'red',
					color : '#FFFFFF'
				})
			});
		} else if (data.status) {
			console.clear();
			window.location.href = "#";
			var table = $('#example').DataTable();
			table.ajax.reload();
			
			showMessageNotify('#FFFFFF', '#60A917', '<i class="icon-checkmark"></i> '+nameUppercase, textSuccessMessageDelete,5);
			
		}

	}).fail(function(jqXHR, textStatus, errorThrown) {

		console.log("error send");
		
		showMessageNotify('#FFFFFF', 'red', "Error", textErrorMessageDelete,5);
		
		get_FailErrorLoadAjax(jqXHR, textStatus, errorThrown);
		
		

	});
	//	end ajax

};
//	end deleteUser

function findUser(idUser,ajax_data) {
	var findUser = $.getJSON(url.find + idUser, function(data) {

	console.log(data);	
		if (!data.status) {
				
			showMessageNotify('#FFFFFF', 'red', "Error", "Error",5);
			
		} else if (data.status) {
			                        
			if (data.data.active == "false") {				
				$("button[name='userModalUserButtonActive']").hide();
				$("button[name='userModalUserButtonInactive']").show();
			} else if (data.data.active == "true") {				
				$("button[name='userModalUserButtonActive']").show();
				$("button[name='userModalUserButtonInactive']").hide();
			}

					
			if (data.data.hasOwnProperty('expira')==true) {
				
				if (data.data.expira == "false") {				
					$("button[name='userModalUserButtonEnable']").hide();
					$("button[name='userModalUserButtonDisable']").show();
				} else if (data.data.expira == "true") {				
					$("button[name='userModalUserButtonEnable']").show();
					$("button[name='userModalUserButtonDisable']").hide();
				}
							    
			}else{
				$("div[id='modalGroupInputExpire']").parent().hide();
			}		

			
			$(ajax_data.group).each(function () {
			    $('option', this).each(function () {
			        if ($(this).text() == data.data.group) {
			            $(this).attr('selected', 'selected');
			        };
			    });
			});
			
			ajax_data.id.val(data.data._id);
//			ajax_data.group.val(data.group);
//			ajax_data.group.text(data.data.group),

//$("option:selected", $("#TipoRecorde")).text()
//$('#yourdropdownid').find('option:selected').text();


			ajax_data.username.val(data.data.username);
			ajax_data.name.val(data.data.name);
			ajax_data.lastName.val(data.data.lastname);
//			ajax_data.password.val(data.data.password);
			ajax_data.password.val("aBc1$2");
			ajax_data.confirmPassword.val("aBc1$2");			
			ajax_data.email.val(data.data.email);
			ajax_data.phone.val(data.data.phone);
			ajax_data.active.val(data.data.active);		
			$("button[name='UsersModalButtonAddUser']").hide();
			$("button[name='UsersModalButtonUpdateUser']").show();
			$("#userTitle").text(' '+textUpdate+' '+nameLowercase);
			$(".modalMessageError").html("");
			$("input[name='modalUserInputPasswordUser']").parent().parent().hide();
			$("input[name='modalUserInputConfirmPasswordUser']").parent().parent().hide();
			window.location.href = hash.update;				
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {

		console.log("error send");
		window.location.href = "#";
		
		showMessageNotify('#FFFFFF', 'red', "Error", textErrorMessageFind,5);
		get_FailErrorLoadAjax(jqXHR, textStatus, errorThrown);

	});
	//	end	getjson

};
//	end	findUser

function updateUser(ajax_data) {

	var ajax_data_update = {
		"id" 		: ajax_data.id.val(),
		"group" 	: ajax_data.group.find("option:selected").text(),
		"username" 	: ajax_data.username.val(),
		"name" 		: ajax_data.name.val(),
		"lastname" 	: ajax_data.lastName.val(),
//		"password" 	: ajax_data.password.val(),
		"email" 	: ajax_data.email.val(),
		"phone" 	: ajax_data.phone.val(),
		"active" 	: ($("button[name='userModalUserButtonActive']:visible").length)? "true":"false",
		"expira" 	: ($("button[name='userModalUserButtonEnable']:visible").length)? "true":"false"
		
	};
	
	console.log("before send");

	$("button[name='UsersModalButtonUpdateUser']").html('<i class="icon-loading"></i> Loading...');
	$("button[name='UsersModalButtonUpdateUser']").text("Loading...");
	$("button[name='UsersModalButtonUpdateUser']").prop("disabled", true);

	$.ajax({
		type 		: "POST",
		url 		: url.update,
		data 		: ajax_data_update,
		dataType 	: "json",
		encode 		: true
	}).done(function(data) {
		
		var message = "";

		if(data.status=="false"){
		
			if(data.code=="200"){
				
		    	var titulo="Error nombre "+nameLowercase+", ";
		    	var mensaje="El nombre elegido ya há sido ingresado previamente."; 	

				message = mensaje;
				window.location.href = "#";
				
				showMessageNotify('#FFFFFF', 'red', "Error", textErrorValidateSubTitleUsuario,5);
							
			}else{
				message = "No se pudo modificar la información seleccionada";
				window.location.href = "#";
				
				showMessageNotify('#FFFFFF', 'red', "Error", textErrorMessageUpdate,5);
				
			}
			
		}else if (data.status=="true") {

			window.location.href = "#";
			var table = $('#example').DataTable();
			table.ajax.reload();
			
			showMessageNotify('#FFFFFF', '#60A917', '<i class="icon-checkmark"></i> '+nameUppercase, textSuccessMessageUpdate,5);
			
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {

		console.log("error send");
		window.location.href = "#";
		
		showMessageNotify('#FFFFFF', 'red', 'Error', textErrorMessageUpdate,5);
		
		get_FailErrorLoadAjax(jqXHR, textStatus, errorThrown);

	}).always(function() {
		console.log("complete");
		$("button[name='UsersModalButtonUpdateUser']").text(textUpdate);
		$("button[name='UsersModalButtonUpdateUser']").prop("disabled", false);
		
		$("button[name='UsersModalButtonAddUser']").hide();
		$("button[name='UsersModalButtonUpdateUser']").show();
		
		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='UsersModalButtonUpdateUser']").css("background-color"));
		
		$("div.modalMain").find("option[value='']").attr("selected",true);
		$("div.modalMain").find('select').css("background-color", "#FFFFFF");
		$("div.modalMain").find('select').css("border-color", $("button[name='UsersModalButtonAddUser']").css("background-color"));
		
		$("div.modalMain").find('input[type="password"]').val("");
		$("div.modalMain").find('input[type="password"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="password"]').css("border-color", $("button[name='UsersModalButtonAddUser']").css("background-color"));
		
		$("button[name='userModalUserButtonActive']").show();
        $("button[name='userModalUserButtonInactive']").hide();
        
        $("button[name='userModalUserButtonEnable']").show();
        $("button[name='userModalUserButtonDisable']").hide();	
        		
	});
	//	end ajax

};
//	end	updateUser

function addUser(ajax_data) {

	var ajax_data_create = {
		"group" 	: ajax_data.group.find("option:selected").text(),
		"username" 	: ajax_data.username.val(),
		"name" 		: ajax_data.name.val(),
		"lastname" 	: ajax_data.lastName.val(),
		"password" 	: ajax_data.password.val(),
		"email" 	: ajax_data.email.val(),
		"phone" 	: ajax_data.phone.val(),
		"active" 	: ($("button[name='userModalUserButtonActive']:visible").length)? "true":"false",
		"expira" 	: ($("button[name='userModalUserButtonEnable']:visible").length)? "true":"false",
	};
	
	$("#userTitle").text(' '+textAdd+' '+nameLowercase);
	$("button[name='UsersModalButtonAddUser']").prop("disabled", true);
	$("button[name='UsersModalButtonAddUser']").html('<i class="icon-loading"></i> '+textInsert);
	$("button[name='UsersModalButtonAddUser']").text(textInsert);
		
	$.ajax({
		type 		: "POST",
		url 		: url.create,
		data 		: ajax_data_create,
		dataType 	: "json",
		encode 		: true
	}).done(function(data) {
		var message = "";

		
		if(data.status=="false"){
		
			if(data.code=="401"){
				message = "Este nombre de "+nameLowercase+" ya ha sido ingresada previamente";
				window.location.href = "#";
				var not = $.Notify({
					caption : "Error",
					content : message,
					timeout : 5000, // 5 seconds
					style : ( {
						background : 'red',
						color : '#FFFFFF'
					})
				});
				
			}else{
				message = "No se pudo ingresar la información seleccionada";
				window.location.href = "#";
				var not = $.Notify({
					caption : "Error",
					content : textErrorMessageAdd,
					timeout : 5000, // 5 seconds
					style : ( {
						background : 'red',
						color : '#FFFFFF'
					})
				});
				
			}
			
		}else if (data.status=="true") {
			// console.clear();
			window.location.href = "#";
			var table = $('#example').DataTable();
			table.ajax.reload();
			var not = $.Notify({
				caption : '<i class="icon-checkmark"></i> '+nameUppercase,
				content : textSuccessMessageAdd,
				timeout : 4500, // 4.5 seconds
				style : ( {
					background : '#60A917',
					color : '#FFFFFF'
				})
			});
		}

	}).fail(function(jqXHR, textStatus, errorThrown) {

		console.log("error send");
		window.location.href = "#";
		var not = $.Notify({
			caption : "Error",
			content : textErrorMessageAdd,
			timeout : 5000, // 10 seconds
			style : ( {
				background : 'red',
				color : '#FFFFFF'
			})
		});
		
		get_FailErrorLoadAjax(jqXHR, textStatus, errorThrown);

	}).always(function() {
		console.log("process complete");
		$("button[name='UsersModalButtonAddUser']").text(textAdd);
		$("button[name='UsersModalButtonAddUser']").prop("disabled", false);

		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='UsersModalButtonAddUser']").css("background-color"));
		
		$("div.modalMain").find('input[type="password"]').val("");
		$("div.modalMain").find('input[type="password"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="password"]').css("border-color", $("button[name='UsersModalButtonAddUser']").css("background-color"));

		$("div.modalMain").find("option[value='']").attr("selected",true);
		$("div.modalMain").find('select').css("background-color", "#FFFFFF");
		$("div.modalMain").find('select').css("border-color", $("button[name='UsersModalButtonAddUser']").css("background-color"));
		
		$("button[name='userModalUserButtonActive']").show();
        $("button[name='userModalUserButtonInactive']").hide();
        
        $("button[name='userModalUserButtonEnable']").show();
        $("button[name='userModalUserButtonDisable']").hide();
        
        
	});
	//	end ajax

};
//	end	addUser

function setResetPAsswordUser(idUser) {

	$.ajax({
		type 		: "POST",
		url 		: url.resetPassword, 
		data		: {username:idUser}, 
		dataType 	: "json",
		encode      : true
	})
	.
	done(function(data) {
		console.clear();
		if (!data.status) {
			var message = textErrorMessageDelete;

			var not = $.Notify({
				caption : "Error",
				content : "Contraseña no pudo ser reseteada",
				timeout : 5000, // 5 seconds
				style : ( {
					background : 'red',
					color : '#FFFFFF'
				})
			});
		} else if (data.status) {
			console.clear();
			window.location.href = "#";
			var table = $('#example').DataTable();
			table.ajax.reload();
			var not = $.Notify({
				caption : '<i class="icon-checkmark"></i> '+nameUppercase,
				content : textResetPassword2,
				timeout : 4500, // 4.5 seconds
				style : ( {
					background : '#60A917',
					color : '#FFFFFF'
				})
			});
		}

	}).fail(function(jqXHR, textStatus, errorThrown) {

		console.log("error send");
		var not = $.Notify({
			caption : "Error",
			content : "Contraseña no pudo ser reseteada",
			timeout : 5000, // 10 seconds
			style : ( {
				background : 'red',
				color : '#FFFFFF'
			})
		});
		
		get_FailErrorLoadAjax(jqXHR, textStatus, errorThrown);

	});
	//	end ajax
	
};

function getUsers(userAccess) {

	try {
		$.fn.dataTable.ext.errMode = 'throw';
		$(".messageErrorAccess").hide();
		var table = $("#example").dataTable({
			"ajax" : {
				"url"	: url.read,
				"error"	: function(xhr, error) {
					
					var message="";
	                
	                if (xhr.status == 400) {
	                    message='Bad Request. 400';
	                }
	                else if (xhr.status == 401) {
	                    message='User Unauthorized To Access Resource. 401';
	                }
	                else if (xhr.status == 403) {
	                    message='Access To Resource Forbidden 403';
	                }
	                else if (xhr.status == 404) {
	                    message='Requested Resource Not Found 404.';
	                } else if (xhr.status == 500) {
	                    message='Internal Server Error 500.';
	                }
	                else if (xhr.status == 503) {
	                    message='Service Unavailable 503.';
	                }
	                else if (error === 'parsererror') {
	                    message='Requested JSON parsing failed.';
	                }
	                else if (error === 'timeout') {
	                    message='Time out error.';
	                }
	                else if (error === 'abort') {
	                    message='Ajax request aborted.';
	                }
	                else {
	                    message='Uncaught Error.\n' + xhr.responseText;
	                }
	                
	                //alert(message);
	                
	                setInterval(function() {
	                	$(".messageErrorAccess").show();
						table.ajax.reload();
					}, timeToRefreshDatatables*1000);
	                
	                var not = $.Notify({
						caption : "Error",
						content : message,
						timeout : 5000, // 5 seconds
						style : ( {
							background : 'red',
							color : '#FFFFFF'
						})
					});
					
            	},		
			},
			"processing": true,
			"lengthMenu": [[50,100,200 -1], [50,100,200, "All"]],
        	"iDisplayLength": maxRowLoad,
			"columns" : [{
				"data" : null
			}, {
				"data" : datatableData[0],
				"title" : datatableTitles[0]
			}, {
				"data" : datatableData[1],
				"title" : datatableTitles[1]
			}, {
				"data" : datatableData[2],
				"title" : datatableTitles[2]
			}, {
				"data" : datatableData[3],
				"title" : datatableTitles[3]
			}, {
				"data" : datatableData[4],
				"title" : datatableTitles[4]
			}, {
				"data" : datatableData[5],
				"title" : datatableTitles[5]
			}, {
				"data" : datatableData[6],
				"title" : datatableTitles[6]
			},
			
			{
				"data" : function ( row, type, val, meta ) {
					
					if (row.hasOwnProperty('expira')) {	
						
						if(row.expira=="false"){
							return '<i class="icon-record fg-red"></i> '+textNo;
						}else if(row.expira=="true"){
							return '<i class="icon-record fg-green"></i> '+textYes;
						}

					}else{
						return "";
					}

    		},
				"title" : datatableTitles[7],
				"targets" : 8
			},
			
			
			{
				"title" : datatableTitles[8],
				"bSortable" : false
			}],
			"language" : {
				"url" : urlDatatableLanguageUrl
			},
			"columnDefs" : [{
				"targets" : 9,
				"data" : null,
				"defaultContent" : userAccess
			}, {
				"bSortable" : false,
				"aTargets" : [0]
			},
			{
                "render": function ( data, type, row ) {
                	if(row.active=="false"){
	                    return '<i class="icon-record fg-red"></i> '+textInactive;
	                }else if(row.active=="true"){
	                	return '<i class="icon-record fg-green"></i> '+textActive;
	                }
                },
                "targets": 7
            }],
			"fnDrawCallback" : function(oSettings) {
				/* Need to redo the counters if filtered or sorted */
				if (oSettings.bSorted || oSettings.bFiltered) {
					for (var i = 0, iLen = oSettings.aiDisplay.length; i < iLen; i++) {
						$('td:eq(0)', oSettings.aoData[oSettings.aiDisplay[i]].nTr).html(i + 1);
					}
				}
				
				if (oSettings.aoData.length <= maxRowLoad) {
					$('.dataTables_paginate, .dataTables_length').hide();
				}else{
					$('.dataTables_paginate, .dataTables_length').show();
				}
			}
		});

	} catch(e) {

		var not = $.Notify({
			caption : "Error",
			content : "Error en la base de datos",
			timeout : 7000, // 7 seconds
			style : ( {
				background : 'red',
				color : '#FFFFFF'
			})
		});

	}

};

$(document).ready(function() {
	
	var userAccess='';
	
	if(getAccess("update")==1){
		userAccess+='<button class="button mini" id="find"><i class="icon-pencil"></i> '+textUpdate+'</button> <button class="button mini" id="reset"><i class="icon-unlocked"></i> '+textResetPassword+'</button> ';		
	}
	
	if(getAccess("delete")==1){
		userAccess+='<button class="button mini" id="delete"><i class="icon-cancel-2"></i> '+textDelete+'</button> ';	
	}
	
	var groupUrlRead="/techwizard/general/getGroup/";
	
	getUsers(userAccess);

	var ajax_data = {
		"id" 				: $("input[name='modalUserInputHiddenIdUser']"),
		"group" 			: $("select[name='modalUserSelectGroupUser']"),
		"username" 			: $("input[name='modalUserInputUsernameUser']"),
		"name" 				: $("input[name='modalUserInputNameUser']"),
		"lastName" 			: $("input[name='modalUserInputLastNameUser']"),
		"password" 			: $("input[name='modalUserInputPasswordUser']"),
		"confirmPassword" 	: $("input[name='modalUserInputConfirmPasswordUser']"),
		"email" 			: $("input[name='modalUserInputEmailUser']"),
		"phone" 			: $("input[name='modalUserInputPhoneUser']"),
		"active" 			: $("button[name='userModalUserButtonActive']"),
		"expira" 			: $("button[name='userModalUserButtonEnable']"),
		
	}; 

	$.getJSON( groupUrlRead, function(data){
		var options = ajax_data.group;
		$.each( data.data, function( i, item ) {
			options.append($("<option />").val(item.tipo_id).text(item.name));
	    });  
	});
	
	$(ajax_data.group).change(function() {
		if(ajax_data.group.val()=="String"){
			$("input[name='modalUserInputUsernameUser']").parent().prev().html(textHtmlUsernameLabel1);
			$("input[name='modalUserInputUsernameUser']").val("");
			$("input[name='modalUserInputUsernameUser']").off('keypress');
			$("input[name='modalUserInputUsernameUser']").validCamp('abcdefghijklmnñopqrstuvwxyzáéíóú1234567890');
		}else if(ajax_data.group.val()=="Numerico"){
			$("input[name='modalUserInputUsernameUser']").parent().prev().html(textHtmlUsernameLabel2);
			$("input[name='modalUserInputUsernameUser']").val("");
			$("input[name='modalUserInputUsernameUser']").off('keypress');
			$("input[name='modalUserInputUsernameUser']").validCamp('0123456789');
		}else if(ajax_data.group.val()=="Rut"){
			$("input[name='modalUserInputUsernameUser']").parent().prev().html(textHtmlUsernameLabel3);
			$("input[name='modalUserInputUsernameUser']").val("");
			$("input[name='modalUserInputUsernameUser']").off('keypress');
			$("input[name='modalUserInputUsernameUser']").validCamp('0123456789-kK');
		}else{
			$("input[name='modalUserInputUsernameUser']").parent().prev().html(textHtmlUsernameLabel4);
			$("input[name='modalUserInputUsernameUser']").val("");
			$("input[name='modalUserInputUsernameUser']").off('keypress');
			$("input[name='modalUserInputUsernameUser']").validCamp('abcdefghijklmnñopqrstuvwxyzáéíóú0123456789');
		}
	});
	
	//	CODIGO PARA RECUPERAR LOS IDS A LA HORA DE ELIMINAR VARIOS REGISTROS
	var table = $('#example').DataTable();
	$('#example tbody').on('click', 'button', function() {
		var buttonId = $(this).attr('id');
		//$(this).parent().removeClass('row_selected');
		if (buttonId == "find") {
			if(getAccess("update")==1){
				$("#UsersModalUser").slideDown("slow");	
				findUser(table.row($(this).parents('tr')).data()._id,ajax_data);
			}
		} else if (buttonId == "delete") {
			if(getAccess("delete")==1){	
				var consult = confirm(textDeleteMessage + table.row($(this).parents('tr')).data().name+'?');
				if (consult) {
					deleteUser(table.row($(this).parents('tr')).data()._id);
				} else {
					console.log("cancel delete");
				}
			}
		}else if(buttonId == "reset"){

//			if(getAccess("update")==1){
				
				var consult = confirm(textResetPasswordMessage + table.row($(this).parents('tr')).data().name+'?');
				if (consult) {
					setResetPAsswordUser(table.row($(this).parents('tr')).data().username);
					alert(textResetPassword1);
				} else {
					console.log("cancel reset");
				}
				
//			}

		}
		if ($(this).parents('tr').hasClass('row_selected')) {
			//alert('hola');
		}
	});

	$("#refreshtable").on("click", function(event) {
		event.preventDefault(event);
		$(this).children(':eq(0)').after('<img src="../img/9.gif">');
		table.ajax.reload();
		$(this).children(':eq(1)').remove();
		return false;
	});

	$("#addModal").on("click", function(event) {
		event.preventDefault(event);
		$("#userTitle").text(' '+textAdd+' '+nameLowercase);
		$("button[name='UsersModalButtonUpdateUser']").hide();
		$("button[name='UsersModalButtonAddUser']").show();
		$(".modalMessageError").html("");
		$("input[name='modalUserInputPasswordUser']").parent().parent().show();
		$("input[name='modalUserInputConfirmPasswordUser']").parent().parent().show();
		window.location.href = hash.create;
		return false;
	});

	$("button[name='UsersModalButtonCleanUser']").on("click", function(event) {
		event.preventDefault(event);
		// clean all inputs type text before to clean call button
		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='UsersModalButtonAddUser']").css("background-color"));
		$("div.modalMain").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		// change to first position all select fields before to clean call button
		ajax_data.group.find("option[value='']").attr("selected",true);
		$("div.modalMain").find("option[value='']").attr("selected",true);
		$("div.modalMain").find('select').css("background-color", "#FFFFFF");
		$("div.modalMain").find('select').css("border-color", $("button[name='UsersModalButtonAddUser']").css("background-color"));
		$("div.modalMain").find('select').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		// clean all inputs type password before to clean call button
		$("div.modalMain").find('input[type="password"]').val("");
		$("div.modalMain").find('input[type="password"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="password"]').css("border-color", $("button[name='UsersModalButtonAddUser']").css("background-color"));
		$("div.modalMain").find('input[type="password"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		// change button state
		$("button[name='userModalUserButtonActive']").show();
        $("button[name='userModalUserButtonInactive']").hide();
        
        $("button[name='userModalUserButtonEnable']").show();
        $("button[name='userModalUserButtonDisable']").hide();
        
		$('.modalMessageError').html("");
		return false;
	});

	$("button[name='UsersModalButtonCloseModalUser']").on("click", function(event) {
		event.preventDefault(event);
		window.location.href = "#";
		// clean all inputs type text before to clean call button
		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='UsersModalButtonAddUser']").css("background-color"));
		$("div.modalMain").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		// change to first position all select fields before to clean call button
		ajax_data.group.find("option[value='']").attr("selected",true);
		$("div.modalMain").find("option[value='']").attr("selected",true);
		$("div.modalMain").find('select').css("background-color", "#FFFFFF");
		$("div.modalMain").find('select').css("border-color", $("button[name='UsersModalButtonAddUser']").css("background-color"));
		$("div.modalMain").find('select').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		// clean all inputs type password before to clean call button
		$("div.modalMain").find('input[type="password"]').val("");
		$("div.modalMain").find('input[type="password"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="password"]').css("border-color", $("button[name='UsersModalButtonAddUser']").css("background-color"));
		$("div.modalMain").find('input[type="password"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		// change button state		
		$("button[name='userModalUserButtonActive']").show();
        $("button[name='userModalUserButtonInactive']").hide();
                
       $("button[name='userModalUserButtonEnable']").show();
       $("button[name='userModalUserButtonDisable']").hide();
        
		$('.modalMessageError').html("");
				
		return false;
	});

	$("button[name='UsersModalButtonAddUser']").on("click", function(event) {
		if(validate("add")){
			addUser(ajax_data);	
		}
	});

	$("button[name='UsersModalButtonUpdateUser']").on("click", function(event) {
		if(validate("update")){
			updateUser(ajax_data);
		}
	});
/*
	$('#example tbody').on('click', 'tr', function() {
		if ($(this).hasClass('row_selected')) {
			$(this).removeClass('row_selected');
		} else {
			table.$('row_selected');
			$(this).addClass('row_selected');
		}
	});
*/
	ajax_data.username.validCamp('abcdefghijklmnñopqrstuvwxyzáéíóú1234567890');
	ajax_data.name.validCamp('abcdefghijklmnñopqrstuvwxyzáéíóú ');
	ajax_data.lastName.validCamp('abcdefghijklmnñopqrstuvwxyzáéíóú ');
//	ajax_data.password.validCamp('abcdefghijklmnñopqrstuvwxyz0123456789');
	
	/*
	$("input[name='modalUserInputPasswordUser']").keypress(function( e ) {
    	if(e.which === 32) 
        	return false;
	})​​​​​;
	*/
	$("input[name='modalUserInputPasswordUser']").on({
  		keydown: function(e) {
    		if (e.which === 32)
      			return false;
  		}
	});
	/*
	$("input[type='text'], input[type='password']").bind("paste", function(e) {
		e.preventDefault();
	});
	*/
	$("input[type='password']").bind("paste", function(e) {
		e.preventDefault();
	});

	ajax_data.email.validCamp('abcdefghijklmnñopqrstuvwxyzáéíóú1234567890@._-');
	ajax_data.phone.validCamp('1234567890-');
/*	
	ajax_data.name.keyup(function() {
		$( this ).val(function( i, val ) {
			return val.toUpperCase();
		});
    });
  */ 
  
  	
	

});

