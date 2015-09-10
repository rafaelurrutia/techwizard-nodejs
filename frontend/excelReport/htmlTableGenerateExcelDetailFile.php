<?php 

if(!isset($_POST["data"])) {
	header('Location: ../errortw/');
}

/** Include PHPExcel */
require_once '../lib/phpexcel/Classes/PHPExcel.php';
	
$data=$_POST["data"];

$url="http://devel1.baking.cl/techwizard/stats/getCertificados/";



function loadExcel(){
	
	$str_json = file_get_contents('php://input');

	error_reporting(E_ALL);
	ini_set('display_errors', TRUE);
	ini_set('display_startup_errors', TRUE);
	date_default_timezone_set('Europe/London');
	
	if (PHP_SAPI == 'cli')
		die('This example should only be run from a Web Browser');
		
}

function saveExcelToLocalFile($objWriter){
    // make sure you have permission to write to directory
    $filePath = '../tmp/detailCertificate.xlsx';
    $objWriter->save($filePath);
    return $filePath;
}

function setDocumentProperties($objPHPExcel){
    $objPHPExcel->getProperties()->setCreator("Baking Software")
							     ->setLastModifiedBy("Baking Software")
							     ->setTitle("PHPExcel Test Document")
							     ->setSubject("PHPExcel Test Document")
							     ->setDescription("Test document for PHPExcel, generated using PHP classes.")
							     ->setKeywords("office PHPExcel php")
							     ->setCategory("Test result file");    
}

function setOrientationSizeScalingPage($objPHPExcel){
    
    // orientacion horizontal
    // hoja a4
    // hoja carta chile 11 × 8½ pulgadas o 21,59 × 27,94 cm
    // ajustar a una pagina de ancho
    // ajustar a nada de alto
    
    $objPHPExcel->getActiveSheet()->getPageSetup()->setOrientation(PHPExcel_Worksheet_PageSetup::ORIENTATION_LANDSCAPE);
    $objPHPExcel->getActiveSheet()->getPageSetup()->setPaperSize(PHPExcel_Worksheet_PageSetup::PAPERSIZE_A4);
    $objPHPExcel->getActiveSheet()->getPageSetup()->setFitToPage(true);
    $objPHPExcel->getActiveSheet()->getPageSetup()->setFitToWidth(1);
    $objPHPExcel->getActiveSheet()->getPageSetup()->setFitToHeight(0);    
}

function getObjectKeyExist($keyElement){

	if(isset($keyElement)){
		return $keyElement;
	}else{
		return false;		
	}	

}

function getDecodeJsonObject($data){

	$data=json_decode($data,true);	
	return $data;	

}

function checkExistPostVariable($postVariable){
	
	if(isset($postVariable)){
		return true;
	}else{
		return false;		
	}

}

function loadJsonFromWebService(){
	
	$url="http://devel1.baking.cl/techwizard/stats/getCertificados/";
	$str = file_get_contents($url);
	$url=json_decode($str,true);

}

function getArrayObjectPruebas_ST($data){

	$Pruebas_ST=array();
	
	array_push($Pruebas_ST,(getObjectKeyExist($data["nacional"]["subida"])) ? number_format($data["nacional"]["subida"],0,"",".")." (Kbps)" : null);
	array_push($Pruebas_ST,(getObjectKeyExist($data["nacional"]["bajada"])) ? number_format($data["nacional"]["bajada"],0,"",".")." (Kbps)" : null);
	array_push($Pruebas_ST,(getObjectKeyExist($data["internacional"]["subida"])) ? number_format($data["internacional"]["subida"],0,"",".")." (Kbps)" : null);
	array_push($Pruebas_ST,(getObjectKeyExist($data["internacional"]["bajada"])) ? number_format($data["internacional"]["bajada"],0,"",".")." (Kbps)" : null);


	return $Pruebas_ST;
		
}

function getArrayObjectCPE($data){

	$CPE=array();

	array_push($CPE,(getObjectKeyExist($data["tipo"])) ? $data["tipo"] : null);
	array_push($CPE,(getObjectKeyExist($data["modelo"])) ? $data["modelo"] : null);
	array_push($CPE,(getObjectKeyExist($data["mac"])) ? $data["mac"] : null);
	array_push($CPE,(getObjectKeyExist($data["frecuencia"])) ? $data["frecuencia"] : null);
	array_push($CPE,(getObjectKeyExist($data["ubicacion"])) ? $data["ubicacion"] : null);
	array_push($CPE,(getObjectKeyExist($data["ubicacion_aceptada"])) ? $data["ubicacion_aceptada"] : null);
	array_push($CPE,(getObjectKeyExist($data["observacion"])) ? $data["observacion"] : null);

	return $CPE;
		
}

function getArrayObjectLocaciones($data){

	$Locaciones=array();
	
	foreach ($data as $key => $value) {
		array_push($Locaciones,$value);			
	}
	
	return $Locaciones;
		
}

function getArrayObjectGeneral($data){

	$General=array();

	$fechaCertificadoCreado=$data["fecha_certificado"];
	$fechaCertificadoCreado=split('T',$data["fecha_certificado"]);	
	$fechaCertificadoCreadoFecha=split('-',$fechaCertificadoCreado[0]);
	$fechaCertificadoCreadoFecha=$fechaCertificadoCreadoFecha[2]."/".$fechaCertificadoCreadoFecha[1]."/".$fechaCertificadoCreadoFecha[0];	
	$fechaCertificadoCreadoHora=split(':',$fechaCertificadoCreado[1]);
	$fechaCertificadoCreadoHora=$fechaCertificadoCreadoHora[0].":".$fechaCertificadoCreadoHora[1];
	$fechaCertificadoCreado=$fechaCertificadoCreadoFecha." ".$fechaCertificadoCreadoHora;

	$fechaCertificadoActivo=$data["fecha_activo"];
	$fechaCertificadoActivo=split('T',$data["fecha_activo"]);
	$fechaCertificadoActivoFecha=split('-',$fechaCertificadoActivo[0]);
	$fechaCertificadoActivoFecha=$fechaCertificadoActivoFecha[2]."/".$fechaCertificadoActivoFecha[1]."/".$fechaCertificadoActivoFecha[0];	
	$fechaCertificadoActivoHora=split(':',$fechaCertificadoActivo[1]);
	$fechaCertificadoActivoHora=$fechaCertificadoActivoHora[0].":".$fechaCertificadoActivoHora[1];
	$fechaCertificadoActivo=$fechaCertificadoActivoFecha." ".$fechaCertificadoActivoHora;
			
	array_push($General,(getObjectKeyExist($data["idem_servicio"])) ? $data["idem_servicio"] : null);
	array_push($General,(getObjectKeyExist($data["rut_cliente"])) ? $data["rut_cliente"] : null);
	array_push($General,(getObjectKeyExist($data["id_tecnico"])) ? $data["id_tecnico"] : null);
	array_push($General,(getObjectKeyExist($data["mail_cliente"])) ? $data["mail_cliente"] : null);
	array_push($General,(getObjectKeyExist($data["status"])) ? $data["status"] : null);
	array_push($General,(getObjectKeyExist($data["tipo_OT"])) ? $data["tipo_OT"] : null);
	array_push($General,(getObjectKeyExist($data["presencia_wifi"])) ? $data["presencia_wifi"] : null);
	array_push($General,(getObjectKeyExist($data["fecha_certificado"])) ? $fechaCertificadoCreado : null);	
	array_push($General,(getObjectKeyExist($data["wifi_propia"])) ? $data["wifi_propia"] : null);
	array_push($General,(getObjectKeyExist($data["fecha_activo"])) ? $fechaCertificadoActivo : null);
	array_push($General,(getObjectKeyExist($data["plan"]["nombre"])) ? $data["plan"]["nombre"] : null);
	array_push($General,(getObjectKeyExist($data["plan"]["subida"])) ? $data["plan"]["subida"] : null);
	array_push($General,(getObjectKeyExist($data["plan"]["bajada"])) ? $data["plan"]["bajada"] : null);
	array_push($General,(getObjectKeyExist($data["nombre_receptor"])) ? $data["nombre_receptor"] : null);
	array_push($General,(getObjectKeyExist($data["parentesco"])) ? $data["parentesco"] : null);
	array_push($General,(getObjectKeyExist($data["pisos"])) ? $data["pisos"] : null);
	array_push($General,(getObjectKeyExist($data["orden_tecnica"])) ? $data["orden_tecnica"] : null);

	return $General;
		
}

