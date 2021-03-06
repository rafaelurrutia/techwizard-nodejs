
var url = {
	"create" 			: "/techwizard/general/addModelCpe/",
	"read" 				: "/techwizard/general/getModelCpe/",
	"update" 			: "/techwizard/general/editModelCpe/",
	"delete" 			: "/techwizard/general/removeModelCpe/",
	"find" 				: "/techwizard/general/getModelCpe/",
	"cpeTypeUrlRead"	: "/techwizard/general/getTypeCpe/",
};

/*

var url = {
	"create" 			: "http://devel1.baking.cl/techwizard/general/addModelCpe/",
	"read" 				: "http://devel1.baking.cl/techwizard/general/getModelCpe/",
	"update" 			: "http://devel1.baking.cl/techwizard/general/editModelCpe/",
	"delete" 			: "http://devel1.baking.cl/techwizard/general/removeModelCpe/",
	"find" 				: "http://devel1.baking.cl/techwizard/general/getModelCpe/",
	"cpeTypeUrlRead"	: "http://devel1.baking.cl/techwizard/general/getTypeCpe/",
};

*/

var hash = {
	"create" 	: "#CpeModelsModalCpeModel",
	"update" 	: "#CpeModelsModalCpeModel",
	"delete" 	: "#CpeModelsModalDeleteCpeModel",
};

var timeToRefreshDatatables=10;	//	seconds
var maxRowLoad=50;

var textError,textErrorMessageFind,textErrorMessageDelete,textErrorMessageAdd,textErrorMessageUpdate,textSuccessMessageDelete,textSuccessMessageAdd,textSuccessMessageUpdate,nameLowercase,nameUppercase,textUpdate,textAdd,textUpdateButton,textDelete,textAccess,textInsert,textFieldRequired,textDeleteMessage,textErrorDataBase,textErrorValidateTitle1,textErrorValidateSubTitle1_1,textErrorValidateSubTitle2_1,textErrorValidateSubTitle3_1,textErrorValidateTitle2,textErrorValidateSubTitle1_2;

var getCpeModel={};

var datatableTitles;
var datatableData = ["name", "tipo_id", "activo","docsis"];
var urlDatatableLanguageUrl;

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

switch(language) {
case 'es':
	urlDatatableLanguageUrl = "http://cdn.datatables.net/plug-ins/be7019ee387/i18n/Spanish.json";
	break;
case 'en':
	urlDatatableLanguageUrl = "http://cdn.datatables.net/plug-ins/a5734b29083/i18n/English.json";
	break;
case 'pt_BR':
	urlDatatableLanguageUrl = "http://cdn.datatables.net/plug-ins/f2c75b7247b/i18n/Portuguese-Brasil.json";
	break;	
default:
}


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

	nameLowercase= "modelo CPE";
	nameUppercase= "Modelo CPE";

	textUpdate="Modificar";
	textAdd="Agregar";
	textUpdateButton="Grabar";
	textDelete="Eliminar";
	textAccess="Permisos";

	textInsert="Ingresando...";
	textFieldRequired="Campo Requerido";

	textDeleteMessage="¿Está seguro que desea eliminar ";
	textErrorDataBase="Error en la base de datos";

	textErrorValidateTitle1="Error nombre modelo CPE, ";
	textErrorValidateSubTitle1_1="el texto es requerido.";
	textErrorValidateSubTitle2_1="solo puedes ingresar letras y números entre un rango de 3 a 30 caracteres.";
	textErrorValidateSubTitle3_1="este nombre ya ha sido ingresado previamente, ingrese un nombre distinto.";
			
	textErrorValidateTitle2="Error tipo CPE, ";
	textErrorValidateSubTitle1_2="debe seleccionar uno.";
	textErrorValidateSubTitle2_2="solo puedes ingresar letras y números entre un rango de 2 a 6 caracteres.";
	
	textErrorValidateTitle3="Error frecuencia, ";
	textErrorValidateSubTitle1_3="debe seleccionar uno.";
	textErrorValidateSubTitle2_3="solo puedes ingresar letras y números entre un rango de 2 a 6 caracteres.";
	
