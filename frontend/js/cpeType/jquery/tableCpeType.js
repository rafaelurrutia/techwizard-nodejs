
var url = {
	"create" 	: "/techwizard/general/addTypeCpe/",
	"read" 		: "/techwizard/general/getTypeCpe/",
	"update" 	: "/techwizard/general/editTypeCpe/",
	"delete" 	: "/techwizard/general/removeTypeCpe/",
	"find" 		: "/techwizard/general/getTypeCpe/",
};

/*

var url = {
	"create" 	: "http://devel1.baking.cl/techwizard/general/addTypeCpe/",
	"read" 		: "http://devel1.baking.cl/techwizard/general/getTypeCpe/",
	"update" 	: "http://devel1.baking.cl/techwizard/general/editTypeCpe/",
	"delete" 	: "http://devel1.baking.cl/techwizard/general/removeTypeCpe/",
	"find" 		: "http://devel1.baking.cl/techwizard/general/getTypeCpe/",
};

*/

var hash = {
	"create" 	: "#CpeTypesModalCpeType",
	"update" 	: "#CpeTypesModalCpeType",
	"delete" 	: "#CpeTypesModalDeleteCpeType",
};

var timeToRefreshDatatables=10;	//	seconds
var maxRowLoad=50;

var textError,textErrorMessageFind,textErrorMessageDelete,textErrorMessageAdd,textErrorMessageUpdate,textSuccessMessageDelete,textSuccessMessageAdd,textSuccessMessageUpdate,nameLowercase,nameUppercase,textUpdate,textAdd,textUpdateButton,textDelete,textAccess,textInsert,textFieldRequired,textDeleteMessage,textErrorDataBase,textErrorValidateTitle1,textErrorValidateSubTitle1_1,textErrorValidateSubTitle2_1,textErrorValidateSubTitle3_1,textErrorValidateTitle2,textErrorValidateSubTitle1_2;
var textInactive="Inactivo";
var textActive="Activo";

var datatableTitles;
var datatableData = ["name"];
var urlDatatableLanguageUrl;

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
	textErrorMessageAdd="No se pudo agregar la información seleccionada";
	textErrorMessageUpdate="No se pudo modificar la información seleccionada";

	textSuccessMessageDelete="Información eliminada satisfactoriamente";
	textSuccessMessageAdd="Información agregada satisfactoriamente";
	textSuccessMessageUpdate="Información modificada satisfactoriamente";

	nameLowercase= "tipo CPE";
	nameUppercase= "Tipo CPE";

	textUpdate="Modificar";
	textAdd="Agregar";
	textUpdateButton="Grabar";
	textDelete="Eliminar";
	textAccess="Permisos";

	textInsert="Ingresando...";
	textFieldRequired="Campo Requerido";

	textDeleteMessage="¿Está seguro que desea eliminar ";
	textErrorDataBase="Error en la base de datos";

	textErrorValidateTitle1="Error nombre tipo CPE, ";
	textErrorValidateSubTitle1_1="el texto es requerido.";
	textErrorValidateSubTitle2_1="solo puedes ingresar letras y números entre un rango de 2 a 30 caracteres.";
	textErrorValidateSubTitle3_1="este nombre ya ha sido ingresado previamente, ingrese un nombre distinto.";
	
	datatableTitles = ["Nombre tipo CPE","Opciones"];	

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

	nameLowercase= "CPE type";
	nameUppercase= "CPE Type";

	textUpdate="Update";
	textAdd="Add";
	textUpdateButton="Update";
	textDelete="Delete";
	textAccess="Access";

	textInsert="Insert...";
	textFieldRequired="Field Required";

	textDeleteMessage="Are you sure to remove ";
	textErrorDataBase="Error Database";

	textErrorValidateTitle1="Error CPE type, ";
	textErrorValidateSubTitle1_1="text required.";
	textErrorValidateSubTitle2_1="you can only enter letters and numbers in a range of 2 to 30 characters.";
	textErrorValidateSubTitle3_1="this name has been previously entered, enter a different name.";
	
