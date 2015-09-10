var url = {
	"read" : "/techwizard/general/getParamv2/"
};

var parametros;
var textError, textErrorMessageFind, textErrorMessageDelete, textErrorMessageAdd, textErrorMessageUpdate, textSuccessMessageDelete, textSuccessMessageAdd, textSuccessMessageUpdate, nameLowercase, nameUppercase, textUpdate, textAdd, textUpdateButton, textDelete, textAccess, textInsert, textFieldRequired, textDeleteMessage, textErrorDataBase, textApplyChangeButton;

/* download */
var textErrorValidateTitle1, textErrorValidateSubTitle1_1, textErrorValidateSubTitle2_1;
var textErrorValidateTitle2, textErrorValidateSubTitle1_2, textErrorValidateSubTitle2_2, textErrorValidateSubTitle3_2;
var textErrorValidateTitle8, textErrorValidateSubTitle1_8, textErrorValidateSubTitle2_8, textErrorValidateSubTitle3_8;
var textErrorValidateTitle9, textErrorValidateSubTitle1_9, textErrorValidateSubTitle2_9, textErrorValidateSubTitle3_9;

/* upload */
var textErrorValidateTitle10, textErrorValidateSubTitle1_10, textErrorValidateSubTitle2_10;
var textErrorValidateTitle11, textErrorValidateSubTitle1_11, textErrorValidateSubTitle2_11, textErrorValidateSubTitle3_11;
var textErrorValidateTitle12, textErrorValidateSubTitle1_12, textErrorValidateSubTitle2_12, textErrorValidateSubTitle3_12;
var textErrorValidateTitle13, textErrorValidateSubTitle1_13, textErrorValidateSubTitle2_13, textErrorValidateSubTitle3_13;

/* ping */
var textErrorValidateTitle3, textErrorValidateSubTitle1_3, textErrorValidateSubTitle2_3;
var textErrorValidateTitle4, textErrorValidateSubTitle1_4, textErrorValidateSubTitle2_4, textErrorValidateSubTitle3_4;

/* dns */
var textErrorValidateTitle14, textErrorValidateSubTitle1_14, textErrorValidateSubTitle2_14;

/* traceroute */
var textErrorValidateTitle15, textErrorValidateSubTitle1_15, textErrorValidateSubTitle2_15;
var textErrorValidateTitle16, textErrorValidateSubTitle1_16, textErrorValidateSubTitle2_16, textErrorValidateSubTitle3_16;

/* vu meter */
var textErrorValidateTitle5, textErrorValidateSubTitle1_5, textErrorValidateSubTitle2_5, textErrorValidateSubTitle3_5;

/* habitaciones */
var textErrorValidateTitle19, textErrorValidateSubTitle1_19, textErrorValidateSubTitle2_19, textErrorValidateSubTitle3_19;
var textErrorValidateTitle20, textErrorValidateSubTitle1_20, textErrorValidateSubTitle2_20, textErrorValidateSubTitle3_20;

/* speedtest */
var textErrorValidateTitle6, textErrorValidateSubTitle1_6, textErrorValidateSubTitle2_6, textErrorValidateSubTitle3_6;
var textErrorValidateTitle7, textErrorValidateSubTitle1_7, textErrorValidateSubTitle2_7, textErrorValidateSubTitle3_7;

var textErrorValidateTitle17, textErrorValidateSubTitle1_17, textErrorValidateSubTitle2_17;
var textErrorValidateTitle18, textErrorValidateSubTitle1_18, textErrorValidateSubTitle2_18, textErrorValidateSubTitle3_18;

