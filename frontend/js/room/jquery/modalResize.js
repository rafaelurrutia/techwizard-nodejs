function modalResize(element){
	var widthScreen = $(window).width();
	var heightScreen = $(window).height();

	var widthResize="";
	var heightResize=$(".modalHead").height()+$(".modalMessageError").height()+$(".modalMessageRequired").height()+$(".modalFoot").height();

	var heightHtmlElement=$(".htmlElement").height()+10+10;
	var widthHtmlElement=$(".htmlElement").width()+10+35;

	switch (true) {
	    case ((element >= 1 && element <= 2)):
			widthResize=40+(2*widthHtmlElement)-45;
			widthResize=widthResize+"px";
			heightResize="220px";
	        break;
	    case (element == 3):       
			widthResize=40+(2*widthHtmlElement)+"px";
			heightResize=heightResize+20+(3*heightHtmlElement)+"px";
	        break;
	    case ((element >=4 && element <= 6)):
	    	widthResize=40+(2*widthHtmlElement)+"px";
			heightResize=heightResize+20+(3*heightHtmlElement)+"px";
	        break;
	    case ((element >=7 && element <= 8)):
	    	widthResize=40+(2*widthHtmlElement)+"px";
			heightResize=heightResize+20+(5*heightHtmlElement)+"px";
	        break;
	    case ((element >=9 && element <= 10)	&&		(widthScreen>=764 && widthScreen<=1024)): 		//ipad
	    	widthResize=40+(2*widthHtmlElement)+"px";
			heightResize=heightResize+20+(5*heightHtmlElement)+"px";
	        break;
	    case ((element >=9 && element <= 10)	&&		(widthScreen>=1024)): 		//note
	    	widthResize=40+(3*widthHtmlElement)+"px";
			heightResize=heightResize+20+(4*heightHtmlElement)+"px";
	        break;
	    case ((element >=11 && element <= 12)	&&		(widthScreen>=764 && widthScreen<=1024)): 		//ipad
	    	widthResize=40+(3*widthHtmlElement)+"px";
			heightResize=heightResize+20+(4*heightHtmlElement)+"px";
	        break;
	    case ((element >=11 && element <= 12)	&&		(widthScreen>=1024)): 		//note
	    	widthResize=40+(4*widthHtmlElement)+"px";
			heightResize=heightResize+20+(3*heightHtmlElement)+"px";
	        break;
	    case ((element >=13 && element <= 14)	&&		(widthScreen>=764 && widthScreen<=1024)): 		//ipad
	    	widthResize=40+(3*widthHtmlElement)+"px";
			heightResize=heightResize+20+(5*heightHtmlElement)+"px";
	        break;
	    case ((element >=13 && element <= 14)	&&		(widthScreen>=1024)): 		//note
	    	widthResize=40+(4*widthHtmlElement)+"px";
			heightResize=heightResize+20+(4*heightHtmlElement)+"px";
	        break;
	    case ((element >=15 && element <= 16)	&&		(widthScreen>=764 && widthScreen<=1024)): 		//ipad
	    	widthResize=40+(3*widthHtmlElement)+"px";
			heightResize=heightResize+20+(6*heightHtmlElement)+"px";
	        break;
	    case ((element >=15 && element <= 16)	&&		(widthScreen>=1024)): 		//note
	    	widthResize=40+(4*widthHtmlElement)+"px";
			heightResize=heightResize+20+(5*heightHtmlElement)+"px";
	        break;
	    case ((element >=17 && element <= 18)	&&		(widthScreen>=764 && widthScreen<=1024)): 		//ipad
	    	widthResize=40+(3*widthHtmlElement)+"px";
			heightResize=heightResize+20+(6*heightHtmlElement)+"px";
	        break;
	    case ((element >=17 && element <= 18)	&&		(widthScreen>=1024)): 		//note
	    	widthResize=40+(4*widthHtmlElement)+"px";
			heightResize=heightResize+20+(5*heightHtmlElement)+"px";
	        break;
	    default:
	        alert("none");
	        break;
	}
	
	$(".modalbox").css({
      "width": widthResize,
      "height": heightResize
    });
}
$(document).ready(function() {

	var source="../json/room/room_Modal_Room.json";
	$.getJSON( source, function( data ) {
		var elementsLength=data.elements.length;
		modalResize(elementsLength);
		$(window).resize(function() {
			modalResize(elementsLength);
		});
	});      
});