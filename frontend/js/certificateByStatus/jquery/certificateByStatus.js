var url = {
	"read" 				: "/techwizard/stats/getCertificados/",
	"modalColorChange" 	: "../json/default/modal.json",
	"generateExcelFile" : "../controller/htmlTableGenerateExcelFile.php",
	"generatePdfFile" 	: "../controller/htmlTableGeneratePdfFile.php"
};

var table, rowData, date, day, month, year, lengthTable, enablePaging;
var indexCertificateRow, indexExtensorRow;
var generalListCertificateValue, generalListCertificateValueExtensor;
var populateTableCertificate, populateTableExtensorCertificate;
var unitOfMeasurement = "Kbytes";

var messageErrorGetExtensor = "Por el momento no hay instalación de algún extensor en este certificado.";

var graphs, graph;
var getJson, getGraphicObject;

var chart;
var titleGraphic = "% Status por certificados correspondiente al año";

var d = new Date();
var year = d.getFullYear();
var valueTotal;

//		    var chartColors=["#9A1616","#DA5A5A","#BE2F2F","#750000","#4B0000"];
var chartColors = [];
var chartText = ["Cerrado", "Creado", "Listo", "Pendiente", "Activo"];

var captionNotify = "Error";
var contentNotify = "Lo sentimos, intentelo más tarde";
var timeoutNotify = 5000;
var bgColorNotify = "red";
var fgColorNotify = "#FFFFFF";

var text1,text2,text3,text4;

switch(language) {
	case 'es':
		titleGraphic = "% Status por certificados correspondiente al año";
		contentNotify = "Lo sentimos, intentelo más tarde";
		
		text1="Los certificados en estado ";
		text2="<br> representa un ";
		text3=") de las certificaciones<br> realizadas sobre una población total de ";
		text4=" certificaciones.";
		text5="";
		chartText = ["Cerrado", "Creado", "Listo", "Pendiente", "Activo"];
		
		break;
	case 'en':
		titleGraphic = "% Status of certificates for the year";
		contentNotify = "We're sorry, try again later";
		
		text1="The certificate state '";
		text2="'<br> represents ";
		text3=") certifications <br> performed on a total of ";
		text4=" certifications.";
		text5="";
		chartText = ["Closed", "Created", "Ready", "Pending", "Active"];
		
		break;
	case 'pt_BR':
		titleGraphic = "% Status por certificaos correspondente ao ano";
		contentNotify = "Tente de novo depois";
		
		text1="Os certificados em estado ";
		text2="<br> representa ";
		text3=") das certificações <br> realizadas sobre uma população total de  ";
		text4=" certificações.";
		text5="";
		chartText = ["Fechado", "Criado", "Pronto", "Pendência", "Ativo"];
		
		break;
	default:
}
		
index();