switch(language) {
case 'es':

	textError = "Error";
	textErrorMessageFind = "No se pudo encontrar la información seleccionada";
	textErrorMessageDelete = "No se pudo eliminar la información seleccionada";
	textErrorMessageAdd = "No se pudo eliminar la información seleccionada";
	textErrorMessageUpdate = "No se pudo modificar la información seleccionada";

	textSuccessMessageDelete = "Información eliminada satisfactoriamente";
	textSuccessMessageAdd = "Información agregada satisfactoriamente";
	textSuccessMessageUpdate = "Información modificada satisfactoriamente";

	nameLowercase = "pruebas dispositivos";
	nameUppercase = "Pruebas dispositivos";

	textUpdate = "Modificar";
	textAdd = "Agregar";
	textUpdateButton = "Grabar";
	textDelete = "Eliminar";
	textAccess = "Permisos";
	textApplyChangeButton = "Aplicar Cambios";

	textInsert = "Ingresando...";
	textFieldRequired = "Campo Requerido";

	textDeleteMessage = "Está seguro que desea eliminar ";
	textErrorDataBase = "Error en la base de datos";

	/*download*/

	textErrorValidateTitle1 = "Error URL Descarga, ";
	textErrorValidateSubTitle1_1 = "el texto es requerido.";
	textErrorValidateSubTitle2_1 = "solo puedes ingresar letras y números entre un rango de 5 a 300 caracteres.";

	textErrorValidateTitle2 = "Error Time out Descarga, ";
	textErrorValidateSubTitle1_2 = "el texto es requerido.";
	textErrorValidateSubTitle2_2 = "solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_2 = "solo puedes ingresar números entre un rango de 0 a 120.";

	textErrorValidateTitle8 = "Error Sesiones Descarga, ";
	textErrorValidateSubTitle1_8 = "el texto es requerido.";
	textErrorValidateSubTitle2_8 = "solo puedes ingresar números entre un rango de 1 a 2 caracteres.";
	textErrorValidateSubTitle3_8 = "solo puedes ingresar números entre un rango de 0 a 15.";

	textErrorValidateTitle9 = "Error % Aceptación de Prueba, ";
	textErrorValidateSubTitle1_9 = "el texto es requerido.";
	textErrorValidateSubTitle2_9 = "solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_9 = "solo puedes ingresar números entre un rango de 0 a 100.";

	/*upload*/

	textErrorValidateTitle10 = "Error URL Subida, ";
	textErrorValidateSubTitle1_10 = "el texto es requerido.";
	textErrorValidateSubTitle2_10 = "solo puedes ingresar letras y números entre un rango de 5 a 300 caracteres.";

	textErrorValidateTitle11 = "Error Time out Subida, ";
	textErrorValidateSubTitle1_11 = "el texto es requerido.";
	textErrorValidateSubTitle2_11 = "solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_11 = "solo puedes ingresar números entre un rango de 0 a 120.";

	textErrorValidateTitle12 = "Error Sesiones Subida, ";
	textErrorValidateSubTitle1_12 = "el texto es requerido.";
	textErrorValidateSubTitle2_12 = "solo puedes ingresar números entre un rango de 1 a 2 caracteres.";
	textErrorValidateSubTitle3_12 = "solo puedes ingresar números entre un rango de 0 a 15.";

	textErrorValidateTitle13 = "Error % Aceptación de Prueba, ";
	textErrorValidateSubTitle1_13 = "el texto es requerido.";
	textErrorValidateSubTitle2_13 = "solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_13 = "solo puedes ingresar números entre un rango de 0 a 100.";

	/* ping */

	textErrorValidateTitle3 = "Error Url Ping, ";
	textErrorValidateSubTitle1_3 = "el texto es requerido.";
	textErrorValidateSubTitle2_3 = "solo puedes ingresar números entre un rango de 5 a 300 caracteres.";

	textErrorValidateTitle4 = "Error Cantidad Pings, ";
	textErrorValidateSubTitle1_4 = "el texto es requerido.";
	textErrorValidateSubTitle2_4 = "solo puedes ingresar números entre un rango de 1 a 2 caracteres.";
	textErrorValidateSubTitle3_4 = "solo puedes ingresar números entre un rango de 0 a 15.";

	/* dns */

	textErrorValidateTitle14 = "Error Url Dns, ";
	textErrorValidateSubTitle1_14 = "el texto es requerido.";
	textErrorValidateSubTitle2_14 = "solo puedes ingresar números entre un rango de 5 a 300 caracteres.";

	/* traceroute */

	textErrorValidateTitle15 = "Error Url Traceroute, ";
	textErrorValidateSubTitle1_15 = "el texto es requerido.";
	textErrorValidateSubTitle2_15 = "solo puedes ingresar números entre un rango de 5 a 300 caracteres.";

	textErrorValidateTitle16 = "Error Hops, ";
	textErrorValidateSubTitle1_16 = "el texto es requerido.";
	textErrorValidateSubTitle2_16 = "solo puedes ingresar números entre un rango de 1 a 2 caracteres.";
	textErrorValidateSubTitle3_16 = "solo puedes ingresar números entre un rango de 20 a 50.";

	/* VU Meter */
	textErrorValidateTitle5 = "Error Vu Meter, ";
	textErrorValidateSubTitle1_5 = "el texto es requerido.";
	textErrorValidateSubTitle2_5 = "solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_5 = "solo puedes ingresar números entre un rango de 0 a 100.";

	/* minimo habitaciones */
	textErrorValidateTitle19 = "Error Habitaciones, ";
	textErrorValidateSubTitle1_19 = "el texto es requerido.";
	textErrorValidateSubTitle2_19 = "solo puedes ingresar números entre un rango de 1 a 2 caracteres.";
	textErrorValidateSubTitle3_19 = "solo puedes ingresar números entre un rango de 0 a 50.";

	/* maximo habitaciones */
	textErrorValidateTitle20 = "Error Habitaciones, ";
	textErrorValidateSubTitle1_20 = "el texto es requerido.";
	textErrorValidateSubTitle2_20 = "solo puedes ingresar números entre un rango de 1 a 2 caracteres.";
	textErrorValidateSubTitle3_20 = "solo puedes ingresar números entre un rango de 0 a 50.";

	/* speedtest */
	textErrorValidateTitle6 = "Error % aceptación prueba nacional, ";
	textErrorValidateSubTitle1_6 = "el texto es requerido.";
	textErrorValidateSubTitle2_6 = "solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_6 = "solo puedes ingresar números entre un rango de 0 a 100.";

	textErrorValidateTitle7 = "Error % aceptación prueba internacional, ";
	textErrorValidateSubTitle1_7 = "el texto es requerido.";
	textErrorValidateSubTitle2_7 = "solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_7 = "solo puedes ingresar números entre un rango de 0 a 100.";

	textErrorValidateTitle17 = "Error URL Speedtest, ";
	textErrorValidateSubTitle1_17 = "el texto es requerido.";
	textErrorValidateSubTitle2_17 = "solo puedes ingresar letras y números entre un rango de 5 a 300 caracteres.";

	textErrorValidateTitle18 = "Error % Tamaño Flash Ookla, ";
	textErrorValidateSubTitle1_18 = "el texto es requerido.";
	textErrorValidateSubTitle2_18 = "solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_18 = "solo puedes ingresar números entre un rango de 0 a 100.";

	break;
case 'en':

	textError = "Error";
	textErrorMessageFind = "Could not find information selected";
	textErrorMessageDelete = "Could not remove information selected";
	textErrorMessageAdd = "Could not add information";
	textErrorMessageUpdate = "Could not update information selected";

	textSuccessMessageDelete = "Information deleted successfully";
	textSuccessMessageAdd = "Information added successfully";
	textSuccessMessageUpdate = "Info modified successfully";

	nameLowercase = "test devices";
	nameUppercase = "Test Devices";

	textUpdate = "Update";
	textAdd = "Add";
	textUpdateButton = "Update";
	textDelete = "Delete";
	textAccess = "Access";

	textApplyChangeButton = "Apply Changes";
	textInsert = "Insert...";
	textFieldRequired = "Field Required";

	textDeleteMessage = "Are you sure to remove ";
	textErrorDataBase = "Database Error";

	/*download*/
	textErrorValidateTitle1 = "Error Url Download, ";
	textErrorValidateSubTitle1_1 = "Field Required.";
	textErrorValidateSubTitle2_1 = "you can only enter letters and numbers in a range of 5 to 300 characters.";

	textErrorValidateTitle2 = "Error Time out Download, ";
	textErrorValidateSubTitle1_2 = "Field Required.";
	textErrorValidateSubTitle2_2 = "you can only enter numbers in a range of 1-3 characters. ";
	textErrorValidateSubTitle3_2 = "you can only enter numbers in a range of 0-120.";

	textErrorValidateTitle8 = "Error Sessions Download, ";
	textErrorValidateSubTitle1_8 = "Field Required.";
	textErrorValidateSubTitle2_8 = "you can only enter numbers in a range of 1-2 characters. ";
	textErrorValidateSubTitle3_8 = "you can only enter numbers in a range of 0-15.";

	textErrorValidateTitle9 = "Error % Accept Test, ";
	textErrorValidateSubTitle1_9 = "Field Required.";
	textErrorValidateSubTitle2_9 = "you can only enter numbers in a range of 1-3 characters.";
	textErrorValidateSubTitle3_9 = "you can only enter numbers in a range of 0-100.";

	/*upload*/
	textErrorValidateTitle10 = "Error Url Upload, ";
	textErrorValidateSubTitle1_10 = "Field Required.";
	textErrorValidateSubTitle2_10 = "you can only enter letters and numbers in a range of 5 to 300 characters.";

	textErrorValidateTitle11 = "Error Time out Upload, ";
	textErrorValidateSubTitle1_11 = "Field Required.";
	textErrorValidateSubTitle2_11 = "you can only enter numbers in a range of 1-3 characters. ";
	textErrorValidateSubTitle3_11 = "you can only enter numbers in a range of 0-120.";

	textErrorValidateTitle12 = "Error Sessions Upload, ";
	textErrorValidateSubTitle1_12 = "Field Required.";
	textErrorValidateSubTitle2_12 = "you can only enter numbers in a range of 1-2 characters. ";
	textErrorValidateSubTitle3_12 = "you can only enter numbers in a range of 0-15.";

	textErrorValidateTitle13 = "Error % Accept Test, ";
	textErrorValidateSubTitle1_13 = "Field Required.";
	textErrorValidateSubTitle2_13 = "you can only enter numbers in a range of 1-3 characters.";
	textErrorValidateSubTitle3_13 = "you can only enter numbers in a range of 0-100.";

	/*ping*/
	textErrorValidateTitle3 = "Error Url Ping, ";
	textErrorValidateSubTitle1_3 = "Field Required.";
	textErrorValidateSubTitle2_3 = "you can only enter letters and numbers in a range of 5 to 300 characters.";

	textErrorValidateTitle4 = "Error Numbers Pings, ";
	textErrorValidateSubTitle1_4 = "Field Required.";
	textErrorValidateSubTitle2_4 = "you can only enter numbers in a range of 1-2 characters. ";
	textErrorValidateSubTitle3_4 = "you can only enter numbers in a range of 0-15.";

	/* dns */

	textErrorValidateTitle14 = "Error Url Dns, ";
	textErrorValidateSubTitle1_14 = "Field Required.";
	textErrorValidateSubTitle2_14 = "you can only enter letters and numbers in a range of 5 to 300 characters.";

	/* traceroute */

	textErrorValidateTitle15 = "Error Url Traceroute, ";
	textErrorValidateSubTitle1_15 = "Field Required.";
	textErrorValidateSubTitle2_15 = "you can only enter letters and numbers in a range of 5 to 300 characters.";

	textErrorValidateTitle16 = "Error Hops, ";
	textErrorValidateSubTitle1_16 = "Field Required.";
	textErrorValidateSubTitle2_16 = "you can only enter numbers in a range of 1-2 characters. ";
	textErrorValidateSubTitle3_16 = "you can only enter numbers in a range of 20-50.";

	/*VU Meter*/
	textErrorValidateTitle5 = "Error Vu Meter, ";
	textErrorValidateSubTitle1_5 = "Field Required.";
	textErrorValidateSubTitle2_5 = "you can only enter numbers in a range of 1-3 characters. ";
	textErrorValidateSubTitle3_5 = "you can only enter numbers in a range of 0-100.";

	/* minimo habitaciones */
	textErrorValidateTitle19 = "Error Rooms, ";
	textErrorValidateSubTitle1_19 = "Field Required.";
	textErrorValidateSubTitle2_19 = "you can only enter numbers in a range of 1-2 characters. ";
	textErrorValidateSubTitle3_19 = "you can only enter numbers in a range of 0-50.";

	/* maximo habitaciones */
	textErrorValidateTitle20 = "Error Rooms, ";
	textErrorValidateSubTitle1_20 = "Field Required.";
	textErrorValidateSubTitle2_20 = "you can only enter numbers in a range of 1-2 characters. ";
	textErrorValidateSubTitle3_20 = "you can only enter numbers in a range of 0-50.";

	/*speedtest*/
	textErrorValidateTitle6 = "Error % accept national test, ";
	textErrorValidateSubTitle1_6 = "Field Required.";
	textErrorValidateSubTitle2_6 = "you can only enter numbers in a range of 1-3 characters. ";
	textErrorValidateSubTitle3_6 = "you can only enter numbers in a range of 0-100.";

	textErrorValidateTitle7 = "Error % accept international test, ";
	textErrorValidateSubTitle1_7 = "Field Required.";
	textErrorValidateSubTitle2_7 = "you can only enter numbers in a range of 1-3 characters. ";
	textErrorValidateSubTitle3_7 = "you can only enter numbers in a range of 0-100.";

	textErrorValidateTitle17 = "Error URL Speedtest, ";
	textErrorValidateSubTitle1_17 = "Field Required.";
	textErrorValidateSubTitle2_17 = "you can only enter letters and numbers in a range of 5 to 300 characters.";

	textErrorValidateTitle18 = "Error % Flash Ookla Size, ";
	textErrorValidateSubTitle1_18 = "Field Required.";
	textErrorValidateSubTitle2_18 = "you can only enter numbers in a range of 1-3 characters.";
	textErrorValidateSubTitle3_18 = "you can only enter numbers in a range of 0-100.";

	break;
case 'pt_BR':

	textError = "Erro";
	textErrorMessageFind = "Não foi possível encontrar informações selecionadas";
	textErrorMessageDelete = "Falha ao excluir as informações selecionadas";
	textErrorMessageAdd = "Falha ao adicionar as informações selecionadas";
	textErrorMessageUpdate = "Falha ao modificar as informações selecionadas";

	textSuccessMessageDelete = "Informações excluído com sucesso";
	textSuccessMessageAdd = "Informação adicionada com sucesso";
	textSuccessMessageUpdate = "Informações modificado com sucesso";

	nameLowercase = "teste dispositivos";
	nameUppercase = "Teste dispositivos";

	textUpdate = "Alterar";
	textAdd = "Adicionar";
	textUpdateButton = "Gravar";
	textDelete = "Eliminar";

	textInsert = "Acessando...";
	textFieldRequired = "Campo Requerido";

	textDeleteMessage = "Tem certeza de que deseja eliminar ";
	textErrorDataBase = "Erro no banco de dados";

	/*download*/

	textErrorValidateTitle1 = "Erro Url Descarga, ";
	textErrorValidateSubTitle1_1 = "Campo Requerido.";
	textErrorValidateSubTitle2_1 = "só é possível inserir letras e números em uma faixa de 5 a 300 caracteres.";

	textErrorValidateTitle2 = "Erro Time out Descarga, ";
	textErrorValidateSubTitle1_2 = "Campo Requerido.";
	textErrorValidateSubTitle2_2 = "só é possível inserir números em uma faixa de 1 a 3 caracteres. ";
	textErrorValidateSubTitle3_2 = "só é possível inserir números em uma faixa de 0 a 100.";

	textErrorValidateTitle8 = "Erro Sessão Descarga, ";
	textErrorValidateSubTitle1_8 = "Campo Requerido.";
	textErrorValidateSubTitle2_8 = "só é possível inserir números em uma faixa de 1 a 2 caracteres. ";
	textErrorValidateSubTitle3_8 = "só é possível inserir números em uma faixa de 0 a 15.";

	textErrorValidateTitle9 = "Erro % Aceitação Teste, ";
	textErrorValidateSubTitle1_9 = "Campo Requerido.";
	textErrorValidateSubTitle2_9 = "só é possível inserir números em uma faixa de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_9 = "só é possível inserir números em uma faixa de 0 a 100.";

	/*upload*/

	textErrorValidateTitle10 = "Erro Url Carga, ";
	textErrorValidateSubTitle1_10 = "Campo Requerido.";
	textErrorValidateSubTitle2_10 = "só é possível inserir letras e números em uma faixa de 5 a 300 caracteres.";

	textErrorValidateTitle11 = "Erro Time out Carga, ";
	textErrorValidateSubTitle1_11 = "Campo Requerido.";
	textErrorValidateSubTitle2_11 = "só é possível inserir números em uma faixa de 1 a 3 caracteres. ";
	textErrorValidateSubTitle3_11 = "só é possível inserir números em uma faixa de 0 a 100.";

	textErrorValidateTitle12 = "Erro Sessão Carga, ";
	textErrorValidateSubTitle1_12 = "Campo Requerido.";
	textErrorValidateSubTitle2_12 = "só é possível inserir números em uma faixa de 1 a 2 caracteres. ";
	textErrorValidateSubTitle3_12 = "só é possível inserir números em uma faixa de 0 a 15.";

	textErrorValidateTitle13 = "Erro % Aceitação Teste, ";
	textErrorValidateSubTitle1_13 = "Campo Requerido.";
	textErrorValidateSubTitle2_13 = "só é possível inserir números em uma faixa de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_13 = "só é possível inserir números em uma faixa de 0 a 100.";

	/*ping*/

	textErrorValidateTitle3 = "Erro Url Ping, ";
	textErrorValidateSubTitle1_3 = "Campo Requerido.";
	textErrorValidateSubTitle2_3 = "só é possível inserir letras e números em uma faixa de 5 a 300 caracteres.";

	textErrorValidateTitle4 = "Erro Quantidade de Pings, ";
	textErrorValidateSubTitle1_4 = "Campo Requerido.";
	textErrorValidateSubTitle2_4 = "só é possível inserir números em uma faixa de 1 a 2 caracteres. ";
	textErrorValidateSubTitle3_4 = "só é possível inserir letras e números em uma faixa de 0 a 15 caracteres.";

	/* dns */

	textErrorValidateTitle14 = "Erro Url Dns, ";
	textErrorValidateSubTitle1_14 = "Campo Requerido.";
	textErrorValidateSubTitle2_14 = "só é possível inserir letras e números em uma faixa de 5 a 300 caracteres.";

	/* traceroute */

	textErrorValidateTitle15 = "Erro Url Traceroute, ";
	textErrorValidateSubTitle1_15 = "Campo Requerido.";
	textErrorValidateSubTitle2_15 = "só é possível inserir letras e números em uma faixa de 5 a 300 caracteres.";

	textErrorValidateTitle16 = "Erro Hops, ";
	textErrorValidateSubTitle1_16 = "Campo Requerido.";
	textErrorValidateSubTitle2_16 = "só é possível inserir números em uma faixa de 1 a 2 caracteres. ";
	textErrorValidateSubTitle3_16 = "só é possível inserir letras e números em uma faixa de 20 a 50.";

	/*VU Meter*/
	textErrorValidateTitle5 = "Erro Vu Meter, ";
	textErrorValidateSubTitle1_5 = "Campo Requerido.";
	textErrorValidateSubTitle2_5 = "só é possível inserir números em uma faixa de 1 a 3 caracteres. ";
	textErrorValidateSubTitle3_5 = "só é possível inserir números em uma faixa de 0 a 100.";

	/* minimo habitaciones */
	textErrorValidateTitle19 = "Erro Quartos, ";
	textErrorValidateSubTitle1_19 = "Campo Requerido.";
	textErrorValidateSubTitle2_19 = "só é possível inserir números em uma faixa de 1 a 2 caracteres. ";
	textErrorValidateSubTitle3_19 = "só é possível inserir números em uma faixa de 0 a 50.";

	/* maximo habitaciones */
	textErrorValidateTitle20 = "Erro Quartos, ";
	textErrorValidateSubTitle1_20 = "Campo Requerido.";
	textErrorValidateSubTitle2_20 = "só é possível inserir números em uma faixa de 1 a 2 caracteres. ";
	textErrorValidateSubTitle3_20 = "só é possível inserir números em uma faixa de 0 a 50.";

	/*Speedtest*/
	textErrorValidateTitle6 = "Erro % aceitação teste nacional, ";
	textErrorValidateSubTitle1_6 = "Campo Requerido.";
	textErrorValidateSubTitle2_6 = "só é possível inserir números em uma faixa de 1 a 3 caracteres. ";
	textErrorValidateSubTitle3_6 = "só é possível inserir números em uma faixa de 0 a 100.";

	textErrorValidateTitle7 = "Erro % aceitação teste internacional, ";
	textErrorValidateSubTitle1_7 = "Campo Requerido.";
	textErrorValidateSubTitle2_7 = "só é possível inserir números em uma faixa de 1 a 3 caracteres. ";
	textErrorValidateSubTitle3_7 = "só é possível inserir números em uma faixa de 0 a 100.";

	textErrorValidateTitle17 = "Erro Url Speedtest, ";
	textErrorValidateSubTitle1_17 = "Campo Requerido.";
	textErrorValidateSubTitle2_17 = "só é possível inserir letras e números em uma faixa de 5 a 300 caracteres.";

	textErrorValidateTitle18 = "Erro % Tamanho Flash Ookla, ";
	textErrorValidateSubTitle1_18 = "Campo Requerido.";
	textErrorValidateSubTitle2_18 = "só é possível inserir números em uma faixa de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_18 = "só é possível inserir números em uma faixa de 0 a 100.";

	break;
default:
}

