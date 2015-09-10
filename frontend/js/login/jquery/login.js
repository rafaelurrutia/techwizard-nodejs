var nameGroup = "", nameUser = "", groupPrivileges = "", flagShowText = false;
var urlLogin = "/techwizard/login/"; 

var textStartSession;
var textStart;
var messageNotify;
var messagePanel;
var textUserNoActive;
var textUserNoValid;

var textMessagePanelEmptyFields;
var textMessagePanelLengthPassword;
var textMessageNotifyInactiveUser;
var textMessageIncorrectPassword;
var textMessageUserDosntExist;
var textMessageGroupDosntExist;
var textMessageGroupInactive;

var textMessagePanelUserBlocked;
var textMessageNotifyUserBlocked;

var textMessagePanelUserExpire;
var textMessageNotifyUserExpire;



switch(language) {
case 'es':

	textStartSession = "Iniciando Sesión";
	textStart = "Ingresar";
	messageNotify = "Lo sentimos, no se puede acceder por el momento al sistema, intentelo mas tarde.";
	messagePanel = "Lo sentimos, no se puede acceder por el momento al sistema.";
	textUserNoActive = "Lo sentimos, usuario no activado.";
	textUserNoValid = "Lo sentimos, usuario y/o contraseña no válidos.";

	textMessagePanelEmptyFields="Campos vacios.";
	textMessagePanelLengthPassword="Contraseña debe tener mínimo 6 caracteres";
	textMessageNotifyInactiveUser="Usuario inactivo";
	textMessageIncorrectPassword="Contraseña incorrecta";
	textMessageUserDosntExist="Usuario no existe";
	textMessageGroupDosntExist="Grupo no existe";
	textMessageGroupInactive="Grupo inactivo";
	
	textMessagePanelUserBlocked="Su cuenta ha sido bloqueada momentaneamente por varios intentos fallidos.";
	textMessageNotifyUserBlocked="Usuario bloqueado";
	
	textMessagePanelUserExpire="Su cuenta está actualmente expirada.";
	textMessageNotifyUserExpire="Cuenta Exiparada";
	break;
case 'en':

	textStartSession = "Login";
	textStart = "Sign In";
	messageNotify = "Sorry, you can not access the system at the moment, try again later.";
	messagePanel = "Sorry, you can not access the system at the moment.";
	textUserNoActive = "Sorry, user not activated.";
	textUserNoValid = "Sorry, username and / or password invalid.";
	
	textMessagePanelEmptyFields="Empty fields";
	textMessagePanelLengthPassword="Password must have 6 characters min";
	textMessageNotifyInactiveUser="Inactive user";
	textMessageIncorrectPassword="Incorrect password";
	textMessageUserDosntExist="User doesn't exist";
	textMessageGroupDosntExist="Group doesn't exist";
	textMessageGroupInactive="Inactive group ";
	
	textMessagePanelUserBlocked="Your account has been momentarily blocked by several failed attempts.";
	textMessageNotifyUserBlocked="Blocked user";
	
	textMessagePanelUserExpire="Your account is now expired.";
	textMessageNotifyUserExpire="Account user expired";
	
	break;
case 'pt_BR':

	textStartSession = "Login";
	textStart = "Assinar em";
	messageNotify = "Desculpe, você não pode acessar o sistema no momento, tente novamente mais tarde.";
	messagePanel = "Desculpe, você não pode acessar o sistema no momento.";
	textUserNoActive = "Desculpe, o usuário não ativada.";
	textUserNoValid = "Desculpe, nome de usuário e / ou senha inválida.";
	
	textMessagePanelEmptyFields="Campos vazios";
	textMessagePanelLengthPassword="A senha deve ter pelo menos 6 caracteres";
	textMessageNotifyInactiveUser="Usuário inativo";
	textMessageIncorrectPassword="Senha incorreta";
	textMessageUserDosntExist="Usuário não existe";
	textMessageGroupDosntExist="Grupo não existe";
	textMessageGroupInactive="Grupo inativo ";
	
	textMessagePanelUserBlocked="Sua conta foi momentaneamente bloqueado por várias tentativas falhadas.";
	textMessageNotifyUserBlocked="Usuário trancado";
	
	textMessagePanelUserExpire="Sua conta está expirado.";
	textMessageNotifyUserExpire="Conta de usuário expirado";
	
	break;	
default:
}

index();

function html_EnableCharacters_EventKeypress(input,characters){
	$(input).validCamp(characters);
}

function html_LoadLanguageSelectedByLanguageBrowser_EventClick(language) {

	switch(language) {
	case 'es':

		$("button[value='es']").children().show();
		$("button[value='es']").removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
		$("button").not("button[value='es']").children().hide();
		$("div.radiobuttonSet button").not("button[value='es']").removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");

		break;
	case 'en':

		$("button[value='en']").children().show();
		$("button[value='en']").removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
		$("button").not("button[value='en']").children().hide();
		$("div.radiobuttonSet button").not("button[value='en']").removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");

		break;
	case 'pt_BR':

		$("button[value='pt_BR']").children().show();
		$("button[value='pt_BR']").removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
		$("button").not("button[value='pt_BR']").children().hide();
		$("div.radiobuttonSet button").not("button[value='pt_BR']").removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");

		break;
	default:
	}

}

function html_DisableOptionLanguageSelect(){
	
	$(".radiobuttonSet").hide();
	
}

function eventButtonLoginClickLoad() {

	$("button[name='loginButtonLogin']").text(textStartSession);
	$("button[name='loginButtonLogin']").html('<i class="icon-loading"></i> ' + textStartSession);
	$("button[name='loginButtonLogin']").prop("disabled", true);

};

