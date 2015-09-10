index();

function index(){
	(function($, window, document) {
   	
   	$(function() {
		defaultDatatableSettings();		
/*		htmlChangeColorModal();	*/
	    getTebleGeneralListCertificate();								
	    htmlShowFilterOptionEventClick();
	    htmlRefreshButtonEventClick();	    
	    htmlExcelReportButtonEventClick();
	    htmlPdfReportButtonEventClick();									    
	    htmlShowModalDetailCertificateEventClick();						
	    htmlRutClientEventKeyupChange();
	    htmlRutTecnicoEventKeyupChange();										
	    htmlCertificateEventChange();
//	    htmlDateEventFocusout();									
	    htmlRemoveFilterOptionDateEventClick();
	    htmlApplyFilterOptionButtonEventClick();
		htmlgetModalDetailCertificateTableCertificateWifiByFrequencyEventChange();
		htmlgetModalDetailCertificateTableCertificateExtensorWifiByFrequencyEventChange();
		htmlExcelDetailRangeReportButtonEventClick();
		htmlExcelDetailReportButtonEventClick();
		htmlShowDescriptionMessagePing();
		htmlShowDescriptionMessageDownload();
		htmlShowDescriptionMessageWifi();
		
		getModalDetailCertificateTableCertificateWifiTest();
		
		getModalDetailCertificateTableCertificateWifiExtensorTest();
		
		htmlImageWifiEventClick();
		
	});
	
	}(window.jQuery, window, document));

}

function htmlPopulateTableComments(objectData){
	
	var eventHandle;
	
	try {
		
		eventHandle="#tableGeneralListCertificateComments > tbody";	
		$(eventHandle+" >tr").remove();
		jQuery.each(objectData, function(index, value) {

			$(eventHandle).append('<tr></tr>');
			
			var currentDate =value.fecha;
			var formatedTotalDate = currentDate.split("T");
		            
			var date=formatedTotalDate[0];
				date=date.split("-"); 
						
			date=(FORMAT0001=="dd/mm/yyyy") ? date[2]+"/"+date[1]+"/"+date[0] : date[1]+"/"+date[2]+"/"+date[0];
		            				  		
			var hour=formatedTotalDate[1];
				hour=hour.split(":");
				hour=hour[0]+":"+hour[1];

			
			$(eventHandle+" > tr:last").append('<td>'+date+" "+hour+'</td>');
			$(eventHandle+" > tr:last").append('<td align="right">'+value.tecnico+'</td>');
			$(eventHandle+" > tr:last").append('<td align="right">'+value.mensaje+'</td>');
		});
		
	}catch(err) {
	
		$(eventHandle+" > tr").remove();
		$(eventHandle+":first").append('<tr align="center"><td colspan="6">'+messageErrorGetExtensor+'</td></tr>');
	
	}
	
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

function changeFormatDate(value){

	var day,month,year;
	
	day = value.getDate();
	day = day.toString();
	
	month = value.getMonth();
	month = month+1;
	month = month.toString();
	
	year = value.getFullYear();
	
	if(day.length<2){
		day = "0"+day;
	}
		
	if(month.length<2){
		month = "0"+month;
	}
		
	if(FORMAT0001=="dd/mm/yyyy"){
		value = day + '/' + month + '/' + year;
		
	}else if(FORMAT0001=="mm/dd/yyyy"){
		value = month + '/' + day + '/' + year;	
	}
	
	return value;
	
}

function changeFirstLetterToUppercaseRestLowercase(value){

	return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
      
}


function changeBooleanText(value) {

	if(language=="es"){
		switch(value) {
		case 'True':
			value = "Si";
			break;
		case 'False':
			value = "No";
			break;
		default:
		}
	}else if(language=="en"){
		switch(value) {
		case 'True':
			value = "Yes";
			break;
		case 'False':
			value = "No";
			break;
		default:
		}
	}else if(language=="pt_BR"){
		switch(value) {
		case 'True':
			value = "Sim";
			break;
		case 'False':
			value = "No";
			break;
		default:
		}	
	}
	
	return value;
	
}

function ImageExist(url){
	
	var http = jQuery.ajax({
    	type:"HEAD",
    	url: url,
    	async: false
  	})
  	
  	return http;
  	
}

function defaultDatatableSettings(){
	
	$.extend( $.fn.dataTable.defaults, {
		"processing": true,
		"aaSorting": []
		/*
		,
		"fnDrawCallback": function () {
			lengthTable=this.fnSettings().fnRecordsTotal();
			if (lengthTable<=10){
				$('#example_paginate')[0].style.display = "none";
				$("#example_length").hide();
			}else{
				$('#example_paginate')[0].style.display = "block";
				$("#example_length").show();
			}            
		}	
		*/
	});
	
}

function notifyMessage(caption,content,timeout,bgColor,fgColor){

	var not = $.Notify({
		caption : caption,
		content : content,
		timeout : timeout, 
		style : ( {
			background : bgColor,
			color : fgColor
		})
	});
		
}

function failAjax(jqXHR,textStatus){
	
	notifyMessage(captionNotify,contentNotify,timeoutNotify,bgColorNotify,fgColorNotify);
		
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

function htmlChangeColorModal(){
	
	$.getJSON( url.modalColorChange, function( data ) {
		var items = [];
		$.each( data.data, function( i, item ) {
			if(item.modalActive==1)
				items.push(item.modalColor);
		});
			var item=items[Math.floor(Math.random()*items.length)];
			$(".modalFooter,.modalFoot button,.modalFoot a").css({"background-color":item,"color":"#FFFFFF"});
			$(".modalMain input").css("border","1px solid "+item);  
	});
	
}

function htmlShowFilterOptionEventClick(){
	
	$("#showFilter").on("click",function(event){
		event.preventDefault();
        event.stopPropagation();
		if ($("#filter").is(":hidden")){
			$("#filter").fadeIn("slow");
			$("#showFilter i").eq(0).removeClass().addClass("icon-arrow-down-4");
//			getHtmlSelectStatusCertificate();				
		}else if($('#filter').is(':visible')){ 
			$("#filter").fadeOut("slow");
			$("#showFilter i").eq(0).removeClass().addClass("icon-arrow-right-4");
		}
		return false;
	});
	
}

function htmlRefreshButtonEventClick(){
	
	eventHandle=$("#generalListCertificateRefresh");
	eventHandle.on("click",function(event){
		event.preventDefault();
        event.stopPropagation();
		/* $(this).children(':eq(0)').after('<img src="../img/9.gif">'); */
		table = $('#example').DataTable();
		table.ajax.reload();
		/* $(this).children(':eq(1)').remove(); */
		return false;		
	});	
	
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
		failAjax(jqXHR,textStatus);
	});
	return result;

}

function htmlExcelDetailReportButtonEventClick(){

	eventHandle=$("#generalListCertificateExcelDetailReport");
	eventHandle.on("click",function(event){
		
		event.preventDefault();
        event.stopPropagation();
		
		table = $('#example').DataTable();
		var certificate=getJsonCall("/techwizard/stats/getDetCert/"+rowData);
        
		$("#excelReportShow").show();
		$("#generalListCertificateExcelDetailReport").prop("disabled",true);
/*	
		var items = {};
		$.each( getJsonCall(url.read).data, function( i, item ) {

			if(item._id==rowData){
				items=item;
			}
			
		});
*/
				
		$.ajax({
			
			type 		: "POST",
			url 		: url.generateExcelDetailFile, 
			data		: {data:JSON.stringify(certificate.data[0]), language: language}, 
			dataType 	: "json",
			encode      : true
			
		}).done(function(data) {
			
			document.location.href =(data.url);
			$("#excelReportShow").hide();
			$("#generalListCertificateExcelDetailReport").prop("disabled",false);
			
		}).fail(function(jqXHR, textStatus, errorThrown) {
					
//			failAjax(jqXHR,textStatus);
			console.log("error");
			$("#excelReportShow").hide();
			$("#generalListCertificateExcelDetailReport").prop("disabled",false);
			
		});

		return false;		
					
	});			
	
}

function htmlExcelDetailRangeReportButtonEventClick(){
			
	eventHandle=$("#generalListCertificateExcelReportDetailRange");
	eventHandle.on("click",function(event){
		event.preventDefault();
        event.stopPropagation();
		
		table = $('#example').DataTable();
		var certificate=getJsonCall("/techwizard/stats/getDetCert/"+rowData);
	
		var countCertificates=table.rows( { filter: 'applied' } ).data().length,
		
		limitCertificates=150;
		
		var datatableDataFiltered=[];
		
		if(countCertificates<=limitCertificates){
			
			$("#showExcelRange").show();
			$("#generalListCertificateExcelReportDetailRange").prop("disabled",true);
							
//			var filteredrows = table.rows( { filter: 'applied' } ).data().toArray();
			
			var filteredrows = table.$('tr',{"filter": "applied"});
			var id;
			var ids=new Array();
	
			jQuery.each(filteredrows, function(index, value) {
				id=table.row(this).data()._id;
				ids.push(id);
			});
		
			ids=ids.join("|");
			
			var certificate=getJsonCall("/techwizard/stats/getDetCert/"+ids);
			var errorMessage,limitMessage;
			
			$.ajax({
				type 		: "POST",
				url 		: url.generateExcelDetailRangeFile, 
//				data		: { data:JSON.stringify(filteredrows), language: language},
				data		: { data:JSON.stringify(certificate.data), language: language},				
				dataType 	: "json",
				encode      : true
			})
			.
			done(function(data) {
				
				if(data.status==false){
					if(data.code==408){
						
						switch(language) {
							
						    case 'es':
								errorMessage="Lo sentimos, por el momento no es posible generar archivo excel.";
						        break;
						    case 'en':
								errorMessage="Sorry, at the moment is not possible to generate excel file.";
						        break;
							case 'pt_BR':
								errorMessage="Desculpe, no momento não é possível gerar o arquivo excel.";
						        break;		        
						    default: 
						    	errorMessage="Sorry, at the moment is not possible to generate excel file.";
						    	break;	
						    		   	
						}
						
						alert(errorMessage);
					}
				}else if(data.status==true && data.code==200){
					document.location.href =(data.url);
				}		
				$("#showExcelRange").hide();
				$("#generalListCertificateExcelReportDetailRange").prop("disabled",false);	
			}).fail(function(jqXHR, textStatus, errorThrown) {
				alert("Lo sentimos, por el momento no es posible generar archivo excel.");
				$("#showExcelRange").hide();
				$("#generalListCertificateExcelReportDetailRange").prop("disabled",false);
						
			});
			
		}else{
			
			switch(language) {
							
				case 'es':
					limitMessage="Lo sentimos, por el momento no es posible generar archivo excel con una cantidad superior a "+limitCertificates+" certificados.";
					break;
				
				case 'en':
					limitMessage="Sorry, at the moment is not possible to generate excel file with an amount greater than "+ limitCertificates +" certificates.";
					break;
				
				case 'pt_BR':
					limitMessage="Desculpe, no momento não é possível gerar o arquivo excel com uma quantidade maior do que "+ limitCertificates +" certificados.";
					break;		        
		
				default: 
					limitMessage="Sorry, at the moment is not possible to generate excel file with an amount greater than "+ limitCertificates +" certificates.";
					break;	
						    		   	
			}
						
			alert(limitMessage);
		}		
			
		return false;
		
	});			
}

