<?php

function generateAndCloseExcel($objPHPExcel) {

	$objPHPExcel -> setActiveSheetIndex(0);

	$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
	$data = array('status' => true, 'code' => 200, 'url' => saveExcelToLocalFile($objWriter));
	echo json_encode($data);
	exit();

}

function getPostValues($data) {

	$data = json_decode($data, true);
	return $data;

}

function loadExcel() {

	$str_json = file_get_contents('php://input');

	error_reporting(E_ALL);
	ini_set('display_errors', TRUE);
	ini_set('display_startup_errors', TRUE);
	date_default_timezone_set("Chile/Continental");
	if (PHP_SAPI == 'cli')
		die('This example should only be run from a Web Browser');

}

function saveExcelToLocalFile($objWriter) {
	// make sure you have permission to write to directory
	$filePath = '../tmp/detailCertificateRange.xlsx';
	$objWriter -> save($filePath);
	return $filePath;
}

function setDocumentProperties($objPHPExcel) {
	$objPHPExcel -> getProperties() -> setCreator("Baking Software") -> setLastModifiedBy("Baking Software") -> setTitle("PHPExcel Test Document") -> setSubject("PHPExcel Test Document") -> setDescription("Test document for PHPExcel, generated using PHP classes.") -> setKeywords("office PHPExcel php") -> setCategory("Test result file");
}

function setOrientationSizeScalingPage($objPHPExcel) {

	// orientacion horizontal
	// hoja a4
	// hoja carta chile 11 × 8½ pulgadas o 21,59 × 27,94 cm
	// ajustar a una pagina de ancho
	// ajustar a nada de alto

	$objPHPExcel -> getActiveSheet() -> getPageSetup() -> setOrientation(PHPExcel_Worksheet_PageSetup::ORIENTATION_LANDSCAPE);
	$objPHPExcel -> getActiveSheet() -> getPageSetup() -> setPaperSize(PHPExcel_Worksheet_PageSetup::PAPERSIZE_A4);
	$objPHPExcel -> getActiveSheet() -> getPageSetup() -> setFitToPage(true);
	$objPHPExcel -> getActiveSheet() -> getPageSetup() -> setFitToWidth(1);
	$objPHPExcel -> getActiveSheet() -> getPageSetup() -> setFitToHeight(0);
}

function getDecodeJsonObject($data) {

	$data = json_decode($data, true);
	return $data;

}

function checkExistPostVariable($postVariable) {

	if (isset($postVariable)) {
		return true;
	} else {
		return false;
	}

}

function loadJsonFromWebService() {

	$url = "http://devel1.baking.cl/techwizard/stats/getCertificados/";
	$str = file_get_contents($url);
	$url = json_decode($str, true);

}

function generateCertificateGeneralData($objPHPExcel, $columnStart, $rowStart, $generalListCertificateModalTable1Content,$generalListCertificateModalTable1Title) {

	global $language;

	// cambia a numero
	$position_start_x = PHPExcel_Cell::columnIndexFromString($columnStart);

	for ($x = 0; $x < count($generalListCertificateModalTable1Content); $x++) {

		$letter = $position_start_x + $x-1;
		// cambia a letra pero desfazado en 1
		$letter = PHPExcel_Cell::stringFromColumnIndex($letter); 
		
		$objPHPExcel -> setActiveSheetIndex(0) -> 
			setCellValue($letter . $rowStart, $generalListCertificateModalTable1Title[$language][$x]) -> 	
			setCellValue($letter . ($rowStart + 1), $generalListCertificateModalTable1Content[$x]);

	}
	
	$position_start_x = PHPExcel_Cell::columnIndexFromString($letter);
	$position_start_x = $position_start_x+1;
	$position_start_x = PHPExcel_Cell::stringFromColumnIndex($position_start_x); 
		
	return $position_start_x;

}