var changeFirstLetterToUppercaseRestLowercase = function(value) {

	return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();

};

var clearSettingAplicationFormElements = function() {
	$("input").val("");
	$("form").find('input[type="text"]').css("background-color", "#FFFFFF");
	$("form").find('input[type="text"]').css("border-color", "#D9D9D9");
	$("form").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
	$('#main_ValidationMessage').html("");
};

var setDefaultValuesSettingAplicationFormElements = function() {
	$("input[name='settingAplicationInputTimeoutDownload'],input[name='settingAplicationInputTimeoutUpload']").val("15");
	$("input[name='settingAplicationInputSessionsDownload'],input[name='settingAplicationInputSessionsUpload']").val("1");
	$("input[name='settingAplicationInputHopsTraceroute']").val("30");
	$("input[name='settingAplicationInputSpeedtestSize']").val("100");
	$("input[name='settingAplicationInputSpeedtestPosition']").val("0");
	$("input[name='settingAplicationInputSpeedtestYPosition']").val("0");
};

var getObjectParameters = function(ajax_data, deviceSelect, groupSelect) {

	var ajax_data_update = {
		"id" : ajax_data.id.val(),
		"device" : deviceSelect,

		"url_down" : ajax_data.urlDownload.val().trim(),
		"time_out_down" : ajax_data.timeoutDownload.val().trim(),
		"sessions_down" : ajax_data.sessionsDownload.val().trim(),
		"accepttest_down" : ajax_data.acceptTestDownload.val().trim(),

		"url_up" : ajax_data.urlUpload.val().trim(),
		"time_out_up" : ajax_data.timeoutUpload.val().trim(),
		"sessions_up" : ajax_data.sessionsUpload.val().trim(),
		"accepttest_up" : ajax_data.acceptTestUpload.val().trim(),

		"url_ping" : ajax_data.urlPing.val().trim(),
		"num_ping" : ajax_data.countPings.val().trim(),

		"url_dns" : ajax_data.urlDns.val().trim(),

		"url_traceroute" : ajax_data.urlTraceroute.val().trim(),
		"hops_traceroute" : ajax_data.hopsTraceroute.val().trim(),

		"vumeter" : ajax_data.vuMeter.val().trim(),
		"min_rooms_certificate" : ajax_data.minRooms.val().trim(),
		"max_rooms_certificate" : ajax_data.maxRooms.val().trim(),
		"force_certificate_both_frequencies" : $("div#buttonsForceCertificateBothFrequencies button.radiobuttonButtonSelect").val()
	};

	if (deviceSelect == "todos" || deviceSelect == "windows") {

		ajax_data_update.wired_test = $("div#buttonsEnableSpeedtest button.radiobuttonButtonSelect").val();
		ajax_data_update.url_speedtest = ajax_data.urlSpeedtest.val().trim();
		ajax_data_update.speedTest = $("div#buttonsSpeedtestAcceptTest button.radiobuttonButtonSelect").val();
		ajax_data_update.Pruebas_ST = {
			"nacional" : {
				"valor_aceptado" : ajax_data.testSpeedtestNacional.val().trim()
			},
			"internacional" : {
				"valor_aceptado" : ajax_data.testSpeedtestInternacional.val().trim()
			}
		};

		ajax_data_update.speedtest_size = ajax_data.speedTestSize.val().trim();
		ajax_data_update.speedtest_x_position = ajax_data.speedTestPosition.val().trim();
		ajax_data_update.speedtest_y_position = ajax_data.speedTestYPosition.val().trim();

	}

	if (groupSelect != "todos") {
		ajax_data_update.groupId = groupSelect;
	}

	return ajax_data_update;

};

