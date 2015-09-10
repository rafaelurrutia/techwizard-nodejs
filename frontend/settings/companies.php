<?php

$VERSION = array(
	array('VERSION' => '1.0.9.1','DATE' => '12-11-2014'),
	array('VERSION' => '1.1.0.1','DATE' => '14-11-2014'),
	array('VERSION' => '1.3.3.1','DATE' => '23-03-2015','COMPANY'=> 'demo.tw.bsw.cl'),
	array('VERSION' => '1.1.1.1','DATE' => '21-01-2015','COMPANY'=> 'demoen.tw.bsw.cl'),
	array('VERSION' => '1.1.1.1','DATE' => '21-01-2015','COMPANY'=> 'mediacom.us.tw.bsw.cl'),
	array('VERSION' => '1.1.1.1','DATE' => '21-01-2015','COMPANY'=> 'megacable.mx.tw.bsw.cl'),
	array('VERSION' => '1.1.1.1','DATE' => '29-01-2015','COMPANY'=> 'movistar.cl.tw.bsw.cl'),
	array('VERSION' => '1.2.1.1','DATE' => '16-02-2015','COMPANY'=> 'techwizard.bsw.cl'),
	array('VERSION' => '1.2.2.1','DATE' => '04-03-2015','COMPANY'=> '192.168.100.7'),
	array('VERSION' => '1.2.2.1','DATE' => '04-03-2015','COMPANY'=> 'tw.iblau.cl'),
	array('VERSION' => '1.3.3.1','DATE' => '23-03-2015','COMPANY'=> 'demoen.tw.bsw.cl'),
	array('VERSION' => '1.3.3.1','DATE' => '20-03-2015','COMPANY'=> 'demopt.tw.bsw.cl'),
	array('VERSION' => '1.3.4.1','DATE' => '27-03-2015','COMPANY'=> 'demo.tw.bsw.cl'),
	array('VERSION' => '1.3.4.1','DATE' => '27-03-2015','COMPANY'=> 'demopt.tw.bsw.cl'),
	array('VERSION' => '1.3.5.1','DATE' => '05-05-2015','COMPANY'=> 'demoen.tw.bsw.cl')
	
);

$VERSION=$VERSION[count($VERSION)-1];

/*
$company['techwizarddev.baking.cl'] = array(
	'DOMAIN' => 'techwizarddev.baking.cl',
	'LANGUAGE' => 'es',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'VTR',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/'.$_SERVER["SERVER_NAME"].'/logo-set11.png" width="25" height="19" style="margin-right: 5px"><strong>vtr</strong>.com</a>',
	'LOGOSOURCEHEADMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:120px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-set1.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:110px; margin-top: 3px;'
);
*/

$company['techwizarddev.baking.cl'] = array(
	'DOMAIN' => 'techwizarddev.baking.cl',
	'LANGUAGE' => 'en',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'BAKING',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/baking/LogoBSW.png" width="70" height="21" style="margin-right: 5px"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:105px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOT' => '<img src="../img/baking/LogoBSW.png" border="0" style="width: 68px; margin: 0 5px;" alt="Link to baking.cl" /> 
	<img src="../img/intraway/intraway_blanco.png" border="0" style="width: 66px; margin: 0 5px;" alt="Link to intraway.com" />',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:70px; margin-top: 0px;',
	'VERSION' => $VERSION['VERSION']
);

/* ultima version subida con fecha miercoles 4 de marzo del 2015 por cambio de oficina, en fase añadiendo idioma portugues */
$company['192.168.100.7'] = array(
	'DOMAIN' => '192.168.100.7',
	'LANGUAGE' => 'pt_BR',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'BAKING',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/baking/LogoBSW.png" width="70" height="21" style="margin-right: 5px"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:105px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOT' => '<a target="_blank" href="http://www.baking.cl/"><img src="../img/baking/LogoBSW.png" border="0" style="width: 68px; margin: 0 5px;" alt="Link to baking.cl" /></a> 
	<a target="_blank" href="http://www.intraway.com/"><img src="../img/intraway/intraway_blanco.png" border="0" style="width: 66px; margin: 0 5px;" alt="Link to intraway.com" /></a>',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:70px; margin-top: 0px;',
	'VERSION' => $VERSION['VERSION']
);

/* ultima version subida con fecha miercoles 4 de marzo del 2015 por cambio de oficina, en fase añadiendo idioma portugues */
$company['tw.iblau.cl'] = array(
	'DOMAIN' => 'tw.iblau.cl',
	'LANGUAGE' => 'pt_BR',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'BAKING',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/baking/LogoBSW.png" width="70" height="21" style="margin-right: 5px"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:105px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOT' => '<img src="../img/baking/LogoBSW.png" border="0" style="width: 68px; margin: 0 5px;" alt="Link to baking.cl" /> 
	<img src="../img/intraway/intraway_blanco.png" border="0" style="width: 66px; margin: 0 5px;" alt="Link to intraway.com" />',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:70px; margin-top: 0px;',
	'VERSION' => $VERSION['VERSION']
);