function htmlExcelReportButtonEventClick(){
	
	eventHandle=$("#generalListCertificateExcelReport");
	eventHandle.on("click",function(event){
		event.preventDefault();
        event.stopPropagation();
        
        $("#showExcel").show();
		$("#generalListCertificateExcelReport").prop("disabled",true);
		
		table = $('#example').DataTable();
		var filteredrows = table.$('tr',{"filter": "applied"});
		var datatableDataFiltered = [];
		jQuery.each(filteredrows, function(index, value) {

			datatableDataFiltered.push({
			    rutClient 				: $(this).find("td:eq(0)").text(),
			    rutTechnical			: $(this).find("td:eq(1)").text(),
			    planService 			: $(this).find("td:eq(2)").text(),
			    cpe						: $(this).find("td:eq(3)").text(),
			    modelCpe				: $(this).find("td:eq(4)").text(),
			    macCpe					: $(this).find("td:eq(5)").text(),
			    certificateState		: $(this).find("td:eq(6)").text(),
			    certificateDateCreate	: $(this).find("td:eq(7)").text(),
			    certificateDateActive	: $(this).find("td:eq(8)").text(),
			    language				: language
			});			
			
		});
		
		$.ajax({
			type 		: "POST",
			url 		: url.generateExcelFile, 
			data		: {data:JSON.stringify(datatableDataFiltered)}, 
			dataType 	: "json",
			encode      : true
		})
		.
		done(function(data) {
			document.location.href =(data.url);
			
			$("#showExcel").hide();
			$("#generalListCertificateExcelReport").prop("disabled",false);	
		}).fail(function(jqXHR, textStatus, errorThrown) {
			
			failAjax(jqXHR,textStatus);
			
			$("#showExcel").hide();
			$("#generalListCertificateExcelReport").prop("disabled",false);
					
		});
		return false;			
	});			
			
}

function htmlPdfReportButtonEventClick(){

    	
} 

function htmlApplyFilterOptionButtonEventClick(){
	$("#buttonApplyFilter").on("click",function(event){
		event.preventDefault();
        event.stopPropagation();
		return false;
		
		
		//	end ajax		
	
	});
	
}

function htmlImageWifiEventClick(){
	$("button[name='buttonVisibleNetworksImageWifi']").on("click",function(event){
			
		event.preventDefault();
        event.stopPropagation();		

//		window.open(urlImage,"_blank", "width=519, height=402");	
		window.open(urlImage);	
		
		return false;
		
	});
}

function htmlRemoveFilterOptionDateEventClick(){
	$("button[name='buttonClearDateMin'], button[name='buttonClearDateMax']").on("click",function(event){
		
		event.preventDefault();        
		event.stopPropagation();		
        
		if($(this).attr("name")=="buttonClearDateMin"){
			$("#dateMinFilter").val('');
			table = $('#example').DataTable();
			table.draw();
		}else if($(this).attr("name")=="buttonClearDateMax"){
			$("#dateMaxFilter").val('');
			table = $('#example').DataTable();
			table.draw();
		}
		return false;	
	});
}

function getTebleGeneralListCertificate(){
	
	var cheeckboxOption='<input type="checkbox"><span class="check"></span>';
	var buttonOption='<button class="button mini" id="find"><i class="icon-pencil"></i> Ver detalle</button> ';
	
	try {
		
		$.fn.dataTable.ext.errMode = 'throw';
		table=$('#example').dataTable( {        
	        "ajax": {
				"url"		: url.read,
				"error"		: function(xhr, error) {                      
	                setInterval(function() {
						table.ajax.reload();
					}, timeToRefreshDatatables*1000);
            	},		
			},

			"fnInitComplete": function (oSettings, json) {

				if ($(this).find('tbody tr').length<=1) {
					$(this).parent().hide();
				}
            	
        	},
        	
        	"lengthMenu": [[50,100,200 -1], [50,100,200, "All"]],
        	"iDisplayLength": maxRowLoad,
        	"fnDrawCallback": function(oSettings) {
				if (oSettings.aoData.length <= maxRowLoad) {
					$('.dataTables_paginate, .dataTables_length').hide();
				}else{
					$('.dataTables_paginate, .dataTables_length').show();
				}
			},	
	
			"columns": [
	            { 
	            	"data"				: datatableData[0],
	            	"defaultContent"	: "",
	            	"title"				: datatableTitle[0],
	            	"name"				: "rut",
	            	"targets"			: 0 
	            },
	            { 	
	            	"data"				: datatableData[1],
	            	"defaultContent"	: "",
	            	"title"				: datatableTitle[1],
	            	"name"				: "rutTecnico",
	            	"targets"			: 1
	            },
	            { 	
	            	"data"				: function ( row, type, set ) {
						if (row.General[0].plan.hasOwnProperty('nombre')) {																	
							if ( type === 'display' ){ 	
								return row.General[0].plan.nombre;			
							}else{
								return "";	
							}					
						}else{
							console.log(row._id);
							return "";
						}	            															
					},
					"render"			: function ( data, type, row ) {
						return row.General[0].plan.nombre;

					},
	            	"defaultContent"	: "", 
	            	"title"				: datatableTitle[2],
	            	"targets"			: 2
	            },
	            { 
	            	"data"				: datatableData[3],
	            	"defaultContent"	: "",
	            	"title"				: datatableTitle[3],
	            	"targets"			: 3 
	            },
	            { 	
	            	"data"				: datatableData[4],
	            	"defaultContent"	: "",
	            	"title"				: datatableTitle[4],
	            	"targets"			: 4
	            },
	            { 
	            	"data"				: datatableData[5],
	            	"defaultContent"	: "",
	            	"title"				: datatableTitle[5],
	            	"targets"			: 5
	            },
	            { 
	            	"data"				: datatableData[6],
	            	"defaultContent"	: "",
	            	"title"				: datatableTitle[6],
	            	"render"			: function ( data, type, row ) {
	            		
	            		switch(language) {
							case 'es':
								switch(row.General[0].status) {
									case 'Activo':
										statusTextName="Activo";					
										break;
									case 'Cerrado':
										statusTextName="Cerrado";												
										break;
									case 'Listo':
										statusTextName="Listo";												
										break;
									case 'Pendiente':
										statusTextName="Pendiente";												
										break;
									case 'Creado':
										statusTextName="Creado";												
										break;
									default:
								}				
								break;
							case 'en':
								switch(row.General[0].status) {
									case 'Activo':
										statusTextName="Active";					
										break;
									case 'Cerrado':
										statusTextName="Closed";												
										break;
									case 'Listo':
										statusTextName="Ready";												
										break;
									case 'Pendiente':
										statusTextName="Pending";												
										break;
									case 'Creado':
										statusTextName="Created";												
										break;
									default:
								}				
								break;
							default:
								switch(row.General[0].status) {
									case 'Activo':
										statusTextName="Active";					
										break;
									case 'Cerrado':
										statusTextName="Closed";												
										break;
									case 'Listo':
										statusTextName="Ready";												
										break;
									case 'Pendiente':
										statusTextName="Pending";												
										break;
									case 'Creado':
										statusTextName="Created";												
										break;
									default:
								}				
								break;
						}					
						return statusTextName;

					},
	            	"type"				: "state",
	            	"targets"			: 6
	            },
	            
	            { 
	            	"data"				: datatableData[7],
	            	"defaultContent"	: "",
	            	"title"				: datatableTitle[7],
	            	"render"			: function ( data, type, row ) {
							
						var currentDate =row.General[0].fecha_certificado;
						var formatedTotalDate = currentDate.split("T");
		            
						var date=formatedTotalDate[0];
						date=date.split("-"); 
						
						date=(FORMAT0001=="dd/mm/yyyy") ? date[2]+"/"+date[1]+"/"+date[0] : date[1]+"/"+date[2]+"/"+date[0];
		            				  		
						var hour=formatedTotalDate[1];
						hour=hour.split(":");
						hour=hour[0]+":"+hour[1];

						return date+" "+hour;

					},
	            	"type"				: "de_datetime",            	
	            	"targets"			: 7
	            },
				{ 
	            	"data"				: function ( row, type, set ) {
	            		
	            		if (row.General[0].hasOwnProperty('fecha_activo')) {
										
							if ( type === 'display' ){ 
											
								var currentDate =row.General[0].fecha_activo;
								var formatedTotalDate = currentDate.split("T");
							            
								var date=formatedTotalDate[0];
								date=date.split("-"); 
								date=(FORMAT0001=="dd/mm/yyyy") ? date[2]+"/"+date[1]+"/"+date[0] : date[1]+"/"+date[2]+"/"+date[0];
							            				  		
								var hour=formatedTotalDate[1];
								hour=hour.split(":");
								hour=hour[0]+":"+hour[1];
					
								return date+" "+hour;
							
							}else{
							
								return "";	
							
							}
												
						}else{
								
							return "";
						
						}	            					
																
					},
					
					"render": function ( data, type, row ) {
						
	                	if(row.General[0].hasOwnProperty('fecha_activo')){
							
							var currentDate =row.General[0].fecha_activo;
							
							var currentDate =row.General[0].fecha_activo;
							var formatedTotalDate = currentDate.split("T");
							            
							var date=formatedTotalDate[0];
							date=date.split("-"); 
							date=(FORMAT0001=="dd/mm/yyyy") ? date[2]+"/"+date[1]+"/"+date[0] : date[1]+"/"+date[2]+"/"+date[0];
							            				  		
							var hour=formatedTotalDate[1];
							hour=hour.split(":");
							hour=hour[0]+":"+hour[1];
					
							return date+" "+hour;
							
						}else{
							
		                	return '';
		                	
						}
					},
					"type"				: "de_datetime",
					"defaultContent"	: "", 
	            	"title"				: datatableTitle[8],
	            	"targets"			: 8 
	            	
	            	
	            },	            

	        ],

			"language" : {
				"url" : urlDatatableLanguageUrl
			}
				
	    });
	    	
	} catch(e) {

		notifyMessage(captionNotify,contentNotify,timeoutNotify,bgColorNotify,fgColorNotify);

	}   
}