function populateTableCellsWithoutSubtitle($objPHPExcel, $columnStart, $rowStart, $generalListCertificateModalTable1Content,$generalListCertificateModalTable1Title) {

	global $language;

	// cambia a numero
	$position_start_x = PHPExcel_Cell::columnIndexFromString($columnStart);


	for ($x = 0; $x < count($generalListCertificateModalTable1Content); $x++) {

		$letter = $position_start_x + $x -1;
		
		// cambia a letra pero desfazado en 1
		$letter = PHPExcel_Cell::stringFromColumnIndex($letter); 
		
		$objPHPExcel -> setActiveSheetIndex(0) -> 
			setCellValue($letter . $rowStart, $generalListCertificateModalTable1Title) ->
			setCellValue($letter . ($rowStart+1), $generalListCertificateModalTable1Content[$x]);		

	}
	
	$position_start_x = PHPExcel_Cell::columnIndexFromString($letter);
	$position_start_x = $position_start_x+1;
	$position_start_x = PHPExcel_Cell::stringFromColumnIndex($position_start_x); 
		
	return $position_start_x;

}

function getArrayObjectLocaciones($data) {

	$Locaciones = array();

	foreach ($data as $key => $value) {
		array_push($Locaciones, $value);
	}

	return $Locaciones;

}

function getArrayObjectInformationTest($data) {

	$InformationTest = array();

	if (isset($data["Habitacion"]["SSID"]))
		$InformationTest[0] = $data["Habitacion"]["SSID"];
	else
		$InformationTest[0] = null;

	if (isset($data["Habitacion"]["Norma"]))
		$InformationTest[1] = $data["Habitacion"]["Norma"];
	else
		$InformationTest[1] = null;

	if (isset($data["Habitacion"]["Banda"]))
		$InformationTest[2] = $data["Habitacion"]["Banda"];
	else
		$InformationTest[2] = null;

	if (isset($data["Habitacion"]["origen"]))
		$InformationTest[3] = $data["Habitacion"]["origen"];
	else
		$InformationTest[3] = null;

	return $InformationTest;

}

function getArrayObjectPrueba_Descarga($data) {

	$Prueba_Descarga = array();

	if (isset($data["Habitacion"]["Prueba_Descarga"]["SPE"]))
		$Prueba_Descarga[0] = $data["Habitacion"]["Prueba_Descarga"]["SPE"];
	else
		$Prueba_Descarga[0] = null;

	if (isset($data["Habitacion"]["Prueba_Descarga"]["AVG"]))
		$Prueba_Descarga[1] = $data["Habitacion"]["Prueba_Descarga"]["AVG"];
	else
		$Prueba_Descarga[1] = null;

	if (isset($data["Habitacion"]["Prueba_Descarga"]["TIM"]))
		$Prueba_Descarga[2] = $data["Habitacion"]["Prueba_Descarga"]["TIM"];
	else
		$Prueba_Descarga[2] = null;

	if (isset($data["Habitacion"]["Prueba_Descarga"]["SIZ"]))
		$Prueba_Descarga[3] = $data["Habitacion"]["Prueba_Descarga"]["SIZ"];
	else
		$Prueba_Descarga[3] = null;

	if (isset($data["Habitacion"]["Prueba_Descarga"]["TLO"]))
		$Prueba_Descarga[4] = $data["Habitacion"]["Prueba_Descarga"]["TLO"];
	else
		$Prueba_Descarga[4] = null;

	if (isset($data["Habitacion"]["Prueba_Descarga"]["TCO"]))
		$Prueba_Descarga[5] = $data["Habitacion"]["Prueba_Descarga"]["TCO"];
	else
		$Prueba_Descarga[5] = null;

	if (isset($data["Habitacion"]["Prueba_Descarga"]["TPR"]))
		$Prueba_Descarga[6] = $data["Habitacion"]["Prueba_Descarga"]["TPR"];
	else
		$Prueba_Descarga[6] = null;

	if (isset($data["Habitacion"]["Prueba_Descarga"]["TST"]))
		$Prueba_Descarga[7] = $data["Habitacion"]["Prueba_Descarga"]["TST"];
	else
		$Prueba_Descarga[7] = null;

	if (isset($data["Habitacion"]["Prueba_Descarga"]["URL"]))
		$Prueba_Descarga[8] = $data["Habitacion"]["Prueba_Descarga"]["URL"];
	else
		$Prueba_Descarga[8] = null;

	return $Prueba_Descarga;

}