//	datatableTitles = ["Nombre", "Tipo Cpe", "Frecuencia","Docsis","Opciones"];	
	datatableTitles = ["Nombre", "Tipo CPE", "Frecuencia","Opciones"];		

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

	nameLowercase= "CPE model";
	nameUppercase= "CPE model";

	textUpdate="Update";
	textAdd="Add";
	textUpdateButton="Update";
	textDelete="Delete";
	textAccess="Access";

	textInsert="Insert...";
	textFieldRequired="Field Required";

	textDeleteMessage="Are you sure to remove ";
	textErrorDataBase="Database error";

	textErrorValidateTitle1="Error CPE model name, ";
	textErrorValidateSubTitle1_1="text required.";
	textErrorValidateSubTitle2_1="you can only enter letters and numbers in a range of 3 to 30 characters.";
	textErrorValidateSubTitle3_1="this name has been previously entered, enter a different name.";
			
	textErrorValidateTitle2="Error CPE type, ";
	textErrorValidateSubTitle1_2="must select one.";
	textErrorValidateSubTitle2_2="you can only enter numbers in a range of 2 to 6 characters.";
	
	textErrorValidateTitle3="Error frequency, ";
	textErrorValidateSubTitle1_3="must select one.";
	textErrorValidateSubTitle2_3="you can only enter numbers in a range of 2 to 6 characters.";
	
	datatableTitles = ["CPE model name", "CPE type", "Wifi frequency","Options"];
//	datatableTitles = ["Cpe model name", "Cpe type", "Wifi frequency","Docsis","Options"];
	
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

	textUpdate="Alterar";
	textAdd="Adicionar";
	textUpdateButton="Gravar";
	textDelete="Eliminar";

	textInsert="Acessando...";
	textFieldRequired="Campo Requerido";

	textDeleteMessage="Tem certeza de que deseja eliminar ";
	textErrorDataBase="Erro no banco de dados";

	textErrorValidateTitle1="Erro nome modelo CPE, ";
	textErrorValidateSubTitle1_1="o texto é requerido.";
	textErrorValidateSubTitle2_1="só é possível inserir letras e números em uma faixa de 3 a 30 caracteres.";
	textErrorValidateSubTitle3_1="este nome já foi inserido previamente, insira um nome diferente.";
			
	textErrorValidateTitle2="Erro tipo CPE, ";
	textErrorValidateSubTitle1_2="deve selecionar uma.";
	textErrorValidateSubTitle2_2="só é possível inserir letras e números em uma faixa de 2 a 6 caracteres.";
	
	textErrorValidateTitle3="Erro frequência, ";
	textErrorValidateSubTitle1_3="deve selecionar uma.";
	textErrorValidateSubTitle2_3="só é possível inserir letras e números em uma faixa de 2 a 6 caracteres.";
	
//	datatableTitles = ["Nombre", "Tipo Cpe", "Frecuencia","Docsis","Opciones"];	
	datatableTitles = ["Nome", "Tipo CPE", "Frequência","Opções"];	
	
	break;	
default:
}

function changeFormatNumeric(value){

	if(FORMAT0002=="0,000"){
		value=Number(value);
		value=value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
		value=value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");	
	}else if(FORMAT0002=="0.000"){
		value=Number(value);
		value=value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
		value=value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");		
	}else if(FORMAT0002=="0,000.00"){
		if(value.toString().indexOf(".")){
			value=Number(value);
			value=value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
		}else if(value.toString().indexOf(",")){
			
		}
	}
	
	return value;
	
}