function getModalDetailCertificateTableCertificateWifiTest(){

	$("#tableGeneralListCertificateWifiModal tbody").on('click', 'tr', function () {
	
		$("button[name='buttonVisibleNetworksImageWifi']").show();
		$("button[name='buttonVisibleNetworksImageWifi']").prop("disabled",false);
			
		var ubicacionTest=$(this).find("td:first").html();
		var frequencyCertificateWifiCPE=$("select[name='modalGeneralListCertificateDetailCertificateSelectFrequencyCertificateWifiCPE']").val();
		var certificate=getJsonCall("/techwizard/stats/getDetCert/"+rowData);
		
		idImageWifiChannel=ubicacionTest+frequencyCertificateWifiCPE;

		var rut,mac,imageWifiChannel;
		
		rut="";
		mac="";
		imageWifiChannel="";
		
		rut=table.row(indexCertificateRow).data().General[0].rut_cliente;
		mac=table.row(indexCertificateRow).data().CPE[0].mac;
		
		rut=rut.replace('-','');
		mac=mac.replace(/:/g,'');
		idImageWifiChannel=idImageWifiChannel.replace('.','');
		idImageWifiChannel=idImageWifiChannel.replace(/0/g,'');
		
		imageWifiChannel=(rut+mac+idImageWifiChannel).replace(/ /g,'');
		urlImage=window.location.protocol + "//" + window.location.host+"/webservices/images/"+imageWifiChannel+".jpg";
		
		var statusImage=ImageExist(urlImage);

		if(statusImage.status==200){
			$("button[name='buttonVisibleNetworksImageWifi']").prop("disabled",false);
		}
		if(statusImage.status==404){
			$("button[name='buttonVisibleNetworksImageWifi']").prop("disabled",true);
		}
			
		if(Object.keys(certificate.data[0].Pruebas_Wifi).length>0){
			
			jQuery.each(certificate.data[0].Pruebas_Wifi[0].habitacion, function(index, value) {

				if((ubicacionTest==value.Habitacion.Ubicacion)&&(value.Habitacion.Frecuencia==frequencyCertificateWifiCPE)){
					
					var valuesArray=new Array();
					
					var ssid=(value.Habitacion.SSID!="") ? changeFirstLetterToUppercaseRestLowercase(value.Habitacion.SSID): changeFirstLetterToUppercaseRestLowercase(empty);
					var security=(value.Habitacion.Norma!="") ? changeFirstLetterToUppercaseRestLowercase(value.Habitacion.Norma): changeFirstLetterToUppercaseRestLowercase(empty);
					var canal=(value.Habitacion.Banda!="") ? value.Habitacion.Banda: empty;
					var originTest=(value.Habitacion.hasOwnProperty('origen')) ? changeFirstLetterToUppercaseRestLowercase(value.Habitacion.origen): changeFirstLetterToUppercaseRestLowercase(empty);
					
					valuesArray=[];
					valuesArray=["<strong>SSID: </strong>"+ssid,"<strong>"+securityText+": </strong>"+security,"<strong>"+canalText+": </strong>"+canal,"<strong>"+originTestText+": </strong>"+originTest];
					
					$(".modalMessageRequired span").each(function(i, va) { 
						$(this).html(valuesArray[i]);
					});
					
					valuesArray=[];
					
					getSnifferTestWifiCPE=[];
					getVisibleNetworksTestWifiCPE=[];
					
					populateTableCertificate=value.Habitacion.Prueba_Descarga;
					
					generalListCertificateTestDownloadValue = [
						changeFormatNumeric(populateTableCertificate.SPE)+" (Kbps)",
						changeFormatNumeric(populateTableCertificate.AVG)+" (Kbps)",
						changeFormatNumeric(populateTableCertificate.TIM)+" (ms)",
						changeFormatNumeric(populateTableCertificate.SIZ),
						changeFormatNumeric(populateTableCertificate.TLO),
						changeFormatNumeric(populateTableCertificate.TCO),
						changeFormatNumeric(populateTableCertificate.TPR),
						changeFormatNumeric(populateTableCertificate.TST),
						populateTableCertificate.URL
					];
					
					populateTableCertificate=value.Habitacion.Prueba_Ping;
					
					generalListCertificateTestPingValue = [
						changeFormatNumeric(populateTableCertificate.SND),
						changeFormatNumeric(populateTableCertificate.REC),
						changeFormatNumeric(populateTableCertificate.LOS),
						changeFormatNumeric(populateTableCertificate.AVG)+" (ms)",
						changeFormatNumeric(populateTableCertificate.MIN)+" (ms)",
						changeFormatNumeric(populateTableCertificate.MAX)+" (ms)",
						changeFormatNumeric(populateTableCertificate.JIT),

						populateTableCertificate.URL
					];
					
					populateTableCertificate=value.Habitacion.Sniffer;

					var lengthSniffer=Object.keys(populateTableCertificate).length;
					jQuery.each(populateTableCertificate, function(index, value) {
						getSnifferTestWifiCPE.push({
							name 		: textNameDispositiveSniffer+': ',
							value 		: value.Nombre_Dispositivo 
						});
						
					});
										
					populateTableCertificate=value.Habitacion.Prueba_ST;
										
					generalListCertificateTestSpeedtestValue = [
						changeFormatNumeric(populateTableCertificate.bajadaI)+' ('+unitOfMeasurement+')',
						changeFormatNumeric(populateTableCertificate.subidaI)+' ('+unitOfMeasurement+')',
						changeFormatNumeric(populateTableCertificate.bajadaN)+' ('+unitOfMeasurement+')',
						changeFormatNumeric(populateTableCertificate.subidaN)+' ('+unitOfMeasurement+')'

						/* populateTableCertificate.estado */
					];
					
					populateTableCertificate=value.Habitacion.Redes_Visibles;

					var lengthVisibleNetworks=Object.keys(populateTableCertificate).length;
					jQuery.each(populateTableCertificate, function(index, value) {
						getVisibleNetworksTestWifiCPE.push({
							name 		: 'SSID: ',
							value 		: value.SSID 
						});
						
					});
					
					htmlPopulateTable(generalListCertificateTestDownloadValue,'#tableGeneralListCertificateTestDownloadValue');					
					htmlPopulateTable(generalListCertificateTestPingValue,'#tableGeneralListCertificateTestPingValue');				
					htmlPopulateTableSniffer(lengthSniffer,getSnifferTestWifiCPE,'#tableGeneralListCertificateTestSnifferValue');
					htmlPopulateTableVisibleNetworks(lengthVisibleNetworks,getVisibleNetworksTestWifiCPE,'#tableGeneralListCertificateTestVisibleNetworksValue');				
					htmlPopulateTable(generalListCertificateTestSpeedtestValue,'#tableGeneralListCertificateTestSpeedtestValue');
			
					window.location.href=hash.modalCertificateTest;
					
					return false;
				}

		   	});
		}
		
		

// con esto obtengo la cantidad de estructura que tiene una fila osea arroja 7 si si el certificado no tiene extensor y arroja 8 si el certificado tiene extensor
//console.log(Object.keys(table.row(indexCertificateRow).data()).length);
						
// con esto obtengo si el certificado tiene pruebas wifi o no, arrojandome 0 en el caso de que no tenga o 1 en el caso de que tenga alguna prueba wifi
//console.log(Object.keys(table.row(indexCertificateRow).data().Pruebas_Wifi).length);

// con esto obtengo la cantidad de habitaciones 
//console.log(Object.keys(table.row(indexCertificateRow).data().Pruebas_Wifi[0].habitacion).length);
//console.log(table.row(indexCertificateRow).data().Pruebas_Wifi[0].habitacion.length);
			
// deberia arrojar 12			
//console.log(table.row(indexCertificateRow).data().Pruebas_Wifi[0].habitacion[0].Habitacion.Prueba_Descarga.SPE);

// deberia arrojar 13			
//console.log(table.row(indexCertificateRow).data().Pruebas_Wifi[0].habitacion[1].Habitacion.Prueba_Descarga.SPE);

// con esto obtengo la cantidad de extensores que el extensor tiene
//console.log(Object.keys(table.row(indexCertificateRow).data().Extensores).length);

			
//			console.log(table.row(indexCertificateRow).data().General[0].fecha_certificado);
//			console.log(table.row(indexCertificateRow).data().Pruebas_Wifi[0].habitacion[0].Habitacion.Prueba_Descarga.SPE);

//			console.log(Object.keys(table.row(indexCertificateRow).data().Pruebas_Wifi[0].habitacion).length);
			
			// con esto obtengo la cantidad de habitaciones 
//			console.log(Object.keys(table.row(indexCertificateRow).data().Pruebas_Wifi[0].habitacion).length);


			
			
//			if (typeof table.row(indexCertificateRow).data().Pruebas_Wifi[0].habitacion != "undefined"){
//				console.log("existo");	
//			}else{
//				console.log("no existo");
//			}

	});
/*		
	eventHandle=$("#tableGeneralListCertificateWifiModal tbody");
	eventHandle.on("click", "tr",function(){
		console.log("hola");

		event.preventDefault();
        event.stopPropagation();

		table = $('#example').DataTable();
		table.ajax.reload();

		return false;		

	});	
*/	
}