function index(){
	
	$(document).ready(function() {
		
		assignPropertiesByDomain();		
		htmlKeepMenuOptionShow();
//		htmlChangeColorNavBar();
		getJson=getJsonCall(url.read+'2015');
		
		valueTotal=getJson.totalCertificados;		
		
		getGraphicObject=getGraphicObject(getJson,language);
		buildGraphicPie(getGraphicObject);

		htmlBuildTable(getGraphicObject);
		htmlShowTooltipGraphicPieEventMouseover();
		htmlHideTooltipGraphicPieEventMouseleave();

	});
		
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

function assignPropertiesByDomain(){
	
	switch(window.location.hostname){
		case "techwizarddev.baking.cl":
        	chartColors=["#075EA7","#0E7BD6","#3491DF","#59A6E6","#85BEEE"];
        break;
	    
	    case "techwizard.bsw.cl":
		//	chartColors=["#9A1616","#DA5A5A","#BE2F2F","#750000","#4B0000"];
			chartColors=["#075EA7","#0E7BD6","#3491DF","#59A6E6","#85BEEE"];
		break;
		
		case "demo.tw.bsw.cl":
			chartColors=["#075EA7","#0E7BD6","#3491DF","#59A6E6","#85BEEE"];
		break;
		
		case "telefonica.pe.tw.bsw.cl":
			chartColors=["#075EA7","#0E7BD6","#3491DF","#59A6E6","#85BEEE"];
		break;
		
		case "atlantic.us.tw.bsw.cl":
        	chartColors=["#075EA7","#0E7BD6","#3491DF","#59A6E6","#85BEEE"];
        break;
		
		default:
			chartColors=["#075EA7","#0E7BD6","#3491DF","#59A6E6","#85BEEE"];

	}	

}


function htmlShowTooltipGraphicPieEventMouseover() {
	
	$("#selectCertificatedState tr").on("mouseover", function() {
		var RowIndex = $(this).index();
		var chart = $('#container').highcharts();
		var point = chart.series[0].data[RowIndex];

		point.select();
		chart.tooltip.refresh(point);
		point.setState('hover');

		chart.series[0].data[RowIndex].update({
			selected : true,
			sliced : true
		});

	});
	
}


function htmlHideTooltipGraphicPieEventMouseleave() {

	$("#selectCertificatedState tr").on("mouseleave", function() {

		var chart = $('#container').highcharts();
		var series = chart.series[0];
		var shift = series.data.length;

		for ( index = 0; index < shift; ++index) {
			chart.series[0].data[index].update({
				selected : false,
				sliced : false
			});
		}

	});

}


function htmlBuildTable(getGraphicObject) {
	
	var trHTML,sumQ,sumP;
	$.each(getGraphicObject, function(index, value) {
		var valor=value.value;
		
		trHTML += '<tr><td class="fg-white bg-black"><strong>' + value.name + '</strong></td><td>' + changeFormatNumeric(valor) + '</td><td>' + value.y + '%</td></tr>';
		sumQ += parseInt(value.quantity,10);
		sumP += parseInt(value.y,10);
	});
	
	trHTML += '<tr><td class="fg-white bg-black"><strong>Total</strong></td><td><strong>' + changeFormatNumeric(valueTotal) + '</strong></td><td><strong>' + 100 + '%</strong></td></tr>';
	$('#selectCertificatedState').append(trHTML);

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

function getGraphicObject(data,language){
	
	if (data.status == "true" && data.code == "001") {
		graphs = [];
		$.each(data.data, function(index, value) {
			
			switch(language) {
				case 'es':
					switch(value.name[0]) {
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
					switch(value.name[0]) {
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
				case 'pt_BR':
					switch(value.name[0]) {
						case 'Activo':
							statusTextName="Ativo";					
							break;
						case 'Cerrado':
							statusTextName="Fechado";												
							break;
						case 'Listo':
							statusTextName="Pronto";												
							break;
						case 'Pendiente':
							statusTextName="Pendência";												
							break;
						case 'Creado':
							statusTextName="Criado";												
							break;
						default:
					}				
					break;
				default:
			}
			
			graph = {
				name : statusTextName,
				y : value.y,
				color : chartColors[index],
				value : value.quantity,
				id : (index+1),
				dataLabels : {
					enabled : true
				}
			}
			
			graphs.push(graph);
		});
		return graphs;
	} else {
		graphs = null;
		return graphs;
	}
		
}

function buildGraphicPie(getGraphicObject) {

	$('#container').highcharts({

		chart : {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			backgroundColor: null
		},

		title : {
			text : titleGraphic + ' ' + year,
			align : 'center',
			y : 20
		},

		tooltip : {
			style : {
				color : '#FFFFFF'
			},
			backgroundColor : '#3d3d3d',
			borderColor : 'black',
			borderRadius : 10,
			borderWidth : 1,
			formatter : function() {
				var value=this.point.value;
				
				text=text1 + this.point.name + text2 + this.y + '% (' + changeFormatNumeric(value) + text3 + changeFormatNumeric(valueTotal) + text4;
			//	return 'Los certificados en estado ' + this.point.name + '<br> representa un ' + this.y + '% (' + this.point.value + ') de las certificaciones<br> realizadas sobre una población total de ' + valueTotal + ' certificaciones.';
				return text;
			}
		},

		plotOptions : {
			pie : {
				allowPointSelect : true,
				dataLabels : {
					enabled : true,
					distance : -50,
					style : {
						fontWeight : 'bold',
						color : 'white',
						textShadow : '0px 1px 2px black'
					}
				},

				startAngle : -180,
				endAngle : 180,
				center : ['50%', '50%'],
				showInLegend : true
			},

			series : {
				cursor : 'pointer',
				point : {
					events : {
						mouseOver : function() {
							$("#selectCertificatedState tr:eq(" + (this.id-1) + ")").addClass("row_selected");
						},
						mouseOut : function() {
							$("#selectCertificatedState tr:eq(" + (this.id-1) + ")").removeClass("row_selected");
						}
					}
				}
			}
		},

		series : [{
			type : 'pie',
			name : 'Browser share',
			innerSize : '55%',
			data : getGraphicObject 
		}]

	});

}

		
function htmlKeepMenuOptionShow() {
	
	$("#childShow").css("display", "block");

}


function htmlChangeColorNavBar(){

	$.each($("div div ul a"), function(i, item) {
		// 0=reportes 1=administracion
		if (i == 0) {
			$(this).css("background-color", "rgb(154, 22, 22)");
		}
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

function failAjax(jqXHR){
	
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




