var textError,textErrorMessageFind,textErrorMessageDelete,textErrorMessageAdd,textErrorMessageUpdate,textSuccessMessageDelete,textSuccessMessageAdd,textSuccessMessageUpdate,nameLowercase,nameUppercase,textUpdate,textAdd,textUpdateButton,textDelete,textAccess,textInsert,textFieldRequired,textDeleteMessage,textErrorDataBase,textApplyChangeButton;

/* download */
var textErrorValidateTitle1,textErrorValidateSubTitle1_1,textErrorValidateSubTitle2_1;
var	textErrorValidateTitle2,textErrorValidateSubTitle1_2,textErrorValidateSubTitle2_2,textErrorValidateSubTitle3_2;
var textErrorValidateTitle8,textErrorValidateSubTitle1_8,textErrorValidateSubTitle2_8,textErrorValidateSubTitle3_8;
var textErrorValidateTitle9,textErrorValidateSubTitle1_9,textErrorValidateSubTitle2_9,textErrorValidateSubTitle3_9;

/* upload */
var textErrorValidateTitle10,textErrorValidateSubTitle1_10,textErrorValidateSubTitle2_10;
var	textErrorValidateTitle11,textErrorValidateSubTitle1_11,textErrorValidateSubTitle2_11,textErrorValidateSubTitle3_11;
var textErrorValidateTitle12,textErrorValidateSubTitle1_12,textErrorValidateSubTitle2_12,textErrorValidateSubTitle3_12;
var textErrorValidateTitle13,textErrorValidateSubTitle1_13,textErrorValidateSubTitle2_13,textErrorValidateSubTitle3_13;

/* ping */
var textErrorValidateTitle3,textErrorValidateSubTitle1_3,textErrorValidateSubTitle2_3;
var textErrorValidateTitle4,textErrorValidateSubTitle1_4,textErrorValidateSubTitle2_4,textErrorValidateSubTitle3_4;

/* dns */
var textErrorValidateTitle14,textErrorValidateSubTitle1_14,textErrorValidateSubTitle2_14;

/* traceroute */
var textErrorValidateTitle15,textErrorValidateSubTitle1_15,textErrorValidateSubTitle2_15;
var textErrorValidateTitle16,textErrorValidateSubTitle1_16,textErrorValidateSubTitle2_16,textErrorValidateSubTitle3_16;

/* vu meter */
var textErrorValidateTitle5,textErrorValidateSubTitle1_5,textErrorValidateSubTitle2_5,textErrorValidateSubTitle3_5;

/* speedtest */	
var textErrorValidateTitle6,textErrorValidateSubTitle1_6,textErrorValidateSubTitle2_6,textErrorValidateSubTitle3_6;
var textErrorValidateTitle7,textErrorValidateSubTitle1_7,textErrorValidateSubTitle2_7,textErrorValidateSubTitle3_7;

var textErrorValidateTitle17,textErrorValidateSubTitle1_17,textErrorValidateSubTitle2_17;
var textErrorValidateTitle18,textErrorValidateSubTitle1_18,textErrorValidateSubTitle2_18,textErrorValidateSubTitle3_18;