$company['demo.tw.bsw.cl'] = array(
	'DOMAIN' => 'demo.tw.bsw.cl',
	'LANGUAGE' => 'es',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'BAKING',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/baking/LogoBSW.png" width="70" height="21" style="margin-right: 5px"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:105px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:70px; margin-top: 0px;',
	'LOGOSOURCEFOOT' => '<img src="../img/baking/LogoBSW.png" border="0" style="width: 68px; margin: 0 5px;" alt="Link to baking.cl" /> 
	<img src="../img/intraway/intraway_blanco.png" border="0" style="width: 66px; margin: 0 5px;" alt="Link to intraway.com" />',
	'VERSION' => $VERSION['VERSION']
);

$company['telefonica.pe.tw.bsw.cl'] = array(
	'DOMAIN' => 'telefonica.pe.tw.bsw.cl',
	'LANGUAGE' => 'es',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'BAKING',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/baking/LogoBSW.png" width="70" height="21" style="margin-right: 5px"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:105px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:70px; margin-top: 0px;',
	'LOGOSOURCEFOOT' => '<img src="../img/baking/LogoBSW.png" border="0" style="width: 68px; margin: 0 5px;" alt="Link to baking.cl" /> 
	<img src="../img/intraway/intraway_blanco.png" border="0" style="width: 66px; margin: 0 5px;" alt="Link to intraway.com" />',
	'VERSION' => $VERSION['VERSION']
);
/*
$company['techwizard.bsw.cl'] = array(
	'DOMAIN' => 'techwizard.bsw.cl',
	'LANGUAGE' => 'es',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'VTR',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/'.$_SERVER["SERVER_NAME"].'/logo-set11.png" width="25" height="19" style="margin-right: 5px"><strong>vtr</strong>.com</a>',	
	'LOGOSOURCEHEADMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:120px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-set1.png', 
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:110px; margin-top: 3px;',
	'LOGOSOURCEFOOT' => ''
);
*/

/* ultima version subida con fecha lunes 16 de febrero del 2015 */
$company['techwizard.bsw.cl'] = array(
	'DOMAIN' => 'techwizard.bsw.cl',
	'LANGUAGE' => 'es',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'VTR',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:120px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:110px; margin-top: 3px;',
	'LOGOSOURCEFOOT' => '',
	'VERSION' => $VERSION['VERSION']
);

$company['tw.iblau.cl'] = array(
	'DOMAIN' => 'tw.iblau.cl',
	'LANGUAGE' => 'es',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'VTR',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:120px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:110px; margin-top: 3px;',
	'LOGOSOURCEFOOT' => '',
	'VERSION' => $VERSION['VERSION']
);

$company['atlantic.us.tw.bsw.cl'] = array(
	'DOMAIN' => 'atlantic.us.tw.bsw.cl',
	'LANGUAGE' => 'en',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'BAKING',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/baking/LogoBSW.png" width="70" height="21" style="margin-right: 5px"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:105px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOT' => '<img src="../img/baking/LogoBSW.png" border="0" style="width: 68px; margin: 0 5px;" alt="Link to baking.cl" /> 
	<img src="../img/intraway/intraway_blanco.png" border="0" style="width: 66px; margin: 0 5px;" alt="Link to intraway.com" />',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:70px; margin-top: 0px;',
	'VERSION' => $VERSION['VERSION']
);

/* ultima version subida con fecha miercoles 21 de marzo del 2015 */
$company['mediacom.us.tw.bsw.cl'] = array(
	'DOMAIN' => 'mediacom.us.tw.bsw.cl',
	'LANGUAGE' => 'en',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'BAKING',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/baking/LogoBSW.png" width="70" height="21" style="margin-right: 5px"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:105px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOT' => '<img src="../img/baking/LogoBSW.png" border="0" style="width: 68px; margin: 0 5px;" alt="Link to baking.cl" /> 
	<img src="../img/intraway/intraway_blanco.png" border="0" style="width: 66px; margin: 0 5px;" alt="Link to intraway.com" />',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:70px; margin-top: 0px;',
	'VERSION' => $VERSION['VERSION']
);

/* ultima version subida con fecha viernes 13 de marzo del 2015 */
$company['demoen.tw.bsw.cl'] = array(
	'DOMAIN' => 'demoen.tw.bsw.cl',
	'LANGUAGE' => 'en',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'BAKING',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/baking/LogoBSW.png" width="70" height="21" style="margin-right: 5px"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:105px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOT' => '<img src="../img/baking/LogoBSW.png" border="0" style="width: 68px; margin: 0 5px;" alt="Link to baking.cl" /> 
	<img src="../img/intraway/intraway_blanco.png" border="0" style="width: 66px; margin: 0 5px;" alt="Link to intraway.com" />',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:70px; margin-top: 0px;',
	'VERSION' => $VERSION['VERSION']
);