function getArrayObjectPrueba_Ping($data) {

	$Prueba_Ping = array();

	if (isset($data["Habitacion"]["Prueba_Ping"]["AVG"]))
		$Prueba_Ping[0] = $data["Habitacion"]["Prueba_Ping"]["AVG"];
	else
		$Prueba_Ping[0] = null;

	if (isset($data["Habitacion"]["Prueba_Ping"]["MAX"]))
		$Prueba_Ping[1] = $data["Habitacion"]["Prueba_Ping"]["MAX"];
	else
		$Prueba_Ping[1] = null;

	if (isset($data["Habitacion"]["Prueba_Ping"]["MIN"]))
		$Prueba_Ping[2] = $data["Habitacion"]["Prueba_Ping"]["MIN"];
	else
		$Prueba_Ping[2] = null;

	if (isset($data["Habitacion"]["Prueba_Ping"]["JIT"]))
		$Prueba_Ping[3] = $data["Habitacion"]["Prueba_Ping"]["JIT"];
	else
		$Prueba_Ping[3] = null;

	if (isset($data["Habitacion"]["Prueba_Ping"]["LOS"]))
		$Prueba_Ping[4] = $data["Habitacion"]["Prueba_Ping"]["LOS"];
	else
		$Prueba_Ping[4] = null;

	if (isset($data["Habitacion"]["Prueba_Ping"]["REC"]))
		$Prueba_Ping[5] = $data["Habitacion"]["Prueba_Ping"]["REC"];
	else
		$Prueba_Ping[5] = null;

	if (isset($data["Habitacion"]["Prueba_Ping"]["SND"]))
		$Prueba_Ping[6] = $data["Habitacion"]["Prueba_Ping"]["SND"];
	else
		$Prueba_Ping[6] = null;

	if (isset($data["Habitacion"]["Prueba_Ping"]["URL"]))
		$Prueba_Ping[7] = $data["Habitacion"]["Prueba_Ping"]["URL"];
	else
		$Prueba_Ping[7] = null;

	return $Prueba_Ping;

}

function getArrayObjectSniffer($data) {

	$Sniffer = array();

	for ($i = 0; $i < count($data["Habitacion"]["Sniffer"]); $i++) {
		array_push($Sniffer, $data["Habitacion"]["Sniffer"][$i]["Nombre_Dispositivo"]);
	}

	return $Sniffer;

}

function getArrayObjectPrueba_ST($data) {

	$Prueba_ST = array();

	if (isset($data["Habitacion"]["Prueba_ST"]["bajadaI"]))
		$Prueba_ST[0] = $data["Habitacion"]["Prueba_ST"]["bajadaI"];
	else
		$Prueba_ST[0] = null;

	if (isset($data["Habitacion"]["Prueba_ST"]["subidaI"]))
		$Prueba_ST[1] = $data["Habitacion"]["Prueba_ST"]["subidaI"];
	else
		$Prueba_ST[1] = null;

	if (isset($data["Habitacion"]["Prueba_ST"]["bajadaN"]))
		$Prueba_ST[2] = $data["Habitacion"]["Prueba_ST"]["bajadaN"];
	else
		$Prueba_ST[2] = null;

	if (isset($data["Habitacion"]["Prueba_ST"]["subidaN"]))
		$Prueba_ST[3] = $data["Habitacion"]["Prueba_ST"]["subidaN"];
	else
		$Prueba_ST[3] = null;

	return $Prueba_ST;

}

function getArrayObjectRedes_Visibles($data) {

	$Redes_Visibles = array();

	if (isset($data["Habitacion"]["Redes_Visibles"])) {
		for ($i = 0; $i < count($data["Habitacion"]["Redes_Visibles"]); $i++) {
			array_push($Redes_Visibles, $data["Habitacion"]["Redes_Visibles"][$i]["SSID"]);
		}
	} else {
		array_push($Redes_Visibles, "");
	}

	return $Redes_Visibles;

}

function getArrayObjectSizeCompare($data) {

	if (count($data) > $size) {
		return $data;
	} else {
		return false;
	}

}

function getArrayObjectSize($data) {

	return count($data);

}

function getPropertiesHeaderColorCell() {

	$styleHeader = array('fill' => array('type' => PHPExcel_Style_Fill::FILL_SOLID, 'startcolor' => array('rgb' => '3490DF', ), ));

	return $styleHeader;

}

