
var url = {
	"create" 	: "/techwizard/general/addRoom/",
	"read" 		: "/techwizard/general/getRoom/",
	"update" 	: "/techwizard/general/editRoom/",
	"delete" 	: "/techwizard/general/removeRoom/",
	"find" 		: "/techwizard/general/getRoom/",
};

/*

var url = {
	"create" 	: "http://devel1.baking.cl/techwizard/general/addRoom/",
	"read" 		: "http://devel1.baking.cl/techwizard/general/getRoom/",
	"update" 	: "http://devel1.baking.cl/techwizard/general/editRoom/",
	"delete" 	: "http://devel1.baking.cl/techwizard/general/removeRoom/",
	"find" 		: "http://devel1.baking.cl/techwizard/general/getRoom/",
};

*/
var hash = {
	"create" 	: "#RoomsModalRoom",
	"update" 	: "#RoomsModalRoom",
	"delete" 	: "#RoomsModalDeleteRoom",
};

var timeToRefreshDatatables=10;	//	seconds

var deleteRoom = function(idRoom) {

	$.ajax({
		type 		: "POST",
		url 		: url.delete, 
		data		: {id:idRoom}, 
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
				caption : '<i class="icon-checkmark"></i> Habitación',
				content : "Información eliminada satisfactoriamente",
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
			content : "No se pudo eliminar la información seleccionada",
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
//	end deleteRoom

var findRoom = function(idRoom,ajax_data) {
	var findRoom = $.getJSON(url.read + idRoom, function(data) {
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
			$("button[name='RoomsModalButtonAddRoom']").hide();
			$("button[name='RoomsModalButtonUpdateRoom']").show();
			$("#roomTitle").text("Modificar Habitación");
			
			window.location.href = hash.update;				
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {

		console.log("error send");
		window.location.href = "#";
		var not = $.Notify({
			caption : "Error",
			content : "No se pudo encontrar la información seleccionada",
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
//	end	findRoom

var updateRoom = function(ajax_data) {

	var ajax_data_update = {
		"id" 		: ajax_data.id.val(),
		"name" 		: ajax_data.name.val().trim(),
	};
	
	console.log("before send");

	$("button[name='RoomsModalButtonUpdateRoom']").html('<i class="icon-loading"></i> Loading...');
	$("button[name='RoomsModalButtonUpdateRoom']").text("Loading...");
	$("button[name='RoomsModalButtonUpdateRoom']").prop("disabled", true);

	$.ajax({
		type 		: "POST",
		url 		: url.update,
		data 		: ajax_data_update,
		dataType 	: "json",
		encode 		: true
	}).done(function(data) {
		console.clear();
		if (!data.status) {
			var message = "No se pudo modificar la información seleccionada";
			/*
			 if(data.code=="1"){
			 message="";
			 }else if(data.code=="1"){
			 message="";
			 }
			 */
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
		} else if (data.status) {
			console.clear();
			window.location.href = "#";
			var table = $('#example').DataTable();
			table.ajax.reload();
			var not = $.Notify({
				caption : '<i class="icon-checkmark"></i> Habitación',
				content : "Información modificada satisfactoriamente",
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
			content : "No se pudo modificar la información seleccionada",
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
		$("button[name='RoomsModalButtonUpdateRoom']").text("Modificar");
		$("button[name='RoomsModalButtonUpdateRoom']").prop("disabled", false);
		$("div.modalMain").find('input[type="text"]').val("");
		$("button[name='RoomsModalButtonAddRoom']").hide();
		$("button[name='RoomsModalButtonUpdateRoom']").show();
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='RoomsModalButtonUpdateRoom']").css("background-color"));
	});
	//	end ajax

};
//	end	updateRoom

var addRoom = function(ajax_data) {

	var ajax_data_create = {
		"name" 		: ajax_data.name.val().trim(),
	};
	
	$("#roomTitle").text("Agregar Habitación");
	$("button[name='RoomsModalButtonAddRoom']").html('<i class="icon-loading"></i> Ingresando...');
	$("button[name='RoomsModalButtonAddRoom']").text("Ingresando...");
	
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
				content : message,
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
				caption : '<i class="icon-checkmark"></i> Habitación',
				content : "Información ingresada satisfactoriamente",
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
			content : "No se pudo ingresar la información",
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
		$("button[name='RoomsModalButtonAddRoom']").text("Agregar");
		$("button[name='RoomsModalButtonAddRoom']").prop("disabled", false);

		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='RoomsModalButtonAddRoom']").css("background-color"));
	});
	//	end ajax

};
//	end	addRoom

var getRooms = function(roomAccess) {

	var datatableTitles = ["Nombre"];
	var datatableData = ["name"];

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
			"columns" : [{
				"data" : null
			}, {
				"data" : datatableData[0]
			}],
			"language" : {
				"url" : "http://cdn.datatables.net/plug-ins/be7019ee387/i18n/Spanish.json"
			},
			"columnDefs" : [{
				"targets" : 2,
				"data" : null,
				"defaultContent" : roomAccess
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

	var roomAccess='<button class="button mini" id="find"><i class="icon-pencil"></i> Modificar</button> <button class="button mini danger" id="delete"><i class="icon-cancel-2"></i> Eliminar</button>';
	getRooms(roomAccess);

	var ajax_data = {
		"id" 		: $("input[name='modalRoomInputHiddenIdRoom']"),
		"name" 		: $("input[name='modalRoomInputNameRoom']"),
	};
	
	//	CODIGO PARA RECUPERAR LOS IDS A LA HORA DE ELIMINAR VARIOS REGISTROS
	var table = $('#example').DataTable();
	$('#example tbody').on('click', 'button', function() {
		var buttonId = $(this).attr('id');
		//$(this).parent().removeClass('row_selected');
		if (buttonId == "find") {
			findRoom(table.row($(this).parents('tr')).data()._id,ajax_data);
		} else if (buttonId == "delete") {
			var consult = confirm("Está seguro que desea eliminar " + table.row($(this).parents('tr')).data().name);
			if (consult) {
				deleteRoom(table.row($(this).parents('tr')).data()._id);
			} else {
				console.log("cancel delete");
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
		$("button[name='RoomsModalButtonUpdateRoom']").hide();
		$("button[name='RoomsModalButtonAddRoom']").show();
		window.location.href = hash.create;
		return false;
	});

	$("button[name='RoomsModalButtonCleanRoom']").on("click", function(event) {
		event.preventDefault(event);
		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='RoomsModalButtonAddRoom']").css("background-color"));
		$("div.modalMain").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		$('.modalMessageError').html("");
		return false;
	});

	$("button[name='RoomsModalButtonCloseModalRoom']").on("click", function(event) {
		event.preventDefault(event);
		window.location.href = "#";
		$("div.modalMain").find('input[type="text"]').val("");
		$("div.modalMain").find('input[type="text"]').css("background-color", "#FFFFFF");
		$("div.modalMain").find('input[type="text"]').css("border-color", $("button[name='RoomsModalButtonAddRoom']").css("background-color"));
		$("div.modalMain").find('input[type="text"]').parent().prev().css("color", "rgba(0, 0, 0, 0.8)");
		$('.modalMessageError').html("");
		return false;
	});

	$("button[name='RoomsModalButtonAddRoom']").on("click", function(event) {
		if(validate()){
			addRoom(ajax_data);	
		}
	});

	$("button[name='RoomsModalButtonUpdateRoom']").on("click", function(event) {
		if(validate()){
			updateRoom(ajax_data);
		}
	});

	$('#example tbody').on('click', 'tr', function() {
		if ($(this).hasClass('row_selected')) {
			$(this).removeClass('row_selected');
		} else {
			table.$('row_selected');
			$(this).addClass('row_selected');
		}
	});

	ajax_data.name.validCamp('abcdefghijklmnñopqrstuvwxyzáéiou1234567890');
	
	ajax_data.name.keyup(function() {
		$( this ).val(function( i, val ) {
			return val.toUpperCase();
		});
    });
    
});