function getArrayObjectWifiCertificateFrequency($data,$frequency){
	
	$cont=0;	
	foreach ($data as $key => $value) {
			
		if($value["Habitacion"]["Frecuencia"]==$frequency){
			
			$newObjec[$cont][0]=$value["Habitacion"]["Ubicacion"];
			$newObjec[$cont][1]=number_format($value["Habitacion"]["Prueba_ST"]["subidaN"],0,"",".")." (Kbps)";
			$newObjec[$cont][2]=number_format($value["Habitacion"]["Prueba_ST"]["bajadaN"],0,"",".")." (Kbps)";
			$newObjec[$cont][3]=number_format($value["Habitacion"]["Prueba_ST"]["subidaI"],0,"",".")." (Kbps)";
			$newObjec[$cont][4]=number_format($value["Habitacion"]["Prueba_ST"]["bajadaI"],0,"",".")." (Kbps)";
			$newObjec[$cont][5]=$value["Habitacion"]["Intensidad_Señal"];
			$cont++;
		}
		
	}
	
	return $newObjec;
	
}

function getArrayObjectExtensores($data){

	foreach ($data as $key => $value) {
				
		$newObjec[$key][0]=$value["Tipo"];
		$newObjec[$key][1]=$value["Modelo"];
		$newObjec[$key][2]=$value["MAC"];
		$newObjec[$key][3]=$value["Ubicacion"];
		$newObjec[$key][4]=$value["Ubicacion_Aceptada"];
		$newObjec[$key][5]="True";
		
	}
	
	return $newObjec;
		
}

function getArrayObjectPrueba_Descarga($data){

	$Prueba_Descarga=array();

	array_push($Prueba_Descarga,(getObjectKeyExist($data["SPE"])) ? $data["SPE"] : null);
	array_push($Prueba_Descarga,(getObjectKeyExist($data["AVG"])) ? $data["AVG"] : null);
	array_push($Prueba_Descarga,(getObjectKeyExist($data["TIM"])) ? $data["TIM"] : null);
	array_push($Prueba_Descarga,(getObjectKeyExist($data["SIZ"])) ? $data["SIZ"] : null);
	array_push($Prueba_Descarga,(getObjectKeyExist($data["TLO"])) ? $data["TLO"] : null);
	array_push($Prueba_Descarga,(getObjectKeyExist($data["TCO"])) ? $data["TCO"] : null);
	array_push($Prueba_Descarga,(getObjectKeyExist($data["TPR"])) ? $data["TPR"] : null);
	array_push($Prueba_Descarga,(getObjectKeyExist($data["TST"])) ? $data["TST"] : null);
	array_push($Prueba_Descarga,(getObjectKeyExist($data["URL"])) ? $data["URL"] : null);

	return $Prueba_Descarga;
		
}

function getArrayObjectPrueba_Ping($data){

	$Prueba_Ping=array();

	array_push($Prueba_Ping,(getObjectKeyExist($data["SND"])) ? $data["SND"] : 0);	
	array_push($Prueba_Ping,(getObjectKeyExist($data["REC"])) ? $data["REC"] : 0);
	array_push($Prueba_Ping,(getObjectKeyExist($data["LOS"])) ? $data["LOS"] : 0);	
	array_push($Prueba_Ping,(getObjectKeyExist($data["AVG"])) ? number_format($data["AVG"],0,"",".")." (ms)" : "0 (ms)");
	array_push($Prueba_Ping,(getObjectKeyExist($data["MIN"])) ? number_format($data["MIN"],0,"",".")." (ms)" : "0 (ms)");
	array_push($Prueba_Ping,(getObjectKeyExist($data["MAX"])) ? number_format($data["MAX"],0,"",".")." (ms)" : "0 (ms)");
	array_push($Prueba_Ping,(getObjectKeyExist($data["JIT"])) ? $data["JIT"] : null);	
	array_push($Prueba_Ping,(getObjectKeyExist($data["URL"])) ? $data["URL"] : null);

	return $Prueba_Ping;
		
}

function getArrayObjectSniffer($data){
	
	$Sniffer=array();

	for ($i=0; $i <count($data) ; $i++) { 
		array_push($Sniffer,(getObjectKeyExist($data[$i]["Nombre_Dispositivo"])) ? $data[$i]["Nombre_Dispositivo"] : null);
	}
	
	return $Sniffer;
	
}

function getArrayObjectPrueba_ST($data){

	$Prueba_ST=array();

	array_push($Prueba_ST,(getObjectKeyExist($data["bajadaI"])) ? number_format($data["bajadaI"],0,"",".")." (Kbps)" : null);
	array_push($Prueba_ST,(getObjectKeyExist($data["subidaI"])) ? number_format($data["subidaI"],0,"",".")." (Kbps)" : null);
	array_push($Prueba_ST,(getObjectKeyExist($data["bajadaN"])) ? number_format($data["bajadaN"],0,"",".")." (Kbps)" : null);
	array_push($Prueba_ST,(getObjectKeyExist($data["subidaN"])) ? number_format($data["subidaN"],0,"",".")." (Kbps)" : null);

	return $Prueba_ST;
		
}

function getArrayObjectRedes_Visibles($data){
		
	$Redes_Visibles=array();

	for ($i=0; $i <count($data) ; $i++) { 
		array_push($Redes_Visibles,(getObjectKeyExist($data[$i]["SSID"])) ? $data[$i]["SSID"] : null);
	}
	
	return $Redes_Visibles;
	
}

function getArrayObjectDatos_Prueba($data){

	$Datos_Prueba=array();

	array_push($Datos_Prueba,(getObjectKeyExist($data["SSID"])) ? $data["SSID"] : null);
	array_push($Datos_Prueba,(getObjectKeyExist($data["Norma"])) ? $data["Norma"] : null);
	array_push($Datos_Prueba,(getObjectKeyExist($data["Banda"])) ? $data["Banda"] : null);
	array_push($Datos_Prueba,(getObjectKeyExist($data["origen"])) ? $data["Banda"] : null);

	return $Datos_Prueba;
		
}

function getArrayObjectSize($data,$size){
		
	if(count($data)>$size){
		return $data;
	}else{
		return false;
	}
	
}

function getPropertiesHeaderColorCell(){
	
	$styleHeader = array(
	    'fill' => array(
    	    'type' => PHPExcel_Style_Fill::FILL_SOLID,
        	'startcolor' => array(
            	'rgb' => '3490DF',
        	),
    	)
	);
	
	return $styleHeader;

}

function getPropertiesHeaderText(){
	
	$styleHeaderTableColumn = array(
	    'font'  => array(
	        'bold'  => true,
	        'color' => array('rgb' => 'FFFFFF'),
	        'size'  => 11,
	        'name'  => 'Calibri'
	    ),
	    
	    'alignment' => array(
	        'horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER,
	    ),
	        
	    'fill' => array(
	        'type' => PHPExcel_Style_Fill::FILL_SOLID,
	        'startcolor' => array(
	            'rgb' => '3490DF',
	        ),
	    )
	    
	);
	
	return $styleHeaderTableColumn;

}