function getPropertiesHeaderText() {

	$styleHeaderTableColumn = array('font' => array('bold' => true, 'color' => array('rgb' => 'FFFFFF'), 'size' => 11, 'name' => 'Calibri'), 'alignment' => array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER, ), 'fill' => array('type' => PHPExcel_Style_Fill::FILL_SOLID, 'startcolor' => array('rgb' => '3490DF', ), ));

	return $styleHeaderTableColumn;

}

function getPropertiesHeaderTextTitle() {

	$styleHeaderTableColumn = array('font' => array('bold' => true, 'color' => array('rgb' => 'FFFFFF'), 'size' => 11, 'name' => 'Calibri'), 'alignment' => array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER, ), 'fill' => array('type' => PHPExcel_Style_Fill::FILL_SOLID, 'startcolor' => array('rgb' => 'FA6800', ), ));

	return $styleHeaderTableColumn;

}

function getPropertiesLateralLeftText() {

	$styleHeaderTableColumn = array('font' => array('bold' => true, 'color' => array('rgb' => 'FFFFFF'), 'size' => 11, 'name' => 'Calibri'), 'alignment' => array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_LEFT, ), 'fill' => array('type' => PHPExcel_Style_Fill::FILL_SOLID, 'startcolor' => array('rgb' => '000000', ), ));

	return $styleHeaderTableColumn;

}

function populateTableHeadByCellAndColumn($objPHPExcel, $sheetIndex, $merge, $range, $title) {

	$objPHPExcel -> setActiveSheetIndex($sheetIndex) -> mergeCells($merge);
	$objPHPExcel -> setActiveSheetIndex($sheetIndex) -> setCellValue($range, $title);
	$objPHPExcel -> getActiveSheet() -> getStyle($range) -> applyFromArray(getPropertiesHeaderText());

}

function populateTableHead($objPHPExcel, $sheetIndex, $merge, $range, $title) {

	$objPHPExcel -> setActiveSheetIndex($sheetIndex) -> mergeCells($merge);
	$objPHPExcel -> setActiveSheetIndex($sheetIndex) -> setCellValue($range, $title);
	$objPHPExcel -> getActiveSheet() -> getStyle($range) -> applyFromArray(getPropertiesHeaderText());

}

function populateTableCells($objPHPExcel, $index, $generalListCertificateModalTable1Title, $generalListCertificateModalTable1Content, $sheetIndex, $letter1, $letter2) {

	for ($i = $index; $i < count($generalListCertificateModalTable1Title) + $index; $i++) {
		$objPHPExcel -> setActiveSheetIndex($sheetIndex) -> 
			setCellValue($letter1 . $i, $generalListCertificateModalTable1Title[$i - $index]) -> 
			setCellValue($letter2 . $i, $generalListCertificateModalTable1Content[$i - $index]);
	}

	return $i;

}
/*
function populateTableCellsWithoutSubtitle($objPHPExcel, $index, $generalListCertificateModalTable1Title, $generalListCertificateModalTable1Content, $sheetIndex, $letter1, $letter2) {

	for ($i = $index; $i < count($generalListCertificateModalTable1Content) + $index; $i++) {
		$objPHPExcel -> setActiveSheetIndex($sheetIndex) -> 
			setCellValue($letter1 . $i, $generalListCertificateModalTable1Title) -> 
			setCellValue($letter2 . $i, $generalListCertificateModalTable1Content[$i - $index]);
	}

	return $i;

}
*/

function excelGenerateSheetDetailCertificateWifi($data, $objPHPExcel, $sheetIndex, $generalListCertificateSheetWifiTitles, $WifiCertificateFrequency, $frequency, $indexSheet) {

	$indexArray = array_search($WifiCertificateFrequency, $data);

	$Prueba_Descarga = getArrayObjectPrueba_Descarga($data[$indexArray]["Habitacion"]["Prueba_Descarga"]);

}

function getSearchIndexArray($room, $frequency, $data) {

	for ($i = 0; $i < count($data); $i++) {
		if (($data[$i]["Habitacion"]["Ubicacion"] == $room) && ($data[$i]["Habitacion"]["Frecuencia"] == $frequency)) {
			return $i;
		}
	}

}