//	datatableTitles = ["CPE type name","Options"];
	datatableTitles = ["CPE type name",""];
	
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

	nameLowercase= "tipo CPE";
	nameUppercase= "Tipo CPE";

	textUpdate="Alterar";
	textAdd="Adicionar";
	textUpdateButton="Gravar";
	textDelete="Eliminar";

	textInsert="Acessando...";
	textFieldRequired="Campo Requerido";

	textDeleteMessage="Tem certeza de que deseja eliminar ";
	textErrorDataBase="Erro no banco de dados";

	textErrorValidateTitle1="Erro nome tipo CPE, ";
	textErrorValidateSubTitle1_1="o texto é requerido.";
	textErrorValidateSubTitle2_1="só é possível inserir letras e números em uma faixa de 2 a 30 caracteres.";
	textErrorValidateSubTitle3_1="este nome já foi inserido previamente, insira um nome diferente.";
	
	datatableTitles = ["Nome tipo CPE","Opções"];	
	
	break;	
default:
}

var deleteCpeType = function(idCpeType) {

	$.ajax({
		type 		: "POST",
		url 		: url.delete, 
		data		: {id:idCpeType}, 
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
//	end deleteCpeType

var findCpeType = function(idCpeType,ajax_data) {
	
	var findCpeType = $.getJSON(url.read + idCpeType, function(data) {
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
		//	ajax_data.name.val(data.data.code);
			$("button[name='CpeTypesModalButtonAddCpeType']").hide();
			$("button[name='CpeTypesModalButtonUpdateCpeType']").show();
			$("#cpeTypeTitle").text(textUpdate+' '+nameLowercase);
			$('.modalMessageError').html("");
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
//	end	findCpeType

var updateCpeType = function(ajax_data) {

	var ajax_data_update = {
		"id" 		: ajax_data.id.val(),
		"name" 		: ajax_data.name.val().trim(),
	};
	
	console.log("before send");

	$("button[name='CpeTypesModalButtonUpdateCpeType']").html('<i class="icon-loading"></i> Loading...');
	$("button[name='CpeTypesModalButtonUpdateCpeType']").text("Loading...");
	$("button[name='CpeTypesModalButtonUpdateCpeType']").prop("disabled", true);

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
				
//				console.log("error");
//		    	var input="modalGroupInputNameGroup";
//		    	var titulo="Error nombre modelo extensor, ";
		    	var mensaje="Este nombre ya ha sido ingresado previamente."; 	
	   

				message = mensaje;
				window.location.href = "#";
				var not = $.Notify({
					caption : textError,
					content : textErrorValidateSubTitle3_1,
					timeout : 5000, // 5 seconds
					style : ( {
						background : 'red',
						color : '#FFFFFF'
					})
				});
				
			}else{
				message = "No se pudo modificar la información seleccionada";
				window.location.href = "#";
				var not = $.Notify({
					caption : textError,
					content : textErrorMessageUpdate,
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
		$("button[name='CpeTypesModalButtonUpdateCpeType']").text(textUpdate);
		$("button[name='CpeTypesModalButtonUpdateCpeType']").prop("disabled", false);

		$("button[name='CpeTypesModalButtonAddCpeType']").hide();
		$("button[name='CpeTypesModalButtonUpdateCpeType']").show();

		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='CpeTypesModalButtonUpdateCpeType']").css("background-color"));
		$("div.modalMain").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
	
		$(".modalMessageError").html(""); 
	});
	//	end ajax

};
//	end	updateCpeType

var addCpeType = function(ajax_data) {

	var ajax_data_create = {
		"name" 		: ajax_data.name.val().trim(),
	};
	
	console.log(ajax_data_create);
	$("#cpeTypeTitle").text(textAdd+' '+nameLowercase);
	$("button[name='CpeTypesModalButtonAddCpeType']").html('<i class="icon-loading"></i> '+textInsert);
	$("button[name='CpeTypesModalButtonAddCpeType']").text(textInsert);
	
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
		$("button[name='CpeTypesModalButtonAddCpeType']").text(textInsert);
		$("button[name='CpeTypesModalButtonAddCpeType']").prop("disabled", false);

		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='CpeTypesModalButtonAddCpeType']").css("background-color"));		
		$("div.modalMain").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
	
		$(".modalMessageError").html(""); 
	});
	//	end ajax

};
//	end	addCpeType

var getCpeTypes = function(cpeTypeAccess) {

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
			},{
				"title" : datatableTitles[1],
				"bSortable" : false
			}],
			"language" : {
				"url" : urlDatatableLanguageUrl
			},
			"columnDefs" : [{
				"targets" : 2,
				"data" : null,
				"defaultContent" : cpeTypeAccess
			}, {
				"bSortable" : false,
				"aTargets" : [0]
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
			content : textErrorDataBase,
			timeout : 7000, // 7 seconds
			style : ( {
				background : 'red',
				color : '#FFFFFF'
			})
		});

	}

};

