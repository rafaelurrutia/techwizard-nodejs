var url = {
	"create" 		: "/techwizard/general/addGroup/",
	"read" 			: "/techwizard/general/getGroup/",
	"update" 		: "/techwizard/general/editGroup/",
	"delete" 		: "/techwizard/general/removeGroup/",
	"find" 			: "/techwizard/general/getGroup/",
	"updateAccess"	: "/techwizard/general/editPrivileges/"
};

var hash = {
	"create" 	: "#GroupsModalGroup",
	"update" 	: "#GroupsModalGroup",
	"delete" 	: "#GroupsModalDeleteGroup",
	"access"	: "#GroupsModalAccessGroup",
};

var timeToRefreshDatatables=10;	//	seconds

var textError,textErrorMessageFind,textErrorMessageDelete,textErrorMessageAdd,textErrorMessageUpdate,textSuccessMessageDelete,textSuccessMessageAdd,textSuccessMessageUpdate,nameLowercase,nameUppercase,textUpdate,textAdd,textUpdateButton,textDelete,textAccess,textInsert,textFieldRequired,textDeleteMessage,textErrorDataBase,textErrorValidateTitle1,textErrorValidateSubTitle1_1,textErrorValidateSubTitle2_1,textErrorValidateSubTitle3_1,textErrorValidateTitle2,textErrorValidateSubTitle1_2;
var textInactive="Inactivo";
var textActive="Activo";

var textYes;
var textNo;

var maxRowLoad=50;

var datatableTitles;
var datatableData = ["name", "tipo_id", "activo","appaccess"];
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

	nameLowercase= "grupo";
	nameUppercase= "Grupo";

	textUpdate="Modificar";
	textAdd="Agregar";
	textUpdateButton="Grabar";
	textDelete="Eliminar";
	textAccess="Permisos";

	textInsert="Ingresando...";
	textFieldRequired="Campo Requerido";

	textDeleteMessage="Está seguro que desea eliminar ";
	textErrorDataBase="Error en la base de datos";

	textErrorValidateTitle1="Error nombre grupo, ";
	textErrorValidateSubTitle1_1="el texto es requerido.";
	textErrorValidateSubTitle2_1="solo puedes ingresar letras y números entre un rango de 3 a 30 caracteres.";
	textErrorValidateSubTitle3_1="este nombre ya ha sido ingresado previamente, ingrese un nombre distinto.";
			
	textErrorValidateTitle2="Error tipo id, ";
	textErrorValidateSubTitle1_2="el campo es requerido.";
	
	textInactive="Inactivo";
	textActive="Activo";
	
	textYes="Si";
	textNo="No";
	
	datatableTitles = ["Nombre grupo", "Tipo Id", "Estado","Acceso a aplicaciones","Opciones"];	

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

	nameLowercase= "group";
	nameUppercase= "Group";

	textUpdate="Update";
	textAdd="Add";
	textUpdateButton="Update";
	textDelete="Delete";
	textAccess="Access";

	textInsert="Insert...";
	textFieldRequired="Field Required";

	textDeleteMessage="Are you sure to remove ";
	textErrorDataBase="Database Error";

	textErrorValidateTitle1="Error group name, ";
	textErrorValidateSubTitle1_1="text required.";
	textErrorValidateSubTitle2_1="you can only enter letters and numbers in a range of 3 to 30 characters.";
	textErrorValidateSubTitle3_1="this name has been previously entered, enter a different name.";
			
	textErrorValidateTitle2="Error type Id, ";
	textErrorValidateSubTitle1_2="Field Required.";
	
	textInactive="Inactive";
	textActive="Active";	
	
	textYes="Yes";
	textNo="No";
	
	datatableTitles = ["Group name", "Type Id", "Status","Aplication access","Options"];
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

	nameLowercase= "grupo";
	nameUppercase= "Grupo";

	textUpdate="Alterar";
	textAdd="Adicionar";
	textUpdateButton="Alterar";
	textDelete="Eliminar";
	textAccess="Permissões";

	textInsert="Acessar...";
	textFieldRequired="Elemento Necessário";

	textDeleteMessage="Certifique-se de remover ";
	textErrorDataBase="Erro de banco de dados";

	textErrorValidateTitle1="Erro nome grupo, ";
	textErrorValidateSubTitle1_1="texto obrigatório.";
	textErrorValidateSubTitle2_1="Você só pode digitar letras e números em um intervalo de 3-30 caracteres.";
	textErrorValidateSubTitle3_1="este nome foi inserido anteriormente, digite um nome diferente.";
			
	textErrorValidateTitle2="Erro tipo Id, ";
	textErrorValidateSubTitle1_2="Campo obrigatório.";
	
	textInactive="Inativo";
	textActive="Ativo";	
	
	textYes="Sim";
	textNo="Não";
	
	datatableTitles = ["Nome", "Tipo Id ", "Estado","Acesso aplicativo","Opções"];
	break;	