switch(language) {
case 'es':

	textError="Error";
	textErrorMessageFind="No se pudo encontrar la información seleccionada";
	textErrorMessageDelete="No se pudo eliminar la información seleccionada";
	textErrorMessageAdd="No se pudo eliminar la información seleccionada";
	textErrorMessageUpdate="No se pudo modificar la información seleccionada";

	textSuccessMessageDelete="Información eliminada satisfactoriamente";
	textSuccessMessageAdd="Información agregada satisfactoriamente";
	textSuccessMessageUpdate="Información modificada satisfactoriamente";

	nameLowercase= "pruebas dispositivos";
	nameUppercase= "Pruebas dispositivos";

	textUpdate="Modificar";
	textAdd="Agregar";
	textUpdateButton="Grabar";
	textDelete="Eliminar";
	textAccess="Permisos";
	textApplyChangeButton="Aplicar Cambios";

	textInsert="Ingresando...";
	textFieldRequired="Campo Requerido";

	textDeleteMessage="Está seguro que desea eliminar ";
	textErrorDataBase="Error en la base de datos";

/*download*/

	textErrorValidateTitle1="Error URL Descarga, ";
	textErrorValidateSubTitle1_1="el texto es requerido.";
	textErrorValidateSubTitle2_1="solo puedes ingresar letras y números entre un rango de 5 a 300 caracteres.";
			
	textErrorValidateTitle2="Error Time out Descarga, ";
	textErrorValidateSubTitle1_2="el texto es requerido.";
	textErrorValidateSubTitle2_2="solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_2="solo puedes ingresar números entre un rango de 0 a 120.";
	
	textErrorValidateTitle8="Error Sesiones Descarga, ";
	textErrorValidateSubTitle1_8="el texto es requerido.";
	textErrorValidateSubTitle2_8="solo puedes ingresar números entre un rango de 1 a 2 caracteres.";
	textErrorValidateSubTitle3_8="solo puedes ingresar números entre un rango de 0 a 15.";
	
	textErrorValidateTitle9="Error % Aceptación de Prueba, ";
	textErrorValidateSubTitle1_9="el texto es requerido.";
	textErrorValidateSubTitle2_9="solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_9="solo puedes ingresar números entre un rango de 0 a 100.";
	
/*upload*/

	textErrorValidateTitle10="Error URL Subida, ";
	textErrorValidateSubTitle1_10="el texto es requerido.";
	textErrorValidateSubTitle2_10="solo puedes ingresar letras y números entre un rango de 5 a 300 caracteres.";
			
	textErrorValidateTitle11="Error Time out Subida, ";
	textErrorValidateSubTitle1_11="el texto es requerido.";
	textErrorValidateSubTitle2_11="solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_11="solo puedes ingresar números entre un rango de 0 a 120.";
	
	textErrorValidateTitle12="Error Sesiones Subida, ";
	textErrorValidateSubTitle1_12="el texto es requerido.";
	textErrorValidateSubTitle2_12="solo puedes ingresar números entre un rango de 1 a 2 caracteres.";
	textErrorValidateSubTitle3_12="solo puedes ingresar números entre un rango de 0 a 15.";
	
	textErrorValidateTitle13="Error % Aceptación de Prueba, ";
	textErrorValidateSubTitle1_13="el texto es requerido.";
	textErrorValidateSubTitle2_13="solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_13="solo puedes ingresar números entre un rango de 0 a 100.";	

/* ping */

	textErrorValidateTitle3="Error Url Ping, ";
	textErrorValidateSubTitle1_3="el texto es requerido.";
	textErrorValidateSubTitle2_3="solo puedes ingresar números entre un rango de 5 a 300 caracteres.";
	
	textErrorValidateTitle4="Error Cantidad Pings, ";
	textErrorValidateSubTitle1_4="el texto es requerido.";
	textErrorValidateSubTitle2_4="solo puedes ingresar números entre un rango de 1 a 2 caracteres.";
	textErrorValidateSubTitle3_4="solo puedes ingresar números entre un rango de 0 a 15.";

/* dns */
	
	textErrorValidateTitle14="Error Url Dns, ";
	textErrorValidateSubTitle1_14="el texto es requerido.";
	textErrorValidateSubTitle2_14="solo puedes ingresar números entre un rango de 5 a 300 caracteres.";

/* traceroute */

	textErrorValidateTitle15="Error Url Traceroute, ";
	textErrorValidateSubTitle1_15="el texto es requerido.";
	textErrorValidateSubTitle2_15="solo puedes ingresar números entre un rango de 5 a 300 caracteres.";
	
	textErrorValidateTitle16="Error Hops, ";
	textErrorValidateSubTitle1_16="el texto es requerido.";
	textErrorValidateSubTitle2_16="solo puedes ingresar números entre un rango de 1 a 2 caracteres.";
	textErrorValidateSubTitle3_16="solo puedes ingresar números entre un rango de 20 a 50.";

/* VU Meter */		
	textErrorValidateTitle5="Error Vu Meter, ";
	textErrorValidateSubTitle1_5="el texto es requerido.";
	textErrorValidateSubTitle2_5="solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_5="solo puedes ingresar números entre un rango de 0 a 100.";
	
/* speedtest */	
	textErrorValidateTitle6="Error % aceptación prueba nacional, ";
	textErrorValidateSubTitle1_6="el texto es requerido.";
	textErrorValidateSubTitle2_6="solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_6="solo puedes ingresar números entre un rango de 0 a 100.";
	
	textErrorValidateTitle7="Error % aceptación prueba internacional, ";
	textErrorValidateSubTitle1_7="el texto es requerido.";
	textErrorValidateSubTitle2_7="solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_7="solo puedes ingresar números entre un rango de 0 a 100.";
	
	textErrorValidateTitle17="Error URL Speedtest, ";
	textErrorValidateSubTitle1_17="el texto es requerido.";
	textErrorValidateSubTitle2_17="solo puedes ingresar letras y números entre un rango de 5 a 300 caracteres.";
	
	textErrorValidateTitle18="Error % Tamaño Flash Ookla, ";
	textErrorValidateSubTitle1_18="el texto es requerido.";
	textErrorValidateSubTitle2_18="solo puedes ingresar números entre un rango de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_18="solo puedes ingresar números entre un rango de 0 a 100.";
	
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

	nameLowercase= "test devices";
	nameUppercase= "Test Devices";

	textUpdate="Update";
	textAdd="Add";
	textUpdateButton="Update";
	textDelete="Delete";
	textAccess="Access";

	textApplyChangeButton="Apply Changes";
	textInsert="Insert...";
	textFieldRequired="Field Required";

	textDeleteMessage="Are you sure to remove ";
	textErrorDataBase="Database Error";

/*download*/
	textErrorValidateTitle1="Error Url Download, ";
	textErrorValidateSubTitle1_1="Field Required.";
	textErrorValidateSubTitle2_1="you can only enter letters and numbers in a range of 5 to 300 characters.";
			
	textErrorValidateTitle2="Error Time out Download, ";
	textErrorValidateSubTitle1_2="Field Required.";
	textErrorValidateSubTitle2_2="you can only enter numbers in a range of 1-3 characters. ";
	textErrorValidateSubTitle3_2="you can only enter numbers in a range of 0-120.";

	textErrorValidateTitle8="Error Sessions Download, ";
	textErrorValidateSubTitle1_8="Field Required.";
	textErrorValidateSubTitle2_8="you can only enter numbers in a range of 1-2 characters. ";
	textErrorValidateSubTitle3_8="you can only enter numbers in a range of 0-15.";
	
	textErrorValidateTitle9="Error % Accept Test, ";
	textErrorValidateSubTitle1_9="Field Required.";
	textErrorValidateSubTitle2_9="you can only enter numbers in a range of 1-3 characters.";
	textErrorValidateSubTitle3_9="you can only enter numbers in a range of 0-100.";
	
/*upload*/
	textErrorValidateTitle10="Error Url Upload, ";
	textErrorValidateSubTitle1_10="Field Required.";
	textErrorValidateSubTitle2_10="you can only enter letters and numbers in a range of 5 to 300 characters.";
			
	textErrorValidateTitle11="Error Time out Upload, ";
	textErrorValidateSubTitle1_11="Field Required.";
	textErrorValidateSubTitle2_11="you can only enter numbers in a range of 1-3 characters. ";
	textErrorValidateSubTitle3_11="you can only enter numbers in a range of 0-120.";

	textErrorValidateTitle12="Error Sessions Upload, ";
	textErrorValidateSubTitle1_12="Field Required.";
	textErrorValidateSubTitle2_12="you can only enter numbers in a range of 1-2 characters. ";
	textErrorValidateSubTitle3_12="you can only enter numbers in a range of 0-15.";
	
	textErrorValidateTitle13="Error % Accept Test, ";
	textErrorValidateSubTitle1_13="Field Required.";
	textErrorValidateSubTitle2_13="you can only enter numbers in a range of 1-3 characters.";
	textErrorValidateSubTitle3_13="you can only enter numbers in a range of 0-100.";	
	
/*ping*/		
	textErrorValidateTitle3="Error Url Ping, ";
	textErrorValidateSubTitle1_3="Field Required.";
	textErrorValidateSubTitle2_3="you can only enter letters and numbers in a range of 5 to 300 characters.";
	
	textErrorValidateTitle4="Error Numbers Pings, ";
	textErrorValidateSubTitle1_4="Field Required.";
	textErrorValidateSubTitle2_4="you can only enter numbers in a range of 1-2 characters. ";
	textErrorValidateSubTitle3_4="you can only enter numbers in a range of 0-15.";

/* dns */
	
	textErrorValidateTitle14="Error Url Dns, ";
	textErrorValidateSubTitle1_14="Field Required.";
	textErrorValidateSubTitle2_14="you can only enter letters and numbers in a range of 5 to 300 characters.";

/* traceroute */

	textErrorValidateTitle15="Error Url Traceroute, ";
	textErrorValidateSubTitle1_15="Field Required.";
	textErrorValidateSubTitle2_15="you can only enter letters and numbers in a range of 5 to 300 characters.";
	
	textErrorValidateTitle16="Error Hops, ";
	textErrorValidateSubTitle1_16="Field Required.";
	textErrorValidateSubTitle2_16="you can only enter numbers in a range of 1-2 characters. ";
	textErrorValidateSubTitle3_16="you can only enter numbers in a range of 20-50.";
		
/*VU Meter*/	
	textErrorValidateTitle5="Error Vu Meter, ";
	textErrorValidateSubTitle1_5="Field Required.";
	textErrorValidateSubTitle2_5="you can only enter numbers in a range of 1-3 characters. ";
	textErrorValidateSubTitle3_5="you can only enter numbers in a range of 0-100.";

/*speedtest*/	
	textErrorValidateTitle6="Error % accept national test, ";
	textErrorValidateSubTitle1_6="Field Required.";
	textErrorValidateSubTitle2_6="you can only enter numbers in a range of 1-3 characters. ";
	textErrorValidateSubTitle3_6="you can only enter numbers in a range of 0-100.";
	
	textErrorValidateTitle7="Error % accept international test, ";
	textErrorValidateSubTitle1_7="Field Required.";
	textErrorValidateSubTitle2_7="you can only enter numbers in a range of 1-3 characters. ";
	textErrorValidateSubTitle3_7="you can only enter numbers in a range of 0-100.";
	
	textErrorValidateTitle17="Error URL Speedtest, ";
	textErrorValidateSubTitle1_17="Field Required.";
	textErrorValidateSubTitle2_17="you can only enter letters and numbers in a range of 5 to 300 characters.";
	
	textErrorValidateTitle18="Error % Flash Ookla Size, ";
	textErrorValidateSubTitle1_18="Field Required.";
	textErrorValidateSubTitle2_18="you can only enter numbers in a range of 1-3 characters.";
	textErrorValidateSubTitle3_18="you can only enter numbers in a range of 0-100.";
		
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

	nameLowercase= "teste dispositivos";
	nameUppercase= "Teste dispositivos";

	textUpdate="Alterar";
	textAdd="Adicionar";
	textUpdateButton="Gravar";
	textDelete="Eliminar";

	textInsert="Acessando...";
	textFieldRequired="Campo Requerido";

	textDeleteMessage="Tem certeza de que deseja eliminar ";
	textErrorDataBase="Erro no banco de dados";
	
/*download*/

	textErrorValidateTitle1="Erro Url Descarga, ";
	textErrorValidateSubTitle1_1="Campo Requerido.";
	textErrorValidateSubTitle2_1="só é possível inserir letras e números em uma faixa de 5 a 300 caracteres.";
			
	textErrorValidateTitle2="Erro Time out Descarga, ";
	textErrorValidateSubTitle1_2="Campo Requerido.";
	textErrorValidateSubTitle2_2="só é possível inserir números em uma faixa de 1 a 3 caracteres. ";
	textErrorValidateSubTitle3_2="só é possível inserir números em uma faixa de 0 a 100.";

	textErrorValidateTitle8="Erro Sessão Descarga, ";
	textErrorValidateSubTitle1_8="Campo Requerido.";
	textErrorValidateSubTitle2_8="só é possível inserir números em uma faixa de 1 a 2 caracteres. ";
	textErrorValidateSubTitle3_8="só é possível inserir números em uma faixa de 0 a 15.";
	
	textErrorValidateTitle9="Erro % Aceitação Teste, ";
	textErrorValidateSubTitle1_9="Campo Requerido.";
	textErrorValidateSubTitle2_9="só é possível inserir números em uma faixa de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_9="só é possível inserir números em uma faixa de 0 a 100.";

	
/*upload*/

	textErrorValidateTitle10="Erro Url Carga, ";
	textErrorValidateSubTitle1_10="Campo Requerido.";
	textErrorValidateSubTitle2_10="só é possível inserir letras e números em uma faixa de 5 a 300 caracteres.";
			
	textErrorValidateTitle11="Erro Time out Carga, ";
	textErrorValidateSubTitle1_11="Campo Requerido.";
	textErrorValidateSubTitle2_11="só é possível inserir números em uma faixa de 1 a 3 caracteres. ";
	textErrorValidateSubTitle3_11="só é possível inserir números em uma faixa de 0 a 100.";

	textErrorValidateTitle12="Erro Sessão Carga, ";
	textErrorValidateSubTitle1_12="Campo Requerido.";
	textErrorValidateSubTitle2_12="só é possível inserir números em uma faixa de 1 a 2 caracteres. ";
	textErrorValidateSubTitle3_12="só é possível inserir números em uma faixa de 0 a 15.";
	
	textErrorValidateTitle13="Erro % Aceitação Teste, ";
	textErrorValidateSubTitle1_13="Campo Requerido.";
	textErrorValidateSubTitle2_13="só é possível inserir números em uma faixa de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_13="só é possível inserir números em uma faixa de 0 a 100.";	
	
	
/*ping*/
	
	textErrorValidateTitle3="Erro Url Ping, ";
	textErrorValidateSubTitle1_3="Campo Requerido.";
	textErrorValidateSubTitle2_3="só é possível inserir letras e números em uma faixa de 5 a 300 caracteres.";
	
	textErrorValidateTitle4="Erro Quantidade de Pings, ";
	textErrorValidateSubTitle1_4="Campo Requerido.";
	textErrorValidateSubTitle2_4="só é possível inserir números em uma faixa de 1 a 2 caracteres. ";
	textErrorValidateSubTitle3_4="só é possível inserir letras e números em uma faixa de 0 a 15 caracteres.";


/* dns */
	
	textErrorValidateTitle14="Erro Url Dns, ";
	textErrorValidateSubTitle1_14="Campo Requerido.";
	textErrorValidateSubTitle2_14="só é possível inserir letras e números em uma faixa de 5 a 300 caracteres.";


/* traceroute */

	textErrorValidateTitle15="Erro Url Traceroute, ";
	textErrorValidateSubTitle1_15="Campo Requerido.";
	textErrorValidateSubTitle2_15="só é possível inserir letras e números em uma faixa de 5 a 300 caracteres.";
	
	textErrorValidateTitle16="Error Hops, ";
	textErrorValidateSubTitle1_16="Field Required.";
	textErrorValidateSubTitle2_16="só é possível inserir números em uma faixa de 1 a 2 caracteres. ";
	textErrorValidateSubTitle3_16="só é possível inserir letras e números em uma faixa de 20 a 50.";
	
	
/*VU Meter*/	
	textErrorValidateTitle5="Erro Vu Meter, ";
	textErrorValidateSubTitle1_5="Campo Requerido.";
	textErrorValidateSubTitle2_5="só é possível inserir números em uma faixa de 1 a 3 caracteres. ";
	textErrorValidateSubTitle3_5="só é possível inserir números em uma faixa de 0 a 100.";
	
/*Speedtest*/	
	textErrorValidateTitle6="Erro % aceitação teste nacional, ";
	textErrorValidateSubTitle1_6="Campo Requerido.";
	textErrorValidateSubTitle2_6="só é possível inserir números em uma faixa de 1 a 3 caracteres. ";
	textErrorValidateSubTitle3_6="só é possível inserir números em uma faixa de 0 a 100.";
	
	textErrorValidateTitle7="Erro % aceitação teste internacional, ";
	textErrorValidateSubTitle1_7="Campo Requerido.";
	textErrorValidateSubTitle2_7="só é possível inserir números em uma faixa de 1 a 3 caracteres. ";
	textErrorValidateSubTitle3_7="só é possível inserir números em uma faixa de 0 a 100.";
	
	textErrorValidateTitle17="Erro Url Speedtest, ";
	textErrorValidateSubTitle1_17="Campo Requerido.";
	textErrorValidateSubTitle2_17="só é possível inserir letras e números em uma faixa de 5 a 300 caracteres.";
	
	textErrorValidateTitle18="Erro % Tamanho Flash Ookla, ";
	textErrorValidateSubTitle1_18="Campo Requerido.";
	textErrorValidateSubTitle2_18="só é possível inserir números em uma faixa de 1 a 3 caracteres.";
	textErrorValidateSubTitle3_18="só é possível inserir números em uma faixa de 0 a 100.";
		
	break;	
default:
}