function getPropertiesLateralLeftText(){
	
	$styleHeaderTableColumn = array(
	    'font'  => array(
	        'bold'  => true,
	        'color' => array('rgb' => 'FFFFFF'),
	        'size'  => 11,
	        'name'  => 'Calibri'
	    ),
	    
	    'alignment' => array(
	        'horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_LEFT,
	    ),
	        
	    'fill' => array(
	        'type' => PHPExcel_Style_Fill::FILL_SOLID,
	        'startcolor' => array(
	            'rgb' => '000000',
	        ),
	    )
	    
	);
	
	return $styleHeaderTableColumn;

}
/*
function getPropertiesHeaderText(){
	
	$styleHeaderTableColumn = array(
	    'font'  => array(
	        'bold'  => true,
	        'color' => array('rgb' => 'FFFFFF'),
	        'size'  => 11,
	        'name'  => 'Calibri'
	    ),
	    
	    'alignment' => array(
	        'horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER,
	    ),
	        
	    'fill' => array(
	        'type' => PHPExcel_Style_Fill::FILL_SOLID,
	        'startcolor' => array(
	            'rgb' => '3D3D3D',
	        ),
	    )
	    
	);
	
	return $styleHeaderTableColumn;

}
*/

function populateTableHead($objPHPExcel,$sheetIndex,$merge,$range,$title){

	
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->mergeCells($merge);
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->setCellValue($range, $title);
	$objPHPExcel->getActiveSheet()->getStyle($range)->applyFromArray(getPropertiesHeaderText());
	
}

function populateTableCells($objPHPExcel,$generalListCertificateModalTable1Title,$generalListCertificateModalTable1Content,$sheetIndex,$letter1,$letter2){

	
	for($i=3;$i<count($generalListCertificateModalTable1Title)+3;$i++){
    $objPHPExcel->setActiveSheetIndex($sheetIndex)
	            ->setCellValue($letter1.$i, $generalListCertificateModalTable1Title[$i-3])
	            ->setCellValue($letter2.$i, $generalListCertificateModalTable1Content[$i-3]);
	}
	
	return $i;
	
}

function excelGenerateSheetDetailCertificateWifi($data,$objPHPExcel,$sheetIndex,$generalListCertificateSheetWifiTitles,$WifiCertificateFrequency,$frequency,$indexSheet){
	
	$indexArray = array_search($WifiCertificateFrequency,$data);	
	$Prueba_Descarga=getArrayObjectPrueba_Descarga($data[$indexArray]["Habitacion"]["Prueba_Descarga"]);
				
}

function getSearchIndexArray($room,$frequency,$data){
		
	for ($i=0; $i < count($data); $i++) { 
		if (($data[$i]["Habitacion"]["Ubicacion"]==$room)&&($data[$i]["Habitacion"]["Frecuencia"]==$frequency)) {
			return $i;
		}
	}
		
}

function excelCreateNewSheet($objPHPExcel,$nameSheet){

	$objPHPExcel->createSheet();	
	$objPHPExcel->setActiveSheetIndex(1);
	$objPHPExcel->getActiveSheet()->setTitle("hla");
	
}

if(checkExistPostVariable($data)){
	
	$data=getDecodeJsonObject($data);
	
	$id=(getObjectKeyExist($data["_id"])) ? $data["_id"] : null; 
	
	$Extensores=(getObjectKeyExist($data["Extensores"])) ? getArrayObjectExtensores($data["Extensores"]) : false;
	
	$Pruebas_Wifi=(getObjectKeyExist($data["Pruebas_Wifi"])) ? $data["Pruebas_Wifi"] : null;
	
	
	// si el tamaño es mayor a cero entonces hay prueba st, en caso de que no halla se le asignara un valor false
	$Pruebas_ST = getArrayObjectPruebas_ST($data["Pruebas_ST"][0]);	
	$CPE=getArrayObjectCPE($data["CPE"][0]);
	$Locaciones=getArrayObjectLocaciones($data["Locaciones"][0]["habitaciones"]);
	$General=getArrayObjectGeneral($data["General"][0]);
	
	$WifiCertificateFrequency24=getArrayObjectWifiCertificateFrequency($data["Pruebas_Wifi"][0]["habitacion"],2.4);
	$WifiCertificateFrequency5=getArrayObjectWifiCertificateFrequency($data["Pruebas_Wifi"][0]["habitacion"],5);
	
}else{
	echo "no existo";
}

$generalListCertificateTitles=array("Detalle certificado","Speedtest cpe cableado","Habitaciones","Certificados wifi a frecuencia 2.4 Ghz","Certificados wifi a frecuencia 5 Ghz","Especificaciones extensores instalados");
$generalListCertificateSheetWifiTitles=array("Prueba Descarga","Prueba Ping","Dispositivos en la red","Prueba Speedtest","Redes Visibles","Datos Prueba");

switch ($_POST["language"]) {
	case 'en' :
		$generalListCertificateTitles=array(
			"Certificates details",
			"Speedtest cpe wiring",
			"Rooms",
			"Certificates 2.4GHz wireless frequency",
			"Certificates 5GHz wireless frequency",
			"Specifications extenders installed"
		);
		
		$generalListCertificateSheetWifiTitles=array(
			"Test download",
			"Test ping ",
			"Sniffer",
			"Speedtest",
			"Wifi network available",
			"Test data"
		);	
				
		break;
	case 'pt_BR' :
		$generalListCertificateTitles=array(
			"Detalhes certificados",
			"Speedtest cpe com cabeamento",
			"Quartos",
			"certificados 2.4GHz wireless frequência",
			"certificados 5GHz wireless frequência",
			"Especificações extensores instalado"
		);
		
		$generalListCertificateSheetWifiTitles=array(
			"Teste descarga",
			"Teste ping",
			"Sniffer",
			"Teste speedtest",
			"Redes visíveis",
			"Data test"
		);	
				
		break;	

}


//$Extensores = (isset($data["Extensores"][0]) ? $data["Extensores"][0] : null);
$Pruebas_Wifi = (isset($data["Pruebas_Wifi"][0]) ? $data["Pruebas_Wifi"][0] : null);
//$Pruebas_ST = (isset($data["Pruebas_ST"][0]) ? $data["Pruebas_ST"][0] : null);
//$Locaciones = (isset($data["Locaciones"][0]) ? $data["Locaciones"][0] : null);

$general=$data["General"][0];
$general=array($general['idem_servicio'],$general['rut_cliente'],$general['mail_cliente'],$general['id_tecnico'],$general['status'],$general['tipo_OT'],$general['presencia_wifi'],$general['fecha_certificado'],$general['wifi_propia']);

$generalListCertificateModalTable1Title=array("Visit type","Broadcast date","Id technical","Email client","Service plan","Cpe type","Cpe model","Cpe mac","Housing type","Cpe location","Accept location proposal","Observation","Wifi own");

$generalListCertificateModalTable1Title=array(
"Id técnico",
"Tipo visita",
"Tipo vivienda",
"Piso",
"Ubicación CPE",
"Ubicación propuesta aceptada",
"Wifi propio",

"Id cliente",
"Email cliente",
"Nombre receptor",
"Parentesco",

"Plan servicio",
"Tipo CPE",
"Modelo CPE",
"Mac CPE",
"Orden técnico",

"Estado certificado",
"Fecha creación certificado",
"Fecha activación certificado",

"Observación"
);