default:
}

		

var failGroupSection = function(jqXHR, textStatus, errorThrown) {
	
	//console.clear();
//	console.log("error send");
	window.location.href = "#";
	var not = $.Notify({
		caption : textError,
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

};
//	end failGroupSection

var cleanElementsFormModalSection = function(GroupsModalButtonName) {

//	console.log("cleanElementsFormModalSection");

	$("div.modalMain").find('input[type="text"]').val("");
	$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
	$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='"+GroupsModalButtonName+"']").css("background-color"));
	$("div.modalMain").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
	
	$("div.modalMain").find("option[value='']").attr("selected", true);
	$("div.modalMain").find('select').css("background-color", "#FFFFFF");
	$("div.modalMain").find('select').css("border-color", $("button[name='"+GroupsModalButtonName+"']").css("background-color"));
	$("div.modalMain").find('select').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		
	changeStateButton("button[name='groupModalGroupButtonActive']","button[name='groupModalGroupButtonInactive']");
	changeStateButton("button[name='groupModalGroupButtonAccessAplicationDisable']","button[name='groupModalGroupButtonAccessAplicationEnable']");

	$(".modalMessageError").html(""); 
				
};
//	end cleanElementsFormModalSection

var deleteGroup = function(idGroup) {

	$.ajax({
		type 		: "POST",
		url 		: url.delete, 
		data		: {id:idGroup}, 
		dataType 	: "json",
		encode      : true
	})
	.
	done(function(data) {
	//	console.clear();
		if (!data.status) {

			var not = $.Notify({
				caption : textError,
				content : textErrorMessageDelete,
				timeout : 5000, // 5 seconds
				style : ( {
					background : 'red',
					color : '#FFFFFF'
				})
			});
		} else if (data.status) {
		//	console.clear();
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

		failGroupSection(jqXHR, textStatus, errorThrown);

	});
	//	end ajax

};
//	end deleteGroup

var findGroupAccess = function(idGroup,ajax_data) {
	var findGroup = $.getJSON(url.find + idGroup, function(data) {

//		console.log(idGroup);
		if (!data.status) {
			var message = textError;

			var not = $.Notify({
				caption : textError,
				content : message,
				timeout : 5000, // 5 seconds
				style : ( {
					background : 'red',
					color : '#FFFFFF'
				})
			});
		} else if (data.status=="true" && data.code=="200") {
			
			ajax_data.idAccess.val(data.data._id);
			
//			console.log(data.data);
			
			if(data.data.tipo_id!="Rut"){
				$(".software").hide();	
			}else{
				$(".software").show();
			}
			
			var restoreAccess = data.data.privileges;
			var sections = restoreAccess.split('|');
			var options = [];

			$("#enabledAllAccess").attr('disabled', false);
			$("#disabledAllAccess").attr('disabled', false);

			$("#disabledAllAccess").attr('checked', false);
			$("#enabledAllAccess").attr('checked', false);

			var totalBoxCheckbox = $('.box2 input:checkbox, .box3 input:checkbox').length;
			var totalBoxChecked = $('.box2 input:checkbox:checked, .box3 input:checkbox:checked').length;
			var totalBoxNotChecked = $('.box2 input:checkbox:not(:checked), .box3 input:checkbox:not(:checked)').length;

			$("#checkboxChecked").text(totalBoxChecked);
			$("#checkboxNotChecked").text(totalBoxNotChecked);

			var opciones;
			$.each(sections, function(index, value) {
				opciones=value.split(',');
				
				options = sections[index].split(',');
				
				if (index == 0 || index == 1) {
					$("div.box2 > div.optionReports > div." + options[0]).each(function() {
						$(this).find("input:checkbox").each(function(index) {
							if (opciones[1] == 1 && ($(this).is(':not(:checked)'))) {
								$(this).prop('checked', true);
								//	no funciona con attr pero si con prop
								$(this).next().next().removeClass().addClass("padlock fg-green icon-unlocked");
							} else if (opciones[1] == 1 && ($(this).next().next().hasClass("fg-red"))) {
								$(this).prop('checked', true);
								$(this).next().next().removeClass().addClass("padlock fg-green icon-unlocked");
							} else if (opciones[1] == 0) {
								$(this).prop('checked', false);
								$(this).next().next().removeClass().addClass("padlock fg-red icon-locked");
							}
						});
					});
				} else if (index >= 2 && index <= 14) {
					$("div.box3 > div." + options[0]).each(function() {
						$(this).find("input:checkbox").each(function(index) {
							if (opciones[1] == 1 && ($(this).is(':not(:checked)'))) {
								//									if($(this).is(':checked')){
								$(this).prop('checked', true);
								$(this).next().next().removeClass().addClass("padlock fg-green icon-unlocked");
								//									cad+=",1";
							} else if (opciones[1] == 1 && ($(this).next().next().hasClass("fg-red"))) {
								$(this).prop('checked', true);
								$(this).next().next().removeClass().addClass("padlock fg-green icon-unlocked");
							} else if (opciones[1] == 0) {
								$(this).prop('checked', false);
								$(this).next().next().removeClass().addClass("padlock fg-red icon-locked");
							}
						});
					});
				} else if (index == 15) {

					$("div.box2 > div.optionSoftware").each(function() {
						$(this).find("input:checkbox").each(function(index) {
							if (opciones[1] == 1 && ($(this).is(':not(:checked)'))) {
								$(this).prop('checked', true);
								$(this).next().next().removeClass().addClass("padlock fg-green icon-unlocked");
							} else if (opciones[1] == 1 && ($(this).next().next().hasClass("fg-red"))) {
								$(this).prop('checked', true);
								$(this).next().next().removeClass().addClass("padlock fg-green icon-unlocked");
							} else if (opciones[1] == 0) {
								$(this).prop('checked', false);
								$(this).next().next().removeClass().addClass("padlock fg-red icon-locked");
							}
						});
					});
				}

			});

			var totalBoxCheckbox = $('.box2 input:checkbox, .box3 input:checkbox').length;
			var totalBoxChecked = $('.box2 input:checkbox:checked, .box3 input:checkbox:checked').length;
			var totalBoxNotChecked = $('.box2 input:checkbox:not(:checked), .box3 input:checkbox:not(:checked)').length;

			$("#checkboxChecked").text(totalBoxChecked);
			$("#checkboxNotChecked").text(totalBoxNotChecked); 
			
			window.location.href = hash.access;
				
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {

		failGroupSection(jqXHR, textStatus, errorThrown);

	});
	//	end	getjson

};
//	end	findGroupAccess


var findGroup = function(idGroup,ajax_data) {
	var findGroup = $.getJSON(url.find + idGroup, function(data) {
		
		if (!data.status) {

			var not = $.Notify({
				caption : textError,
				content : message,
				timeout : 5000, // 5 seconds
				style : ( {
					background : 'red',
					color : '#FFFFFF'
				})
			});
		} else if (data.status=="true" && data.code=="200") {
			if (data.data.activo == "false") {
				$("button[name='groupModalGroupButtonActive']").hide();
				$("button[name='groupModalGroupButtonInactive']").show();
			} else if (data.data.activo == "true") {
				$("button[name='groupModalGroupButtonActive']").show();
				$("button[name='groupModalGroupButtonInactive']").hide();
			}
			
			if (data.data.appaccess == "false") {
				changeStateButton("button[name='groupModalGroupButtonAccessAplicationDisable']","button[name='groupModalGroupButtonAccessAplicationEnable']");
			} else if (data.data.appaccess == "true") {
				changeStateButton("button[name='groupModalGroupButtonAccessAplicationEnable']","button[name='groupModalGroupButtonAccessAplicationDisable']");
			}  
  
			ajax_data.id.val(data.data._id);
			ajax_data.name.val(data.data.name);
			ajax_data.tipo_id.val(data.data.tipo_id);
			ajax_data.activo.val(data.data.activo);
			ajax_data.activo.val(data.data.appaccess);
			
			$("button[name='GroupsModalButtonAddGroup']").hide();
			$("button[name='GroupsModalButtonUpdateGroup']").show();
			$("#groupTitle").text(textUpdate+' '+nameLowercase);
			
			window.location.href = hash.update;				
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {

		failGroupSection(jqXHR, textStatus, errorThrown);

	});
	//	end	getjson

};
//	end	findGroup

var updateGroup = function(ajax_data) {

	var ajax_data_update = {
		"id" 		: ajax_data.id.val(),
		"name" 		: ajax_data.name.val().trim(),
		"tipo_id" 	: ajax_data.tipo_id.val(),
		"activo" 	: ($("button[name='groupModalGroupButtonActive']:visible").length)? "true":"false",
		"appaccess" : ($("button[name='groupModalGroupButtonAccessAplicationDisable']:visible").length)? "false":"true"
	}; 

	$("button[name='GroupsModalButtonUpdateGroup']").prop("disabled", true);
	$("button[name='GroupsModalButtonUpdateGroup']").html('<i class="icon-loading"></i> Loading...');
	$("button[name='GroupsModalButtonUpdateGroup']").text("Loading...");
	

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
		    	var input="modalGroupInputNameGroup";
		    	var titulo="Error nombre grupo, ";
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

		failGroupSection(jqXHR, textStatus, errorThrown);
		
	}).always(function() {
				
		cleanElementsFormModalSection("GroupsModalButtonUpdateGroup");
		
		$("button[name='GroupsModalButtonUpdateGroup']").text(textUpdateButton);
		$("button[name='GroupsModalButtonUpdateGroup']").prop("disabled", false);
		
		$("button[name='GroupsModalButtonAddGroup']").hide();
		$("button[name='GroupsModalButtonUpdateGroup']").show();

	});
	//	end ajax

};
//	end	updateGroup

var updateGroupAccess = function(privileges,ajax_data) {

	var ajax_data_update = {
		"id" 			: ajax_data.idAccess.val(),
		"privileges" 	: privileges
	}; 

	$.ajax({
		type 		: "POST",
		url 		: url.updateAccess,
		data 		: ajax_data_update,
		dataType 	: "json",
		encode 		: true
	}).done(function(data) {

		if (!data.status) {
			var message = textErrorMessageUpdate;
			 
			window.location.href = "#";
			var not = $.Notify({
				caption : textError,
				content : message,
				timeout : 5000, // 5 seconds
				style : ( {
					background : 'red',
					color : '#FFFFFF'
				})
			});
		} else if (data.status) {

			window.location.href = "#";
			
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

		failGroupSection(jqXHR, textStatus, errorThrown);
		
	}).always(function() {
				


	});
	//	end ajax
	
};
//	end	updateGroupAccess

var addGroup = function(ajax_data) {

//	cleanElementsFormModalSection("GroupsModalButtonAddGroup");
	
	var ajax_data_create = {
		"name" 			: ajax_data.name.val().trim(),
		"tipo_id" 		: ajax_data.tipo_id.val(),
		"activo" 		: ($("button[name='groupModalGroupButtonActive']:visible").length)? "true":"false",
		"appaccess" 	: ($("button[name='groupModalGroupButtonAccessAplicationDisable']:visible").length)? "false":"true",
		"privileges" 	: "sectionDashboard,0|sectionGeneralListCertificate,0|sectionGroup,0,0,0,0,0|sectionUser,0,0,0,0|sectionPlanService,0,0,0,0|sectionRoom,0,0,0,0|sectionCPEType,0,0,0,0|sectionCPEModel,0,0,0,0|sectionExtensorType,0,0,0,0|sectionExtensorModel,0,0,0,0|sectionApplicationSettings,0,0|sectionSoftware,0|sectionCertifiedHomeCoverage,0|sectionCertifiedHighPropagation,0|sectionCertifiedTime,0|sectionSpeedtest,0",
	}; 
	
	$("#groupTitle").text(textAdd+' '+nameLowercase);	
	$("button[name='GroupsModalButtonAddGroup']").prop("disabled", true);
	$("button[name='GroupsModalButtonAddGroup']").html('<i class="icon-loading"></i> '+textInsert);
	$("button[name='GroupsModalButtonAddGroup']").text(textInsert);
	

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
				
		    	var input="modalGroupInputNameGroup";
		    	var titulo="Error nombre grupo, ";
		    	var mensaje="este nombre ya ha sido ingresado previamente."; 	
	    
				$('.modalMessageError').html(titulo+' '+mensaje);

				$("input[name='"+input+"']").attr("placeholder", textFieldRequired);
				$("input[name='"+input+"']").css("background-color","#F5CECE");
				$("input[name='"+input+"']").css("border-color","red");
				$("input[name='"+input+"']").parent().prev().css("color","red");			

				/*
				message = "Este nombre de "+nameLowercase+" ya ha sido ingresada previamente";
			//	window.location.href = "#";
				var not = $.Notify({
					caption : "Error",
					content : message,
					timeout : 5000, // 5 seconds
					style : ( {
						background : 'red',
						color : '#FFFFFF'
					})
				});
				*/

				
			}else{
				message = textErrorMessageAdd;
				window.location.href = "#";
				var not = $.Notify({
					caption : textError,
					content : message,
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

		failGroupSection(jqXHR, textStatus, errorThrown);

	}).always(function() {
		
		cleanElementsFormModalSection("GroupsModalButtonAddGroup");
		
		$("button[name='GroupsModalButtonAddGroup']").text(textAdd);
		$("button[name='GroupsModalButtonAddGroup']").prop("disabled", false);

	});
	//	end ajax

};
//	end	addGroup

var getGroups = function(groupAccess) {	

	try {
		$.fn.dataTable.ext.errMode = 'throw';
		$(".messageErrorAccess").hide();
		var table = $("#example").dataTable({
			"ajax" : {
				"url"		: url.read,
				"error"		: function(xhr, error) {
					
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
						caption : textError,
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
			"columns" : [
				{
					/* numero */
					"data" : null
				}, 
				{
					/* nombre */
					"data" : datatableData[0],
					"title"	: datatableTitles[0]
				}, 
				{
					/* tipo id */
					"data" : datatableData[1],
					"title"	: datatableTitles[1]
				}, 
				{
					/* activo/inactivo */
					"data" : datatableData[2],
					"title"	: datatableTitles[2]
				},
				{
					/* opciones */
					"title"	: datatableTitles[4],
					"bSortable" : false
				}
			],
			"language" : {
				"url" : urlDatatableLanguageUrl
			},
			"columnDefs" : [{
				"targets" : 4,
				"data" : null,
				"defaultContent" : groupAccess
			}, 
			{
				"bSortable" : false,
				"aTargets" : [0]
			},
			{
                "render": function ( data, type, row ) {
                	if(row.activo=="false"){
	                    return '<i class="icon-record fg-red"></i> '+textInactive;
	                }else if(row.activo=="true"){
	                	return '<i class="icon-record fg-green"></i> '+textActive;
	                }
                },
                "targets": 3
            }
          
			],
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
			caption : textError,
			content : textErrorDataBase,
			timeout : 7000, // 7 seconds
			style : ( {
				background : 'red',
				color : '#FFFFFF'
			})
		});

	}

};

function htmlEnableButtonUpdate(groupAccess,textUpdate){
	
	if(getAccess("update")==1){
		groupAccess+='<button class="button mini" id="find"><i class="icon-pencil"></i> '+textUpdate+'</button> ';		
	}
	
	return groupAccess;
	
}

function htmlEnableButtonDelete(groupAccess,textDelete){
	
	if(getAccess("delete")==1){
		groupAccess+='<button class="button mini" id="delete"><i class="icon-cancel-2"></i> '+textDelete+'</button> ';	
	}
	
	return groupAccess;
	
}

function htmlEnableButtonAccess(groupAccess,textAccess){
	
	if(getAccess("privileges")==1){
		groupAccess+='<button class="button mini" id="access"><i class="icon-key"></i> '+textAccess+'</button>';	
	}
	
	return groupAccess;
	
}

function changeStateButton(showElement,hideElement){
	$(showElement).show();
	$(hideElement).hide();
}


$(document).ready(function() {

	var groupAccess='';
	
//	groupAccess=htmlEnableButtonUpdate(groupAccess,textUpdate);
//	groupAccess=htmlEnableButtonDelete(groupAccess,textDelete);
	groupAccess=htmlEnableButtonAccess(groupAccess,textAccess);

	changeStateButton("button[name='groupModalGroupButtonAccessAplicationDisable']","button[name='groupModalGroupButtonAccessAplicationEnable']");
		
	/*
	if(getAccess("update")==1){
		groupAccess+='<button class="button mini" id="find"><i class="icon-pencil"></i> '+textUpdate+'</button> ';		
	}
	
	if(getAccess("delete")==1){
		groupAccess+='<button class="button mini" id="delete"><i class="icon-cancel-2"></i> '+textDelete+'</button> ';	
	}
	
	if(getAccess("privileges")==1){
		groupAccess+='<button class="button mini" id="access"><i class="icon-key"></i> '+textAccess+'</button>';	
	}
	*/
	getGroups(groupAccess);
	
	var ajax_data = {
		"id" 		: $("input[name='modalGroupInputHiddenIdGroup']"),
		"idAccess" 	: $("input[name='modalGroupAccessInputHiddenIdGroup']"),
		"name" 		: $("input[name='modalGroupInputNameGroup']"),
		"tipo_id" 	: $("select[name='modalGroupSelectIdTypeGroup']"),
		"activo" 	: $("button[name='groupModalGroupButtonActive']"),
		"appaccess"	: $("button[name='groupModalGroupButtonAccessAplicationDisable']"),
		"access" 	: "sectionDashboard,0|sectionGeneralListCertificate,0|sectionGroup,0,0,0,0,0|sectionUser,0,0,0,0|sectionPlanService,0,0,0,0|sectionRoom,0,0,0,0|sectionCPEType,0,0,0,0|sectionCPEModel,0,0,0,0|sectionExtensorType,0,0,0,0|sectionExtensorModel,0,0,0,0|sectionApplicationSettings,0,0|sectionSoftware,0|sectionCertifiedHomeCoverage,0|sectionCertifiedHighPropagation,0|sectionCertifiedTime,0|sectionSpeedtest,0",
	}; 
	
	//	CODIGO PARA RECUPERAR LOS IDS A LA HORA DE ELIMINAR VARIOS REGISTROS
	var table = $('#example').DataTable();
	$('#example tbody').on('click', 'button', function() {
		var buttonId = $(this).attr('id');
		//$(this).parent().removeClass('row_selected');
		if (buttonId == "find") {
			
			if(getAccess("update")==1){
				$("#GroupsModalGroup").slideDown("slow");
				findGroup(table.row($(this).parents('tr')).data()._id,ajax_data);	
			}
			
		} else if (buttonId == "delete") {
			
			if(getAccess("delete")==1){		
				var consult = confirm(textDeleteMessage + table.row($(this).parents('tr')).data().name+'?');
				if (consult) {
					deleteGroup(table.row($(this).parents('tr')).data()._id);
				} else {

				}
			}
			
		}else if (buttonId == "access") {
			if(getAccess("privileges")==1){	
				findGroupAccess(table.row($(this).parents('tr')).data()._id,ajax_data);
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
		$("#groupTitle").text(textAdd+' '+nameLowercase);
		$("button[name='GroupsModalButtonUpdateGroup']").hide();
		$("button[name='GroupsModalButtonAddGroup']").show();
		//ajax_data.typeId.find("option[value='']").attr("selected",true);
		window.location.href = hash.create;
		return false;
	});

	$("button[name='GroupsModalButtonCleanGroup']").on("click", function(event) {
				
		event.preventDefault(event);

		cleanElementsFormModalSection("GroupsModalButtonUpdateGroup");

		return false;
	});

	$("button[name='GroupsModalButtonCloseModalGroup']").on("click", function(event) {
		event.preventDefault(event);
		window.location.href = "#";
		
		cleanElementsFormModalSection("GroupsModalButtonUpdateGroup");

		return false;
	});

	$("button[name='GroupsModalButtonAddGroup']").on("click", function(event) {
		if(validate("add")){
			addGroup(ajax_data);			
		}
	});

	$("button[name='GroupsModalButtonUpdateGroup']").on("click", function(event) {
		if(validate("update")){
			updateGroup(ajax_data);
		}
	});

	$("button[name='GroupsModalButtonAccessGroup']").on("click", function(event) {
		
		var cad = "";

		if ($(".sectionDashboard").find("input:checkbox").is(':checked')) {
			cad += "sectionDashboard,1";
		} else {
			cad += "sectionDashboard,0";
		}

		if ($(".sectionGeneralListCertificate").find("input:checkbox").is(':checked')) {
			cad += "|sectionGeneralListCertificate,1";
		} else {
			cad += "|sectionGeneralListCertificate,0";
		}

		$("div.box3 > div").each(function(index) {

			cad += "|" + $(this).attr('class');

			$(this).find("input:checkbox").each(function() {
				if ($(this).is(':checked')) {
					cad += ",1";
				} else {
					cad += ",0";
				}
			});

		});
/*
		if ($(".sectionSoftware").find("input:checkbox").is(':checked')) {
			cad += "|sectionSoftware,1";
		} else {
			cad += "|sectionSoftware,0";
		}
*/		
		if ($(".sectionSoftware").find("input:checkbox").is(':checked')) {
			cad += "|sectionSoftware,1";
		} else {
			cad += "|sectionSoftware,0";
		}
		
//		console.log(cad);
		//<input type="hidden" name="modalGroupAccessInputHiddenIdGroup">			
		updateGroupAccess(cad,ajax_data);
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
    ajax_data.name.validCamp('abcdefghijklmnñopqrstuvwxyzáéíóú1234567890');

	$("input[type='text']").bind("paste", function(e) {
		e.preventDefault();
	});

	ajax_data.name.keyup(function() {
		$( this ).val(function( i, val ) {
			return val.toUpperCase();
		});
    });
        
});