var updateParametersGroup = function(ajax_data_update) {

};

var updateParameters = function(ajax_data_update) {

};

//var updateSettingAplication = function(ajax_data,valueRadio,valueRadioForceCertificate,valueRadioFormatDate,valueRadioFormatNumeric) {
var updateSettingAplication = function(ajax_data) {

	//	console.log("before send");

	/*
	 $("button[name='settingAplicationFormButtonApplyChange']").prop("disabled", true);
	 $("button[name='settingAplicationFormButtonApplyChange']").html('<i class="icon-loading"></i> Loading...');
	 $("button[name='settingAplicationFormButtonApplyChange']").text("Loading...");
	 */
	var groupSelect = $("div#buttonsGroups button.radiobuttonButtonSelect").val();
	var deviceSelect = $("div#buttonsDevices button.radiobuttonButtonSelect").val();
	var objectParameters = getObjectParameters(ajax_data, deviceSelect, groupSelect);

	var urlSend = (groupSelect == "todos") ? url.updateParametersGlobal : url.updateParametersGroup;

	/*
	 $.ajax({
	 type 		: "POST",
	 url 		: urlSend,
	 data 		: objectParameters,
	 dataType 	: "json",
	 encode 		: true
	 }).done(function(data) {

	 if (data.status=="false") {

	 var not = $.Notify({
	 caption : "Error",
	 content : textErrorMessageUpdate,
	 timeout : 5000, // 5 seconds
	 style : ( {
	 background : 'red',
	 color : '#FFFFFF'
	 })
	 });
	 } else if (data.status=="true" && data.code=="200") {
	 //	console.log(data);
	 var not = $.Notify({
	 caption : '<i class="icon-checkmark"></i> '+nameUppercase,
	 content : textSuccessMessageUpdate,
	 timeout : 4500, // 4.5 seconds
	 style : ( {
	 background : '#60A917',
	 color : '#FFFFFF'
	 })
	 });
	 }

	 }).fail(function(jqXHR, textStatus, errorThrown) {

	 //		failGroupSection(jqXHR, textStatus, errorThrown);

	 }).always(function() {

	 $("button[name='settingAplicationFormButtonApplyChange']").prop("disabled", false);
	 $("button[name='settingAplicationFormButtonApplyChange']").html(textApplyChangeButton);

	 });
	 //	end ajax

	 */

};
//	end	updateSettingAplication

