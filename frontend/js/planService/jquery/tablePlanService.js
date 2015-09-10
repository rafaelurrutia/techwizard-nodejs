
var url = {
	"create" 	: "/techwizard/general/addPlan/",
	"read" 		: "/techwizard/general/getPlan/",
	"update" 	: "/techwizard/general/editPlan/",
	"delete" 	: "/techwizard/general/removePlan/",
	"find" 		: "/techwizard/general/getPlan/",
};

/*

var url = {
	"create" 	: "http://devel1.baking.cl/techwizard/general/addPlan/",
	"read" 		: "http://devel1.baking.cl/techwizard/general/getPlan/",
	"update" 	: "http://devel1.baking.cl/techwizard/general/editPlan/",
	"delete" 	: "http://devel1.baking.cl/techwizard/general/removePlan/",
	"find" 		: "http://devel1.baking.cl/techwizard/general/getPlan/",
}; 
 
 */

var hash = {
	"create" 	: "#PlanServicesModalPlanService",
	"update" 	: "#PlanServicesModalPlanService",
	"delete" 	: "#PlanServicesModalDeletePlanService",
};

var timeToRefreshDatatables=10;	//	seconds
var maxRowLoad=50;

var textError,textErrorMessageFind,textErrorMessageDelete,textErrorMessageAdd,textErrorMessageUpdate,textSuccessMessageDelete,textSuccessMessageAdd,textSuccessMessageUpdate,nameLowercase,nameUppercase,textUpdate,textAdd,textUpdateButton,textDelete,textAccess,textInsert,textFieldRequired,textDeleteMessage,textErrorDataBase,textErrorValidateTitle1,textErrorValidateSubTitle1_1,textErrorValidateSubTitle2_1,textErrorValidateSubTitle3_1,textErrorValidateTitle2,textErrorValidateSubTitle1_2;

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

var datatableTitles;
var datatableData = ["name", "upload", "download"];
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

	nameLowercase= "plan de contratación";
	nameUppercase= "Plan de contratación";

	textUpdate="Modificar";
	textAdd="Agregar";
	textUpdateButton="Grabar";
	textDelete="Eliminar";

	textInsert="Ingresando...";
	textFieldRequired="Campo Requerido";

	textDeleteMessage="¿Está seguro que desea eliminar ";
	textErrorDataBase="Error en la base de datos";

	textErrorValidateTitle1="Error nombre plan de contratación, ";
	textErrorValidateSubTitle1_1="el texto es requerido.";
	textErrorValidateSubTitle2_1="solo puedes ingresar letras y números entre un rango de 5 a 30 caracteres.";
	textErrorValidateSubTitle3_1="este nombre ya ha sido ingresado previamente, ingrese un nombre distinto.";
			
	textErrorValidateTitle2="Error valor subida Plan de Contratación, ";
	textErrorValidateSubTitle1_2="el text es requerido.";
	textErrorValidateSubTitle2_2="solo puedes ingresar letras y números entre un rango de 2 a 6 caracteres.";
	
	textErrorValidateTitle3="Error valor descarga Plan de Contratación, ";
	textErrorValidateSubTitle1_3="el text es requerido.";
	textErrorValidateSubTitle2_3="solo puedes ingresar letras y números entre un rango de 2 a 6 caracteres.";
	
	datatableTitles = ["Nombre","Velocidad de subida","Velocidad de descarga","Opciones"];	

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

	nameLowercase= "package";
	nameUppercase= "Package";

	textUpdate="Update";
	textAdd="Add";
	textUpdateButton="Update";
	textDelete="Delete";
	textAccess="Access";

	textInsert="Insert...";
	textFieldRequired="Field Required";

	textDeleteMessage="Are you sure to remove ";
	textErrorDataBase="Error Database";

	textErrorValidateTitle1="Error package, ";
	textErrorValidateSubTitle1_1="text required.";
	textErrorValidateSubTitle2_1="you can only enter letters and numbers in a range of 5 to 30 characters.";
	textErrorValidateSubTitle3_1="this name has been previously entered, enter a different name.";
			
	textErrorValidateTitle2="Error speed upload, ";
	textErrorValidateSubTitle1_2="text required.";
	textErrorValidateSubTitle2_2="you can only enter numbers in a range of 2 to 6 characters.";
	
	textErrorValidateTitle3="Error speed download, ";
	textErrorValidateSubTitle1_3="text required.";
	textErrorValidateSubTitle2_3="you can only enter numbers in a range of 2 to 6 characters.";
	
	datatableTitles = ["Package name","Upload speed","Download speed","Options"];
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

	nameLowercase= "plano de serviço";
	nameUppercase= "Plano de serviço";

	textUpdate="Alterar";
	textAdd="Adicionar";
	textUpdateButton="Gravar";
	textDelete="Eliminar";

	textInsert="Acessando...";
	textFieldRequired="Campo Requerido";

	textDeleteMessage="Tem certeza de que deseja eliminar ";
	textErrorDataBase="Erro no banco de dados";

	textErrorValidateTitle1="Erro nome plano de serviço, ";
	textErrorValidateSubTitle1_1="o texto é requerido.";
	textErrorValidateSubTitle2_1="só é possível inserir letras e números em uma faixa de 5 a 30 caracteres.";
	textErrorValidateSubTitle3_1="este nome já foi inserido previamente, insira um nome diferente.";
			
	textErrorValidateTitle2="Erro valor carga Plano de serviço, ";
	textErrorValidateSubTitle1_2="o texto é requerido.";
	textErrorValidateSubTitle2_2="só é possível inserir letras e números em uma faixa de 2 a 6 caracteres.";
	
	textErrorValidateTitle3="Erro valor descarga Plano de serviço, ";
	textErrorValidateSubTitle1_3="o texto é requerido.";
	textErrorValidateSubTitle2_3="só é possível inserir letras e números em uma faixa de 2 a 6 caracteres.";
	
	datatableTitles = ["Nome","Velocidade carga","Velocidade descarga","Opções"];
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