switch ($_POST["language"]) {
	case 'en' :
						
		$generalListCertificateModalTable1Title=array(
			"Technical id",
			"Visit type",
			"Housing type",
			"Floor",
			"CPE location",
			"Accept location proposal",
			"Wifi own",
			
			"Client id",
			"Email client",
			"Receptor name",
			"Relationship",
			
			"Service plan",
			"CPE type",
			"CPE model",
			"CPE mac",
			"Technical order",
			
			"Certificate state",
			"Created cert. date",
			"Active cert. date",
			
			"Observation"
		);
				
		break;
	case 'pt_BR' :
						
		$generalListCertificateModalTable1Title=array(
			"Id técnico",
			"Tipo visita",
			"Tipo moradia",
			"Andar",
			"Localização CPE",
			"Aceitar proposta localização",
			"Wifi próprio",
			
			"Id cliente",
			"Email cliente",
			"Nome receptor",
			"Parentesco",
			
			"Plano contratado",
			"Tipo CPE",
			"Modelo CPE",
			"MAC CPE",
			"Orden técnica",
			
			"Estado certificado",
			"Data certificação criada",
			"Data certificação ativa",
			
			"Observação"
		);
				
		break;	

}

// traduccion lenguaje
switch ($_POST["language"]) {
	case 'en' :
		
		switch ($General[4]) {
			case 'Creado' :
				$General[4]="Created";
				break;
			case 'Listo' :
				$General[4]="Ready";
				break;
			case 'Pendiente' :
				$General[4]="Pending";
				break;
			case 'Cerrado' :
				$General[4]="Closed";
				break;
			case 'Activo' :
				$General[4]="Active";
				break;			
		}
		
		break;
	
	case 'pt_BR' :

		switch ($General[4]) {
			case 'Creado' :
				$General[4]="Criado";
				break;
			case 'Listo' :
				$General[4]="Pronto";
				break;
			case 'Pendiente' :
				$General[4]="Pendência";
				break;
			case 'Cerrado' :
				$General[4]="Fechado";
				break;
			case 'Activo' :
				$General[4]="Ativo";
				break;			
		}
			
		break;	
		
	default :

		switch ($General[4]) {
			case 'Creado' :
				$General[4]="Created";
				break;
			case 'Listo' :
				$General[4]="Ready";
				break;
			case 'Pendiente' :
				$General[4]="Pending";
				break;
			case 'Cerrado' :
				$General[4]="Closed";
				break;
			case 'Activo' :
				$General[4]="Active";
				break;			
		}
		
		break;
}


$generalListCertificateModalTable1Content=array(
$General[2],
$General[5],
$data["Locaciones"][0]["tipo_vivienda"],
$General[15],
$CPE[4],
$CPE[5],
$General[8],

$General[1],
$General[3],
$General[13],
$General[14],

$General[10],
$CPE[0],
$CPE[1],
$CPE[2],
$General[16],

$General[4],
$General[7],
$General[9],

$CPE[6]
);

$generalListCertificateModalTable2Title=array(
"Ubicación CPE",
"Nacional subida",
"Nacional descarga",
"Internacional subida",
"Internacional descarga");
				
$generalListCertificateModalTable2Content=array(
$CPE[4],
$Pruebas_ST[0],
$Pruebas_ST[1],
$Pruebas_ST[2],
$Pruebas_ST[3]);

$generalListCertificateModalTable4Title=array(
"Ubicación",
"Nacional subida",
"Nacional descarga",
"Internacional Subida",
"Internacional Descarga",
"Señal");

$generalListCertificateModalTable5Title=array(
"Tipo",
"Modelo",
"Mac",
"Ubicación",
"Ubicación aceptada",
"Estado");

$generalListCertificateSheetDetailCertificateWifi1Title=array(
"Nacional Subida",
"Nacional Descarga",
"Internacional Subida",
"Internacional Descarga");

$generalListCertificateSheetDetailCertificateWifi2Table1Title=array(
"Spe",
"Avg",
"Tim",
"Siz",
"Tlo",
"Tco",
"Tpr",
"Tst",
"Url");

$generalListCertificateSheetDetailCertificateWifi3Title=array(
"Send",
"Received",
"Lost",
"Average",
"Min",
"Max",
"Jitter",
"Url");

$generalListCertificateSheetDetailCertificateWifi4Title=array(
"N°",
"Dispositivo");

$generalListCertificateSheetDetailCertificateWifi5Title=array(
"Descarga Internacional",
"Subida Internacional",
"Descarga Nacional",
"Subida Nacional");

$generalListCertificateSheetDetailCertificateWifi6Title=array(
"N°",
"Ssid");

$generalListCertificateSheetDetailCertificateWifi7Title=array(
"Ssid",
"Seguridad",
"Canal",
"Origen prueba");

// traduccion lenguaje
switch ($_POST["language"]) {
	case 'en' :

	$generalListCertificateModalTable2Title=array(
	"CPE location", 
	"National upload", 
	"National download", 
	"International upload", 
	"International download");
	
	$generalListCertificateModalTable4Title=array(
	"Location", 
	"National upload", 
	"National download", 
	"International upload", 
	"International download", 
	"Signal");
	
	$generalListCertificateModalTable5Title=array(
	"Type",
	"Model",
	"Mac",
	"Location",
	"Location accept",
	"State");
	
	$generalListCertificateSheetDetailCertificateWifi1Title=array(
	"National upload", 
	"National download", 
	"International upload", 
	"International download");
	
	$generalListCertificateSheetDetailCertificateWifi2Table1Title=array(
	"Spe",
	"Avg",
	"Tim",
	"Siz",
	"Tlo",
	"Tco",
	"Tpr",
	"Tst",
	"Url");
	
	$generalListCertificateSheetDetailCertificateWifi3Title=array(
	"Send",
	"Received",
	"Lost",
	"Average",
	"Min",
	"Max",
	"Jitter",
	"Url");
	
	$generalListCertificateSheetDetailCertificateWifi4Title=array(
	"N°",
	"Dispositive");
	
	$generalListCertificateSheetDetailCertificateWifi5Title=array(
	"International download",
	"International upload",
	"Descarga Nacional",
	"Subida Nacional");
	
	$generalListCertificateSheetDetailCertificateWifi6Title=array(
	"N°",
	"Ssid");
	
	$generalListCertificateSheetDetailCertificateWifi7Title=array(
	"Ssid",
	"Security",
	"Channel",
	"Test originn");
			
		break;
	
	case 'pt_BR' :

	$generalListCertificateModalTable2Title=array(
	"Localização CPE", 
	"Nac Carr.", 
	"Nac Desc.", 
	"Int Carr.", 
	"Int Desc.");
	
	$generalListCertificateModalTable4Title=array(
	"Localização", 
	"Nac Carr.", 
	"Nac Desc.", 
	"Int Carr.", 
	"Int Desc.", 
	"Sinal");
	
	$generalListCertificateModalTable5Title=array(
	"Tipo",
	"Modelo",
	"Mac",
	"Localização",
	"Aceitar proposta localização",
	"Estado");
	
	$generalListCertificateSheetDetailCertificateWifi1Title=array(
	"Nac Carr.", 
	"Nac Desc.", 
	"Int Carr.", 
	"Int Desc.");
	
	$generalListCertificateSheetDetailCertificateWifi2Table1Title=array(
	"Spe",
	"Avg",
	"Tim",
	"Siz",
	"Tlo",
	"Tco",
	"Tpr",
	"Tst",
	"Url");
	
	$generalListCertificateSheetDetailCertificateWifi3Title=array(
	"Enviados",
	"Recebidos",
	"Perdidos",
	"Média",
	"Mínimo",
	"Máximo",
	"Jitter",
	"Url");
	
	$generalListCertificateSheetDetailCertificateWifi4Title=array(
	"N°",
	"Dispositivo");
	
	$generalListCertificateSheetDetailCertificateWifi5Title=array(
	"Int Desc.",
	"Int Carr.",
	"Nac Desc.",
	"Nac Carr.");
	
	$generalListCertificateSheetDetailCertificateWifi6Title=array(
	"N°",
	"Ssid");
	
	$generalListCertificateSheetDetailCertificateWifi7Title=array(
	"Ssid",
	"Segurança",
	"Canal",
	"Origem dispositivo");
			
		break;	
}

