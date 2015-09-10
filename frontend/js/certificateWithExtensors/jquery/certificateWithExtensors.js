var cantidadWithExtensor, porcentajeWithExtensor;
var cantidadWithoutExtensor, porcentajeWithoutExtensor;
var valorTotal;

var d = new Date();
var year = d.getFullYear();
var titleGraphic,withExtensor,withoutExtensor,withExtensor1,withoutExtensor1;
var toolTipMessage,toolTipMessage1,toolTipMessage2,toolTipMessage3,toolTipMessage4;

var colorPieChart=["#4B0000","#BE2F2F"];

var url = {
	"read" : "/techwizard/stats/certbyextensor/2015"
};



switch(language) {
case 'es':
	titleGraphic = "% Certificados con extensores correspondiente al año ";
	withExtensor = "Con<br>Extensor";
	withExtensor1= "con extensores";
	withoutExtensor = "Sin<br>Extensor";
	withoutExtensor1 = "sin extensores";
	
	toolTipMessage1="De un total de ";
	toolTipMessage2=" certificados activos,<br> ";
	toolTipMessage3=" de ellas representando a un ";
	toolTipMessage4="% <br>corresponde a instalaciones ";

	break;
case 'en':
	titleGraphic = "% Certificates with extenders from ";
	withExtensor = "With<br>Extender";
	withExtensor1 = "with extender";
	withoutExtensor = "Without<br>Extender";
	withoutExtensor1 = "without extender";
	
	toolTipMessage1="From a total of ";
	toolTipMessage2=" active certificates,<br> ";
	toolTipMessage3=" of them representing ";
	toolTipMessage4="% <br>corresponds to installations ";

	break;
case 'pt_BR':
	titleGraphic = "% Certificados com extensores correspondente ao ano ";
	withExtensor = "Com<br>Extensores";
	withExtensor1 = "com extensores";
	withoutExtensor = "Sem<br>Extensores";
	withoutExtensor1 = "sem extensores";
	
	toolTipMessage1="De um total de  ";
	toolTipMessage2=" certificados ativos,<br> ";
	toolTipMessage3=" delas representando a ";
	toolTipMessage4="% <br>corresponde a instalações ";

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

function detectNameDomain(){
	
	switch(window.location.hostname){
		case "techwizarddev.baking.cl":
        	colorPieChart=["#3490DF","#85BEEE"];	
        break;
	    
	    case "techwizard.bsw.cl":
		//	colorPieChart=["#4B0000","#BE2F2F"];
			colorPieChart=["#3490DF","#85BEEE"];
		break;
		
		case "demo.tw.bsw.cl":
        	colorPieChart=["#3490DF","#85BEEE"];	
        break;
        
        case "telefonica.pe.tw.bsw.cl":
        	colorPieChart=["#3490DF","#85BEEE"];	
        break;
        
        case "atlantic.us.tw.bsw.cl":
        	colorPieChart=["#3490DF","#85BEEE"];	
        break;
		
		default:
			colorPieChart=["#3490DF","#85BEEE"];

	}	

}

function getJsonCall(url) {

	var result = null;
	$.ajax({
		type : "GET",
		async : false,
		url : url
	}).done(function(data) {
		result = data;
	}).fail(function(jqXHR, textStatus, errorThrown) {
		failAjax(jqXHR);
	});
	return result;

}

$(function() {
	var chart;
	var valueTotal = 200;

	$(document).ready(function() {

		detectNameDomain();
		
		$("#childShow").css("display","block");
		
		var x = getJsonCall(url.read);

		cantidadWithExtensor = x.data[0].q;
		porcentajeWithExtensor = x.data[0].y;
		cantidadWithoutExtensor = x.data[1].q;
		porcentajeWithoutExtensor = x.data[1].y;
		valorTotal = parseInt(cantidadWithExtensor, 10) + parseInt(cantidadWithoutExtensor, 10);
		
		$("#qwe").text(changeFormatNumeric(cantidadWithExtensor));
		$("#pwe").text(porcentajeWithExtensor + "%");
		$("#qwoe").text(changeFormatNumeric(cantidadWithoutExtensor));
		$("#pwoe").text(porcentajeWithoutExtensor + "%");
		$("#total").text(changeFormatNumeric(valorTotal));

		

		$("#withExtensor").on("mouseover", function() {
			var chart = $('#container').highcharts();

			var point = chart.series[0].data[0];
			point.select();
			chart.tooltip.refresh(point);
			point.setState('hover');

			chart.series[0].data[1].update({
				selected : false,
				sliced : false
			});

			chart.series[0].data[0].update({
				selected : true,
				sliced : true
			});
		});

		$("#withoutExtensor").on("mouseover", function() {
			var chart = $('#container').highcharts();

			var point = chart.series[0].data[1];
			point.select();
			chart.tooltip.refresh(point);
			point.setState('hover');
			chart.series[0].data[0].update({
				selected : false,
				sliced : false
			});
			chart.series[0].data[1].update({
				selected : true,
				sliced : true
			});
		});

		$("#withoutExtensor,#withExtensor").on("mouseleave", function() {

			var chart = $('#container').highcharts();

			chart.series[0].data[0].update({
				selected : false,
				sliced : false
			});

			chart.series[0].data[1].update({
				selected : false,
				sliced : false
			});
		});

		// Build the chart
		$('#container').highcharts({

			chart : {
				plotBackgroundColor : null,
				plotBorderWidth : 0,
				plotShadow : false,
				backgroundColor : null
			},
			title : {
				text : titleGraphic + ' ' + year,
				align : 'center',
				y : 20
			},

			tooltip : {
				// pointFormat: '{series.data.name}: <b>{point.percentage:.1f}%</b>'
				style : {
					color : '#FFFFFF'
				},
				backgroundColor : '#3d3d3d',
				borderColor : 'black',
				borderRadius : 10,
				borderWidth : 1,
				formatter : function() {
					//    return 'Representando un '+ this.y + '% ('+this.point.value+') de las instalaciones <br> de dispositivos cable modem realizados <br>sobre una población total de ' + valueTotal + ' instalaciones, <br>fueron instalaciones con extensores.';
					var extensor = ((this.point.id == 0) ? withExtensor1 : withoutExtensor1);
					// if(this.point.id==0)
					toolTipMessage = toolTipMessage1 + changeFormatNumeric(valorTotal) + toolTipMessage2 + changeFormatNumeric(this.point.value) + toolTipMessage3 + this.y +toolTipMessage4 + extensor + '.';
					//return 'De un total de ' + valorTotal + ' certificados activos,<br> ' + this.point.value + ' de ellas representando a un ' + this.y + '% <br>corresponde a instalaciones ' + extensor + '.';
					return toolTipMessage;
				}
			},
			plotOptions : {
				pie : {
					allowPointSelect : true,
					dataLabels : {
						enabled : true,
						distance : -35,
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
								if (this.id == 0) {
									$("#withoutExtensor").removeClass("row_selected");
									$("#withExtensor").addClass("rowWithExtensor_selected");
								} else if (this.id == 1) {
									$("#withExtensor").removeClass("row_selected");
									$("#withoutExtensor").addClass("rowWithoutExtensor_selected");
								}
							},
							mouseOut : function() {
								$("#withoutExtensor").removeClass("rowWithoutExtensor_selected");
								$("#withExtensor").removeClass("rowWithExtensor_selected");
							}
						}
					}
				}
			},
			series : [{
				type : 'pie',
				name : 'Browser share',
				innerSize : '55%',
				data : [{
					name : withExtensor,
					y : porcentajeWithExtensor,
					color : colorPieChart[0],
					value : cantidadWithExtensor,
					id : 0,
					dataLabels : {
						enabled : true
					}
				}, {
					name : withoutExtensor,
					y : porcentajeWithoutExtensor,
					color : colorPieChart[1],
					value : cantidadWithoutExtensor,
					id : 1,
					dataLabels : {
						enabled : true
					}
				}]
			}]

		});
	});

}); 