var disableKeyboardKeys = function() {

	/*download*/
	$("input[name='settingAplicationInputTimeoutDownload']").validCamp('1234567890');
	$("input[name='settingAplicationInputSessionsDownload']").validCamp('1234567890');
	$("input[name='settingAplicationInputAcceptTestDownload']").validCamp('1234567890');

	/*upload*/
	$("input[name='settingAplicationInputTimeoutUpload']").validCamp('1234567890');
	$("input[name='settingAplicationInputSessionsUpload']").validCamp('1234567890');
	$("input[name='settingAplicationInputAcceptTestUpload']").validCamp('1234567890');

	/*ping*/
	$("input[name='settingAplicationInputCountPings']").validCamp('1234567890');

	/*traceroute*/
	$("input[name='settingAplicationInputHopsTraceroute']").validCamp('1234567890');

	/*others*/
	$("input[name='settingAplicationInputVuMeter']").validCamp('1234567890');
	$("input[name='settingAplicationInputMinRoomsCertificate']").validCamp('1234567890');
	$("input[name='settingAplicationInputMaxRoomsCertificate']").validCamp('1234567890');

	/*speedtest*/
	$("input[name='settingAplicationInputTestSpeedtestNacional']").validCamp('1234567890');
	$("input[name='settingAplicationInputTestSpeedtestInternacional']").validCamp('1234567890');
	$("input[name='settingAplicationInputSpeedtestSize']").validCamp('1234567890');
	$("input[name='settingAplicationInputSpeedtestPosition']").validCamp('1234567890');
	$("input[name='settingAplicationInputSpeedtestYPosition']").validCamp('1234567890');

};
//	end	disableKeyboardKeys
/*
 function generateJsonParameters(test, device, version, paramsv2, groups, nameGroup) {

 var groupPosition;
 for ( i = 0; i < groups.length; i++) {
 if (groups[i].name == nameGroup)
 groupPosition = i;
 }

 if (groups[groupPosition].testDevices[device][test]) {
 return groups[groupPosition].testDevices[device][test];

 } else if (groups[groupPosition].testDevices.global[test]) {
 return groups[groupPosition].testDevices.global[test];

 } else if (paramsv2.testDevices[device][test]) {
 return paramsv2.testDevices[device][test];

 } else {
 return paramsv2.testDevices.global[test];
 }

 }
 */

function checkKeyExist(parametros, parametersGroup, deviceSelect, test) {

	deviceSelect=(deviceSelect=="todos") ? "global": deviceSelect;
	
	if (parametersGroup[deviceSelect].hasOwnProperty(test)){
		return true;
	}else{
		return false;
	}

}

function getParametersVersion2(parameters, parametersGroup, device) {

	if (parametersGroup.hasOwnProperty('url_down'))

		var data = {

			url_down : generateJsonParameters('url_down', device, version, paramsv2, groups, groupName),
			time_out_down : generateJsonParameters('time_out_down', device, version, paramsv2, groups, groupName),
			sessions_down : generateJsonParameters('sessions_down', device, version, paramsv2, groups, groupName),
			accepttest_down : generateJsonParameters('accepttest_down', device, version, paramsv2, groups, groupName),

			url_up : generateJsonParameters('url_up', device, version, paramsv2, groups, groupName),
			time_out_up : generateJsonParameters('time_out_up', device, version, paramsv2, groups, groupName),
			sessions_up : generateJsonParameters('sessions_up', device, version, paramsv2, groups, groupName),
			accepttest_up : generateJsonParameters('accepttest_up', device, version, paramsv2, groups, groupName),

			url_ping : generateJsonParameters('url_ping', device, version, paramsv2, groups, groupName),
			num_ping : generateJsonParameters('num_ping', device, version, paramsv2, groups, groupName),
			url_dns : generateJsonParameters('url_dns', device, version, paramsv2, groups, groupName),
			url_traceroute : generateJsonParameters('url_traceroute', device, version, paramsv2, groups, groupName),
			hops_traceroute : generateJsonParameters('hops_traceroute', device, version, paramsv2, groups, groupName),
			vumeter : generateJsonParameters('vumeter', device, version, paramsv2, groups, groupName),
			min_rooms_certificate : generateJsonParameters('min_rooms_certificate', device, version, paramsv2, groups, groupName),
			max_rooms_certificate : generateJsonParameters('max_rooms_certificate', device, version, paramsv2, groups, groupName),
			force_certificate_both_frequencies : generateJsonParameters('force_certificate_both_frequencies', device, version, paramsv2, groups, groupName),
			wired_test : generateJsonParameters('wired_test', device, version, paramsv2, groups, groupName),
			speedTest : generateJsonParameters('speedTest', device, version, paramsv2, groups, groupName),
			Pruebas_ST : {
				internacional : {
					valor_aceptado : generateJsonParameters('pruebas_st_int_valor_aceptado', device, version, paramsv2, groups, groupName)
				},
				nacional : {
					valor_aceptado : generateJsonParameters('pruebas_st_nac_valor_aceptado', device, version, paramsv2, groups, groupName)
				}
			},
			url_speedtest : generateJsonParameters('url_speedtest', device, version, paramsv2, groups, groupName),
			speedtest_size : generateJsonParameters('speedtest_size', device, version, paramsv2, groups, groupName),
			speedtest_x_position : generateJsonParameters('speedtest_x_position', device, version, paramsv2, groups, groupName),
			speedtest_y_position : generateJsonParameters('speedtest_y_position', device, version, paramsv2, groups, groupName),
			FORMAT0002 : "0,000.00",
			FORMAT0001 : "mm/dd/yyyy"
		};
	//data

	return data;

}

