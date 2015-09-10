$(document).ready(function() {

	$("body").css("cursor","wait");
/*
    var url = window.location.href;
    var page = url.substr(url.lastIndexOf('/')+1);
    var urlClean = (page.indexOf("#") > -1) ? page.substr(0, page.indexOf('#')) : page;

     $.each($("nav ul li"), function( i, item ) {
     	if($(this).children(':eq(0)').attr("href")==urlClean){
        	$(this).addClass('active');
     	}
     });

     $.each($("div div ul a"), function( i, item ) {
     	if($(this).attr("href")==urlClean){
     		$(this).css("background-color","rgb(154, 22, 22)");
        }        
	});
*/
});

$(window).load(function(){
    $("html").removeClass( "loading" );
    $("body").css("cursor","default");
});
