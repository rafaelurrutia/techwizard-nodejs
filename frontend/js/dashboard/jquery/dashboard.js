$(document).ready(function() {

	var dashboardMessageDeleteWidget;

	switch(language) {
	    case 'es':
			dashboardMessageDeleteWidget="¿Esta seguro de eliminar este widget?";
	        break;
	    case 'en':
			dashboardMessageDeleteWidget="Are you shure to delete this widget?";
	        break;
		case 'pt_BR':
			dashboardMessageDeleteWidget="¿Esta seguro de eliminar este widget?";
	        break;	        
	    default:
	    	dashboardMessageDeleteWidget="Are you shure to delete this widget?";
	        break;   	
	}
	
	//	MOSTRAR CADA WIDGET CON UNA ESPERA DE 0,4 SEG Y CON UN EFECTO FADEIN CUYA DEMORA ES DE 0,3 SEG
	$(".dashboard_widget_large,.dashboard_widget,.dashboard_widget_middle").each(function(index) {
		$(this).delay(400 * index).fadeIn(300);
	});

	//	MINIMIZAR Y/O MAXIMIZAR WIDGET
	$(".dashboard_widget_option span:first-child").on("click", function() {
		var moreAndLess = $(this).parent().next().is(':visible') ? '+' : '-';
		$(this).parent().next().toggle("slow");
		$(this).text(moreAndLess);
	});

	//	CERRAR WIDGET
	$(".dashboard_widget_option span:nth-child(2)").on("click", function() {
		if (confirm(dashboardMessageDeleteWidget)) {
			$(this).parent().parent().slideUp("slow", function() {
				$(this).remove();
			});
		}
	});


	
	$( ".text_indicator" ).hover(function() {
		$(this).css('cursor', 'pointer');	
	});
  	

	
	
// rest in peace extreme iii sides to every story
	/* 
	
	$(".text_number").each(function(index) {
		var value = $(this).text();
		value = addCommas(value);
		$(this).text() == value;
	});

	var currentNumber = 0;

	$({
		numberValue : currentNumber
	}).animate({
		numberValue : 100
	}, {
		duration : 8000,
		easing : 'linear',
		step : function() {
			$('#number').text(Math.ceil(this.numberValue * 100) / 100);
		}
	});

	function increment(elem, from, to, duration) {
		var interval = setInterval(function() {
			if (from >= to)
				clearInterval(interval);
			elem.innerText = from++;
		}, duration);
	};

	function addCommas(val) {
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(val)) {
			val = val.replace(rgx, '$1' + '.' + '$2');
		}
		return val;
	}

	increment(document.getElementById("number"), (250000 - 500), 250000, 1);
*/
}); 