function htmlEnableButtonUpdate(cpeTypeAccess,textUpdate){
	
	if(getAccess("update")==1){
		cpeTypeAccess+='<button class="button mini" id="find"><i class="icon-pencil"></i> '+textUpdate+'</button> ';		
	}
	
	return cpeTypeAccess;
	
}

function htmlEnableButtonDelete(cpeTypeAccess,textDelete){
	
	if(getAccess("delete")==1){
		cpeTypeAccess+='<button class="button mini" id="delete"><i class="icon-cancel-2"></i> '+textDelete+'</button> ';	
	}
	
	return cpeTypeAccess;
	
}

$(document).ready(function() {

	var cpeTypeAccess='';
	
	getCpeTypes(cpeTypeAccess);

	var ajax_data = {
		"id" 		: $("input[name='modalCpeTypeInputHiddenIdCpeType']"),
		"name" 		: $("input[name='modalCpeTypeInputNameCpeType']"),
		"code"		: "",
	};
	
	//	CODIGO PARA RECUPERAR LOS IDS A LA HORA DE ELIMINAR VARIOS REGISTROS
	var table = $('#example').DataTable();
	$('#example tbody').on('click', 'button', function() {
		var buttonId = $(this).attr('id');
		//$(this).parent().removeClass('row_selected');
		if (buttonId == "find") {
			if(getAccess("update")==1){
				$("#CpeTypesModalCpeType").slideDown("slow");
				findCpeType(table.row($(this).parents('tr')).data()._id,ajax_data);
			}
		} else if (buttonId == "delete") {
			if(getAccess("delete")==1){	
				var consult = confirm(textDeleteMessage + table.row($(this).parents('tr')).data().name+'?');
				if (consult) {
					deleteCpeType(table.row($(this).parents('tr')).data()._id);
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
		$("#cpeTypeTitle").text(textAdd+' '+nameLowercase);
		$("button[name='CpeTypesModalButtonUpdateCpeType']").hide();
		$("button[name='CpeTypesModalButtonAddCpeType']").show();
		$('.modalMessageError').html("");
		window.location.href = hash.create;
		return false;
	});

	$("button[name='CpeTypesModalButtonCleanCpeType']").on("click", function(event) {
		event.preventDefault(event);
		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='CpeTypesModalButtonAddCpeType']").css("background-color"));
		$("div.modalMain").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		$('.modalMessageError').html("");
		
		return false;
	});

	$("button[name='CpeTypesModalButtonCloseModalCpeType']").on("click", function(event) {
		event.preventDefault(event);
		window.location.href = "#";
		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='CpeTypesModalButtonAddCpeType']").css("background-color"));
		$("div.modalMain").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		$('.modalMessageError').html("");
		
		return false;
	});

	$("button[name='CpeTypesModalButtonAddCpeType']").on("click", function(event) {
		if(validate("add")){
			addCpeType(ajax_data);	
		}
	});

	$("button[name='CpeTypesModalButtonUpdateCpeType']").on("click", function(event) {
		if(validate("update")){
			updateCpeType(ajax_data);
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