var deletePlanService = function(idPlanService) {

	$.ajax({
		type 		: "POST",
		url 		: url.delete, 
		data		: {id:idPlanService}, 
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
//	end deletePlanService

var findPlanService = function(idPlanService,ajax_data) {
	var findPlanService = $.getJSON(url.read + idPlanService, function(data) {
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
			ajax_data.upload.val(data.data.upload);
			ajax_data.download.val(data.data.download);
			/*
			$("input[name='modalPlanServiceInputHiddenIdPlanService']").val(data.data._id);
			$("input[name='modalPlanServiceInputNamePlanService']").val(data.data.name);
			$("input[name='modalPlanServiceInputUploadPlanService']").val(data.data.upload);
			$("input[name='modalPlanServiceInputDownloadPlanService']").val(data.data.download);
			*/
			$("button[name='PlanServicesModalButtonAddPlanService']").hide();
			$("button[name='PlanServicesModalButtonUpdatePlanService']").show();
			$("#planServiceTitle").text(textUpdate+' '+nameLowercase);
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
//	end	findPlanService

var updatePlanService = function(ajax_data) {

	var ajax_data_update = {
		"id" 		: ajax_data.id.val(),
		"name" 		: ajax_data.name.val().trim(),
		"upload" 	: ajax_data.upload.val().trim().replace(/\./g,''),
		"download" 	: ajax_data.download.val().trim().replace(/\./g,''),
	};
	
	console.log("before send");

	$("button[name='PlanServicesModalButtonUpdatePlanService']").html('<i class="icon-loading"></i> Loading...');
	$("button[name='PlanServicesModalButtonUpdatePlanService']").text("Loading...");
	$("button[name='PlanServicesModalButtonUpdatePlanService']").prop("disabled", true);

	$.ajax({
		type 		: "POST",
		url 		: url.update,
		data 		: ajax_data_update,
		dataType 	: "json",
		encode 		: true
	}).done(function(data) {

		var message = "";
		
		if(data.status=="false"){
		
			if(data.code=="206"){
				
		    	var titulo="Error nombre "+nameLowercase+", ";
		    	var mensaje="El nombre elegido ya há sido ingresado previamente."; 	
	   

				message = mensaje;
				window.location.href = "#";
				var not = $.Notify({
					caption : "Error",
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
					caption : "Error",
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
		$("button[name='PlanServicesModalButtonUpdatePlanService']").text(textUpdate);
		$("button[name='PlanServicesModalButtonUpdatePlanService']").prop("disabled", false);
		$("div.modalMain").find('input[type="text"]').val("");
		$("button[name='PlanServicesModalButtonAddPlanService']").hide();
		$("button[name='PlanServicesModalButtonUpdatePlanService']").show();
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='PlanServicesModalButtonUpdatePlanService']").css("background-color"));
	});
	//	end ajax

};
//	end	updatePlanService

var addPlanService = function(ajax_data) {

	var ajax_data_create = {
		"name" 		: ajax_data.name.val().trim(),
		"upload" 	: ajax_data.upload.val().trim().replace(/\./g,''),
		"download" 	: ajax_data.download.val().trim().replace(/\./g,''),
	};
		
	$("button[name='PlanServicesModalButtonAddPlanService']").html('<i class="icon-loading"></i> '+textInsert);
	$("button[name='PlanServicesModalButtonAddPlanService']").text(textInsert);
	
	$.ajax({
		type 		: "POST",
		url 		: url.create,
		data 		: ajax_data_create,
		dataType 	: "json",
		encode 		: true
	}).done(function(data) {

		if (!data.status) {
			var message = "No se pudo ingresar la información seleccionada";
			
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
		$("button[name='PlanServicesModalButtonAddPlanService']").text(textAdd);
		$("button[name='PlanServicesModalButtonAddPlanService']").prop("disabled", false);

		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='PlanServicesModalButtonAddPlanService']").css("background-color"));
		$('.modalMessageError').html("");
	});
	//	end ajax

};
//	end	addPlanService

var getPlanServices = function(planServiceAccess) {

	

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
				"title": datatableTitles[0]
			}, {
				"data" : datatableData[1],
				"title": datatableTitles[1]
			}, {
				"data" : datatableData[2],
				"title": datatableTitles[2]
			}, {
				"title": datatableTitles[3],
				"bSortable" : false
			}],
			"language" : {
				"url" : urlDatatableLanguageUrl
			},
			"columnDefs" : [{
				"targets" : 4,
				"data" : null,
				"defaultContent" : planServiceAccess
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
			},
			"createdRow" : function(row, data, index) {
				$('td', row).eq(2).html(changeFormatNumeric(data.upload) + ' (' + data.unidad + ')');
				$('td', row).eq(3).html(changeFormatNumeric(data.download) + ' (' + data.unidad + ')');
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

	var planServiceAccess='';
	
	if(getAccess("update")==1){
		planServiceAccess+='<button class="button mini" id="find"><i class="icon-pencil"></i> '+textUpdate+'</button> ';		
	}
	
	if(getAccess("delete")==1){
		planServiceAccess+='<button class="button mini" id="delete"><i class="icon-cancel-2"></i> '+textDelete+'</button> ';	
	}
	
	getPlanServices(planServiceAccess);

	var ajax_data = {
		"id" 		: $("input[name='modalPlanServiceInputHiddenIdPlanService']"),
		"name" 		: $("input[name='modalPlanServiceInputNamePlanService']"),
		"upload" 	: $("input[name='modalPlanServiceInputUploadPlanService']"),
		"download" 	: $("input[name='modalPlanServiceInputDownloadPlanService']"),
	};
	
	//	CODIGO PARA RECUPERAR LOS IDS A LA HORA DE ELIMINAR VARIOS REGISTROS
	var table = $('#example').DataTable();
	$('#example tbody').on('click', 'button', function() {
		var buttonId = $(this).attr('id');
		//$(this).parent().removeClass('row_selected');
		if (buttonId == "find") {
			if(getAccess("update")==1){
				$("#PlanServicesModalPlanService").slideDown("slow");
				findPlanService(table.row($(this).parents('tr')).data()._id,ajax_data);	
			}
		} else if (buttonId == "delete") {
	
			if(getAccess("delete")==1){	
				var consult = confirm(textDeleteMessage+ table.row($(this).parents('tr')).data().name+'?');
				if (consult) {
					deletePlanService(table.row($(this).parents('tr')).data()._id);
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
		$("#planServiceTitle").text(' '+textAdd+' '+nameLowercase);
		$("button[name='PlanServicesModalButtonUpdatePlanService']").hide();
		$("button[name='PlanServicesModalButtonAddPlanService']").show();
		$('.modalMessageError').html("");
		window.location.href = hash.create;
		return false;
	});

	$("button[name='PlanServicesModalButtonCleanPlanService']").on("click", function(event) {
		event.preventDefault(event);
		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='PlanServicesModalButtonAddPlanService']").css("background-color"));
		$("div.modalMain").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		$('.modalMessageError').html("");
		return false;
	});

	$("button[name='PlanServicesModalButtonCloseModalPlanService']").on("click", function(event) {
		event.preventDefault(event);
		window.location.href = "#";
		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='PlanServicesModalButtonAddPlanService']").css("background-color"));
		$("div.modalMain").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		$('.modalMessageError').html("");
		return false;
	});
	/*
	 $("form[name='planServiceModalUpdatePlanService']").submit(function(event) {
	 console.clear();
	 updatePlanService();
	 });

	 $("form[name='planServiceModalAddPlanService']").submit(function(event) {
	 console.clear();
	 addPlanService();
	 });
	 */

	$("button[name='PlanServicesModalButtonAddPlanService']").on("click", function(event) {
		if(validate("add")){
			addPlanService(ajax_data);	
		}
	});

	$("button[name='PlanServicesModalButtonUpdatePlanService']").on("click", function(event) {
		if(validate("update")){
			updatePlanService(ajax_data);
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
	ajax_data.name.validCamp('abcdefghijklmnñopqrstuvwxyzáéíóú1234567890 ');
	ajax_data.upload.validCamp('1234567890');
	ajax_data.download.validCamp('1234567890');
	/*
	ajax_data.name.keyup(function() {
		$( this ).val(function( i, val ) {
			return val.toUpperCase();
		});
    });
    */
	ajax_data.upload.keyup(function() {
		$(this).val(function(index, value) {
	        return value
	            .replace(/\D/g, '')
	            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
	        ;
	    });
    });
    
	ajax_data.download.keyup(function() {
		$(this).val(function(index, value) {
	        return value
	            .replace(/\D/g, '')
	            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
	        ;
	    });
    });
   /* 
    $(ajax_data.name).bind("paste", function(e) {
		e.preventDefault();
	});
	
	$(ajax_data.upload).bind("paste", function(e) {
		e.preventDefault();
	});
	
	$(ajax_data.download).bind("paste", function(e) {
		e.preventDefault();
	}); 
    */
    $(ajax_data.name).focusout(function() {
        $(this).val($.trim($(this).val()));
		$(this).val($(this).val().split(/\s{1,}/g).join(" ")); 
    });
	/*
	
	$("input[name='modalPlanServiceInputNamePlanService']").validCamp('abcdefghijklmnñopqrstuvwxyzáéiou1234567890');
	$("input[name='modalPlanServiceInputUploadPlanService']").validCamp('1234567890');
	$("input[name='modalPlanServiceInputDownloadPlanService']").validCamp('1234567890');
	
	$("input[name='modalPlanServiceInputNamePlanService']").keyup(function() {
		$( this ).val(function( i, val ) {
			return val.toUpperCase();
		});
    });
    
    
	$("input[name='modalPlanServiceInputUploadPlanService']").keyup(function() {
		$(this).val(function(index, value) {
	        return value
	            .replace(/\D/g, '')
	            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
	        ;
	    });
    });
    
	$("input[name='modalPlanServiceInputDownloadPlanService']").keyup(function() {
		$(this).val(function(index, value) {
	        return value
	            .replace(/\D/g, '')
	            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
	        ;
	    });
    });    
    */
});