loadExcel();
// Create new PHPExcel object
$objPHPExcel = new PHPExcel();
setDocumentProperties($objPHPExcel);



populateTableHead($objPHPExcel,0,"A2:B2","A2",$generalListCertificateTitles[0]);

populateTableHead($objPHPExcel,0,"D2:D2","D2",$generalListCertificateTitles[2]);
$objPHPExcel->getActiveSheet()->getColumnDimension('D')->setAutoSize(true);

populateTableHead($objPHPExcel,0,"F2:K2","F2",$generalListCertificateTitles[3]);

//populateTableHead($objPHPExcel,"F12:J12","F12",$generalListCertificateTitles[5]);

$i=populateTableCells($objPHPExcel,$generalListCertificateModalTable1Title,$generalListCertificateModalTable1Content,0,"A","B");
populateTableHead($objPHPExcel,0,"A".($i+1).":B".($i+1),"A".($i+1),$generalListCertificateTitles[1]);

//$i=populateTableCells($objPHPExcel,$generalListCertificateModalTable2Title,$generalListCertificateModalTable2Content);
//populateTableHead($objPHPExcel,"A".($i+1).":B".($i+1),"A".($i+1),$generalListCertificateTitles[2]);


$objPHPExcel->getActiveSheet()->getStyle("A3:A22")->applyFromArray(getPropertiesLateralLeftText());
$objPHPExcel->getActiveSheet()->getStyle("A25:A29")->applyFromArray(getPropertiesLateralLeftText());
$objPHPExcel->getActiveSheet()->getColumnDimension('A')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('B')->setAutoSize(true);

/* START-SPEEDTEST CPE CABLEADO */
for($i=25;$i<count($generalListCertificateModalTable2Title)+25;$i++){
	$objPHPExcel->setActiveSheetIndex(0)
	            ->setCellValue('A'.$i, $generalListCertificateModalTable2Title[$i-25])
				->setCellValue('B'.$i, $generalListCertificateModalTable2Content[$i-25]);
}
/* END-SPEEDTEST CPE CABLEADO */

  
/* START-HABITACIONES */
for($i=3;$i<count($Locaciones)+3;$i++){
	$objPHPExcel->setActiveSheetIndex(0)
	            ->setCellValue('D'.$i, $Locaciones[$i-3]);
}

$objPHPExcel->getActiveSheet()->getColumnDimension('D')->setAutoSize(true);
/* END-HABITACIONES */

/* START-CERTIFICATE WIFI FREQUENCY 2.4GHZ */
	$sheetIndex=1;
	$arraySheetName=array();
	$objPHPExcel->setActiveSheetIndex(0)
	            ->setCellValue('F3', $generalListCertificateModalTable4Title[0])
	            ->setCellValue('G3', $generalListCertificateModalTable4Title[1])
				->setCellValue('H3', $generalListCertificateModalTable4Title[2])
				->setCellValue('I3', $generalListCertificateModalTable4Title[3])
				->setCellValue('J3', $generalListCertificateModalTable4Title[4])
				->setCellValue('K3', $generalListCertificateModalTable4Title[5]);

	$objPHPExcel->getActiveSheet()->getStyle("F3:K3")->applyFromArray(getPropertiesLateralLeftText());

	$objPHPExcel->getActiveSheet()->getColumnDimension('F')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('G')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('H')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('I')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('J')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('K')->setAutoSize(true);

for($i=4;$i<count($WifiCertificateFrequency24)+4;$i++){
	
	$objPHPExcel->setActiveSheetIndex(0)
	            ->setCellValue('F'.$i, $WifiCertificateFrequency24[$i-4][0])
	            ->setCellValue('G'.$i, $WifiCertificateFrequency24[$i-4][1])
				->setCellValue('H'.$i, $WifiCertificateFrequency24[$i-4][2])
				->setCellValue('I'.$i, $WifiCertificateFrequency24[$i-4][3])
				->setCellValue('J'.$i, $WifiCertificateFrequency24[$i-4][4])
				->setCellValue('K'.$i, $WifiCertificateFrequency24[$i-4][5]);

	if(strlen($WifiCertificateFrequency24[$i-4][0])<=23){
		$nameSheet=$WifiCertificateFrequency24[$i-4][0]." 2.4Ghz";
		$objPHPExcel->createSheet()->setTitle($nameSheet);	
		array_push($arraySheetName,$nameSheet);
		$indexSheet = (array_search($nameSheet,$arraySheetName))-1;	
	}

	$objPHPExcel->getActiveSheet()->getCell('F'.$i)->getHyperlink()->setUrl("sheet://'".$WifiCertificateFrequency24[$i-4][0]." 2.4Ghz"."'!A1");
	$objPHPExcel->getActiveSheet()->getCell('G'.$i)->getHyperlink()->setUrl("sheet://'".$WifiCertificateFrequency24[$i-4][0]." 2.4Ghz"."'!A1");
	$objPHPExcel->getActiveSheet()->getCell('H'.$i)->getHyperlink()->setUrl("sheet://'".$WifiCertificateFrequency24[$i-4][0]." 2.4Ghz"."'!A1");
	$objPHPExcel->getActiveSheet()->getCell('I'.$i)->getHyperlink()->setUrl("sheet://'".$WifiCertificateFrequency24[$i-4][0]." 2.4Ghz"."'!A1");
	$objPHPExcel->getActiveSheet()->getCell('J'.$i)->getHyperlink()->setUrl("sheet://'".$WifiCertificateFrequency24[$i-4][0]." 2.4Ghz"."'!A1");
	$objPHPExcel->getActiveSheet()->getCell('K'.$i)->getHyperlink()->setUrl("sheet://'".$WifiCertificateFrequency24[$i-4][0]." 2.4Ghz"."'!A1");	
	
//	excelGenerateSheetDetailCertificateWifi($data["Pruebas_Wifi"][0]["habitacion"],$objPHPExcel,$sheetIndex,$generalListCertificateSheetWifiTitles,$WifiCertificateFrequency24[$i-4][0],2.4,$indexSheet);


	$indexArray=getSearchIndexArray($WifiCertificateFrequency24[$i-4][0],2.4,$data["Pruebas_Wifi"][0]["habitacion"]);	

	$Prueba_Descarga=getArrayObjectPrueba_Descarga($data["Pruebas_Wifi"][0]["habitacion"][$indexArray]["Habitacion"]["Prueba_Descarga"]);			
	populateTableHead($objPHPExcel,$sheetIndex,"A2:B2","A2",$generalListCertificateSheetWifiTitles[0]);
	
	for($i1=3;$i1<count($Prueba_Descarga)+3;$i1++){
    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
					->setCellValue("A".$i1, $generalListCertificateSheetDetailCertificateWifi2Table1Title[$i1-3])
	            	->setCellValue("B".$i1, $Prueba_Descarga[$i1-3]);
	}
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("A3:A11")->applyFromArray(getPropertiesLateralLeftText());
	
	$Prueba_Ping=getArrayObjectPrueba_Ping($data["Pruebas_Wifi"][0]["habitacion"][$indexArray]["Habitacion"]["Prueba_Ping"]);			
	populateTableHead($objPHPExcel,$sheetIndex,"D2:E2","D2",$generalListCertificateSheetWifiTitles[1]);
	
	for($i1=3;$i1<count($Prueba_Ping)+3;$i1++){
    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
					->setCellValue("D".$i1, $generalListCertificateSheetDetailCertificateWifi3Title[$i1-3])
	            	->setCellValue("E".$i1, $Prueba_Ping[$i1-3]);
	}
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("D3:D10")->applyFromArray(getPropertiesLateralLeftText());
	
	$Sniffer=getArrayObjectSniffer($data["Pruebas_Wifi"][0]["habitacion"][$indexArray]["Habitacion"]["Sniffer"]);			
	populateTableHead($objPHPExcel,$sheetIndex,"G2:H2","G2",$generalListCertificateSheetWifiTitles[2]);
	
	for($i1=3;$i1<count($Sniffer)+3;$i1++){
    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
					->setCellValue("G".$i1, "Dispositivo")
	            	->setCellValue("H".$i1, $Sniffer[$i1-3]);
	}
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("G3:G".($i1-1))->applyFromArray(getPropertiesLateralLeftText());
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getColumnDimension('G')->setAutoSize(true);
	
	$Prueba_ST=getArrayObjectPrueba_ST($data["Pruebas_Wifi"][0]["habitacion"][$indexArray]["Habitacion"]["Prueba_ST"]);			
	populateTableHead($objPHPExcel,$sheetIndex,"J2:K2","J2",$generalListCertificateSheetWifiTitles[3]);
	
	for($i1=3;$i1<count($Prueba_ST)+3;$i1++){
    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
					->setCellValue("J".$i1, $generalListCertificateSheetDetailCertificateWifi5Title[$i1-3])
	            	->setCellValue("K".$i1, $Prueba_ST[$i1-3]);
	}
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("J3:J6")->applyFromArray(getPropertiesLateralLeftText());
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getColumnDimension('J')->setAutoSize(true);
	
	$Redes_Visibles=getArrayObjectRedes_Visibles($data["Pruebas_Wifi"][0]["habitacion"][$indexArray]["Habitacion"]["Redes_Visibles"]);			
	populateTableHead($objPHPExcel,$sheetIndex,"M2:N2","M2",$generalListCertificateSheetWifiTitles[4]);
	
	for($i1=3;$i1<count($Redes_Visibles)+3;$i1++){
    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
					->setCellValue("M".$i1, "SSID")
	            	->setCellValue("N".$i1, $Redes_Visibles[$i1-3]);
	}
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("M3:M".($i1-1))->applyFromArray(getPropertiesLateralLeftText());
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getColumnDimension('N')->setAutoSize(true);
/*
	$Datos_Prueba=getArrayObjectDatos_Prueba($data["Pruebas_Wifi"][0]["habitacion"][$indexArray]["Habitacion"]);			
	populateTableHead($objPHPExcel,$sheetIndex,"P2:Q2","P2",$generalListCertificateSheetWifiTitles[5]);
	for($i1=3;$i1<count($Datos_Prueba)+3;$i1++){
    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
					->setCellValue("P".$i1, $generalListCertificateSheetDetailCertificateWifi7Title[$i1-3])
	            	->setCellValue("Q".$i1, $Datos_Prueba[$i1-3]);
	}
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("P3:P6")->applyFromArray(getPropertiesLateralLeftText());
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getColumnDimension('P')->setAutoSize(true);
*/	
	$objPHPExcel->getActiveSheet()->getColumnDimension('B')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('E')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('H')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('K')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('M')->setWidth(20);
	$objPHPExcel->getActiveSheet()->getColumnDimension('N')->setWidth(30);
	$objPHPExcel->getActiveSheet()->getColumnDimension('Q')->setAutoSize(true);		

	$sheetIndex++;			
}