function findDetailCertificates(table){

	var filteredrows = table.$('tr',{"filter": "applied"});
	var id,acum,res,hola;
	var ids=new Array();
	
	jQuery.each(filteredrows, function(index, value) {
		id=table.row(this).data()._id;
		ids.push(id);
	});

	ids=ids.join("|");
	console.log(ids);	

	$.getJSON("/techwizard/stats/getDetCert/"+ids, function(data) {
		if (!data.status) {
			console.log("malo");
		} else if (data.status && data.code=="200") {
			console.log(data);
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {



	});	
	
}	

/* no me sirve por el momento */
function findDetailCertificate(rowData){
	
	var certificate;
	
	certificate=getJsonCall(url);
	$.getJSON("/techwizard/stats/getDetCert/"+rowData, function(data) {
		if (!data.status) {

		} else if (data.status && data.code=="200") {
			certificate=data.data;
			return certificate;
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {



	});	
	
	/*
		 obtengo todos los ids del datatable
		 
		table.rows().indexes().each( function (idx) {
			console.log(table.row( idx ).data()._id);
	    	var d = table.row( idx ).data();
    		d.counter++;
    		table.row( idx ).data( d );
		});
		
		*/


		/*
		 
		obtengo los ids pero con el filtro aplicado
		
		table = $('#example').DataTable();
		var filteredrows = table.$('tr',{"filter": "applied"});

		jQuery.each(filteredrows, function(index, value) {
			console.log(table.row(this).data()._id);		
		});

		*/
	
}	

function htmlShowModalDetailCertificateEventClick(){
	
	var certificate;
	
	$('#example tbody').on('click', 'tr', function () {
							
		table = $('#example').DataTable();
		indexCertificateRow=this;
		rowData = table.row(indexCertificateRow).data()._id;
		certificate=getJsonCall("/techwizard/stats/getDetCert/"+rowData);
		
		$("select[name='modalGeneralListCertificateDetailCertificateSelectFrequencyCertificateWifiCPE']").find("option[value='2.4']").attr("selected", true);
		var frequencyCertificateWifiCPE=$("select[name='modalGeneralListCertificateDetailCertificateSelectFrequencyCertificateWifiCPE']").val();
		
//		populateTableCertificate=table.row(indexCertificateRow).data();
		populateTableCertificate=certificate.data[0];
		
		date = new Date(populateTableCertificate.General[0].fecha_certificado);	
		date=changeFormatDate(date);

		if(populateTableCertificate.General[0].hasOwnProperty('fecha_activo')){
//		if(table.row(indexCertificateRow).data().General[0].hasOwnProperty('fecha_activo')){			
				
			activeDate = new Date(populateTableCertificate.General[0].fecha_activo);
			activeDate=changeFormatDate(activeDate);
			
		}else{
			activeDate="";	
		}
				
//		activeDate=(populateTableCertificate.General[0].hasOwnProperty('fecha_activo')) ? populateTableCertificate.General[0].fecha_activo : "" ;	
		
		
		
		receptorName=(populateTableCertificate.General[0].hasOwnProperty('nombre_receptor')) ? populateTableCertificate.General[0].nombre_receptor : "" ;
		relationship=(populateTableCertificate.General[0].hasOwnProperty('parentesco')) ? populateTableCertificate.General[0].parentesco : "" ;
		floor=(populateTableCertificate.General[0].hasOwnProperty('pisos')) ? populateTableCertificate.General[0].pisos : "" ;
		technicalOrder=(populateTableCertificate.General[0].hasOwnProperty('orden_tecnica')) ? populateTableCertificate.General[0].orden_tecnica : "" ;

		var estadoCerticado,tipoVisita,tipoVivienda;
		
		switch(language) {
		
		case 'es':
			
			/* tipo de visita */
			switch(populateTableCertificate.General[0].tipo_OT) {
			case 'Alta':
				tipoVisita = "Alta";
				break;
			case 'Servicio técnico':
				tipoVisita = "Servicio técnico";
				break;
			default:
				tipoVisita = changeFirstLetterToUppercaseRestLowercase(populateTableCertificate.General[0].tipo_OT);
				break;
			}
			
			/* tipo de vivienda */
			switch(populateTableCertificate.Locaciones[0].tipo_vivienda) {
			case 'Casa':
				tipoVivienda = "Casa";
				break;
			case 'Departamento':
				tipoVivienda = "Departamento";
				break;
			default:
				tipoVisita = changeFirstLetterToUppercaseRestLowercase(populateTableCertificate.Locaciones[0].tipo_vivienda);
				break;
			}
			
			/* estado certificado */
			switch(populateTableCertificate.General[0].status) {
			case 'Activo':
				estadoCerticado = "Activo";
				break;
			case 'Cerrado':
				estadoCerticado = "Cerrado";
				break;
			case 'Listo':
				estadoCerticado = "Listo";
				break;
			case 'Pendiente':
				estadoCerticado = "Pendiente";
				break;
			case 'Creado':
				estadoCerticado = "Creado";
				break;
			default:
			}	
			
			// location acceptance
			var locationAccept="";
			switch(populateTableCertificate.CPE[0].ubicacion_aceptada) {
			case 'True':
				locationAccept = "Si";
				break;
			case 'False':
				locationAccept = "No";
				break;	
			default:
			}	
			
			// wifi propio
			var wifiOwn="";
			switch(populateTableCertificate.General[0].wifi_propia) {
			case 'True':
				wifiOwn = "Si";
				break;
			case 'False':
				wifiOwn = "No";
				break;			
			default:
			}
			
			break;
		case 'en':
		
			/* tipo de visita */
			switch(populateTableCertificate.General[0].tipo_OT) {
			case 'Alta':
				tipoVisita = "High";
				break;
			case 'Servicio técnico':
				tipoVisita = "Technical support";
				break;
			default:
				tipoVisita=changeFirstLetterToUppercaseRestLowercase(populateTableCertificate.General[0].tipo_OT);
				break;
			}
			
			// tipo de vivienda
			switch(populateTableCertificate.Locaciones[0].tipo_vivienda) {
			case 'Casa':
				tipoVivienda = "House";
				break;
			case 'Departamento':
				tipoVivienda = "Department";
				break;
			default:
				tipoVivienda=changeFirstLetterToUppercaseRestLowercase(populateTableCertificate.Locaciones[0].tipo_vivienda);
				break;
			}
			
			// estado certificado
			switch(populateTableCertificate.General[0].status) {
			case 'Activo':
				estadoCerticado = "Active";
				break;
			case 'Cerrado':
				estadoCerticado = "Closed";
				break;
			case 'Listo':
				estadoCerticado = "Ready";
				break;
			case 'Pendiente':
				estadoCerticado = "Pending";
				break;
			case 'Creado':
				estadoCerticado = "Created";
				break;
			default:
			}
			
			// relacion
			switch(relationship) {
			case 'Titular':
				relationship = "Holder";
				break;
			default:
				relationship=changeFirstLetterToUppercaseRestLowercase(relationship);
			}
			
			// location acceptance
			var locationAccept="";
			switch(populateTableCertificate.CPE[0].ubicacion_aceptada) {
			case 'True':
				locationAccept = "Yes";
				break;
			case 'False':
				locationAccept = "No";
				break;	
			default:
			}	
			
			// wifi propio
			var wifiOwn="";
			switch(populateTableCertificate.General[0].wifi_propia) {
			case 'True':
				wifiOwn = "Yes";
				break;
			case 'False':
				wifiOwn = "No";
				break;	
				
			default:
			}
			
			
			break;
		
		case 'pt_BR':
		
			/* tipo de visita */
			switch(populateTableCertificate.General[0].tipo_OT) {
			case 'Alta':
				tipoVisita = "Alta";
				break;
			case 'Servicio técnico':
				tipoVisita = "Serviço técnico";
				break;
			default:
			}
			
			// tipo de vivienda
			switch(populateTableCertificate.Locaciones[0].tipo_vivienda) {
			case 'Casa':
				tipoVivienda = "Casa";
				break;
			case 'Departamento':
				tipoVivienda = "Departmento";
				break;
			default:
			}
			
			// estado certificado
			switch(populateTableCertificate.General[0].status) {
			case 'Activo':
				estadoCerticado = "Active";
				break;
			case 'Cerrado':
				estadoCerticado = "Closed";
				break;
			case 'Listo':
				estadoCerticado = "Ready";
				break;
			case 'Pendiente':
				estadoCerticado = "Pending";
				break;
			case 'Creado':
				estadoCerticado = "Created";
				break;
			default:
			}
			
			// relacion
			switch(relationship) {
			case 'Titular':
				relationship = "Titular";
				break;
			default:
			}
			
			// location acceptance
			var locationAccept="";
			switch(populateTableCertificate.CPE[0].ubicacion_aceptada) {
			case 'True':
				locationAccept = "Yes";
				break;
			case 'False':
				locationAccept = "No";
				break;	
			default:
			}	
			
			// wifi propio
			var wifiOwn="";
			switch(populateTableCertificate.General[0].wifi_propia) {
			case 'True':
				wifiOwn = "Yes";
				break;
			case 'False':
				wifiOwn = "No";
				break;		
				
			default:
			}
			
			
			break;	
			
		default:
		/* tipo de visita */
			switch(populateTableCertificate.General[0].tipo_OT) {
			case 'Alta':
				tipoVisita = "High";
				break;
			case 'Servicio técnico':
				tipoVisita = "Technical support";
				break;
			default:
			}
			
			// tipo de vivienda
			switch(populateTableCertificate.Locaciones[0].tipo_vivienda) {
			case 'Casa':
				tipoVivienda = "House";
				break;
			case 'Departamento':
				tipoVivienda = "Department";
				break;
			default:
			}
			
			// estado certificado
			switch(populateTableCertificate.General[0].status) {
			case 'Activo':
				estadoCerticado = "Active";
				break;
			case 'Cerrado':
				estadoCerticado = "Closed";
				break;
			case 'Listo':
				estadoCerticado = "Ready";
				break;
			case 'Pendiente':
				estadoCerticado = "Pending";
				break;
			case 'Creado':
				estadoCerticado = "Created";
				break;
			default:
			}
			
			// relacion
			switch(relationship) {
			case 'Titular':
				relationship = "Holder";
				break;
			default:
			}
			
			// location acceptance
			var locationAccept="";
			switch(populateTableCertificate.CPE[0].ubicacion_aceptada) {
				case 'True':
					locationAccept = "Yes";
					break;
				case 'False':
					locationAccept = "No";
					break;	
				default:
			}	
			
			// wifi propio
			var wifiOwn="";
			switch(populateTableCertificate.General[0].wifi_propia) {
				case 'True':
					wifiOwn = "Yes";
					break;
				case 'False':
					wifiOwn = "No";
					break;	
				default:
			}
			
			break;
		}	
		
		generalListCertificateValue = [
			populateTableCertificate.General[0].id_tecnico,
			tipoVisita,
			tipoVivienda,
			floor,
			populateTableCertificate.CPE[0].ubicacion,
			locationAccept,
			wifiOwn,
			' ',
				
			populateTableCertificate.General[0].rut_cliente,
			populateTableCertificate.General[0].mail_cliente,
			receptorName,
			relationship,
			' ',
			
			populateTableCertificate.General[0].plan.nombre,
			populateTableCertificate.CPE[0].tipo,
			populateTableCertificate.CPE[0].modelo,
			populateTableCertificate.CPE[0].mac,
			technicalOrder,
			' ',
			
			estadoCerticado,
			date,
			activeDate,
			' ',
						
			populateTableCertificate.CPE[0].observacion
		];		
		
		

		
		eventHandle="#tableGeneralListCertificateTest > tbody";
		
		if(Object.keys(populateTableCertificate.Pruebas_ST).length>0){

			populateTableCertificate=populateTableCertificate.Pruebas_ST;
								
			$(eventHandle+" >tr").remove();

			jQuery.each(populateTableCertificate, function(index, value) {

				$(eventHandle).append('<tr></tr>');
				$(eventHandle+" > tr:last").append('<td>'+changeFirstLetterToUppercaseRestLowercase(generalListCertificateValue[4])+'</td>');
				$(eventHandle+" > tr:last").append('<td align="right">'+changeFormatNumeric(value.nacional.subida)+' ('+unitOfMeasurement+')</td>');
				$(eventHandle+" > tr:last").append('<td align="right">'+changeFormatNumeric(value.nacional.bajada)+' ('+unitOfMeasurement+')</td>');
				$(eventHandle+" > tr:last").append('<td align="right">'+changeFormatNumeric(value.internacional.subida)+' ('+unitOfMeasurement+')</td>');
				$(eventHandle+" > tr:last").append('<td align="right">'+changeFormatNumeric(value.internacional.bajada)+' ('+unitOfMeasurement+')</td>');


			});
						
		}else{
			$(eventHandle+" >tr").remove();
			$(eventHandle+":first").append('<tr align="center"><td colspan="4">'+messageErrorGetWifi+'</td></tr>');
		}
		
   		getModalDetailCertificateTableCertificatePlan();
   		getModalDetailCertificateTableCertificateTest();	
   		
   		
//   		getModalDetailCertificateTableCertificateWifi(indexCertificateRow,table,frequencyCertificateWifiCPE);
   		getModalDetailCertificateTableCertificateWifi(certificate.data[0],frequencyCertificateWifiCPE);	
   		getModalDetailCertificateTableCertificateExtensor(certificate.data[0]);
		
		$("#divGeneralListCertificateComments").show(); 
		eventHandle="#tableGeneralListCertificateComments > tbody";	
		if(certificate.data[0].hasOwnProperty('Comentarios')){
  			if(certificate.data[0].Comentarios.length>0){
 				$("#divGeneralListCertificateComments").show();
 				$(eventHandle+" >tr").remove(); 			
	   			htmlPopulateTableComments(certificate.data[0].Comentarios);
	   		}else{
	   			$(eventHandle+" >tr").remove();
	   			$(eventHandle+":first").append('<tr align="center"><td colspan="3">No hay comentarios</td></tr>');
	   	//		$("#divGeneralListCertificateComments").hide();
	   		}
		}else{
			$(eventHandle+" >tr").remove();
			$(eventHandle+":first").append('<tr align="center"><td colspan="3">No hay comentarios</td></tr>');
}
		
		window.location.href=hash.modalCertificate;
		
		eventHandle=$(".tableModalExtensorCertificate");
		eventHandle.on( 'click', 'tr', function () {
			indexExtensorRow=this.rowIndex;
			htmlShowModalDetailCertificateExtensorEventClick(this.rowIndex,certificate.data[0]);				
		});
		
    });	

}

function htmlShowModalDetailCertificateExtensorEventClick(indexCertificateRow,certificate){
/*	console.log(table.row(indexCertificateRow).data().General[0].tipo_OT); */
	populateTableExtensorCertificate=certificate.Extensores[indexExtensorRow-1];
	
	generalListCertificateValueExtensor = [
		populateTableExtensorCertificate.Tipo,
		populateTableExtensorCertificate.Modelo,
		populateTableExtensorCertificate.MAC,
		populateTableExtensorCertificate.Ubicacion,
		changeBooleanText(populateTableExtensorCertificate.Ubicacion_Aceptada),
		populateTableExtensorCertificate.Observacion
	];
	
   	getModalDetailCertificateTableCertificateExtensorDetail();
	getModalDetailCertificateTableCertificateExtensorWifi(certificate,indexExtensorRow);
/*  getModalDetailCertificateTableCertificateExtensor(indexRow,table); */
   		
	window.location.href=hash.modalCertificateExtensor;
    	
}

function htmlPopulateTableVisibleNetworks(lengthData,objectData,htmlIdTable){
	
	eventHandle=htmlIdTable+" > tbody";		
	$(eventHandle+" >tr").remove();
	
	jQuery.each(objectData, function(index, value) {
		$(eventHandle).append('<tr></tr>');
		$(eventHandle+" > tr:last").append('<td><strong>'+value.name+'</strong></td>');
		$(eventHandle+" > tr:last").append('<td>'+value.value+'</td>');
	});
	
	$("#visibleNetworksFoot").html(snifferTextMessage+lengthData+networkAvailableTextMessage);	
		
}

function htmlPopulateTableSniffer(lengthData,objectData,htmlIdTable){
	
	eventHandle=htmlIdTable+" > tbody";		
	$(eventHandle+" >tr").remove();

	jQuery.each(objectData, function(index, value) {
		$(eventHandle).append('<tr></tr>');
		$(eventHandle+" > tr:last").append('<td><strong>'+value.name+'</strong></td>');
		$(eventHandle+" > tr:last").append('<td>'+value.value+'</td>');
	});
	
	$("#snifferFoot").html(snifferTextMessage+lengthData+snifferTextMessage2);	
		
}

function htmlPopulateTable(objectData,htmlIdTable){

	jQuery.each(objectData, function(index, value) {
		$(htmlIdTable+' tr:nth-child('+(index+1)+') td:nth-child(2)').html(objectData[index]);
   	});
		
}

function getModalDetailCertificateTableCertificateExtensorDetail(){

	jQuery.each(generalListCertificateValueExtensor, function(index, value) {
		$('#tableGeneralListCertificateModalDetailExtensor tr:nth-child('+index+') td:nth-child(2)').html(generalListCertificateValueExtensor[index-1]);
   	});
		
}

function getModalDetailCertificateTableCertificateTest(){
//	if(Object.keys(table.row(indexCertificateRow).data().Pruebas_Wifi).length>0){}
}

function getModalDetailCertificateTableCertificatePlan(){

	jQuery.each(generalListCertificateValue, function(index, value) {	
			
		if(index==9){				
			var email=generalListCertificateValue[9].split(/,|;| /);  
			if(email.length>1){
				$('#tableGeneralListCertificateModal tr:nth-child('+(index+1)+') td:nth-child(1)').css( "vertical-align", "top" );
				generalListCertificateValue[9]="";					
				for (var i = 0; i < email.length; i++) { 
					generalListCertificateValue[9]=generalListCertificateValue[9]+email[i]+"<br>";
				}
			}
			$('#tableGeneralListCertificateModal tr:nth-child('+(index+1)+') td:nth-child(2)').html(generalListCertificateValue[9]);
		}else{
			$('#tableGeneralListCertificateModal tr:nth-child('+(index+1)+') td:nth-child(2)').html(generalListCertificateValue[index]);	
		}

   	});
		
}

function getModalDetailCertificateTableCertificateExtensorWifi(certificate,indexExtensorRow){
	
	var frequencyCertificateWifiExtensor=2.4;
	$("select[name='modalGeneralListCertificateDetailCertificateExtensorSelectFrequencyCertificateWifiExtensor']").find("option[value='2.4']").attr("selected", true);
	
	try {
		eventHandle="#tableGeneralListCertificateModalDetailExtensorWifi > tbody";		
		$(eventHandle+" >tr").remove();
		$("#modalGeneralListCertificateDetailCertificateExtensorFrequencyCertificateWifiExtensor").show();
		jQuery.each(certificate.Extensores[indexExtensorRow-1].Pruebas_Wifi[0], function(index, value) {
			var populateTableWifiCertificateExtensor=certificate.Extensores[indexExtensorRow-1].Pruebas_Wifi[0].Habitacion;
			if(populateTableWifiCertificateExtensor.Frecuencia==frequencyCertificateWifiExtensor){
				$(eventHandle).append('<tr></tr>');
				$(eventHandle+" > tr:last").append('<td align="left">'+populateTableWifiCertificateExtensor.Ubicacion+'</td>');
					$(eventHandle+" > tr:last").append('<td align="right">'+changeFormatNumeric(populateTableWifiCertificateExtensor.Prueba_ST.subidaN)+' ('+unitOfMeasurement+')</td>');
					$(eventHandle+" > tr:last").append('<td align="right">'+changeFormatNumeric(populateTableWifiCertificateExtensor.Prueba_ST.bajadaN)+' ('+unitOfMeasurement+')</td>');
					$(eventHandle+" > tr:last").append('<td align="right">'+changeFormatNumeric(populateTableWifiCertificateExtensor.Prueba_ST.subidaI)+' ('+unitOfMeasurement+')</td>');
					$(eventHandle+" > tr:last").append('<td align="right">'+changeFormatNumeric(populateTableWifiCertificateExtensor.Prueba_ST.bajadaI)+' ('+unitOfMeasurement+')</td>');

				$(eventHandle+" > tr:last").append('<td align="right">'+populateTableWifiCertificateExtensor.Intensidad_Señal+'</td>');
			}else{
				$(eventHandle+" >tr").remove();
				$(eventHandle+":first").append('<tr align="center"><td colspan="6">'+messageErrorGetWifi+'</td></tr>');
			}
		});
		
	}catch(err) {
	
		$(eventHandle+" >tr").remove();
		$("#modalGeneralListCertificateDetailCertificateExtensorFrequencyCertificateWifiExtensor").hide();
		$(eventHandle+":first").append('<tr align="center"><td colspan="6">'+messageErrorGetWifi+'</td></tr>');
	
	}
		
}

function htmlgetModalDetailCertificateTableCertificateExtensorWifiByFrequencyEventChange(){
	
	
	
	$("select[name='modalGeneralListCertificateDetailCertificateExtensorSelectFrequencyCertificateWifiExtensor']").change(function() {
	
		var certificate=getJsonCall("/techwizard/stats/getDetCert/"+rowData);
				
		var frequencyCertificateWifiExtensor=$("select[name='modalGeneralListCertificateDetailCertificateExtensorSelectFrequencyCertificateWifiExtensor']").val();		
		$("#modalGeneralListCertificateDetailCertificateExtensorFrequencyCertificateWifiExtensor").show();
		
		try {
			eventHandle="#tableGeneralListCertificateModalDetailExtensorWifi > tbody";		
			$(eventHandle+" >tr").remove();
			
			jQuery.each(certificate.data[0].Extensores[indexExtensorRow-1].Pruebas_Wifi[0], function(index, value) {
				var populateTableWifiCertificateExtensor=certificate.data[0].Extensores[indexExtensorRow-1].Pruebas_Wifi[0].Habitacion;
				if(populateTableWifiCertificateExtensor.Frecuencia==frequencyCertificateWifiExtensor){
					$(eventHandle).append('<tr></tr>');
					$(eventHandle+" > tr:last").append('<td align="left">'+populateTableWifiCertificateExtensor.Ubicacion+'</td>');
					$(eventHandle+" > tr:last").append('<td align="right">'+populateTableWifiCertificateExtensor.Prueba_ST.subidaN.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+' ('+unitOfMeasurement+')</td>');
					$(eventHandle+" > tr:last").append('<td align="right">'+populateTableWifiCertificateExtensor.Prueba_ST.bajadaN.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+' ('+unitOfMeasurement+')</td>');
					$(eventHandle+" > tr:last").append('<td align="right">'+populateTableWifiCertificateExtensor.Prueba_ST.subidaI.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+' ('+unitOfMeasurement+')</td>');
					$(eventHandle+" > tr:last").append('<td align="right">'+populateTableWifiCertificateExtensor.Prueba_ST.bajadaI.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+' ('+unitOfMeasurement+')</td>');
					$(eventHandle+" > tr:last").append('<td align="right">'+populateTableWifiCertificateExtensor.Intensidad_Señal+'</td>');
				}else{
					$(eventHandle+" >tr").remove();
					$(eventHandle+":first").append('<tr align="center"><td colspan="6">'+messageErrorGetWifi+'</td></tr>');
				}
			});
			
		}catch(err) {
			$(eventHandle+" >tr").remove();
			$(eventHandle+":first").append('<tr align="center"><td colspan="6">'+messageErrorGetWifi+'</td></tr>');
		
		}
		
	});
	
}

function getModalDetailCertificateTableCertificateWifiExtensorTest(){
	
	$("#tableGeneralListCertificateModalDetailExtensorWifi tbody").on('click', 'tr', function () {
		
		$("button[name='buttonVisibleNetworksImageWifi']").show();
		$("button[name='buttonVisibleNetworksImageWifi']").prop("disabled",false);
			
		var certificate=getJsonCall("/techwizard/stats/getDetCert/"+rowData);

		var ubicacionExtensorTest=$(this).find("td:first").html();
		var frequencyCertificateWifiExtensor=$("select[name='modalGeneralListCertificateDetailCertificateExtensorSelectFrequencyCertificateWifiExtensor']").val();
		
		idImageWifiChannel=ubicacionExtensorTest+frequencyCertificateWifiExtensor;

		var rut,mac,imageWifiChannel;
		
		rut="";
		mac="";
		imageWifiChannel="";
		
		rut=table.row(indexCertificateRow).data().General[0].rut_cliente;
		mac=certificate.data[0].Extensores[indexExtensorRow-1].MAC;
		
		rut=rut.replace('-','');
		mac=mac.replace(/:/g,'');
		idImageWifiChannel=idImageWifiChannel.replace('.','');
		idImageWifiChannel=idImageWifiChannel.replace(/0/g,'');
		
		imageWifiChannel=(rut+mac+idImageWifiChannel).replace(/ /g,'');
		urlImage=window.location.protocol + "//" + window.location.host+"/webservices/images/"+imageWifiChannel+".jpg";
		
		var statusImage=ImageExist(urlImage);

		if(statusImage.status==200){
			$("button[name='buttonVisibleNetworksImageWifi']").prop("disabled",false);
		}
		if(statusImage.status==404){
			$("button[name='buttonVisibleNetworksImageWifi']").prop("disabled",true);
		}
	
		if(Object.keys(certificate.data[0]).length==8){
		
			jQuery.each(certificate.data[0].Extensores, function(index, value) {
				
				if(Object.keys(certificate.data[0].Extensores[index]).length==7){
				
					if((ubicacionExtensorTest==value.Ubicacion)&&(frequencyCertificateWifiExtensor==value.Pruebas_Wifi[0].Habitacion.Frecuencia)){
		
						var valuesArray=new Array();
						valuesArray=[];
						
						var ssid=(value.Pruebas_Wifi[0].Habitacion.SSID!="") ? value.Pruebas_Wifi[0].Habitacion.SSID: empty;
						var security=(value.Pruebas_Wifi[0].Habitacion.Norma!="") ? value.Pruebas_Wifi[0].Habitacion.Norma: empty;
						var canal=(value.Pruebas_Wifi[0].Habitacion.Banda!="") ? value.Pruebas_Wifi[0].Habitacion.Banda: empty;
						var originTest=(value.Pruebas_Wifi[0].Habitacion.hasOwnProperty('origen')) ? value.Pruebas_Wifi[0].Habitacion.origen: empty;
					
						valuesArray=["<strong>SSID: </strong>"+ssid,"<strong>"+securityText+": </strong>"+security,"<strong>"+canalText+": </strong>"+canal,"<strong>"+originTestText+": </strong>"+originTest];
					
						$(".modalMessageRequired span").each(function(i, va) { 
							$(this).html(valuesArray[i]);
						});
						
						valuesArray=[];
						
						getSnifferTestWifiExtensor=[];
						getVisibleNetworksTestWifiExtensor=[];
						
						populateTableCertificate=value.Pruebas_Wifi[0].Habitacion.Prueba_Descarga;
					
						generalListCertificateTestDownloadValue = [
							changeFormatNumeric(populateTableCertificate.SPE)+" (Kbps)",
							changeFormatNumeric(populateTableCertificate.AVG)+" (Kbps)",
							changeFormatNumeric(populateTableCertificate.TIM)+" (ms)",
							changeFormatNumeric(populateTableCertificate.SIZ),
							changeFormatNumeric(populateTableCertificate.TLO),
							changeFormatNumeric(populateTableCertificate.TCO),
							changeFormatNumeric(populateTableCertificate.TPR),
							changeFormatNumeric(populateTableCertificate.TST),

							populateTableCertificate.URL
						];
						
						populateTableCertificate=value.Pruebas_Wifi[0].Habitacion.Prueba_Ping;
						
						generalListCertificateTestPingValue = [
							changeFormatNumeric(populateTableCertificate.SND),
							changeFormatNumeric(populateTableCertificate.REC),
							changeFormatNumeric(populateTableCertificate.LOS),
							changeFormatNumeric(populateTableCertificate.AVG)+" (ms)",
							changeFormatNumeric(populateTableCertificate.MIN)+" (ms)",
							changeFormatNumeric(populateTableCertificate.MAX)+" (ms)",
							changeFormatNumeric(populateTableCertificate.JIT),

							populateTableCertificate.URL
						];
						
						populateTableCertificate=value.Pruebas_Wifi[0].Habitacion.Sniffer;
						getSnifferTestWifiCPE=[];
						var lengthSniffer=Object.keys(populateTableCertificate).length;
						jQuery.each(populateTableCertificate, function(index, value) {
							getSnifferTestWifiCPE.push({
								name 		: textNameDispositiveSniffer+': ',
								value 		: value.Nombre_Dispositivo 
							});
							
						});
						
						populateTableCertificate=value.Pruebas_Wifi[0].Habitacion.Prueba_ST;
						getVisibleNetworksTestWifiCPE=[];										
						generalListCertificateTestSpeedtestValue = [
							changeFormatNumeric(populateTableCertificate.bajadaI)+' ('+unitOfMeasurement+')',
							changeFormatNumeric(populateTableCertificate.subidaI)+' ('+unitOfMeasurement+')',
							changeFormatNumeric(populateTableCertificate.bajadaN)+' ('+unitOfMeasurement+')',
							changeFormatNumeric(populateTableCertificate.subidaN)+' ('+unitOfMeasurement+')'

							/* populateTableCertificate.estado */
						];
						
						populateTableCertificate=value.Pruebas_Wifi[0].Habitacion.Redes_Visibles;
	
						var lengthVisibleNetworks=Object.keys(populateTableCertificate).length;
						jQuery.each(populateTableCertificate, function(index, value) {
							getVisibleNetworksTestWifiCPE.push({
								name 		: 'SSID: ',
								value 		: value.SSID 
							});
							
						});
						
						htmlPopulateTable(generalListCertificateTestDownloadValue,'#tableGeneralListCertificateTestDownloadValue');
						htmlPopulateTable(generalListCertificateTestDownloadValue,'#tableGeneralListCertificateTestDownloadValue');					
						htmlPopulateTable(generalListCertificateTestPingValue,'#tableGeneralListCertificateTestPingValue');				
						htmlPopulateTableSniffer(lengthSniffer,getSnifferTestWifiCPE,'#tableGeneralListCertificateTestSnifferValue');
						htmlPopulateTableVisibleNetworks(lengthVisibleNetworks,getVisibleNetworksTestWifiCPE,'#tableGeneralListCertificateTestVisibleNetworksValue');				
						htmlPopulateTable(generalListCertificateTestSpeedtestValue,'#tableGeneralListCertificateTestSpeedtestValue');
						
						window.location.href=hash.modalCertificateTest;
						
						return false;					
					
					}						
					
				}
				
	
			});		
		}
			
	});	
}

function htmlgetModalDetailCertificateTableCertificateWifiByFrequencyEventChange(){
	
	$("select[name='modalGeneralListCertificateDetailCertificateSelectFrequencyCertificateWifiCPE']").change(function() {
	
		var certificate=getJsonCall("/techwizard/stats/getDetCert/"+rowData);
		var frequencyCertificateWifiCPE=$("select[name='modalGeneralListCertificateDetailCertificateSelectFrequencyCertificateWifiCPE']").val();		
		getModalDetailCertificateTableCertificateWifi(certificate.data[0],frequencyCertificateWifiCPE);

	});

}

function getModalDetailCertificateTableCertificateWifi(certificate,frequency) {

	getRoomsTestWifi=[];
	getRoomsLocation=[];

	var existLocations=(Object.keys(certificate.Locaciones).length==1) ? true: false ;
	var existRoomsWithWifi=(Object.keys(certificate.Pruebas_Wifi).length==1) ? true: false ;
		
	var lengthRoomsWithWifiTests=(existRoomsWithWifi) ? Object.keys(certificate.Pruebas_Wifi[0].habitacion).length : 0 ;
	var lengthLocations=(existLocations) ? Object.keys(certificate.Locaciones[0].habitaciones).length : 0 ;
	
//	console.log("localizaciones "+lengthLocations);
//	console.log("wifi "+lengthRoomsWithWifiTests);

	if((lengthLocations==0)&&(lengthRoomsWithWifiTests==0)){
		eventHandle="#tableGeneralListCertificateWifiModal > tbody";
		$(eventHandle+" >tr").remove();
		$(eventHandle+":first").append('<tr align="center"><td colspan="6">'+messageErrorGetWifi+'</td></tr>');
		
		$("#modalGeneralListCertificateDetailCertificateFrequencyCertificateWifiCPE").hide();
	}
	
	if((lengthRoomsWithWifiTests==0)&&(lengthLocations>0)){
		
		$("#modalGeneralListCertificateDetailCertificateFrequencyCertificateWifiCPE").hide();		
	
	} 
	
	if(lengthRoomsWithWifiTests>0){
			
		jQuery.each(certificate.Pruebas_Wifi[0].habitacion, function(index, value) {
			
			var populateTableWifiCertificate=value.Habitacion;			
			
			if(populateTableWifiCertificate.Frecuencia==frequency){
				
				var signall=populateTableWifiCertificate.Intensidad_Señal;
				if (signall === undefined) {
				    signall = "";
				} else {
				    signall = signall;
				}
				
				getRoomsTestWifi.push({
					location 	: populateTableWifiCertificate.Ubicacion,
					uploadN 	: changeFormatNumeric(populateTableWifiCertificate.Prueba_ST.subidaN),
					downloadN	: changeFormatNumeric(populateTableWifiCertificate.Prueba_ST.bajadaN),
					uploadI		: changeFormatNumeric(populateTableWifiCertificate.Prueba_ST.subidaI),
					downloadI	: changeFormatNumeric(populateTableWifiCertificate.Prueba_ST.bajadaI),
					signal		: signall,
					frequency	: populateTableWifiCertificate.Frecuencia 
				});
			}
							
		});
	
	}else if(lengthRoomsWithWifiTests==0){
		getRoomsTestWifi=false;
	}
	
	if(lengthLocations>0){

		jQuery.each(certificate.Locaciones[0].habitaciones, function(index, value) {
		
			getRoomsLocation.push({
				location 	: value,
				uploadN 	: '',
				downloadN	: '',
				uploadI		: '',
				downloadI	: '',
				signal		: '',
				frequency	: '' 
			});
			
		});
		
	}else if(lengthLocations==0){
		getRoomsLocation=false;
	}
		
		
	if(((lengthRoomsWithWifiTests>0)&&(lengthLocations>0))||((lengthRoomsWithWifiTests==0)&&(lengthLocations>0))){
		
		if(lengthRoomsWithWifiTests>0){
			$("#modalGeneralListCertificateDetailCertificateFrequencyCertificateWifiCPE").show();
		}
		
		var getRoomslala=[];
			
		jQuery.each(getRoomsTestWifi, function(index, valueRoomWifi) { 
			if(valueRoomWifi.frequency==frequency){
				getRoomslala.push(valueRoomWifi.location);
			}
		});
		
		getRooms=[];		
		jQuery.each(getRoomsLocation, function(index, valueRoomLocation) {
			//si no se encuentra se asigna vacio
			if(jQuery.inArray(valueRoomLocation.location, getRoomslala)==-1){				
				getRooms.push({
					location 	: valueRoomLocation.location,
					uploadN 	: '',
					downloadN	: '',
					uploadI		: '',
					downloadI	: '',
					signal		: '',
					frequency	: '' 
				});	
				
			}else{

				jQuery.each(getRoomsTestWifi, function(index, valueRoomWifi24) { 
					if(valueRoomWifi24.location==valueRoomLocation.location){
						
						getRooms.push({
							location 	: valueRoomWifi24.location,
							uploadN 	: valueRoomWifi24.uploadN+' ('+unitOfMeasurement+')',
							downloadN	: valueRoomWifi24.downloadN+' ('+unitOfMeasurement+')',
							uploadI		: valueRoomWifi24.uploadI+' ('+unitOfMeasurement+')',
							downloadI	: valueRoomWifi24.downloadI+' ('+unitOfMeasurement+')',
							signal		: valueRoomWifi24.signal,
							frequency	: '' 
						});
					}
				});				
				
			}				
				
		});
		
	}
	
	eventHandle="#tableGeneralListCertificateWifiModal > tbody";
	$(eventHandle+" >tr").remove();
	if(getRooms){
		jQuery.each(getRooms, function(index, value) {
			$(eventHandle).append('<tr></tr>');
			$(eventHandle+" > tr:last").append('<td align="left">'+value.location+'</td>');
			$(eventHandle+" > tr:last").append('<td align="right">'+value.uploadN+'</td>');
			$(eventHandle+" > tr:last").append('<td align="right">'+value.downloadN+'</td>');
			$(eventHandle+" > tr:last").append('<td align="right">'+value.uploadI+'</td>');
			$(eventHandle+" > tr:last").append('<td align="right">'+value.downloadI+'</td>');
			$(eventHandle+" > tr:last").append('<td align="right">'+value.signal+'</td>');
		});
	}else{
		eventHandle="#tableGeneralListCertificateWifiModal > tbody";
		$(eventHandle+" >tr").remove();
		$(eventHandle+":first").append('<tr align="center"><td colspan="6">'+messageErrorGetWifi+'</td></tr>');
	}
	
}

function getModalDetailCertificateTableCertificateExtensor(certificate){
		
	try {
		
		eventHandle="#tableGeneralListCertificateExtensorModal > tbody";	
		$(eventHandle+" >tr").remove();
		jQuery.each(certificate.Extensores, function(index, value) {
			var populateTableExtensorCertificate=certificate.Extensores[index];
			$(eventHandle).append('<tr></tr>');
			$(eventHandle+" > tr:last").append('<td align="left">'+populateTableExtensorCertificate.Tipo+'</td>');
			$(eventHandle+" > tr:last").append('<td align="right">'+populateTableExtensorCertificate.Modelo+'</td>');
			$(eventHandle+" > tr:last").append('<td align="right">'+populateTableExtensorCertificate.MAC+'</td>');
			$(eventHandle+" > tr:last").append('<td align="right">'+populateTableExtensorCertificate.Ubicacion+'</td>');
			$(eventHandle+" > tr:last").append('<td align="right">'+changeBooleanText(populateTableExtensorCertificate.Ubicacion_Aceptada)+'</td>');
			
			try {
				$(eventHandle+" > tr:last").append('<td align="right">'+changeBooleanText('True')+'</td>');		
			}catch(err) {
				$(eventHandle+" > tr:last").append('<td align="right">'+changeBooleanText('False')+'</td>');	
			}
		
		});
		
	}catch(err) {
	
		$(eventHandle+" > tr").remove();
		$(eventHandle+":first").append('<tr align="center"><td colspan="6">'+messageErrorGetExtensor+'</td></tr>');
	
	}
		
}

function htmlCertificateEventChange(){
	
//    $("#statusCertificateFilter").on( 'change', function () {
//		table = $('#example').DataTable();
//		var val = $(this).val();
	/*	
		if(val=="Activo"){
			val="Active";
		}else if(val=="Cerrado"){
			val="Closed";
		}else if(val=="Creado"){
			val="Created";
		}else if(val=="Listo"){
			val="Ready";
		}else if(val=="Pendiente"){
			val="Pending";
		}
		*/
		/*
		console.log(val);
		
		table
			.column("state:name")
			.search( val ? '^'+$(this).val()+'$' : val, true, false )
			.draw();
			

	});
	*/
	$("#statusCertificateFilter").on( 'change', function () {
		table = $('#example').DataTable();
		var val = $(this).val();

		
		table
			.column(6)
			.search( this.value )
			.draw();
			

	});
	
	 	
}

function htmlDateEventFocusout(){
		
    $("#dateMinFilter").on('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error', function () {
		table = $('#example').DataTable();
		table.draw();
	});
	
	$("#dateMaxFilter").on('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error', function () {
		table = $('#example').DataTable();
		table.draw();
	});

}

function htmlRutClientEventKeyupChange(){

    $("#col1_filter").on('keyup change', function () {
		table = $('#example').DataTable();
		var val = $(this).val();
		table
			.column("rut:name")
			.search( this.value )
			.draw();
	}); 	

}

function htmlRutTecnicoEventKeyupChange(){

    $("#col2_filter").on('keyup change', function () {
		table = $('#example').DataTable();
		var val = $(this).val();
		table
			.column("rutTecnico:name")
			.search( this.value )
			.draw();
	}); 	

}

function getHtmlSelectStatusCertificate(){

	$('#statusCertificateFilter option:not(:first)').remove().end();
	table = $('#example').DataTable();
	table.column(6).data().unique().sort().each( function (value,index) {
		$("#statusCertificateFilter").append('<option value="'+value+'">'+value+'</option>');
	});

}

function htmlShowDescriptionMessagePing(){

	$('#tableGeneralListCertificateTestPingValue tr td:nth-child(1)').mouseenter( function () {
		$("#modalMessageDescription span").html(messageDescriptionPing[$(this).parent().parent().children().index(this.parentNode)]);
	} ).mouseleave( function () {
		$("#modalMessageDescription span").html(" ");
	} );

}

function htmlShowDescriptionMessageDownload(){

	$('#tableGeneralListCertificateTestDownloadValue tr td:nth-child(1)').mouseenter( function () {
		$("#modalMessageDescription span").html(messageDescriptionDownload[$(this).parent().parent().children().index(this.parentNode)]);
	} ).mouseleave( function () {
		$("#modalMessageDescription span").html(" ");
	} );

}

function htmlShowDescriptionMessageWifi(){

	$('#tableGeneralListCertificateTestVisibleNetworksValue').mouseenter( function () {		
		$("#modalMessageDescription span").html(messageDescriptionWifi[0]);
	} ).mouseleave( function () {
		$("#modalMessageDescription span").html(" ");
	} );
	
}

$.fn.dataTable.ext.search.push(

	function( settings, data, dataIndex ) {
    	
    	var dateMin=$("#dateMinFilter").val();
		var dateMax=$("#dateMaxFilter").val();	
		var date = data[7];			
		
		
		var newDate=date.split("T");
		newDate=newDate[0];
		newDate=newDate.split("-");
		newDate=newDate[2]+'-'+newDate[1]+'-'+newDate[0];
				
		dateMin = dateMin.split("/");
		dateMax = dateMax.split("/");
		date = newDate.split("-");
		
		if(FORMAT0001=="dd/mm/yyyy"){
			dateMin = parseInt(dateMin[2]+dateMin[1]+dateMin[0],10);
			dateMax = parseInt(dateMax[2]+dateMax[1]+dateMax[0],10);
			date = parseInt(date[2]+date[1]+date[0],10);		
		}
		else if(FORMAT0001=="mm/dd/yyyy"){
			dateMin = parseInt(dateMin[2]+dateMin[0]+dateMin[1],10);
			dateMax = parseInt(dateMax[2]+dateMax[0]+dateMax[1],10);
			date = parseInt(date[2]+date[1]+date[0],10);	
		}
		
		if ( ( isNaN( dateMin ) && isNaN( dateMax ) ) ||
             ( isNaN( dateMin ) && date <= dateMax ) ||
             ( dateMin <= date   && isNaN( dateMax ) ) ||
             ( dateMin <= date   && date <= dateMax ) )
        {
            return true;
        }
        return false;
		 
    }   
);
/*
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"date-uk-pre": function ( a ) {
		var ukDatea = a.split('-');
	},

	"date-uk-asc": function ( a, b ) {
		return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},

	"date-uk-desc": function ( a, b ) {
		return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	}
} );
*/
/*
function getHtmlSelectStatusCertificate(){
	
	$("#dateMinFilter, #dateMaxFilter").on('change', function () {
		var val = $(this).val();
		table
			.column("rut:name")
			.search( this.value )
			.draw();
	});
    	         
}
		
*/

//    table.column("state:name").data().unique().sort().each( function (value,index) {
//		$("#statusCertificateFilter").append('<option value="'+value+'">'+value+'</option>');
//	});
	

//	console.log(table.row(indexRow).data().Pruebas_Wifi[0]);
//	console.log(table.column("state:name").data());

/* 
    $("#example .tfoot th").each( function ( i ) {
        var select = $('<select><option value=""></option></select>')
            .appendTo( $(this).empty() )
            .on( 'change', function () {
                var val = $(this).val();
 
                table.column( i )
                    .search( val ? '^'+$(this).val()+'$' : val, true, false )
                    .draw();
            } );
 
        table.column( i ).data().unique().sort().each( function ( d, j ) {
            select.append( '<option value="'+d+'">'+d+'</option>' );
        } );
    } );
*/	 
//	table.column(6).data().unique().sort().each( function ( d, j ) {
//		console.log('hola');
//		$("#statusCertificateFilter").append('<option value="'+d+'">'+d+'</option>'); 
//	});	
	

		

		

//    });

//http://www.datatables.net/forums/discussion/313/filter-date-range
/*
$.fn.dataTableExt.afnFiltering.push(
    function( oSettings, aData, iDataIndex ) {
        // "date-range" is the id for my input
        var dateRange = $('#date-range').attr("value");
 
        // parse the range from a single field into min and max, remove " - "
        dateMin = dateRange.substring(0,4) + dateRange.substring(5,7)  + dateRange.substring(8,10);
        dateMax = dateRange.substring(13,17) + dateRange.substring(18,20) + dateRange.substring(21,23);
 
        // 4 here is the column where my dates are.
        var date = aData[4];
 
        // remove the time stamp out of my date
        // 2010-04-11 20:48:22 -> 2010-04-11
        date = date.substring(0,10);
        // remove the "-" characters
        // 2010-04-11 -> 20100411
        date = date.substring(0,4) + date.substring(5,7) + date.substring( 8,10 )
 
        // run through cases
        if ( dateMin == "" && date <= dateMax){
            return true;
        }
        else if ( dateMin =="" && date <= dateMax ){
            return true;
        }
        else if ( dateMin <= date && "" == dateMax ){
            return true;
        }
        else if ( dateMin <= date && date <= dateMax ){
            return true;
        }
        // all failed
        return false;
    }
);
*/
//$('#date-range').keyup( function() { oTable.fnDraw(); } );
/*        
        "fnDrawCallback":function(){
			lengthTable=this.fnSettings().fnRecordsTotal();
		//	console.log(lengthTable);
			console.log(lengthTable);
//			if($('#example_paginate span span.paginate_button').size()){
			if(lengthTable>10){				
				$('#example_paginate')[0].style.display = "block";
				$("#example_length").show();
			}else{
				$('#example_paginate')[0].style.display = "none";
				$("#example_length").hide();
			}
//	        if(lengthTable<=5){
//				$('.dataTables_paginate').hide();
//	        } else {
//	            $('#example div.dataTables_paginate')[0].style.display = "block";
//				$('.dataTables_paginate').show();
//	        }
	    },
	    
/*
		"fnDrawCallback":function(){
			lengthTable=this.fnSettings().fnRecordsTotal();
	        if($("#example").find("tr:not(.ui-widget-header)").length<=5){
	            $('#example div.dataTables_paginate')[0].style.display = "none";
	        } else {
	            $('#example div.dataTables_paginate')[0].style.display = "block";
	        }
	    },
*/	            
//        initComplete