function eventButtonLoginClickDisable(message, timeout) {

	$("div.loginMessageError strong").first().html(message);
	$("div.loginMessageError").css("display", "block");
	$("div.loginMessageError").fadeIn('slow').delay(timeout * 1000).fadeOut('slow');

	$("button[name='loginButtonLogin']").text(textStart);
	$("button[name='loginButtonLogin']").prop("disabled", false);

};

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

function html_FormLogin_EventSubmit(){

	$('form').submit(function(event) {
		
		var formData = {
			'username' : $("input[name='inputLoginUser']").val(),
			'password' : $("input[name='inputLoginPassword']").val(),
			'lang' : $(".radiobuttonButtonSelect").val()
		}; 
		
		var ajax_data_login = {
			'username' : formData.username,
			'password' : formData.password
		};
		
		event.preventDefault(event);
		eventButtonLoginClickLoad();
		

		if(html_validateLogin(formData)){
			$.ajax({
				type : "POST",
				url : urlLogin,
				data : ajax_data_login,
				dataType : "json",
				encode : true
			}).done(function(data) {
				if (data.status == "true" && data.code == "200") {
					get_AccessLogin(data,formData);
				} else if (data.status == "false") {		
					html_ShowErrorLogin(data);	
				}

			}).fail(function(jqXHR, textStatus, errorThrown) {
				showMessageErrorServer();
			});			
		}
		
	});
		
}

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

function html_DisableOptionPaste_EventBind(inputs){
	
	$(inputs).bind("paste", function(e) {
		e.preventDefault();
	});
	
}

function html_SelectOptionLanguage_EventClick(){
	
	$("div.radiobuttonSet button").on("click", function() {

		$(this).children().show();
		$("button").not(this).children().hide();

		/*	si el boton presionado no ha sido clickeado pasa a clickeado, se destaca este y el resto pasa a evento no clickeado y no se destaca. */
		if (!$(this).hasClass("radiobuttonButtonSelect")) {

			$(this).removeClass("radiobuttonButton");
			$(this).addClass("radiobuttonButtonSelect");

			$("div.radiobuttonSet button").not(this).removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");

			/*	si el boton presionado ha sido clickeado pasa a clickeado, se destaca este y el resto pasa a evento no clickeado y no se destaca. */
		}

	});
	
}

function html_ShowErrorLogin(data) {

	if (data.code == "209") {
		eventButtonLoginClickDisable(textUserNoActive, 5);
		showMessageNotify("#FFFFFF", "red", "Error", textMessageNotifyInactiveUser, 5);
	} else if (data.code == "210") {
		eventButtonLoginClickDisable(textMessageIncorrectPassword, 5);
		showMessageNotify("#FFFFFF", "red", "Error", textMessageIncorrectPassword, 5);
	} else if (data.code == "211") {
		eventButtonLoginClickDisable(textMessageUserDosntExist, 5);
		showMessageNotify("#FFFFFF", "red", "Error", textMessageUserDosntExist, 5);
	} else if (data.code == "400") {
		eventButtonLoginClickDisable(textMessageGroupDosntExist, 5);
		showMessageNotify("#FFFFFF", "red", "Error", textMessageGroupDosntExist, 5);
	} else if (data.code == "402") {
		eventButtonLoginClickDisable(textMessageGroupInactive, 5);
		showMessageNotify("#FFFFFF", "red", "Error", textMessageGroupInactive, 5);
	} else if (data.code == "223") {
		eventButtonLoginClickDisable(textMessagePanelUserBlocked, 5);
		showMessageNotify("#FFFFFF", "red", "Error", textMessageNotifyUserBlocked, 5);
	} else if (data.code == "225") {
		eventButtonLoginClickDisable(textMessagePanelUserExpire, 5);
		showMessageNotify("#FFFFFF", "red", "Error", textMessageNotifyUserExpire, 5);
	}

}

/*
function html_validateLogin(formData,textMessagePanelLengthPassword){
	
	if (formData.username == "" || formData.password == "") {
		eventButtonLoginClickDisable(textMessagePanelEmptyFields, 5);
		return false;
	}else if (formData.password.length < 6) {
		eventButtonLoginClickDisable(textMessagePanelLengthPassword, 5);
		return false;
	}else{
		return true;
	}
	
}
*/


function html_validateLogin(formData){
	
	var flag=false;
	
	if (formData.username == "" || formData.password == "") {
		console.log("pase x campos vacios");
		eventButtonLoginClickDisable(textMessagePanelEmptyFields, 5);
		flag=true;
	}else if (formData.password.length < 6) {
		console.log("pase x tamaño < 6");		
		eventButtonLoginClickDisable(textMessagePanelLengthPassword, 5);
		flag=true;
	}
	
	if(flag)
		return false;
	else
		return true;
	
}
 
 

function get_AccessLogin(data,formData) {

	var accessUser = {
		'nameGroup' : data.group,
		'nameUser' : data.name,
		'groupPrivileges' : data.privileges,
		'lang' : formData.lang,
		'password' : formData.password,
		'username' : formData.username
	};

	$.ajax({
		type : "POST",
		url : "../ajax/login/accessLogin.php",
		data : accessUser,
		dataType : "json",
		encode : true
	}).done(function(data) {
		if (!data.success) {
			if (data.errors.session) {
				window.location.href = data.redirect;
			}
		} else {
			window.location.href = data.redirection;
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {
		showMessageErrorServer();
		get_FailErrorLoadAjax(jqXHR, textStatus, errorThrown);
	});
}