$(function() {

	disableKeyboardKeys();

	var devicesAndSystem = $("legend#buttonsTestDevicesAndSystem button.radiobuttonButtonSelect").val();
	var groupSelect = $("div#buttonsGroups button.radiobuttonButtonSelect").val();
	var deviceSelect = $("div#buttonsDevices button.radiobuttonButtonSelect").val();

	if (devicesAndSystem == "devices") {
		$("div#device").show();
		$("div#system").hide();

		if (deviceSelect == "todos" || deviceSelect == "windows") {
			$("div#device").show();
			$("div#system").hide();
			$("div#speedtest").show();
		}

	} else if (devicesAndSystem == "system") {
		$("div#device").hide();
		$("div#system").show();
	}

	var ajax_data = {

		"id" : $("input[name='hiddenvalue']"),

		"urlDownload" : $("input[name='settingAplicationInputUrlDownload']"),
		"timeoutDownload" : $("input[name='settingAplicationInputTimeoutDownload']"),
		"sessionsDownload" : $("input[name='settingAplicationInputSessionsDownload']"),
		"acceptTestDownload" : $("input[name='settingAplicationInputAcceptTestDownload']"),

		"urlUpload" : $("input[name='settingAplicationInputUrlUpload']"),
		"timeoutUpload" : $("input[name='settingAplicationInputTimeoutUpload']"),
		"sessionsUpload" : $("input[name='settingAplicationInputSessionsUpload']"),
		"acceptTestUpload" : $("input[name='settingAplicationInputAcceptTestUpload']"),

		"urlPing" : $("input[name='settingAplicationInputUrlPing']"),
		"countPings" : $("input[name='settingAplicationInputCountPings']"),

		"urlDns" : $("input[name='settingAplicationInputUrlDns']"),

		"urlTraceroute" : $("input[name='settingAplicationInputUrlTraceroute']"),
		"hopsTraceroute" : $("input[name='settingAplicationInputHopsTraceroute']"),

		"vuMeter" : $("input[name='settingAplicationInputVuMeter']"),
		"minRooms" : $("input[name='settingAplicationInputMinRoomsCertificate']"),
		"maxRooms" : $("input[name='settingAplicationInputMaxRoomsCertificate']"),
		"forceCertificateBothFrequencies" : $("div#forceCertificateBothFrequencies button.radiobuttonButtonSelect").val(),

		"enableSpeedtest" : $("div#enableSpeedtest button.radiobuttonButtonSelect").val(),
		"speedTest" : $("div#buttonsSpeedtestAcceptTest button.radiobuttonButtonSelect").val(),
		"testSpeedtestNacional" : $("input[name='settingAplicationInputTestSpeedtestNacional']"),
		"testSpeedtestInternacional" : $("input[name='settingAplicationInputTestSpeedtestInternacional']"),

		"urlSpeedtest" : $("input[name='settingAplicationInputUrlSpeedtest']"),
		"speedTestSize" : $("input[name='settingAplicationInputSpeedtestSize']"),
		"speedTestPosition" : $("input[name='settingAplicationInputSpeedtestPosition']"),
		"speedTestYPosition" : $("input[name='settingAplicationInputSpeedtestYPosition']"),

	};

	//boton para seleccionar configuraion de dispositivos o sistema
	$("legend#buttonsTestDevicesAndSystem button").on("click", function() {

		$(this).removeClass("inverse").addClass("info");
		$(this).children().show();
		$("legend#buttonsTestDevicesAndSystem button").not(this).children().hide();
		if (!$(this).hasClass("radiobuttonButtonSelect")) {
			$(this).removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
			$("legend#buttonsTestDevicesAndSystem button").not(this).removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");
			$("legend#buttonsTestDevicesAndSystem button").not(this).removeClass("info").addClass("inverse");
		}

		var devicesAndSystem = $(this).val();
		var deviceSelect = $("div#buttonsDevices button.radiobuttonButtonSelect").val();

		if (devicesAndSystem == "devices") {
			$("div#device").show();
			$("div#system").hide();

			if (deviceSelect == "todos" || deviceSelect == "windows") {
				$("div#device").show();
				$("div#system").hide();
				$("div#speedtest").show();
			} else if (deviceSelect == "android" || deviceSelect == "ios") {
				$("div#device").show();
				$("div#system").hide();
				$("div#speedtest").hide();
			}
		} else if (devicesAndSystem == "system") {
			$("div#device").hide();
			$("div#system").show();
		}

	});

	//boton para seleccionar forzar certificaciones si tiene ambas señales de frecuencias
	$("div#buttonsForceCertificateBothFrequencies button").on("click", function() {

		$(this).removeClass("inverse").addClass("info");
		$(this).children().show();
		$("div#buttonsForceCertificateBothFrequencies button").not(this).children().hide();
		if (!$(this).hasClass("radiobuttonButtonSelect")) {
			$(this).removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
			$("div#buttonsForceCertificateBothFrequencies button").not(this).removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");
			$("div#buttonsForceCertificateBothFrequencies button").not(this).removeClass("info").addClass("inverse");
		}

	});

	//boton para habilitar speedtest cableado
	$("div#buttonsEnableSpeedtest button").on("click", function() {

		$(this).removeClass("inverse").addClass("info");
		$(this).children().show();
		$("div#buttonsEnableSpeedtest button").not(this).children().hide();
		if (!$(this).hasClass("radiobuttonButtonSelect")) {
			$(this).removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
			$("div#buttonsEnableSpeedtest button").not(this).removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");
			$("div#buttonsEnableSpeedtest button").not(this).removeClass("info").addClass("inverse");
		}

		if ($(this).val() == "true") {
			$("div#settingAplicationDivSpeedtest").show();
		} else if ($(this).val() == "false") {
			$("div#settingAplicationDivSpeedtest").hide();
		}

	});

	//boton para aceptar test pruebas nacionales, internacionales o todos
	$("div#buttonsSpeedtestAcceptTest button").on("click", function() {

		$(this).children().show();
		$("div#buttonsSpeedtestAcceptTest button").not(this).children().hide();

		//	si el boton presionado no ha sido clickeado pasa a clickeado, se destaca este y el resto pasa a evento no clickeado y no se destaca.
		if (!$(this).hasClass("radiobuttonButtonSelect")) {

			$(this).removeClass("radiobuttonButton");
			$(this).addClass("radiobuttonButtonSelect");

			$("div#buttonsSpeedtestAcceptTest button").not(this).removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");

			//	si el boton presionado ha sido clickeado pasa a clickeado, se destaca este y el resto pasa a evento no clickeado y no se destaca.
		}

	});

	$("button[name='settingAplicationFormButtonApplyChange']").on("click", function() {
		if (validate()) {
			$('#main_ValidationMessage').html("");
			/*
			var valueRadioFormatDate=$("input[name='r3']:checked").val();
			var valueRadioFormatNumeric=$("input[name='r4']:checked").val();

			var valueRadioFormatDate='dd/mm/yyyy';
			var valueRadioFormatNumeric='0,000.00';
			*/
			//			updateSettingAplication(ajax_data,valueRadio,valueRadioForceCertificate,valueRadioFormatDate,valueRadioFormatNumeric);
			updateSettingAplication(ajax_data);
		}
	});

	$("button[name='settingAplicationFormButton_Clean']").on("click", function() {
		clearSettingAplicationFormElements();
		setDefaultValuesSettingAplicationFormElements();
	});

	$("button[name='settingAplicationFormButton_Restore']").on("click", function() {
		getSettingAplication();
	});

});

