<?php

try {

	require_once '../lib/phpexcel/Classes/PHPExcel.php';
	include 'language.php';
	include 'functions.php';

	if (!isset($_POST["data"])) {
		header('Location: ../errortw/');
	} else {

		$data = $_POST["data"];
		$data = getPostValues($data);
		$language = $_POST["language"];

		loadExcel();
		$objPHPExcel = new PHPExcel();
		setDocumentProperties($objPHPExcel);

		//START construir contenido del archivo
		setOrientationSizeScalingPage($objPHPExcel);
		
		foreach ($data as $index => $valor) {
			
			// ecuacion para calcular el salto de números de filas  
			$rowContent=((($index+1)*3)-1);
			
			// ecuacion para determinar el número de fila correspondiente al titulo
			$rowTitle=$rowContent-1;
			
			$General = getArrayObjectGeneral($valor["General"][0], $language);
			$CPE = getArrayObjectCPE($valor["CPE"][0], $language);
			$Locaciones = getArrayObjectLocaciones($valor["Locaciones"][0]["habitaciones"],$language);
			$Pruebas_ST = (count($valor["Pruebas_ST"])>0) ? getArrayObjectPruebas_ST($valor["Pruebas_ST"][0],$language) : "";
			
			$generalListCertificateModalTable1Content = array(
				$visitType[$General[5]][$language],  /* 0 */
				$General[7], /* 1 */
				$General[2], /* 2 */
				$General[3], /* 3 */
				$General[10], /* 4 */
				$CPE[0], /* 5 */
				$CPE[1], /* 6 */
				$CPE[2], /* 7 */
				//$housingType[$data[0]["Locaciones"][0]["tipo_vivienda"]][$language], /* 8 */
				$housingType[$valor["Locaciones"][0]["tipo_vivienda"]][$language], /* 8 */	
				$CPE[4], /* 9 */
				$wifiExistAndOwnWifi[$CPE[5]][$language], /* 10 */
				$CPE[6], /* 11 */
				$wifiExistAndOwnWifi[$General[8]][$language], /* 12 */
				$statusCertificate[$General[4]][$language], /* 13 */
				$General[9], /* 14 */
				$General[13], /* 15 */
				$General[14], /* 16 */
				$General[15], /* 17 */
				$General[16]	/* 18 */
			);
			
			if(count($valor["Pruebas_ST"])>0){
				$generalListCertificateModalTable2Content = array(
					$CPE[4], 
					$Pruebas_ST[0], 
					$Pruebas_ST[1], 
					$Pruebas_ST[2], 
					$Pruebas_ST[3]
				);
			}
			/*  fecha emision y Id tecnico*/
			$objPHPExcel -> setActiveSheetIndex(0) -> 
				setCellValue('A'.$rowTitle, $generalListCertificateCreatedCcertTechnicalId[$language]) -> 
				setCellValue('A'.$rowContent, $General[7] . ' ' . $General[2]);
			 
			 /* Q hab frec 2,4 */
			$objPHPExcel -> setActiveSheetIndex(0) -> 
				setCellValue('B'.$rowTitle, $generalListCertificateRoomFrequency24[$language]) -> 
				setCellValue('B'.$rowContent, sizeQuantyCertificatesByFrequency($valor,'2.4'));
	
			/* Q hab frec 5 */
			$objPHPExcel -> setActiveSheetIndex(0) -> 
				setCellValue('C'.$rowTitle, $generalListCertificateRoomFrequency5[$language]) -> 
				setCellValue('C'.$rowContent, sizeQuantyCertificatesByFrequency($valor,'5'));
			
			/* Detalle certificado correspondiente al id cliente */
			$objPHPExcel -> setActiveSheetIndex(0) -> 
				setCellValue('E'.$rowTitle, $generalListCertificateTitles[$language][0] . ' ' . $General[1]);
			$positionColumn=generateCertificateGeneralData($objPHPExcel, "F", $rowTitle, $generalListCertificateModalTable1Content,$generalListCertificateModalTable1Title);
			
			
			if(count($valor["Pruebas_ST"])>0){
				/* Speedtest Cableado */
				$objPHPExcel -> setActiveSheetIndex(0) -> 
					setCellValue('Z'.$rowTitle, $generalListCertificateTitles[$language][1]);
				$positionColumn=generateCertificateGeneralData($objPHPExcel, "Z", $rowTitle, $generalListCertificateModalTable2Content,$generalListCertificateModalTable2Title);
			}


			/*  habitaciones registrdas */
			$objPHPExcel -> setActiveSheetIndex(0) -> 
				setCellValue('AG'.$rowTitle, $generalListCertificateTitles[$language][2]);
			$positionColumn=populateTableCellsWithoutSubtitle($objPHPExcel, "AH", $rowTitle,$Locaciones,$room[$language]);
			
			
			//  certificados wifi 
			if (count($valor["Pruebas_Wifi"]) > 0) {
				
				foreach ($valor["Pruebas_Wifi"][0]["habitacion"] as $index => $value) {
					
					$InformationTest = getArrayObjectInformationTest($value);
					$WifiCertificateFrequency = getArrayObjectWifiCertificateFrequency($value, 2.4);
					$Prueba_Descarga = getArrayObjectPrueba_Descarga($value);
					$Prueba_Ping = getArrayObjectPrueba_Ping($value);
					$Sniffer = getArrayObjectSniffer($value);
					$Prueba_ST = getArrayObjectPrueba_ST($value);
					$Redes_Visibles = getArrayObjectRedes_Visibles($value);
										
					$frequency = $value["Habitacion"]["Frecuencia"];
					
					// Speedtest certificado wifi 
					
					$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
					$positionColumn = $positionColumn-1;
					$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
			
					$objPHPExcel -> setActiveSheetIndex(0) -> 
						setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][3]." ". $WifiCertificateFrequency[0] .$frequencyText[$language]. $frequency . " Ghz.");
						
						$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
						$positionColumn = $positionColumn;
						$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
						
						$positionColumn=generateCertificateGeneralData($objPHPExcel, $positionColumn, $rowTitle, $WifiCertificateFrequency,$generalListCertificateModalTable3Title);
						
					// informacion de prueba 
					
					$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
					$positionColumn = $positionColumn-1;
					$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
			
					$objPHPExcel -> setActiveSheetIndex(0) -> 
						setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][11]);
						
						$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
						$positionColumn = $positionColumn;
						$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
						
						$positionColumn=generateCertificateGeneralData($objPHPExcel, $positionColumn, $rowTitle, $InformationTest,$generalListCertificateModalTable8Title);
						
					// prueba de descarga 
					
					$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
					$positionColumn = $positionColumn-1;
					$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
			
					$objPHPExcel -> setActiveSheetIndex(0) -> 
						setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][4]);
						
						$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
						$positionColumn = $positionColumn;
						$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
						
						$positionColumn=generateCertificateGeneralData($objPHPExcel, $positionColumn, $rowTitle, $Prueba_Descarga,$generalListCertificateModalTable4Title);
						
					// prueba de ping 
					
					$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
					$positionColumn = $positionColumn-1;
					$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
			
					$objPHPExcel -> setActiveSheetIndex(0) -> 
						setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][5]);
						
						$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
						$positionColumn = $positionColumn;
						$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
						
						$positionColumn=generateCertificateGeneralData($objPHPExcel, $positionColumn, $rowTitle, $Prueba_Ping,$generalListCertificateModalTable5Title);
						
					// dispositivos en la red sniffer 
					
					$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
					$positionColumn = $positionColumn-1;
					$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
			
					$objPHPExcel -> setActiveSheetIndex(0) -> 
						setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][6]);
						
						$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
						$positionColumn = $positionColumn;
						$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
						
						$positionColumn=populateTableCellsWithoutSubtitle($objPHPExcel, $positionColumn, $rowTitle,$Sniffer,$dispositive[$language]);
						
					// prueba de speedtest 
					
					$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
					$positionColumn = $positionColumn-1;
					$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
			
					$objPHPExcel -> setActiveSheetIndex(0) -> 
						setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][7]);
						
						$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
						$positionColumn = $positionColumn;
						$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
						
						$positionColumn=generateCertificateGeneralData($objPHPExcel, $positionColumn, $rowTitle,$Prueba_ST,$generalListCertificateModalTable6Title);
						
					// redes visibles  	
					
					$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
					$positionColumn = $positionColumn-1;
					$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
			
					$objPHPExcel -> setActiveSheetIndex(0) -> 
						setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][8]);
						
						$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
						$positionColumn = $positionColumn;
						$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
						
						$positionColumn=populateTableCellsWithoutSubtitle($objPHPExcel, $positionColumn, $rowTitle,$Redes_Visibles,"SSID");
					
				}//foreach
				
			}
			
			// extensores 
			if ((isset($valor["Extensores"]))&&(count($valor["Extensores"]) > 0)) {
				
				foreach ($valor["Extensores"] as $indice => $val) {
					
					$Extensores = getArrayObjectExtensores($val);
					
					$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
					$positionColumn = $positionColumn-1;
					$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
			
					$objPHPExcel -> setActiveSheetIndex(0) -> 
						setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][9]. $Extensores[0] .$generalListCertificateTitles[$language][10]. $Extensores[3]);
					
						$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
						$positionColumn = $positionColumn;
						$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
						
						$positionColumn=generateCertificateGeneralData($objPHPExcel, $positionColumn, $rowTitle, $Extensores,$generalListCertificateModalTable7Title);
									
					if ((isset($val["Pruebas_Wifi"]))&&(count($val["Pruebas_Wifi"])>0)){
					
						foreach ($val["Pruebas_Wifi"] as $ind => $valeur) {
							//echo $valeur["Habitacion"]["Frecuencia"];

							$InformationTest = getArrayObjectInformationTest($valeur);
							$Prueba_Descarga = getArrayObjectPrueba_Descarga($valeur);
							$Prueba_Ping = getArrayObjectPrueba_Ping($valeur);
							$Sniffer = getArrayObjectSniffer($valeur);
							$Prueba_ST = getArrayObjectPrueba_ST($valeur);
							$Redes_Visibles = getArrayObjectRedes_Visibles($valeur);
							
							// informacion de prueba 
							
							$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
							$positionColumn = $positionColumn-1;
							$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
					
							$objPHPExcel -> setActiveSheetIndex(0) -> 
								setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][11]);
								
								$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
								$positionColumn = $positionColumn;
								$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
								
								$positionColumn=generateCertificateGeneralData($objPHPExcel, $positionColumn, $rowTitle, $InformationTest,$generalListCertificateModalTable8Title);
								
							// prueba de descarga 
							
							$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
							$positionColumn = $positionColumn-1;
							$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
					
							$objPHPExcel -> setActiveSheetIndex(0) -> 
								setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][4]);
								
								$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
								$positionColumn = $positionColumn;
								$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
								
								$positionColumn=generateCertificateGeneralData($objPHPExcel, $positionColumn, $rowTitle, $Prueba_Descarga,$generalListCertificateModalTable4Title);
								
							// prueba de ping 
							
							$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
							$positionColumn = $positionColumn-1;
							$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
					
							$objPHPExcel -> setActiveSheetIndex(0) -> 
								setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][5]);
								
								$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
								$positionColumn = $positionColumn;
								$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
								
								$positionColumn=generateCertificateGeneralData($objPHPExcel, $positionColumn, $rowTitle, $Prueba_Ping,$generalListCertificateModalTable5Title);
								
							// dispositivos en la red sniffer 
							
							$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
							$positionColumn = $positionColumn-1;
							$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
					
							$objPHPExcel -> setActiveSheetIndex(0) -> 
								setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][6]);
								
								$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
								$positionColumn = $positionColumn;
								$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
								
								$positionColumn=populateTableCellsWithoutSubtitle($objPHPExcel, $positionColumn, $rowTitle,$Sniffer,$dispositive[$language]);
								
							// prueba de speedtest 
							
							$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
							$positionColumn = $positionColumn-1;
							$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
					
							$objPHPExcel -> setActiveSheetIndex(0) -> 
								setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][7]);
								
								$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
								$positionColumn = $positionColumn;
								$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
								
								$positionColumn=generateCertificateGeneralData($objPHPExcel, $positionColumn, $rowTitle,$Prueba_ST,$generalListCertificateModalTable6Title);
								
							// redes visibles  	
							
							$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
							$positionColumn = $positionColumn-1;
							$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
					
							$objPHPExcel -> setActiveSheetIndex(0) -> 
								setCellValue($positionColumn.$rowTitle, $generalListCertificateTitles[$language][8]);
								
								$positionColumn = PHPExcel_Cell::columnIndexFromString($positionColumn);
								$positionColumn = $positionColumn;
								$positionColumn = PHPExcel_Cell::stringFromColumnIndex($positionColumn); 
								
								$positionColumn=populateTableCellsWithoutSubtitle($objPHPExcel, $positionColumn, $rowTitle,$Redes_Visibles,"SSID");
							

						}//foreach
								
					}//if
						
				}//foreach
				
			}//if	

		}//foreach

		generateAndCloseExcel($objPHPExcel);

	}//if

} catch (Exception $e) {

	echo $e;

	$data["status"] = false;
	$data["code"] = 408;

	echo json_encode($data);

}//try

//echo json_encode($data[0]["_id"]);
?>