var clearSettingAplicationFormElements = function() {
	$("input").val("");
	$("form").find('input[type="text"]').css("background-color", "#FFFFFF");
	$("form").find('input[type="text"]').css("border-color", "#D9D9D9");
	$("form").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");	
	$('#main_ValidationMessage').html("");
};

var setDefaultValuesSettingAplicationFormElements = function(){	
	$("input[name='settingAplicationInputTimeoutDownload'],input[name='settingAplicationInputTimeoutUpload']").val("15");
	$("input[name='settingAplicationInputSessionsDownload'],input[name='settingAplicationInputSessionsUpload']").val("1");
	$("input[name='settingAplicationInputHopsTraceroute']").val("30");
	$("input[name='settingAplicationInputSpeedtestSize']").val("100");
	$("input[name='settingAplicationInputSpeedtestPosition']").val("0,0");
};
	
var updateSettingAplication = function(ajax_data,valueRadio) {

	var ajax_data_update = {
		"id"				: "53f3a0987815575e72000007",
		
		"url_down"			: ajax_data.urlDownload.val().trim(),
	 	"time_out_down"		: ajax_data.timeoutDownload.val().trim(),
		
	 	"url_ping" 			: ajax_data.urlPing.val().trim(),
    	"num_ping" 			: ajax_data.countPings.val().trim(),
    	  	    	
    	"vumeter" 			: ajax_data.vuMeter.val().trim(),
    	"speedTest"			: $(".radiobuttonButtonSelect").val(),
    	"wired_test"		: valueRadio,
    	"Pruebas_ST" : {
        	"nacional" : {
            	"valor_aceptado" : ajax_data.testSpeedtestNacional.val().trim()
        	},
        	"internacional" : {
            	"valor_aceptado" : ajax_data.testSpeedtestInternacional.val().trim()
        	}
    	},
    	"FORMAT0002" : "0,000.00",
		"FORMAT0001" : "mm/dd/yyyy"
    	
	};
	console.log(ajax_data_update);		
//	console.log("before send");


	$("button[name='settingAplicationFormButtonApplyChange']").prop("disabled", true);
	$("button[name='settingAplicationFormButtonApplyChange']").html('<i class="icon-loading"></i> Loading...');
	$("button[name='settingAplicationFormButtonApplyChange']").text("Loading...");
	
	$.ajax({
		type 		: "POST",
		url 		: "/techwizard/general/editParam/",
		data 		: ajax_data_update,
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
			console.log(data);
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

};
//	end	updateGroup

$(function() {

//	console.log($("input[name='settingAplicationInputUrlDownload']"));
	
	
	
	var ajax_data = {
		"urlDownload" 				: $("input[name='settingAplicationInputUrlDownload']"),
		"timeoutDownload" 			: $("input[name='settingAplicationInputTimeoutDownload']"),
		
		"urlPing" 					: $("input[name='settingAplicationInputUrlPing']"),
		"countPings" 				: $("input[name='settingAplicationInputCountPings']"),
		
		"vuMeter" 					: $("input[name='settingAplicationInputVuMeter']"),	
		"speedTest"					: $(".radiobuttonButtonSelect").val(),  
		"testSpeedtestNacional"		: $("input[name='settingAplicationInputTestSpeedtestNacional']"),
		"testSpeedtestInternacional": $("input[name='settingAplicationInputTestSpeedtestInternacional']")
		
	};

	$("#radio_1, #radio_2").change(function () {
        if ($("#radio_1").is(":checked")) {
			$("#settingAplicationDivSpeedtest").css("visibility", "visible");            
        }
        else if ($("#radio_2").is(":checked")) {
            $("#settingAplicationDivSpeedtest").css("visibility", "hidden");
        }
    });        

/*download*/
	$("input[name='settingAplicationInputTimeoutDownload']").validCamp('1234567890');
	
/*ping*/	
	$("input[name='settingAplicationInputCountPings']").validCamp('1234567890');
	
/*vu meter*/	
	$("input[name='settingAplicationInputVuMeter']").validCamp('1234567890');

/*speedtest*/
	$("input[name='settingAplicationInputTestSpeedtestNacional']").validCamp('1234567890');
	$("input[name='settingAplicationInputTestSpeedtestInternacional']").validCamp('1234567890');	

	$("div.radiobuttonSet button").on("click", function() {

		$(this).children().show();
		$("button").not(this).children().hide();

		//	si el boton presionado no ha sido clickeado pasa a clickeado, se destaca este y el resto pasa a evento no clickeado y no se destaca.
		if (!$(this).hasClass("radiobuttonButtonSelect")) {

			$(this).removeClass("radiobuttonButton");
			$(this).addClass("radiobuttonButtonSelect");

			$("div.radiobuttonSet button").not(this).removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");

		//	si el boton presionado ha sido clickeado pasa a clickeado, se destaca este y el resto pasa a evento no clickeado y no se destaca.
		} else {

		//	$("div.radiobuttonSet button").not(this).removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");

		}
		
	});

	$("#childShow").css("display", "block");

	var description = ["descriptionUrlDownload", "descriptionTimeoutDownload", "descriptionUrlPing", "descriptionCountPings", "descriptionVuMeter", "descriptionRadioTest", "descriptionAceptTest"];

	$("input[type='text']").on({

		focus : function() {
			var index = $("div.formElements").find("input[type='text']").index($(this));

			$(".descriptionBox > div").hide();
			$("." + description[index]).show();
			$(this).removeClass("inputLeave");
			$(this).addClass("inputHover");
			if (index == -1) {
				$("." + description[5]).show();
			}
		},
		blur : function() {
			$(".descriptionBox > div").hide();
			$(this).removeClass("inputHover");
			$(this).addClass("inputLeave");
		}
	});

	$("button[name='settingAplicationFormButtonApplyChange']").on("click", function() {
		if(validate()){
			$('#main_ValidationMessage').html("");
			
			var valueRadio=$("input[name='r1']:checked").val();

			updateSettingAplication(ajax_data,valueRadio);
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
	
	var url ="/techwizard/general/getParam/";
//	var url ="../json/settingAplication/settingAplication.json";
	var getSettingAplication = $.getJSON(url, function(data) {

		if (data.status=="false") {
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
		} else if (data.status=="true" && data.code=="200") {
				
			
			$.each(data.data, function(index, value) {
				
				var $urlDownload 		= $("input[name='settingAplicationInputUrlDownload']");
				var $timeoutDownload 	= $("input[name='settingAplicationInputTimeoutDownload']");
				
				var $urlPing 			= $("input[name='settingAplicationInputUrlPing']");
				var $countPings 		= $("input[name='settingAplicationInputCountPings']");
				
				var $vuMeter 			= $("input[name='settingAplicationInputVuMeter']");
				var $speedTest 			= "0";				
				
				if(value.wired_test==true){
					$("#radio_1").prop("checked", true);
					jQuery("#radio_1").attr('checked', true);
					
					$("#radio_2").prop("checked", false);
					jQuery("#radio_2").attr('checked', false);
					
					$("#settingAplicationDivSpeedtest").css("visibility", "visible");
					
					
				}else if(value.wired_test==false){
					$("#radio_2").prop("checked", true);
					jQuery("#radio_2").attr('checked', true);
					
					$("#radio_1").prop("checked", false);
					jQuery("#radio_1").attr('checked', false);
					
					$("#settingAplicationDivSpeedtest").css("visibility", "hidden");
					
				}
										
				$urlDownload.val(value.url_down); 	
				$timeoutDownload.val(value.time_out_down); 	
				
				$urlPing.val(value.url_ping); 	
				$countPings.val(value.num_ping);
				
				$vuMeter.val(value.vumeter);
								
				if(value.speedTest=="0"){
					$("button[value='0']").children().show();
					$("button[value='0']").removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
					$("button").not("button[value='0']").children().hide();
					$("div.radiobuttonSet button").not("button[value='0']").removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");
				}else if(value.speedTest=="1"){
					$("button[value='1']").children().show();
					$("button[value='1']").removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
					$("button").not("button[value='1']").children().hide();
					$("div.radiobuttonSet button").not("button[value='1']").removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");
				}else if(value.speedTest=="2"){
					$("button[value='2']").children().show();
					$("button[value='2']").removeClass("radiobuttonButton").addClass("radiobuttonButtonSelect");
					$("button").not("button[value='2']").children().hide();
					$("div.radiobuttonSet button").not("button[value='2']").removeClass("radiobuttonButtonSelect").addClass("radiobuttonButton");
				}
				
				var $testSpeedtestNacional		= $("input[name='settingAplicationInputTestSpeedtestNacional']");
				var $testSpeedtestInternacional = $("input[name='settingAplicationInputTestSpeedtestInternacional']");
					
				$.each(value.Pruebas_ST, function(index, value) {
				
					if(index=="nacional"){
						$testSpeedtestNacional.val(value.valor_aceptado);
					}
					if(index=="internacional"){
						$testSpeedtestInternacional.val(value.valor_aceptado);
					}
					
				});
			});

		}
	}).fail(function(jqXHR, textStatus, errorThrown) {

	});
	//	end	getjson
	
};

getSettingAplication();