var getSettingAplication = function() {

//	var url = "/techwizard/general/getParam/";
//	var url = url.read;

	
	var getSettingAplication = $.getJSON(url.read, function(data) {
		
		if (data.status == "false") {
			var message = "Error";

			var not = $.Notify({
				caption : "Error",
				content : message,
				timeout : 5000, // 5 seconds
				style : ( {
					background : 'red',
					color : '#FFFFFF'
				})
			});
		} else if (data.status == "true" && data.code == "200") {

			parametros = data.data[0].testDevices.global;
			var value = data.data[0].testDevices.global;

			var $id = $("input[name='hiddenvalue']");
			var $urlDownload = $("input[name='settingAplicationInputUrlDownload']");
			var $timeoutDownload = $("input[name='settingAplicationInputTimeoutDownload']");
			var $sessionsDownload = $("input[name='settingAplicationInputSessionsDownload']");
			var $acceptTestDownload = $("input[name='settingAplicationInputAcceptTestDownload']");

			var $urlUpload = $("input[name='settingAplicationInputUrlUpload']");
			var $timeoutUpload = $("input[name='settingAplicationInputTimeoutUpload']");
			var $sessionsUpload = $("input[name='settingAplicationInputSessionsUpload']");
			var $acceptTestUpload = $("input[name='settingAplicationInputAcceptTestUpload']");

			var $urlPing = $("input[name='settingAplicationInputUrlPing']");
			var $countPings = $("input[name='settingAplicationInputCountPings']");

			var $urlDns = $("input[name='settingAplicationInputUrlDns']");

			var $urlTraceroute = $("input[name='settingAplicationInputUrlTraceroute']");
			var $hopsTraceroute = $("input[name='settingAplicationInputHopsTraceroute']");

			var $vuMeter = $("input[name='settingAplicationInputVuMeter']");
			var $minRooms = $("input[name='settingAplicationInputMinRoomsCertificate']");
			var $maxRooms = $("input[name='settingAplicationInputMaxRoomsCertificate']");

			var $urlSpeedtest = $("input[name='settingAplicationInputUrlSpeedtest']");
			var $speedTest = "0";
			var $speedTestSize = $("input[name='settingAplicationInputSpeedtestSize']");
			var $speedTestPosition = $("input[name='settingAplicationInputSpeedtestPosition']");
			var $speedTestYPosition = $("input[name='settingAplicationInputSpeedtestYPosition']");

			//wired test
			if (value.wired_test == true) {
				$("#buttonsEnableSpeedtest button[value='true']").children().show();
				$("#buttonsEnableSpeedtest button[value='true']").removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
				$("#buttonsEnableSpeedtest button").not("#buttonsEnableSpeedtest button[value='true']").children().hide();
				$("#buttonsEnableSpeedtest button").not("#buttonsEnableSpeedtest button[value='true']").removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");

				$("div#settingAplicationDivSpeedtest").show();

			} else if (value.wired_test == false) {
				$("#buttonsEnableSpeedtest button[value='false']").children().show();
				$("#buttonsEnableSpeedtest button[value='false']").removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
				$("#buttonsEnableSpeedtest button").not("#buttonsEnableSpeedtest button[value='false']").children().hide();
				$("#buttonsEnableSpeedtest button").not("#buttonsEnableSpeedtest button[value='false']").removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");

				$("div#settingAplicationDivSpeedtest").hide();

			}
			//wired test

			//force
			if (value.force_certificate_both_frequencies == true) {
				$("#buttonsForceCertificateBothFrequencies button[value='true']").children().show();
				$("#buttonsForceCertificateBothFrequencies button[value='true']").removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
				$("#buttonsForceCertificateBothFrequencies button").not("#buttonsForceCertificateBothFrequencies button[value='true']").children().hide();
				$("#buttonsForceCertificateBothFrequencies button").not("#buttonsForceCertificateBothFrequencies button[value='true']").removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");
			} else if (value.force_certificate_both_frequencies == false) {
				$("#buttonsForceCertificateBothFrequencies button[value='false']").children().show();
				$("#buttonsForceCertificateBothFrequencies button[value='false']").removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
				$("#buttonsForceCertificateBothFrequencies button").not("#buttonsForceCertificateBothFrequencies button[value='false']").children().hide();
				$("#buttonsForceCertificateBothFrequencies button").not("#buttonsForceCertificateBothFrequencies button[value='false']").removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");
			}
			//force

			if (value.FORMAT0001 == "dd/mm/yyyy") {
				$("#radio_date1").prop("checked", true);
				jQuery("#radio_date1").attr('checked', true);

				$("#radio_date2").prop("checked", false);
				jQuery("#radio_date2").attr('checked', false);
			} else if (value.FORMAT0001 == "mm/dd/yyyy") {
				$("#radio_date2").prop("checked", true);
				jQuery("#radio_date2").attr('checked', true);

				$("#radio_date1").prop("checked", false);
				jQuery("#radio_date1").attr('checked', false);
			}

			if (value.FORMAT0002 == "0,000") {
				$("#radio_numeric1").prop("checked", true);
				jQuery("#radio_numeric1").attr('checked', true);

				$("#radio_numeric2").prop("checked", false);
				jQuery("#radio_numeric2").attr('checked', false);

				$("#radio_numeric3").prop("checked", false);
				jQuery("#radio_numeric3").attr('checked', false);
			} else if (value.FORMAT0002 == "0.000") {
				$("#radio_numeric2").prop("checked", true);
				jQuery("#radio_numeric2").attr('checked', true);

				$("#radio_numeric1").prop("checked", false);
				jQuery("#radio_numeric1").attr('checked', false);

				$("#radio_numeric3").prop("checked", false);
				jQuery("#radio_numeric3").attr('checked', false);
			} else if (value.FORMAT0002 == "0,000.00") {
				$("#radio_numeric3").prop("checked", true);
				jQuery("#radio_numeric3").attr('checked', true);

				$("#radio_numeric1").prop("checked", false);
				jQuery("#radio_numeric1").attr('checked', false);

				$("#radio_numeric2").prop("checked", false);
				jQuery("#radio_numeric2").attr('checked', false);
			}

			$id.val(value._id);

			$urlDownload.val(value.url_down);
			$timeoutDownload.val(value.time_out_down);
			$sessionsDownload.val(value.sessions_down);
			$acceptTestDownload.val(value.accepttest_down);

			$urlUpload.val(value.url_up);
			$timeoutUpload.val(value.time_out_up);
			$sessionsUpload.val(value.sessions_up);
			$acceptTestUpload.val(value.accepttest_up);

			$urlPing.val(value.url_ping);
			$countPings.val(value.num_ping);

			$urlDns.val(value.url_dns);

			$urlTraceroute.val(value.url_traceroute);
			$hopsTraceroute.val(value.hops_traceroute);

			$vuMeter.val(value.vumeter);
			$minRooms.val(value.min_rooms_certificate);
			$maxRooms.val(value.max_rooms_certificate);

			$urlSpeedtest.val(value.url_speedtest);
			$speedTestSize.val(value.speedtest_size);
			$speedTestPosition.val(value.speedtest_x_position);
			$speedTestYPosition.val(value.speedtest_y_position);

			if (value.speedTest == "0") {
				$("#buttonsSpeedtestAcceptTest button[value='0']").children().show();
				$("#buttonsSpeedtestAcceptTest button[value='0']").removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
				$("#buttonsSpeedtestAcceptTest button").not("#buttonsSpeedtestAcceptTest button[value='0']").children().hide();
				$("#buttonsSpeedtestAcceptTest button").not("#buttonsSpeedtestAcceptTest button[value='0']").removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");
			} else if (value.speedTest == "1") {
				$("#buttonsSpeedtestAcceptTest button[value='1']").children().show();
				$("#buttonsSpeedtestAcceptTest button[value='1']").removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
				$("#buttonsSpeedtestAcceptTest button").not("#buttonsSpeedtestAcceptTest button[value='1']").children().hide();
				$("#buttonsSpeedtestAcceptTest button").not("#buttonsSpeedtestAcceptTest button[value='1']").removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");
			} else if (value.speedTest == "2") {
				$("#buttonsSpeedtestAcceptTest button[value='2']").children().show();
				$("#buttonsSpeedtestAcceptTest button[value='2']").removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
				$("#buttonsSpeedtestAcceptTest button").not("#buttonsSpeedtestAcceptTest button[value='2']").children().hide();
				$("#buttonsSpeedtestAcceptTest button").not("#buttonsSpeedtestAcceptTest button[value='2']").removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");
			}

			var $testSpeedtestNacional = $("input[name='settingAplicationInputTestSpeedtestNacional']");
			var $testSpeedtestInternacional = $("input[name='settingAplicationInputTestSpeedtestInternacional']");

			$testSpeedtestNacional.val(value.pruebas_st_nac_valor_aceptado);
			$testSpeedtestInternacional.val(value.pruebas_st_int_valor_aceptado);

		}
		
		
	}).fail(function(jqXHR, textStatus, errorThrown) {

	});
	//	end	getjson

};