function getJsonCall(url){

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

function getArrayCpeModel(){
	
	getCpeModel=getJsonCall(url.read);
	var getCpeType=getJsonCall(url.cpeTypeUrlRead);	
	var family;
	
	$.each(getCpeModel.data, function(index, value) {
				
		var typeCpe_code=value.type_cpe;
		$.each(getCpeType.data, function(index, value) {
			if(value.code==typeCpe_code){
				family=value.name;
			}else{
				family="sin tipo CPE";
			}
					
		});
		
		value.family=family;	
	});

	console.log(getCpeModel);
	
	return getCpeModel;		

}



var deleteCpeModel = function(idCpeModel) {

	$.ajax({
		type 		: "POST",
		url 		: url.delete, 
		data		: {id:idCpeModel}, 
		dataType 	: "json",
		encode      : true
	})
	.
	done(function(data) {
		console.clear();
		if (!data.status) {
			var message = "No se pudo eliminar la información seleccionada";
			/*
			 if(data.code=="1"){
			 message="";
			 }else if(data.code=="1"){
			 message="";
			 }
			 */
			var not = $.Notify({
				caption : "Error",
				content : textErrorMessageDelete,
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
				content : textSuccessMessageDelete,
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
			content : textErrorMessageDelete,
			timeout : 5000, // 10 seconds
			style : ( {
				background : 'red',
				color : '#FFFFFF'
			})
		});
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

	});
	//	end ajax

};
//	end deleteCpeModel

var findCpeModel = function(idCpeModel,ajax_data) {
	var findCpeModel = $.getJSON(url.read + idCpeModel, function(data) {
		if (!data.status) {
			var message = "Error";
			/*
			 if(data.code=="1"){
			 message="";
			 }else if(data.code=="1"){
			 message="";
			 }
			 */
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
			ajax_data.id.val(data.data._id);
			ajax_data.name.val(data.data.name);
			ajax_data.type_cpe.val(data.data.type_cpe);
			ajax_data.frecuencia.val(data.data.frecuencia);
//			ajax_data.docsis.val(data.data.docsis);
					
			$("button[name='CpeModelsModalButtonAddCpeModel']").hide();
			$("button[name='CpeModelsModalButtonUpdateCpeModel']").show();
			$("#cpeModelTitle").text(' '+textUpdate+' '+nameLowercase);
			
			window.location.href = hash.update;				
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {

		console.log("error send");
		window.location.href = "#";
		var not = $.Notify({
			caption : "Error",
			content : textErrorMessageFind,
			timeout : 5000, // 5 seconds
			style : ( {
				background : 'red',
				color : '#FFFFFF'
			})
		});
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

	});
	//	end	getjson

};
//	end	findCpeModel

var updateCpeModel = function(ajax_data) {

	var ajax_data_update = {
		"id" 			: ajax_data.id.val(),
		"name" 			: ajax_data.name.val().trim(),
		"model"			: "",
		"description"	: "",
		"frecuencia"	: ajax_data.frecuencia.val(),
		"mark"			: "",
		"type_cpe"		: ajax_data.type_cpe.val(),
		"family"		: ajax_data.type_cpe.find('option:selected').text(),
		"wifi"			: "",
//		"docsis"		: ajax_data.docsis.val(),
		"docsis"		: "",
		"status"		: "",
	};
	
	console.log("before send");
	
	$("button[name='CpeModelsModalButtonUpdateCpeModel']").html('<i class="icon-loading"></i> Loading...');
	$("button[name='CpeModelsModalButtonUpdateCpeModel']").text("Loading...");
	$("button[name='CpeModelsModalButtonUpdateCpeModel']").prop("disabled", true);

	$.ajax({
		type 		: "POST",
		url 		: url.update,
		data 		: ajax_data_update,
		dataType 	: "json",
		encode 		: true
	}).done(function(data) {
//		console.clear();

		if (!data.status) {
			var message = "No se pudo modificar la información seleccionada";
			
			window.location.href = "#";
			var not = $.Notify({
				caption : "Error",
				content : textErrorMessageUpdate,
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
				content : textSuccessMessageUpdate,
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
			content : textErrorMessageUpdate,
			timeout : 5000, // 5 seconds
			style : ( {
				background : 'red',
				color : '#FFFFFF'
			})
		});
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
		console.log("complete");
		$("button[name='CpeModelsModalButtonUpdateCpeModel']").text(textUpdate);
		$("button[name='CpeModelsModalButtonUpdateCpeModel']").prop("disabled", false);
		
		$("button[name='CpeModelsModalButtonAddCpeModel']").hide();
		$("button[name='CpeModelsModalButtonUpdateCpeModel']").show();
		
		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='CpeModelsModalButtonUpdateCpeModel']").css("background-color"));
		
		$("div.modalMain").find("option[value='']").attr("selected",true);
		$("div.modalMain").find('select').css("background-color", "#FFFFFF");
		$("div.modalMain").find('select').css("border-color", $("button[name='GroupsModalButtonAddGroup']").css("background-color"));
	});
	//	end ajax

};
//	end	updateCpeModel

var addCpeModel = function(ajax_data) {

	var ajax_data_create = {
		"name" 			: ajax_data.name.val().trim(),
		"model"			: "",
		"description"	: "",
		"frecuencia"	: ajax_data.frecuencia.val(),
		"mark"			: "",
		"type_cpe"		: ajax_data.type_cpe.val(),
		"family"		: ajax_data.type_cpe.find('option:selected').text(),
		"wifi"			: "",
//		"docsis"		: ajax_data.docsis.val(),
		"docsis"		: "",		
		"status"		: "",
	};
	
	$("#cpeModelTitle").text(' '+textAdd+' '+nameLowercase);
	$("button[name='CpeModelsModalButtonAddCpeModel']").html('<i class="icon-loading"></i> '+textInsert);
	$("button[name='CpeModelsModalButtonAddCpeModel']").text(textInsert);
	
	$.ajax({
		type 		: "POST",
		url 		: url.create,
		data 		: ajax_data_create,
		dataType 	: "json",
		encode 		: true
	}).done(function(data) {
		console.log(data);
		if (!data.status) {
			
			
		//	 if(data.code=="1"){
		//	 message="";
		//	 }else if(data.code=="1"){
		//	 message="";
		//	 }
			 
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
		} else if (data.status) {
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
		console.log("process complete");
		$("button[name='CpeModelsModalButtonAddCpeModel']").text(textAdd);
		$("button[name='CpeModelsModalButtonAddCpeModel']").prop("disabled", false);

		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='CpeModelsModalButtonAddCpeModel']").css("background-color"));
		
		$("div.modalMain").find("option[value='']").attr("selected",true);
		$("div.modalMain").find('select').css("background-color", "#FFFFFF");
		$("div.modalMain").find('select').css("border-color", $("button[name='GroupsModalButtonAddGroup']").css("background-color"));		
	});
	//	end ajax

};
//	end	addCpeModel

var getCpeModels = function(cpeModelAccess) {

//	var datatableData = ["name","family","frecuencia","docsis"];
	var datatableData = ["name","family","frecuencia"];
	
/*

	// "aaData": getArrayCpeModel(),
	var valueCpe=getArrayCpeModel();
	
	var tablas=[];
	var tabla;
	
	var datatableDataFiltered = [];
	
	jQuery.each(valueCpe.data, function(index, value) {

		tablas.push({
		    _id 		: value._id,
		    number		: (index+1),
		    name 		: value.name.charAt(0).toUpperCase() + value.name.slice(1).toLowerCase(),
		    frecuencia	: value.frecuencia+" Ghz.",
		    family		: value.family.charAt(0).toUpperCase() + value.family.slice(1).toLowerCase(),
//		    docsis		: value.docsis.charAt(0).toUpperCase() + value.docsis.slice(1).toLowerCase()
		});			
			
	});
	
	$('#example').dataTable({
	    "aaData": tablas,
		"aoColumns": [
			{
	        	"mDataProp": "number"
	    	}, 
	    	{
	        	"mDataProp": "name",
	        	"title" : datatableTitles[0]
	    	}, 
	    	{
				"mDataProp": "frecuencia",
				"title" : datatableTitles[1]
	    	}, 
	    	{
				"mDataProp": "family",
				"title" : datatableTitles[2]
	    	},
	    	{
				"title" : datatableTitles[3],
				"bSortable" : false
			}
	    ],
	    "language" : {
			"url" : urlDatatableLanguageUrl
		},
		"columnDefs" : [{
			"targets" : 4,
			"data" : null,
			"defaultContent" : cpeModelAccess
		}]
	});
*/	

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
				"title" : datatableTitles[3],
				"bSortable" : false
			}],
			"language" : {
				"url" : urlDatatableLanguageUrl
			},
			"columnDefs" : [{
				"targets" : 4,
				"data" : null,
				"defaultContent" : cpeModelAccess
			}, {
				"bSortable" : false,
				"aTargets" : [0]
			}],
			"fnDrawCallback" : function(oSettings) {
				// Need to redo the counters if filtered or sorted 
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
			},
			"createdRow" : function(row, data, index) {
				
				$('td', row).eq(3).html(changeFormatNumeric(data.frecuencia) + ' Ghz');
			}
		});

	} catch(e) {

		var not = $.Notify({
			caption : "Error",
			content : textErrorDataBase,
			timeout : 7000, // 7 seconds
			style : ( {
				background : 'red',
				color : '#FFFFFF'
			})
		});

	}

};