/* END-CERTIFICATE WIFI FREQUENCY 2.4GHZ */

/* START-CERTIFICATE WIFI FREQUENCY 5GHZ */

$x=$i+3;

	$objPHPExcel->setActiveSheetIndex(0)
	            ->setCellValue('F'.($i+2), $generalListCertificateModalTable4Title[0])
	            ->setCellValue('G'.($i+2), $generalListCertificateModalTable4Title[1])
				->setCellValue('H'.($i+2), $generalListCertificateModalTable4Title[2])
				->setCellValue('I'.($i+2), $generalListCertificateModalTable4Title[3])
				->setCellValue('J'.($i+2), $generalListCertificateModalTable4Title[4])
				->setCellValue('K'.($i+2), $generalListCertificateModalTable4Title[5]);

$objPHPExcel->getActiveSheet()->getStyle("F".($i+2).":K".($i+2))->applyFromArray(getPropertiesLateralLeftText());

populateTableHead($objPHPExcel,0,"F".($i+1).":K".($i+1),"F".($i+1),$generalListCertificateTitles[4]);

for($i=$x;$i<count($WifiCertificateFrequency5)+$x;$i++){
	
	$objPHPExcel->setActiveSheetIndex(0)
	            ->setCellValue('F'.$i, $WifiCertificateFrequency5[$i-$x][0])
	            ->setCellValue('G'.$i, $WifiCertificateFrequency5[$i-$x][1])
				->setCellValue('H'.$i, $WifiCertificateFrequency5[$i-$x][2])
				->setCellValue('I'.$i, $WifiCertificateFrequency5[$i-$x][3])
				->setCellValue('J'.$i, $WifiCertificateFrequency5[$i-$x][4])
				->setCellValue('K'.$i, $WifiCertificateFrequency5[$i-$x][5]);
	
	if(strlen($WifiCertificateFrequency5[$i-$x][0])<=25){
		$nameSheet=$WifiCertificateFrequency5[$i-$x][0]." 5Ghz";
		$objPHPExcel->createSheet()->setTitle($nameSheet);	
		array_push($arraySheetName,$nameSheet);
		$indexSheet = (array_search($nameSheet,$arraySheetName))-1;		
	}

	$objPHPExcel->getActiveSheet()->getCell('F'.$i)->getHyperlink()->setUrl("sheet://'".$WifiCertificateFrequency5[$i-$x][0]." 5Ghz"."'!A1");
	$objPHPExcel->getActiveSheet()->getCell('G'.$i)->getHyperlink()->setUrl("sheet://'".$WifiCertificateFrequency5[$i-$x][0]." 5Ghz"."'!A1");
	$objPHPExcel->getActiveSheet()->getCell('H'.$i)->getHyperlink()->setUrl("sheet://'".$WifiCertificateFrequency5[$i-$x][0]." 5Ghz"."'!A1");
	$objPHPExcel->getActiveSheet()->getCell('I'.$i)->getHyperlink()->setUrl("sheet://'".$WifiCertificateFrequency5[$i-$x][0]." 5Ghz"."'!A1");
	$objPHPExcel->getActiveSheet()->getCell('J'.$i)->getHyperlink()->setUrl("sheet://'".$WifiCertificateFrequency5[$i-$x][0]." 5Ghz"."'!A1");
	$objPHPExcel->getActiveSheet()->getCell('K'.$i)->getHyperlink()->setUrl("sheet://'".$WifiCertificateFrequency5[$i-$x][0]." 5Ghz"."'!A1");			
	
	$indexArray=getSearchIndexArray($WifiCertificateFrequency5[$i-$x][0],5,$data["Pruebas_Wifi"][0]["habitacion"]);	

	$Prueba_Descarga=getArrayObjectPrueba_Descarga($data["Pruebas_Wifi"][0]["habitacion"][$indexArray]["Habitacion"]["Prueba_Descarga"]);			
	populateTableHead($objPHPExcel,$sheetIndex,"A2:B2","A2",$generalListCertificateSheetWifiTitles[0]);
	
	for($i1=3;$i1<count($Prueba_Descarga)+3;$i1++){
    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
					->setCellValue("A".$i1, $generalListCertificateSheetDetailCertificateWifi2Table1Title[$i1-3])
	            	->setCellValue("B".$i1, $Prueba_Descarga[$i1-3]);
	}
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("A3:A11")->applyFromArray(getPropertiesLateralLeftText());
	
	$Prueba_Ping=getArrayObjectPrueba_Ping($data["Pruebas_Wifi"][0]["habitacion"][$indexArray]["Habitacion"]["Prueba_Ping"]);			
	populateTableHead($objPHPExcel,$sheetIndex,"D2:E2","D2",$generalListCertificateSheetWifiTitles[1]);
	
	for($i1=3;$i1<count($Prueba_Ping)+3;$i1++){
    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
					->setCellValue("D".$i1, $generalListCertificateSheetDetailCertificateWifi3Title[$i1-3])
	            	->setCellValue("E".$i1, $Prueba_Ping[$i1-3]);
	}
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("D3:D10")->applyFromArray(getPropertiesLateralLeftText());
	
	$Sniffer=getArrayObjectSniffer($data["Pruebas_Wifi"][0]["habitacion"][$indexArray]["Habitacion"]["Sniffer"]);			
	populateTableHead($objPHPExcel,$sheetIndex,"G2:H2","G2",$generalListCertificateSheetWifiTitles[2]);
	
	for($i1=3;$i1<count($Sniffer)+3;$i1++){
    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
					->setCellValue("G".$i1, "Dispositivo")
	            	->setCellValue("H".$i1, $Sniffer[$i1-3]);
	}
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("G3:G".($i1-1))->applyFromArray(getPropertiesLateralLeftText());
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getColumnDimension('G')->setAutoSize(true);
	
	$Prueba_ST=getArrayObjectPrueba_ST($data["Pruebas_Wifi"][0]["habitacion"][$indexArray]["Habitacion"]["Prueba_ST"]);			
	populateTableHead($objPHPExcel,$sheetIndex,"J2:K2","J2",$generalListCertificateSheetWifiTitles[3]);
	
	for($i1=3;$i1<count($Prueba_ST)+3;$i1++){
    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
					->setCellValue("J".$i1, $generalListCertificateSheetDetailCertificateWifi5Title[$i1-3])
	            	->setCellValue("K".$i1, $Prueba_ST[$i1-3]);
	}
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("J3:J6")->applyFromArray(getPropertiesLateralLeftText());
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getColumnDimension('J')->setAutoSize(true);
	
	$Redes_Visibles=getArrayObjectRedes_Visibles($data["Pruebas_Wifi"][0]["habitacion"][$indexArray]["Habitacion"]["Redes_Visibles"]);			
	populateTableHead($objPHPExcel,$sheetIndex,"M2:N2","M2",$generalListCertificateSheetWifiTitles[4]);
	
	for($i1=3;$i1<count($Redes_Visibles)+3;$i1++){
    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
					->setCellValue("M".$i1, "SSID")
	            	->setCellValue("N".$i1, $Redes_Visibles[$i1-3]);
	}
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("M3:M".($i1-1))->applyFromArray(getPropertiesLateralLeftText());
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getColumnDimension('N')->setAutoSize(true);
	
	$Datos_Prueba=getArrayObjectDatos_Prueba($data["Pruebas_Wifi"][0]["habitacion"][$indexArray]["Habitacion"]);			
	populateTableHead($objPHPExcel,$sheetIndex,"P2:Q2","P2",$generalListCertificateSheetWifiTitles[5]);
	for($i1=3;$i1<count($Datos_Prueba)+3;$i1++){
    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
					->setCellValue("P".$i1, $generalListCertificateSheetDetailCertificateWifi7Title[$i1-3])
	            	->setCellValue("Q".$i1, $Datos_Prueba[$i1-3]);
	}
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("P3:P6")->applyFromArray(getPropertiesLateralLeftText());
	$objPHPExcel->setActiveSheetIndex($sheetIndex)->getColumnDimension('P')->setAutoSize(true);
	
	$objPHPExcel->getActiveSheet()->getColumnDimension('B')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('E')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('H')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('K')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('M')->setWidth(20);
	$objPHPExcel->getActiveSheet()->getColumnDimension('N')->setWidth(30);
	$objPHPExcel->getActiveSheet()->getColumnDimension('Q')->setAutoSize(true);		
				
	$sheetIndex++;
		
}