function getArrayObjectGeneral($data, $language) {

	$General = array();

	if (isset($data["idem_servicio"]))/* 0 */
		array_push($General, $data["idem_servicio"]);
	else
		array_push($General, null);

	if (isset($data["rut_cliente"]))/* 1 */
		array_push($General, $data["rut_cliente"]);
	else
		array_push($General, null);

	if (isset($data["id_tecnico"]))/* 2 */
		array_push($General, $data["id_tecnico"]);
	else
		array_push($General, null);

	if (isset($data["mail_cliente"]))/* 3 */
		array_push($General, $data["mail_cliente"]);
	else
		array_push($General, null);

	if (isset($data["status"]))/* 4 */
		array_push($General, $data["status"]);
	else
		array_push($General, null);

	if (isset($data["tipo_OT"]))/* 5 */
		array_push($General, $data["tipo_OT"]);
	else
		array_push($General, null);

	if (isset($data["presencia_wifi"]))/* 6 */
		array_push($General, $data["presencia_wifi"]);
	else
		array_push($General, null);

	if (isset($data["fecha_certificado"]))/* 7 */
		array_push($General, $data["fecha_certificado"]);
	else
		array_push($General, null);

	if (isset($data["wifi_propia"]))/* 8 */
		array_push($General, $data["wifi_propia"]);
	else
		array_push($General, null);

	if (isset($data["fecha_activo"]))/* 9 */
		array_push($General, $data["fecha_activo"]);
	else
		array_push($General, null);

	if (isset($data["plan"]["nombre"]))/* 10 */
		array_push($General, $data["plan"]["nombre"]);
	else
		array_push($General, null);

	if (isset($data["plan"]["subida"]))/* 11 */
		array_push($General, $data["plan"]["subida"]);
	else
		array_push($General, null);

	if (isset($data["plan"]["bajada"]))/* 12 */
		array_push($General, $data["plan"]["bajada"]);
	else
		array_push($General, null);

	if (isset($data["nombre_receptor"]))/* 13 */
		array_push($General, $data["nombre_receptor"]);
	else
		array_push($General, null);

	if (isset($data["parentesco"]))/* 14 */
		array_push($General, $data["parentesco"]);
	else
		array_push($General, null);

	if (isset($data["pisos"]))/* 15 */
		array_push($General, $data["pisos"]);
	else
		array_push($General, null);

	if (isset($data["orden_tecnica"]))/* 16 */
		array_push($General, $data["orden_tecnica"]);
	else
		array_push($General, null);

	return $General;

}

function getArrayObjectCPE($data, $language) {

	$CPE = array();

	if (isset($data["tipo"]))/* 0 */
		array_push($CPE, $data["tipo"]);
	else
		array_push($CPE, null);

	if (isset($data["modelo"]))/* 1 */
		array_push($CPE, $data["modelo"]);
	else
		array_push($CPE, null);

	if (isset($data["mac"]))/* 2 */
		array_push($CPE, $data["mac"]);
	else
		array_push($CPE, null);

	if (isset($data["frecuencia"]))/* 3 */
		array_push($CPE, $data["frecuencia"]);
	else
		array_push($CPE, null);

	if (isset($data["ubicacion"]))/* 4 */
		array_push($CPE, $data["ubicacion"]);
	else
		array_push($CPE, null);

	if (isset($data["ubicacion_aceptada"]))/* 5 */
		array_push($CPE, $data["ubicacion_aceptada"]);
	else
		array_push($CPE, null);

	if (isset($data["observacion"]))/* 6 */
		array_push($CPE, $data["observacion"]);
	else
		array_push($CPE, null);

	return $CPE;
}

function getArrayObjectPruebas_ST($data, $language) {

	$Pruebas_ST = array();

	if (isset($data["nacional"]["subida"]))
		array_push($Pruebas_ST, $data["nacional"]["subida"]);
	else
		array_push($Pruebas_ST, null);

	if (isset($data["nacional"]["bajada"]))
		array_push($Pruebas_ST, $data["nacional"]["bajada"]);
	else
		array_push($Pruebas_ST, null);

	if (isset($data["internacional"]["subida"]))
		array_push($Pruebas_ST, $data["internacional"]["subida"]);
	else
		array_push($Pruebas_ST, null);

	if (isset($data["internacional"]["bajada"]))
		array_push($Pruebas_ST, $data["internacional"]["bajada"]);
	else
		array_push($Pruebas_ST, null);

	return $Pruebas_ST;

}