$(document).ready(function() {

	var cpeModelAccess='';
	
	if(getAccess("update")==1){
		cpeModelAccess+='<button class="button mini" id="find"><i class="icon-pencil"></i> '+textUpdate+'</button> ';		
	}
	
	if(getAccess("delete")==1){
		cpeModelAccess+='<button class="button mini" id="delete"><i class="icon-cancel-2"></i> '+textDelete+'</button> ';	
	}
	
	var cpeTypeUrlRead="/techwizard/general/getTypeCpe/";
	    
	getCpeModels(cpeModelAccess);

	var ajax_data = {
		"id" 			: $("input[name='modalCpeModelInputHiddenIdCpeModel']"),
		"name" 			: $("input[name='modalModelCpeInputNameModelCpe']"),
		"model"			: "",
		"description"	: "",
		"frecuencia"	: $("select[name='modalCpeModelSelectFrequenceCpeModel']"),
		"mark"			: "",
		"type_cpe"		: $("select[name='modalCpeModelSelectCpeTypeCpeModel']"),
		"family"		: $("select[name='modalCpeModelSelectCpeTypeCpeModel']"),
		"wifi"			: "",
//		"docsis"		: $("select[name='modalCpeModelSelectDocsisCpeModel']"),
		"docsis"		: "",		
		"status"		: "",
		
	};
	
	$.getJSON( cpeTypeUrlRead, function(data){
		var options = ajax_data.type_cpe;
		$.each( data.data, function( i, item ) {
			options.append($("<option />").val(item.code).text(item.name));
	    });  
	});
	
	var optionsf = ajax_data.frecuencia;
	optionsf.append($("<option />").val('2.4').text('2.4 Ghz'));
	optionsf.append($("<option />").val('5.0').text('5 Ghz'));
/*	
	var optionsd = ajax_data.docsis;
	optionsd.append($("<option />").val('docsis1').text('docsis1'));
	optionsd.append($("<option />").val('docsis2').text('docsis2'));
*/	    
	
	//	CODIGO PARA RECUPERAR LOS IDS A LA HORA DE ELIMINAR VARIOS REGISTROS
	var table = $('#example').DataTable();
	$('#example tbody').on('click', 'button', function() {
		var buttonId = $(this).attr('id');
		//$(this).parent().removeClass('row_selected');
		if (buttonId == "find") {
			if(getAccess("update")==1){
				$("#CpeModelsModalCpeModel").slideDown("slow");
				findCpeModel(table.row($(this).parents('tr')).data()._id,ajax_data);
			}
		} else if (buttonId == "delete") {
			if(getAccess("delete")==1){
				var consult = confirm(textDeleteMessage + table.row($(this).parents('tr')).data().name+'?');
				if (consult) {
					deleteCpeModel(table.row($(this).parents('tr')).data()._id);
				} else {
					console.log("cancel delete");
				}
			}
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
		$("#cpeModelTitle").text(' '+textAdd+' '+nameLowercase);
		$("button[name='CpeModelsModalButtonUpdateCpeModel']").hide();
		$("button[name='CpeModelsModalButtonAddCpeModel']").show();
		ajax_data.type_cpe.find("option[value='']").attr("selected",true);
		ajax_data.frecuencia.find("option[value='']").attr("selected",true);
		
		window.location.href = hash.create;
		return false;
	});

	$("button[name='CpeModelsModalButtonCleanCpeModel']").on("click", function(event) {
		event.preventDefault(event);
		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='CpeModelsModalButtonAddCpeModel']").css("background-color"));
		$("div.modalMain").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		
		ajax_data.type_cpe.find("option[value='']").attr("selected",true);
		ajax_data.frecuencia.find("option[value='']").attr("selected",true);
		$('.modalMessageError').html("");
		
		$("div.modalMain").find("option[value='']").attr("selected", true);
		$("div.modalMain").find('select').css("background-color", "#FFFFFF");
		$("div.modalMain").find('select').css("border-color", $("button[name='CpeModelsModalButtonAddCpeModel']").css("background-color"));
		$("div.modalMain").find('select').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		
		
		return false;
	});

	$("button[name='CpeModelsModalButtonCloseModalCpeModel']").on("click", function(event) {
		event.preventDefault(event);
		window.location.href = "#";
		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='CpeModelsModalButtonAddCpeModel']").css("background-color"));
		$("div.modalMain").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		
		ajax_data.type_cpe.find("option[value='']").attr("selected",true);
		ajax_data.frecuencia.find("option[value='']").attr("selected",true);
		
		$("div.modalMain").find("option[value='']").attr("selected", true);
		$("div.modalMain").find('select').css("background-color", "#FFFFFF");
		$("div.modalMain").find('select').css("border-color", $("button[name='CpeModelsModalButtonAddCpeModel']").css("background-color"));
		$("div.modalMain").find('select').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		
		$('.modalMessageError').html("");
		return false;
	});

	$("button[name='CpeModelsModalButtonAddCpeModel']").on("click", function(event) {
		if(validate("add")){
			addCpeModel(ajax_data);	
		}
	});

	$("button[name='CpeModelsModalButtonUpdateCpeModel']").on("click", function(event) {
		if(validate("update")){
			updateCpeModel(ajax_data);
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
	ajax_data.name.validCamp('abcdefghijklmnñopqrstuvwxyzáéíóúÁÉÍÓÚ1234567890 ');
	/*
	$(ajax_data.name).bind("paste", function(e) {
		e.preventDefault();
	});
 */   
    $(ajax_data.name).focusout(function() {
        $(this).val($.trim($(this).val()));
		$(this).val($(this).val().split(/\s{1,}/g).join(" ")); 
    });
	/*
	ajax_data.name.keyup(function() {
		$( this ).val(function( i, val ) {
			return val.toUpperCase();
		});
    });
    */
    $(ajax_data.name).bind("paste", function(e) {
		e.preventDefault();
	});
    
});