/* END-CERTIFICATE WIFI FREQUENCY 5GHZ */

/* START-ESPECIFICACIONES EXTENSORES INSTALADOS */
if($Extensores){

	$x=$i+3;

	$objPHPExcel->setActiveSheetIndex(0)
	            ->setCellValue('F'.($i+2), $generalListCertificateModalTable5Title[0])
	            ->setCellValue('G'.($i+2), $generalListCertificateModalTable5Title[1])
				->setCellValue('H'.($i+2), $generalListCertificateModalTable5Title[2])
				->setCellValue('I'.($i+2), $generalListCertificateModalTable5Title[3])
				->setCellValue('J'.($i+2), $generalListCertificateModalTable5Title[4])
				->setCellValue('K'.($i+2), $generalListCertificateModalTable5Title[5]);

	$objPHPExcel->getActiveSheet()->getStyle("F".($i+2).":K".($i+2))->applyFromArray(getPropertiesLateralLeftText());

	populateTableHead($objPHPExcel,0,"F".($i+1).":K".($i+1),"F".($i+1),$generalListCertificateTitles[5]);


	for($i=$x;$i<count($Extensores)+$x;$i++){
	
		$objPHPExcel->setActiveSheetIndex(0)
	    	        ->setCellValue('F'.$i, $Extensores[$i-$x][0])
	        	    ->setCellValue('G'.$i, $Extensores[$i-$x][1])
					->setCellValue('H'.$i, $Extensores[$i-$x][2])
					->setCellValue('I'.$i, $Extensores[$i-$x][3])
					->setCellValue('J'.$i, $Extensores[$i-$x][4])
					->setCellValue('K'.$i, $Extensores[$i-$x][5]);
		
		if(count($data["Extensores"][$i-$x])==7){
			if(strlen($Extensores[$i-$x][3])<=22 ){
				$frequency=$data["Extensores"][$i-$x]["Pruebas_Wifi"][0]["Habitacion"]["Frecuencia"];
				$nameSheet="Ext ".$Extensores[$i-$x][3]." ".$frequency."Ghz";
				$objPHPExcel->createSheet()->setTitle($nameSheet);	
				array_push($arraySheetName,$nameSheet);
				$indexSheet = (array_search($nameSheet,$arraySheetName))-1;
				
				$objPHPExcel->getActiveSheet()->getCell('F'.$i)->getHyperlink()->setUrl("sheet://'".$nameSheet."'!A1");
				$objPHPExcel->getActiveSheet()->getCell('G'.$i)->getHyperlink()->setUrl("sheet://'".$nameSheet."'!A1");
				$objPHPExcel->getActiveSheet()->getCell('H'.$i)->getHyperlink()->setUrl("sheet://'".$nameSheet."'!A1");
				$objPHPExcel->getActiveSheet()->getCell('I'.$i)->getHyperlink()->setUrl("sheet://'".$nameSheet."'!A1");
				$objPHPExcel->getActiveSheet()->getCell('J'.$i)->getHyperlink()->setUrl("sheet://'".$nameSheet."'!A1");
				$objPHPExcel->getActiveSheet()->getCell('K'.$i)->getHyperlink()->setUrl("sheet://'".$nameSheet."'!A1");			
				
				$Prueba_Descarga=getArrayObjectPrueba_Descarga($data["Extensores"][$i-$x]["Pruebas_Wifi"][0]["Habitacion"]["Prueba_Descarga"]);			
				populateTableHead($objPHPExcel,$sheetIndex,"A2:B2","A2",$generalListCertificateSheetWifiTitles[0]);			
				for($i1=3;$i1<count($Prueba_Descarga)+3;$i1++){
				    $objPHPExcel->setActiveSheetIndex($sheetIndex)
						->setCellValue("A".$i1, $generalListCertificateSheetDetailCertificateWifi2Table1Title[$i1-3])
						->setCellValue("B".$i1, $Prueba_Descarga[$i1-3]);
				}
				$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("A3:A11")->applyFromArray(getPropertiesLateralLeftText());				

				$Prueba_Ping=getArrayObjectPrueba_Ping($data["Extensores"][$i-$x]["Pruebas_Wifi"][0]["Habitacion"]["Prueba_Ping"]);			
				populateTableHead($objPHPExcel,$sheetIndex,"D2:E2","D2",$generalListCertificateSheetWifiTitles[1]);
				
				for($i1=3;$i1<count($Prueba_Ping)+3;$i1++){
			    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
								->setCellValue("D".$i1, $generalListCertificateSheetDetailCertificateWifi3Title[$i1-3])
				            	->setCellValue("E".$i1, $Prueba_Ping[$i1-3]);
				}
				$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("D3:D10")->applyFromArray(getPropertiesLateralLeftText());
			
				$Sniffer=getArrayObjectSniffer($data["Extensores"][$i-$x]["Pruebas_Wifi"][0]["Habitacion"]["Sniffer"]);			
				populateTableHead($objPHPExcel,$sheetIndex,"G2:H2","G2",$generalListCertificateSheetWifiTitles[2]);
				
				for($i1=3;$i1<count($Sniffer)+3;$i1++){
			    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
								->setCellValue("G".$i1, "Dispositivo")
				            	->setCellValue("H".$i1, $Sniffer[$i1-3]);
				}
				$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("G3:G".($i1-1))->applyFromArray(getPropertiesLateralLeftText());
				$objPHPExcel->setActiveSheetIndex($sheetIndex)->getColumnDimension('G')->setAutoSize(true);
				
				$Prueba_ST=getArrayObjectPrueba_ST($data["Extensores"][$i-$x]["Pruebas_Wifi"][0]["Habitacion"]["Prueba_ST"]);			
				populateTableHead($objPHPExcel,$sheetIndex,"J2:K2","J2",$generalListCertificateSheetWifiTitles[3]);
				
				for($i1=3;$i1<count($Prueba_ST)+3;$i1++){
			    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
								->setCellValue("J".$i1, $generalListCertificateSheetDetailCertificateWifi5Title[$i1-3])
				            	->setCellValue("K".$i1, $Prueba_ST[$i1-3]);
				}
				$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("J3:J6")->applyFromArray(getPropertiesLateralLeftText());
				$objPHPExcel->setActiveSheetIndex($sheetIndex)->getColumnDimension('J')->setAutoSize(true);
				
				$Redes_Visibles=getArrayObjectRedes_Visibles($data["Extensores"][$i-$x]["Pruebas_Wifi"][0]["Habitacion"]["Redes_Visibles"]);			
				populateTableHead($objPHPExcel,$sheetIndex,"M2:N2","M2",$generalListCertificateSheetWifiTitles[4]);
				
				for($i1=3;$i1<count($Redes_Visibles)+3;$i1++){
			    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
								->setCellValue("M".$i1, "SSID")
				            	->setCellValue("N".$i1, $Redes_Visibles[$i1-3]);
				}
				$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("M3:M".($i1-1))->applyFromArray(getPropertiesLateralLeftText());
				$objPHPExcel->setActiveSheetIndex($sheetIndex)->getColumnDimension('N')->setAutoSize(true);
				
				$Datos_Prueba=getArrayObjectDatos_Prueba($data["Extensores"][$i-$x]["Pruebas_Wifi"][0]["Habitacion"]);			
				populateTableHead($objPHPExcel,$sheetIndex,"P2:Q2","P2",$generalListCertificateSheetWifiTitles[5]);
				for($i1=3;$i1<count($Datos_Prueba)+3;$i1++){
			    	$objPHPExcel->setActiveSheetIndex($sheetIndex)
								->setCellValue("P".$i1, $generalListCertificateSheetDetailCertificateWifi7Title[$i1-3])
				            	->setCellValue("Q".$i1, $Datos_Prueba[$i1-3]);
				}
				$objPHPExcel->setActiveSheetIndex($sheetIndex)->getStyle("P3:P6")->applyFromArray(getPropertiesLateralLeftText());
				$objPHPExcel->setActiveSheetIndex($sheetIndex)->getColumnDimension('P')->setAutoSize(true);	
				
				$objPHPExcel->getActiveSheet()->getColumnDimension('B')->setAutoSize(true);
				$objPHPExcel->getActiveSheet()->getColumnDimension('E')->setAutoSize(true);
				$objPHPExcel->getActiveSheet()->getColumnDimension('H')->setAutoSize(true);
				$objPHPExcel->getActiveSheet()->getColumnDimension('K')->setAutoSize(true);
				$objPHPExcel->getActiveSheet()->getColumnDimension('M')->setWidth(20);
				$objPHPExcel->getActiveSheet()->getColumnDimension('N')->setWidth(30);
				$objPHPExcel->getActiveSheet()->getColumnDimension('Q')->setAutoSize(true);		
				
				
			}
			$sheetIndex++;
		}else{
//			echo "no tengo prueba wifi";
		}				
//		$sheetIndex++;
	}

}else{
	$objPHPExcel->setActiveSheetIndex(0)
	            ->setCellValue('F'.($i+2), $generalListCertificateModalTable5Title[0])
	            ->setCellValue('G'.($i+2), $generalListCertificateModalTable5Title[1])
				->setCellValue('H'.($i+2), $generalListCertificateModalTable5Title[2])
				->setCellValue('I'.($i+2), $generalListCertificateModalTable5Title[3])
				->setCellValue('J'.($i+2), $generalListCertificateModalTable5Title[4])
				->setCellValue('K'.($i+2), $generalListCertificateModalTable5Title[5]);

	$objPHPExcel->getActiveSheet()->getStyle("F".($i+2).":K".($i+2))->applyFromArray(getPropertiesLateralLeftText());

	populateTableHead($objPHPExcel,0,"F".($i+1).":K".($i+1),"F".($i+1),$generalListCertificateTitles[5]);
	$objPHPExcel->setActiveSheetIndex(0)->mergeCells("F".($i+3).":K".($i+3));
	
	switch ($_POST["language"]) {
			case 'es' :
				$generalListCertificateMessageNotExtender = "Por el momento no hay instalación de algún extensor en este certificado";
				break;	
			case 'en' :
				$generalListCertificateMessageNotExtender = "At the moment there is no installation of any extender in this certificate";
				break;
			case 'pt_BR' :
				$generalListCertificateMessageNotExtender = "No momento não há nenhuma instalação de qualquer extender neste certificado";
				break;
			default:
				$generalListCertificateMessageNotExtender = "At the moment there is no installation of any extender in this certificate";
				break;		
		}
	$objPHPExcel->setActiveSheetIndex(0)->setCellValue('F'.($i+3), $generalListCertificateMessageNotExtender);
}
/* END-ESPECIFICACIONES EXTENSORES INSTALADOS  */

$objPHPExcel->getActiveSheet()->getColumnDimension('F')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('G')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('H')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('I')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('J')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('K')->setAutoSize(true);

//excelCreateNewSheet($objPHPExcel,"hola");
//$objPHPExcel->setActiveSheetIndex(1)->setCellValue('A1', ($i-3));

  


//$objPHPExcel->setActiveSheetIndex(0);
//$objPHPExcel->getActiveSheet()->setTitle('Results');






//            ->setCellValue('B2', $headerTableColumn2);

//$objPHPExcel->getActiveSheet()->getStyle('A2:B2')->applyFromArray(getPropertiesHeaderText());

$data=$General;
$generalListCertificateModalTable1Title;
/*
$objPHPExcel->setActiveSheetIndex(0)->mergeCells("A".$i.":G".$i);
$objPHPExcel->getActiveSheet()->getStyle("A".$i)->applyFromArray(getPropertiesHeaderText());
$objPHPExcel->getActiveSheet()->getStyle("A".$i)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
*/
$objPHPExcel->setActiveSheetIndex(0);


$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');

$response = array(
	'success' => true,
	'url' => saveExcelToLocalFile($objWriter)
 );
 
echo json_encode($response);

exit();  