function getArrayObjectWifiCertificateFrequency($data, $frequency) {

	$newObjec = array();

	if (isset($data["Habitacion"]["Ubicacion"]))
		$newObjec[0] = $data["Habitacion"]["Ubicacion"];
	else
		$newObjec[0] = null;

	if (isset($data["Habitacion"]["Prueba_ST"]["subidaN"]))
		$newObjec[1] = $data["Habitacion"]["Prueba_ST"]["subidaN"];
	else
		$newObjec[1] = null;

	if (isset($data["Habitacion"]["Prueba_ST"]["bajadaN"]))
		$newObjec[2] = $data["Habitacion"]["Prueba_ST"]["bajadaN"];
	else
		$newObjec[2] = null;

	if (isset($data["Habitacion"]["Prueba_ST"]["subidaI"]))
		$newObjec[3] = $data["Habitacion"]["Prueba_ST"]["subidaI"];
	else
		$newObjec[3] = null;

	if (isset($data["Habitacion"]["Prueba_ST"]["bajadaI"]))
		$newObjec[4] = $data["Habitacion"]["Prueba_ST"]["bajadaI"];
	else
		$newObjec[4] = null;

	if (isset($data["Habitacion"]["Intensidad_Señal"]))
		$newObjec[5] = $data["Habitacion"]["Intensidad_Señal"];
	else
		$newObjec[5] = null;

	return $newObjec;

}

function getArrayObjectExtensores($data) {

	if (isset($data["Tipo"]))
		$newObjec[0] = $data["Tipo"];
	else
		$newObjec[0] = null;

	if (isset($data["Modelo"]))
		$newObjec[1] = $data["Modelo"];
	else
		$newObjec[1] = null;

	if (isset($data["MAC"]))
		$newObjec[2] = $data["MAC"];
	else
		$newObjec[2] = null;

	if (isset($data["Ubicacion"]))
		$newObjec[3] = $data["Ubicacion"];
	else
		$newObjec[3] = null;

	if (isset($data["Ubicacion_Aceptada"]))
		$newObjec[4] = $data["Ubicacion_Aceptada"];
	else
		$newObjec[4] = null;
		
	if (isset($data["Observacion"]))
		$newObjec[5] = $data["Observacion"];
	else
		$newObjec[5] = null;	

	return $newObjec;

}

function excelCreateNewSheet($objPHPExcel, $nameSheet) {

	$objPHPExcel -> createSheet();
	$objPHPExcel -> setActiveSheetIndex(1);
	$objPHPExcel -> getActiveSheet() -> setTitle("hla");

}

function sizeQuantyCertificatesByFrequency($data,$frecuencia){
	
	$contadorHabitaciones=0;
	
	$valor=$data;
//	foreach ($data as $index => $valor) {
			
		//  certificados wifi 
		if (count($valor["Pruebas_Wifi"]) > 0) {
				
			foreach ($valor["Pruebas_Wifi"][0]["habitacion"] as $index => $value) {
				
				$frequency = $value["Habitacion"]["Frecuencia"];
				
				if($frequency==$frecuencia){
					$contadorHabitaciones++;
				}//if	
				
					
			}//foreach
				
		}//if
			
		// extensores 
		if ((isset($valor["Extensores"]))&&(count($valor["Extensores"]) > 0)) {
				
			foreach ($valor["Extensores"] as $indice => $val) {
					
				$Extensores = getArrayObjectExtensores($val);
	
				if ((isset($val["Pruebas_Wifi"]))&&(count($val["Pruebas_Wifi"])>0)){
					
					foreach ($val["Pruebas_Wifi"] as $ind => $valeur) {
						
						$frequency = $valeur["Habitacion"]["Frecuencia"];
						if($frequency==$frecuencia){
							$contadorHabitaciones++;
						}//if	
						
					}//foreach
								
				}//if
							
			}//foreach
				
		}//if	

//	}//foreach
	
	return $contadorHabitaciones;
	
}

?>