var isChromium = window.chrome,
    vendorName = window.navigator.vendor;
if(isChromium !== null && vendorName === "Google Inc.") {
	
} else { 
  	window.location = "../error/"; 
}