/* ultima version subida con fecha miercoles 21 de enero del 2015 */
$company['megacable.mx.tw.bsw.cl'] = array(
	'DOMAIN' => 'megacable.mx.tw.bsw.cl',
	'LANGUAGE' => 'es',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'BAKING',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/baking/LogoBSW.png" width="70" height="21" style="margin-right: 5px"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:105px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOT' => '<img src="../img/baking/LogoBSW.png" border="0" style="width: 68px; margin: 0 5px;" alt="Link to baking.cl" /> 
	<img src="../img/intraway/intraway_blanco.png" border="0" style="width: 66px; margin: 0 5px;" alt="Link to intraway.com" />',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:70px; margin-top: 0px;',
	'VERSION' => $VERSION['VERSION']
);

/* ultima version subida con fecha miercoles 29 de enero del 2015 */
$company['movistar.cl.tw.bsw.cl'] = array(
	'DOMAIN' => 'movistar.cl.tw.bsw.cl',
	'LANGUAGE' => 'es',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'BAKING',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/baking/LogoBSW.png" width="70" height="21" style="margin-right: 5px"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:105px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOT' => '<img src="../img/baking/LogoBSW.png" border="0" style="width: 68px; margin: 0 5px;" alt="Link to baking.cl" /> 
	<img src="../img/intraway/intraway_blanco.png" border="0" style="width: 66px; margin: 0 5px;" alt="Link to intraway.com" />',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:70px; margin-top: 0px;',
	'VERSION' => $VERSION['VERSION']
);

/* primera version subida con fecha viernes 20 de marzo del 2015 */
$company['demopt.tw.bsw.cl'] = array(
	'DOMAIN' => 'demopt.tw.bsw.cl',
	'LANGUAGE' => 'pt_BR',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'BAKING',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/baking/LogoBSW.png" width="70" height="21" style="margin-right: 5px"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:105px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOT' => '<img src="../img/baking/LogoBSW.png" border="0" style="width: 68px; margin: 0 5px;" alt="Link to baking.cl" /> 
	<img src="../img/intraway/intraway_blanco.png" border="0" style="width: 66px; margin: 0 5px;" alt="Link to intraway.com" />',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:70px; margin-top: 0px;',
	'VERSION' => $VERSION['VERSION']
);

/* ultima version subida con fecha miercoles 22 de abril del 2015 qa para demoen */
$company['qa2.tw.bsw.cl'] = array(
	'DOMAIN' => 'qa2.tw.bsw.cl',
	'LANGUAGE' => 'en',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'BAKING',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/baking/LogoBSW.png" width="70" height="21" style="margin-right: 5px"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:105px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOT' => '<a target="_blank" href="http://www.baking.cl/"><img src="../img/baking/LogoBSW.png" border="0" style="width: 68px; margin: 0 5px;" alt="Link to baking.cl" /></a> 
	<a target="_blank" href="http://www.intraway.com/"><img src="../img/intraway/intraway_blanco.png" border="0" style="width: 66px; margin: 0 5px;" alt="Link to intraway.com" /></a>',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:70px; margin-top: 0px;',
	'VERSION' => $VERSION['VERSION']
);

$company['qa1.tw.bsw.cl'] = array(
	'DOMAIN' => 'qa1.tw.bsw.cl',
	'LANGUAGE' => 'en',
	'TIMEZONE' => 'America/Santiago',
	'NAME' => 'BAKING',
	'LOGOTOPNAVBAR' => '<a href="'.$_SESSION["redirection"].'" class="element"><img src="../img/baking/LogoBSW.png" width="70" height="21" style="margin-right: 5px"><strong>Tech</strong>Wizard</a>',
	'LOGOSOURCEHEADMODAL' => '',
	'LOGOSOURCEHEADMODALCLASS' => '',
	'LOGOSOURCEHEADMODALSTYLE' => 'width:105px; margin-right:5px !important; margin-top:0px !important; float:right !important;',
	'LOGOSOURCEFOOTMODAL' => '../img/'.$_SERVER["SERVER_NAME"].'/logo-footer.png',
	'LOGOSOURCEFOOTMODALCLASS' => '',
	'LOGOSOURCEFOOT' => '<a target="_blank" href="http://www.baking.cl/"><img src="../img/baking/LogoBSW.png" border="0" style="width: 68px; margin: 0 5px;" alt="Link to baking.cl" /></a> 
	<a target="_blank" href="http://www.intraway.com/"><img src="../img/intraway/intraway_blanco.png" border="0" style="width: 66px; margin: 0 5px;" alt="Link to intraway.com" /></a>',
	'LOGOSOURCEFOOTMODALSTYLE' => 'width:70px; margin-top: 0px;',
	'VERSION' => $VERSION['VERSION']
);

?>