var getButtonsGroups = function() {

	var url = "/techwizard/general/getGroupsSettings/";
	var getButtonsGroups = $.getJSON(url, function(data) {

		if (data.status == "false") {
			var message = "Error";

			var not = $.Notify({
				caption : "Error",
				content : message,
				timeout : 5000, // 5 seconds
				style : ( {
					background : 'red',
					color : '#FFFFFF'
				})
			});
		} else if (data.status == "true" && data.code == "200") {

			var htmlButtonStart = '<button type="button" class="inverse buttonGroup radiobuttonButtonSelect mini" style="margin-left:4px;" value="';
			var htmlButton1 = '"><i class="fa fa-user"></i>&nbsp;';
			var htmlButtonEnd = '&nbsp;<i class="icon-checkmark" style="display:none;"></i></button>';

			$.each(data.data, function(index, value) {

				$("#buttonsGroups").append(htmlButtonStart + value._id + htmlButton1 + changeFirstLetterToUppercaseRestLowercase(value.name) + htmlButtonEnd);

			});

		}

		$("button.buttonGroup").on("click", function() {

			$(this).removeClass("inverse").addClass("info");
			$(this).addClass("radiobuttonButtonSelect");
			$("div#buttonsGroups button").not(this).removeClass("info").addClass("inverse");
			$("div#buttonsGroups button").not(this).removeClass("radiobuttonButtonSelect");
			$(this).children().show();
			$("div#buttonsGroups button").not(this).find("i:eq(1)").hide();

		});
		
		//boton para seleccionar dispositivo
		$("button.buttonDevice").on("click", function() {
	
			$(this).removeClass("inverse").addClass("info");
			$(this).addClass("radiobuttonButtonSelect");
			$("div#buttonsDevices button").not(this).removeClass("info").addClass("inverse");
			$("div#buttonsDevices button").not(this).removeClass("radiobuttonButtonSelect");
			$("div#buttonsDevices button").not(this).find("i:eq(1)").hide();
			$(this).children().show();
	
			var devicesAndSystem = $("legend#buttonsTestDevicesAndSystem button").val();
			var deviceSelect = $("div#buttonsDevices button.radiobuttonButtonSelect").val();
	
			if (devicesAndSystem == "devices") {
				$("div#device").show();
				$("div#system").hide();
	
				if (deviceSelect == "todos" || deviceSelect == "windows") {
					$("div#device").show();
					$("div#system").hide();
					$("div#speedtest").show();
				} else if (deviceSelect == "android" || deviceSelect == "ios") {
					$("div#device").show();
					$("div#system").hide();
					$("div#speedtest").hide();
				}
	
			} else if (devicesAndSystem == "system") {
				$("div#device").hide();
				$("div#system").show();
			}
	
		});
		
		$("button.buttonDevice,button.buttonGroup").on("click", function() {
	
			console.log("hola");
	//		var groupSelect = $("div#buttonsGroups button.radiobuttonButtonSelect").val();
	//		var deviceSelect = $("div#buttonsDevices button.radiobuttonButtonSelect").val();
						
	//		console.log(groupSelect +' '+deviceSelect );
				
		});

/*		
		$("button.buttonGroup, button.buttonDevice").on("click", function() {
			
			var idGroup=$("button.buttonGroup").val();
			var idDevice=$("button.buttonDevice").val();
			
			console.log(idGroup +' '+idDevice );
		
			var id = $(this).val();

			if (id == "todos") {

				getSettingAplication();

			} else {

				var urlGroup = "/techwizard/general/getGroupSetting/" + id;
				var getButtonsGroups = $.getJSON(urlGroup, function(data) {

			//		console.log(parametros);
			//		console.log(data.data.testDevices);
					
					var groupSelect = $("div#buttonsGroups button.radiobuttonButtonSelect").val();
					var deviceSelect = $("div#buttonsDevices button.radiobuttonButtonSelect").val();
					var parametersGroup=data.data.testDevices;
					
					var arrayParameters=['url_down','time_out_down','sessions_down','accepttest_down','url_up','time_out_up','sessions_up','accepttest_up','url_ping','num_ping','url_dns','url_traceroute','hops_traceroute','vumeter','min_rooms_certificate','max_rooms_certificate','force_certificate_both_frequencies','wired_test','speedTest','pruebas_st_nac_valor_aceptado','pruebas_st_int_valor_aceptado','url_speedtest','speedtest_size','speedtest_x_position','speedtest_y_position','FORMAT0001','FORMAT0002'];
					
					arrayParameters.forEach(function(value) {
						if(checkKeyExist(parametros, parametersGroup, deviceSelect,value ))
							alert("existe");
					});
										
					if (data.status == "false") {
						var message = "Error";

						var not = $.Notify({
							caption : "Error",
							content : message,
							timeout : 5000, // 5 seconds
							style : ( {
								background : 'red',
								color : '#FFFFFF'
							})
						});
					} else if (data.status == "true" && data.code == "200") {

						if ($("div#buttonsDevices button").hasClass("radiobuttonButtonSelect")) {

						} else {

							console.log("no");

						}

					}

				}).fail(function(jqXHR, textStatus, errorThrown) {

				});

			}
			
			
		});
		*/
		/*
		 $("button.buttonTest").on("click", function() {
		 $(this).removeClass("inverse").addClass("info");
		 $(this).addClass("radiobuttonButtonSelect");
		 $("#buttonsTests button").not(this).removeClass("info").addClass("inverse");
		 $("div#buttonsTests button").not(this).removeClass("radiobuttonButtonSelect");
		 });
		 */
	}).fail(function(jqXHR, textStatus, errorThrown) {

	});

};



getSettingAplication();
getButtonsGroups();