/*

var url = {
	"read" 				: "/techwizard/stats/certbyextensor/2014"
};

var table, rowData, date, day, month, year, lengthTable, enablePaging;
var indexCertificateRow, indexExtensorRow;
var generalListCertificateValue, generalListCertificateValueExtensor;
var populateTableCertificate, populateTableExtensorCertificate;
var unitOfMeasurement = "Kbytes";
var messageErrorGetWifi = "Lo sentimos, por el momento no hay certificaciones Wifi.";
var messageErrorGetExtensor = "Por el momento no hay instalación de algún extensor en este certificado.";
var urlDatatableLanguageUrl = "http://cdn.datatables.net/plug-ins/be7019ee387/i18n/Spanish.json";



			
index();

function index(){
	
	$(document).ready(function() {
				
		htmlKeepMenuOptionShow();
		htmlChangeColorNavBar();
		getJson=getJsonCall(url.read+'2014');
		
		valueTotal=getJson.totalCertificados;		
		
		getGraphicObject=getGraphicObject(getJson);
		buildGraphicPie(getGraphicObject);

		htmlBuildTable(getGraphicObject);
		htmlShowTooltipGraphicPieEventMouseover();
		htmlHideTooltipGraphicPieEventMouseleave();

	});
		
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
	
	console.log(getGraphicObject);
	var trHTML,sumQ,sumP;
	$.each(getGraphicObject, function(index, value) {
		trHTML += '<tr><td class="fg-white bg-black"><strong>' + value.name + '</strong></td><td>' + value.value + '</td><td>' + value.y + '%</td></tr>';
		sumQ += parseInt(value.quantity,10);
		sumP += parseInt(value.y,10);
	});
	
	trHTML += '<tr><td class="fg-white bg-black"><strong>Total</strong></td><td><strong>' + valueTotal + '</strong></td><td><strong>' + 100 + '%</strong></td></tr>';
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

function getGraphicObject(data){
	
	if (data.status == "true" && data.code == "001") {
		graphs = [];
		$.each(data.data, function(index, value) {
			graph = {
				name : value.name[0],
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
				return 'Los certificados en estado ' + this.point.name + '<br> representa un ' + this.y + '% (' + this.point.value + ') de las certificaciones<br> realizadas sobre una población total de ' + valueTotal + ' certificaciones.';
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



*/
