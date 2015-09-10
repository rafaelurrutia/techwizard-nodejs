<?php

//$url= ;

//echo $_SERVER[HTTP_HOST].' '.$_SERVER['REQUEST_URI'];

$domain = $_SERVER["SERVER_NAME"];
$requri = $_SERVER['REQUEST_URI'];

//echo $domain;

$company['techwizarddev.baking.cl'] = array(
	'DOMAIN' => 'techwizarddev.baking.cl',
	'LANGUAGE' => 'es',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'VTR',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/logo-set11.png" width="25" height="19" style="margin-right: 5px"><b>vtr</b>.com</a>',
	'LOGOSOURCEHEADMODAL' => '../img/logo-footer.png',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'zoom: 0.6;',
	'LOGOSOURCEFOOTMODAL' => '../img/logo-set1.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOTMODALSTYLE' => 'zoom: 0.5;'
);


echo $company[$_SERVER["SERVER_NAME"]]['LOGOTOPNAVBAR'];

$domain = $_SERVER["HTTP_HOST"];
$uri = $_SERVER["REQUEST_URI"];
$url = $domain . $uri;
 
if (($url == "redjohnsoncandy.com/") || ($url == "www.redjohnsoncandy.com/")) { 
   header("Status: 301 Moved Permanently");
   header("Location: http://www.redjohnsoncandy.com/index.php?option=com_content&view=category&layout=blog&id=3&Itemid=12"); 
}

switch($_SERVER['HTTP_HOST']) {
    case 'shoes.com':
    case 'www.shoes.com':
        $mageRunCode = 'shoes';
        $mageRunType = 'website';
    break;
    case 'hats.com':
    case 'www.hats.com':
        $mageRunCode = 'hats';
        $mageRunType = 'website';
    break;
}
	
switch ($i) {
    case 0:
    //    echo "i es igual a 0";
        break;
    case 1:
        echo "i es igual a 1";
        break;
    case 2:
        echo "i es igual a 2";
        break;
	default:
        echo "i no es igual a 0, 1 ni 2";
}

/*

logo cabecera
logo name



$company_url="";
$company_name="";
$company_image="";
$company_imageWidth="";
$company_imageStyle="width: 68px; margin: 0 5px;";
$company_imageClass="";
*/



?>