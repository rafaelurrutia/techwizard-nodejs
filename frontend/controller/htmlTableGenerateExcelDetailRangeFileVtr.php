<?php

try {

	require_once '../lib/phpexcel/Classes/PHPExcel.php';

	if (!isset($_POST["data"])) {
		header('Location: ../errortw/');
	} else {

		$data = $_POST["data"];
		$data = getPostValues($data);

		loadExcel();
		$objPHPExcel = new PHPExcel();
		setDocumentProperties($objPHPExcel);

		//START construir contenido del archivo
		setOrientationSizeScalingPage($objPHPExcel);
		//		getArrayObjectSizeCompare($data,0);

		$generalListCertificateTitles = array("Detalle certificado correspondiente al id cliente ", "Speedtest cpe cableado", "Habitaciones registradas", "Certificados wifi correspondiente a ", "Prueba de descarga", "Prueba de ping", "Dispositivos en la red", "Prueba de speedtest", "Redes visibles", "Especificaciones extensores instalados");
		
		switch ($_POST["language"]) {
			case 'en' :
				$generalListCertificateTitles = array(
					"Detail certificate for the id client ", 
					"Speedtest CPE wiring", 
					"Registered rooms", 
					"Corresponding certificates wifi ", 
					"Download test", 
					"Ping test", 
					"Sniffer", 
					"Speedtest", 
					"Wifi Network Available", 
					"Detail extenders install"
				);
				break;
			case 'pt_BR' :
				$generalListCertificateTitles = array(
					"Detalhes certificados testes por clientes", 
					"Teste speedtest CPE com Cabeamento", 
					"Quartos registrados", 
					"Correspondente certificados wifi ",
					"Teste descarga", 
					"Teste ping", 
					"Sniffer", 
					"Teste speedtest", 
					"Redes visíveis", 
					"Detalhes instalação extensores"	
				);
				break;
			default:
				$generalListCertificateTitles = array(
					"Detail certificate for the id client ", 
					"Speedtest CPE wiring", 
					"Quartos registrados", 
					"Corresponding certificates wifi ",
					"Download test", 
					"Ping test", 
					"Sniffer", 
					"Speedtest", 
					"Wifi Network Available", 
					"Detail extenders install"
				);
				break;		
		}

		$contadorExtensor = 0;

		foreach ($data as $index => $value) {

			$lengthCertificate = count($value);

			$x = $index * 3;

			$start = PHPExcel_Cell::stringFromColumnIndex($x) . "2";
			$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . "2";
			$merge = $start . ":" . $end;

			$General = getArrayObjectGeneral($value["General"][0]);
			$CPE = getArrayObjectCPE($value["CPE"][0]);

			$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
			$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, '2', $generalListCertificateTitles[0] . $General[2]);
			$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

			$Locaciones = getArrayObjectLocaciones($value["Locaciones"][0]["habitaciones"]);

			
			$generalListCertificateModalTable1Title = array(
				"Tipo visita", 
				"Fecha emisión", 
				"Id técnico", 
				"Email cliente", 
				"Plan servicio", 
				"Tipo CPE", 
				"Modelo CPE", 
				"Mac CPE", 
				"Tipo vivienda", 
				"Ubicación CPE", 
				"Ubicación propuesta aceptada", 
				"Observación", 
				"Wifi propio", 
				"Estado certificado", 
				"Fecha activo", 
				"Nombre receptor", 
				"Parentesco", 
				"Piso", 
				"Orden técnico"
			);

			$housingType=$data[$index]["Locaciones"][0]["tipo_vivienda"];
			
			switch ($_POST["language"]) {
				case 'en' :
					switch ($data[$index]["Locaciones"][0]["tipo_vivienda"]) {
						case 'Casa' :
							$housingType="House";
							break;
						case 'Departamento' :
							$housingType="Apartment";
							break;
					}
					
					switch ($General[5]) {
						case 'Alta' :
							$General[5]="High";
							break;
						case 'Servicio técnico' :
							$General[5]="Technical support";
							break;
					}
					
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
					
					switch ($General[14]) {
						case 'Titular' :
							$General[14]="Holder";
							break;
					}
					
					break;
				case 'pt_BR' :
					switch ($data[$index]["Locaciones"][0]["tipo_vivienda"]) {
						case 'Casa' :
							$housingType="Casa";
							break;
						case 'Departamento' :
							$housingType="Departamento";
							break;
					}
					
					switch ($General[5]) {
						case 'Alta' :
							$General[5]="Alta";
							break;
						case 'Servicio técnico' :
							$General[5]="Suporte técnico";
							break;
					}
					
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
					
					switch ($General[14]) {
						case 'Titular' :
							$General[14]="Titular";
							break;
					}
					
					break;	
				default :
					switch ($data[$index]["Locaciones"][0]["tipo_vivienda"]) {
						case 'Casa' :
							$housingType="House";
							break;
						case 'Departamento' :
							$housingType="Apartment";
							break;
					}
					
					switch ($General[5]) {
						case 'Alta' :
							$General[5]="High";
							break;
						case 'Servicio técnico' :
							$General[5]="Technical support";
							break;
					}
					
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
					
					switch ($General[14]) {
						case 'Titular' :
							$General[14]="Holder";
							break;
					}
					
					break;
					
			}
			
			$generalListCertificateModalTable1Content = array(
				$General[5], 
				$General[7], 
				$General[2], 
				$General[3], 
				$General[10], 
				$CPE[0], 
				$CPE[1], 
				$CPE[2], 
				$housingType, 
				$CPE[4], 
				$CPE[5], 
				$CPE[6], 
				$General[8], 
				$General[4], 
				$General[9], 
				$General[13], 
				$General[14], 
				$General[15], 
				$General[16]
			);

			$generalListCertificateModalTable3Title = array("Ubicación", "Nacional subida", "Nacional descarga", "Internacional subida", "Internacional descarga", "Señal");

			$generalListCertificateModalTable4Title = array("Spe", "Avg", "Tim", "Siz", "Tlo", "Tco", "Tpr", "Tst", "Url");

			$generalListCertificateModalTable5Title = array("Avg", "Max", "Min", "Jit", "Los", "Rec", "Snd", "Url");

			$generalListCertificateModalTable6Title = array("Descarga int.", "Subida int.", "Descarga nac.", "Subida nac.");

			$generalListCertificateModalTable7Title = array("Tipo", "Modelo", "Mac", "Ubicación", "Ubicación aceptada", "Estado");
			
			
			// traduccion lenguaje
			switch ($_POST["language"]) {
				case 'en' :
					$generalListCertificateModalTable1Title = array(
						"Visit type", 
						"Created cert. date", 
						"Technical id", 
						"Email client", 
						"Service plan", 
						"CPE type", 
						"CPE model", 
						"CPE mac", 
						"Housing type", 
						"CPE location", 
						"Accept location proposal", 
						"Observation", 
						"Wifi own", 
						"Certificate state", 
						"Active cert. date", 
						"Receptor name", 
						"Relationship", 
						"Floor", 
						"Technical order"
					);
					
					$generalListCertificateModalTable3Title = array(
						"Location", 
						"Nat up.", 
						"Nat down.", 
						"Int up.", 
						"Int down.", 
						"Signal"
					);

					$generalListCertificateModalTable4Title = array("Spe", "Avg", "Tim", "Siz", "Tlo", "Tco", "Tpr", "Tst", "Url");
					$generalListCertificateModalTable5Title = array("Avg", "Max", "Min", "Jit", "Los", "Rec", "Snd", "Url");
					$generalListCertificateModalTable6Title = array("Int down.", "Int up.", "Nat down.", "Nat up.");
					$generalListCertificateModalTable7Title = array("Type", "Model", "Mac", "Location", "Loc accept", "Status");
					break;
				
				case 'pt_BR' :
					$generalListCertificateModalTable1Title = array(
						"Tipo visita", 
						"Data criação cert.", 
						"Id técnico", 
						"Email cliente", 
						"Plano contratado", 
						"Tipo CPE", 
						"Modelo CPE", 
						"MAC CPE", 
						"Tipo moradia", 
						"Localização CPE", 
						"Aceitar proposta localização", 
						"Observação", 
						"Wifi próprio", 
						"Estado certificado", 
						"Data Ativação Certificado", 
						"Nome receptor", 
						"Parentesco", 
						"Andar", 
						"Orden técnica"
					);
					
					$generalListCertificateModalTable3Title = array(
						"Localização", 
						"Nac Carr.", 
						"Nac Desc.", 
						"Int Carr.", 
						"Int Desc.", 
						"Sinal"
					);

					$generalListCertificateModalTable4Title = array("Spe", "Avg", "Tim", "Siz", "Tlo", "Tco", "Tpr", "Tst", "Url");
					$generalListCertificateModalTable5Title = array("Avg", "Max", "Min", "Jit", "Los", "Rec", "Snd", "Url");
					$generalListCertificateModalTable6Title = array("Int Desc.", "Int Carr.", "Nac Desc.", "Nac Carr.");
					$generalListCertificateModalTable7Title = array("Tipo", "Modelo", "Mac", "Localização", "Loc. Aceita", "Estado");
					break;	
				
				default :
					$generalListCertificateModalTable1Title = array(
						"Visit type", 
						"Created cert. date", 
						"Technical id", 
						"Email client", 
						"Service plan", 
						"CPE type", 
						"CPE model", 
						"CPE mac", 
						"Housing type", 
						"CPE location", 
						"Accept location proposal", 
						"Observation", 
						"Wifi own", 
						"Certificate state", 
						"Active cert. date", 
						"Receptor name", 
						"Relationship", 
						"Floor", 
						"Technical order"
					);
					
					$generalListCertificateModalTable3Title = array(
						"Location", 
						"Nat up.", 
						"Nat down.", 
						"Int up.", 
						"Int down.", 
						"Signal"
					);

					$generalListCertificateModalTable4Title = array("Spe", "Avg", "Tim", "Siz", "Tlo", "Tco", "Tpr", "Tst", "Url");
					$generalListCertificateModalTable5Title = array("Avg", "Max", "Min", "Jit", "Los", "Rec", "Snd", "Url");
					$generalListCertificateModalTable6Title = array("Int down.", "Int up.", "Nat down.", "Nat up.");
					$generalListCertificateModalTable7Title = array("Type", "Model", "Mac", "Location", "Loc accept", "Status");
					break;
			}
			

			$i = populateTableCells($objPHPExcel, 3, $generalListCertificateModalTable1Title, $generalListCertificateModalTable1Content, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));
			$objPHPExcel -> getActiveSheet() -> getStyle(PHPExcel_Cell::stringFromColumnIndex($x) . "3:" . PHPExcel_Cell::stringFromColumnIndex($x) . ($i - 1)) -> applyFromArray(getPropertiesLateralLeftText());

			if (count($value["Pruebas_ST"]) > 0) {

				$Pruebas_ST = getArrayObjectPruebas_ST($value["Pruebas_ST"][0]);

				$generalListCertificateModalTable2Title = array("Ubicación cpe", "Nacional subida", "Nacional descarga", "Internacional subida", "Internacional descarga");

				// traduccion lenguaje
				switch ($_POST["language"]) {
					case 'en' :
						$generalListCertificateModalTable2Title = array(
							"CPE location", 
							"National upload", 
							"National download", 
							"International upload", 
							"International download"
						);
						break;
					case 'pt_BR' :
						$generalListCertificateModalTable2Title = array(
							"Localização CPE", 
							"Nac Carr.", 
							"Nac Desc.", 
							"Int Carr.", 
							"Int Desc."
						);
						break;
					default :
						$generalListCertificateModalTable2Title = array(
							"CPE location", 
							"National upload", 
							"National download", 
							"International upload", 
							"International download"
						);
						break;		
				}
				
				$generalListCertificateModalTable2Content = array($CPE[4], $Pruebas_ST[0], $Pruebas_ST[1], $Pruebas_ST[2], $Pruebas_ST[3]);

				$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
				$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
				$merge = $start . ":" . $end;

				$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
				$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $generalListCertificateTitles[1]);
				$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

				$i = populateTableCells($objPHPExcel, ($i + 2), $generalListCertificateModalTable2Title, $generalListCertificateModalTable2Content, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));

			}

			$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
			$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
			$merge = $start . ":" . $end;

			$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
			$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $generalListCertificateTitles[2]);
			$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

			$room="Habitación";
			// traduccion lenguaje
			switch ($_POST["language"]) {
				case 'en' :
					$room = "Room";
					break;
				case 'pt_BR' :
					$room = "Quartos";
					break;
				default :
					$room = "Room";
					break;
			}
			
			$i = populateTableCellsWithoutSubtitle($objPHPExcel, ($i + 2), $room, $Locaciones, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));

			if (count($value["Pruebas_Wifi"]) > 0) {

				foreach ($value["Pruebas_Wifi"][0]["habitacion"] as $index => $value) {

					$WifiCertificateFrequency = getArrayObjectWifiCertificateFrequency($value, 2.4);
					$frequency = $value["Habitacion"]["Frecuencia"];

					$Prueba_Descarga = getArrayObjectPrueba_Descarga($value);
					$Prueba_Ping = getArrayObjectPrueba_Ping($value);
					$Sniffer = getArrayObjectSniffer($value);
					$Prueba_ST = getArrayObjectPrueba_ST($value);
					$Redes_Visibles = getArrayObjectRedes_Visibles($value);

					// detalle certificado wifi

					$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
					$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
					$merge = $start . ":" . $end;
					
					$frequencyText=" a una frecuencia de ";
					// traduccion lenguaje
					switch ($_POST["language"]) {
						case 'en' :
							$frequencyText = " to a frequency ";
							break;
						case 'pt_BR' :
							$frequencyText = " com uma frequência de ";
							break;
						default :
							$frequencyText = " to a frequency ";
							break;
					}

					$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
					$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $generalListCertificateTitles[3] . $WifiCertificateFrequency[0] . $frequencyText . $frequency . " Ghz.");

					$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

					$i = populateTableCells($objPHPExcel, ($i + 2), $generalListCertificateModalTable3Title, $WifiCertificateFrequency, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));

					// prueba de descarga

					$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
					$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
					$merge = $start . ":" . $end;

					$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
					$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $generalListCertificateTitles[4]);
					$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

					$i = populateTableCells($objPHPExcel, ($i + 2), $generalListCertificateModalTable4Title, $Prueba_Descarga, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));

					// prueba de ping

					$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
					$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
					$merge = $start . ":" . $end;

					$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
					$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $generalListCertificateTitles[5]);
					$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

					$i = populateTableCells($objPHPExcel, ($i + 2), $generalListCertificateModalTable5Title, $Prueba_Ping, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));

					// sniffer

					$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
					$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
					$merge = $start . ":" . $end;

					$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
					$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $generalListCertificateTitles[6]);
					$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

					$dispositive="Dispositivo";
					// traduccion lenguaje
					switch ($_POST["language"]) {
						case 'en' :
							$dispositive="Dispositive";
							break;
						case 'pt_BR' :
							$dispositive="Dispositivo";
							break;
						default :
							$dispositive="Dispositive";
							break;		
					}
					$i = populateTableCellsWithoutSubtitle($objPHPExcel, ($i + 2), $dispositive, $Sniffer, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));

					// prueba speedtest

					$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
					$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
					$merge = $start . ":" . $end;

					$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
					$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $generalListCertificateTitles[7]);
					$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

					$i = populateTableCells($objPHPExcel, ($i + 2), $generalListCertificateModalTable6Title, $Prueba_ST, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));

					if (isset($value["Habitacion"]["Redes_Visibles"])) {
						$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
						$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
						$merge = $start . ":" . $end;

						$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
						$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $generalListCertificateTitles[8]);
						$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

						$i = populateTableCellsWithoutSubtitle($objPHPExcel, ($i + 2), "SSID", $Redes_Visibles, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));
					}

				}

			}

			// extensores
			if ($lengthCertificate >= 8) {
				foreach ($data[$contadorExtensor]["Extensores"] as $indice => $val) {

					// tabla extensores

					$Extensores = getArrayObjectExtensores($val);
					
					$frequencyText=" a una frecuencia de ";
					$locationText="Detalle extensor ubicado en ";
					// traduccion lenguaje
					switch ($_POST["language"]) {
						case 'en' :
							$frequencyText = " to a frequency ";
							$locationText="Detail extender located in ";
							break;
						case 'pt_BR' :
							$frequencyText = " com uma frequência de ";
							$locationText="Detalhe de um extensor localizado em ";
							break;
						default :
							$frequencyText = " to a frequency ";
							$locationText="Detail extender located in ";
							break;
					}
					
					$frequency = (isset($val["Pruebas_Wifi"][0]["Habitacion"]["Frecuencia"])) ? $frequencyText . $val["Pruebas_Wifi"][0]["Habitacion"]["Frecuencia"] : "";

					$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
					$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
					$merge = $start . ":" . $end;

					$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
					$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $locationText . $Extensores[3] . $frequency);
					$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderTextTitle());

					$i = populateTableCells($objPHPExcel, ($i + 2), $generalListCertificateModalTable7Title, $Extensores, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));

					if (count($val) > 6) {
						// prueba de descarga

						$Prueba_Descarga = getArrayObjectPrueba_Descarga($val["Pruebas_Wifi"][0]);

						$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
						$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
						$merge = $start . ":" . $end;

						$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
						$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $generalListCertificateTitles[4]);
						$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

						$i = populateTableCells($objPHPExcel, ($i + 2), $generalListCertificateModalTable4Title, $Prueba_Descarga, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));

						// prueba de ping

						$Prueba_Ping = getArrayObjectPrueba_Ping($val["Pruebas_Wifi"][0]);

						$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
						$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
						$merge = $start . ":" . $end;

						$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
						$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $generalListCertificateTitles[5]);
						$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

						$i = populateTableCells($objPHPExcel, ($i + 2), $generalListCertificateModalTable5Title, $Prueba_Ping, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));

						// sniffer
						$Sniffer = getArrayObjectSniffer($val["Pruebas_Wifi"][0]);

						$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
						$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
						$merge = $start . ":" . $end;

						$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
						$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $generalListCertificateTitles[6]);
						$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

						$dispositive="Dispositivo";
						// traduccion lenguaje
						switch ($_POST["language"]) {
							case 'en' :
								$dispositive="Dispositive";
								break;
							case 'pt_BR' :
								$dispositive="Dispositivo";
								break;
							default :
								$dispositive="Dispositive";
								break;
						}
					
						$i = populateTableCellsWithoutSubtitle($objPHPExcel, ($i + 2), $dispositive, $Sniffer, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));

						// prueba speedtest
						$Prueba_ST = getArrayObjectPrueba_ST($val["Pruebas_Wifi"][0]);

						$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
						$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
						$merge = $start . ":" . $end;

						$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
						$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $generalListCertificateTitles[7]);
						$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

						$i = populateTableCells($objPHPExcel, ($i + 2), $generalListCertificateModalTable6Title, $Prueba_ST, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));

						if (isset($value["Habitacion"]["Redes_Visibles"])) {
							// redes visibles
							$Redes_Visibles = getArrayObjectRedes_Visibles($val["Pruebas_Wifi"][0]);
							$start = PHPExcel_Cell::stringFromColumnIndex($x) . ($i + 1);
							$end = PHPExcel_Cell::stringFromColumnIndex($x + 1) . ($i + 1);
							$merge = $start . ":" . $end;

							$objPHPExcel -> setActiveSheetIndex(0) -> mergeCells($merge);
							$objPHPExcel -> setActiveSheetIndex(0) -> setCellValueByColumnAndRow($x, ($i + 1), $generalListCertificateTitles[8]);
							$objPHPExcel -> getActiveSheet() -> getStyle($start) -> applyFromArray(getPropertiesHeaderText());

							$i = populateTableCellsWithoutSubtitle($objPHPExcel, ($i + 2), "SSID", $Redes_Visibles, 0, PHPExcel_Cell::stringFromColumnIndex($x), PHPExcel_Cell::stringFromColumnIndex($x + 1));
						}
					}

				}
			}

			//			$objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(0, $z, $c, true)->getStyle()->applyFromArray($styleArray);
			//			$objPHPExcel->getActiveSheet()->getColumnDimension('A')->setAutoSize(true);
			//			$objPHPExcel->getActiveSheet()->getColumnDimension('B')->setAutoSize(true);
			//			$objPHPExcel->getActiveSheet()->getColumnDimension(0)->setAutoSize(true);
			$contadorExtensor++;
		}// foreach certificado

		//END
		generateAndCloseExcel($objPHPExcel);

	}

} catch (Exception $e) {

	echo $e;

	$data["status"] = false;
	$data["code"] = 408;

	echo json_encode($data);

}

//echo json_encode($data[0]["_id"]);

function getTitles($index) {

	$generalListCertificateTitles = array("Detalle certificado", "Speedtest cpe cableado", "Habitaciones", "Certificados wifi a frecuencia 2.4 Ghz", "Certificados wifi a frecuencia 5 Ghz", "Especificaciones extensores instalados");

	return $generalListCertificateTitles[$index];
}

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

function getObjectKeyExist($keyElement) {
	echo $keyElement;

	if (isset($keyElement)) {
		return $keyElement;
	} else {
		return false;
	}

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

function getArrayObjectPruebas_ST($data) {

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

function getArrayObjectCPE($data) {

	$CPE = array();

	if (isset($data["tipo"]))
		array_push($CPE, $data["tipo"]);
	else
		array_push($CPE, null);

	if (isset($data["modelo"]))
		array_push($CPE, $data["modelo"]);
	else
		array_push($CPE, null);

	if (isset($data["mac"]))
		array_push($CPE, $data["mac"]);
	else
		array_push($CPE, null);

	if (isset($data["frecuencia"]))
		array_push($CPE, $data["frecuencia"]);
	else
		array_push($CPE, null);

	if (isset($data["ubicacion"]))
		array_push($CPE, $data["ubicacion"]);
	else
		array_push($CPE, null);

	if (isset($data["ubicacion_aceptada"]))
		array_push($CPE, $data["ubicacion_aceptada"]);
	else
		array_push($CPE, null);

	if (isset($data["observacion"]))
		array_push($CPE, $data["observacion"]);
	else
		array_push($CPE, null);

	return $CPE;
}

function getArrayObjectLocaciones($data) {

	$Locaciones = array();

	foreach ($data as $key => $value) {
		array_push($Locaciones, $value);
	}

	return $Locaciones;

}

function getArrayObjectGeneral($data) {

	$General = array();

	if (isset($data["idem_servicio"]))
		array_push($General, $data["idem_servicio"]);
	else
		array_push($General, null);

	if (isset($data["rut_cliente"]))
		array_push($General, $data["rut_cliente"]);
	else
		array_push($General, null);

	if (isset($data["id_tecnico"]))
		array_push($General, $data["id_tecnico"]);
	else
		array_push($General, null);

	if (isset($data["mail_cliente"]))
		array_push($General, $data["mail_cliente"]);
	else
		array_push($General, null);

	if (isset($data["status"]))
		array_push($General, $data["status"]);
	else
		array_push($General, null);

	if (isset($data["tipo_OT"]))
		array_push($General, $data["tipo_OT"]);
	else
		array_push($General, null);

	if (isset($data["presencia_wifi"]))
		array_push($General, $data["presencia_wifi"]);
	else
		array_push($General, null);

	if (isset($data["fecha_certificado"]))
		array_push($General, $data["fecha_certificado"]);
	else
		array_push($General, null);

	if (isset($data["wifi_propia"]))
		array_push($General, $data["wifi_propia"]);
	else
		array_push($General, null);

	if (isset($data["fecha_activo"]))
		array_push($General, $data["fecha_activo"]);
	else
		array_push($General, null);

	if (isset($data["plan"]["nombre"]))
		array_push($General, $data["plan"]["nombre"]);
	else
		array_push($General, null);

	if (isset($data["plan"]["subida"]))
		array_push($General, $data["plan"]["subida"]);
	else
		array_push($General, null);

	if (isset($data["plan"]["bajada"]))
		array_push($General, $data["plan"]["bajada"]);
	else
		array_push($General, null);

	if (isset($data["nombre_receptor"]))
		array_push($General, $data["nombre_receptor"]);
	else
		array_push($General, null);

	if (isset($data["parentesco"]))
		array_push($General, $data["parentesco"]);
	else
		array_push($General, null);

	if (isset($data["pisos"]))
		array_push($General, $data["pisos"]);
	else
		array_push($General, null);

	if (isset($data["orden_tecnica"]))
		array_push($General, $data["orden_tecnica"]);
	else
		array_push($General, null);

	return $General;

}

function getArrayObjectWifiCertificateFrequency($data, $frequency) {

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

	/*
	 $cont=0;
	 foreach ($data as $key => $value) {

	 if($value["Habitacion"]["Frecuencia"]==$frequency){

	 $newObjec[$cont][0]=$value["Habitacion"]["Ubicacion"];
	 $newObjec[$cont][1]=$value["Habitacion"]["Prueba_ST"]["subidaN"];
	 $newObjec[$cont][2]=$value["Habitacion"]["Prueba_ST"]["bajadaN"];
	 $newObjec[$cont][3]=$value["Habitacion"]["Prueba_ST"]["subidaI"];
	 $newObjec[$cont][4]=$value["Habitacion"]["Prueba_ST"]["bajadaI"];
	 $newObjec[$cont][5]=$value["Habitacion"]["Intensidad_Señal"];
	 $cont++;
	 }

	 }

	 return $newObjec;
	 */
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

	$newObjec[5] = "True";

	/*
	 foreach ($data as $key => $value) {

	 $newObjec[$key][0]=$value["Tipo"];
	 $newObjec[$key][1]=$value["Modelo"];
	 $newObjec[$key][2]=$value["MAC"];
	 $newObjec[$key][3]=$value["Ubicacion"];
	 $newObjec[$key][4]=$value["Ubicacion_Aceptada"];
	 $newObjec[$key][5]="True";

	 }
	 */
	return $newObjec;

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

	/*
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
	 */

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

	/*
	 array_push($Prueba_Ping,(getObjectKeyExist($data["AVG"])) ? $data["AVG"] : null);
	 array_push($Prueba_Ping,(getObjectKeyExist($data["MAX"])) ? $data["MAX"] : null);
	 array_push($Prueba_Ping,(getObjectKeyExist($data["MIN"])) ? $data["MIN"] : null);
	 array_push($Prueba_Ping,(getObjectKeyExist($data["JIT"])) ? $data["JIT"] : null);
	 array_push($Prueba_Ping,(getObjectKeyExist($data["LOS"])) ? $data["LOS"] : null);
	 array_push($Prueba_Ping,(getObjectKeyExist($data["REC"])) ? $data["REC"] : null);
	 array_push($Prueba_Ping,(getObjectKeyExist($data["SND"])) ? $data["SND"] : null);
	 array_push($Prueba_Ping,(getObjectKeyExist($data["URL"])) ? $data["URL"] : null);
	 */
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

	/*
	 array_push($Prueba_ST,(getObjectKeyExist($data["bajadaI"])) ? $data["bajadaI"] : null);
	 array_push($Prueba_ST,(getObjectKeyExist($data["subidaI"])) ? $data["subidaI"] : null);
	 array_push($Prueba_ST,(getObjectKeyExist($data["bajadaN"])) ? $data["bajadaN"] : null);
	 array_push($Prueba_ST,(getObjectKeyExist($data["subidaN"])) ? $data["subidaN"] : null);
	 */
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
		$objPHPExcel -> setActiveSheetIndex($sheetIndex) -> setCellValue($letter1 . $i, $generalListCertificateModalTable1Title[$i - $index]) -> setCellValue($letter2 . $i, $generalListCertificateModalTable1Content[$i - $index]);
	}

	return $i;

}

function populateTableCellsWithoutSubtitle($objPHPExcel, $index, $generalListCertificateModalTable1Title, $generalListCertificateModalTable1Content, $sheetIndex, $letter1, $letter2) {

	for ($i = $index; $i < count($generalListCertificateModalTable1Content) + $index; $i++) {
		$objPHPExcel -> setActiveSheetIndex($sheetIndex) -> setCellValue($letter1 . $i, $generalListCertificateModalTable1Title) -> setCellValue($letter2 . $i, $generalListCertificateModalTable1Content[$i - $index]);
	}

	return $i;

}

function excelGenerateSheetDetailCertificateWifi($data, $objPHPExcel, $sheetIndex, $generalListCertificateSheetWifiTitles, $WifiCertificateFrequency, $frequency, $indexSheet) {

	//	populateTableHead($objPHPExcel,$sheetIndex,"A2:B2","A2",$generalListCertificateSheetWifiTitles[0]);
	//	populateTableHead($objPHPExcel,$sheetIndex,"D2:E2","D2",$generalListCertificateSheetWifiTitles[1]);
	//	populateTableHead($objPHPExcel,$sheetIndex,"G2:H2","G2",$generalListCertificateSheetWifiTitles[2]);
	//	populateTableHead($objPHPExcel,$sheetIndex,"J2:K2","J2",$generalListCertificateSheetWifiTitles[3]);
	//	populateTableHead($objPHPExcel,$sheetIndex,"M2:N2","M2",$generalListCertificateSheetWifiTitles[4]);

	$indexArray = array_search($WifiCertificateFrequency, $data);

	//	$data["Pruebas_Wifi"][0]["habitacion"][0]["Habitacion"]["Prueba_Descarga"]["spe"];
	//	$data["Pruebas_Wifi"][0]["habitacion"][1]["Habitacion"]["Prueba_Descarga"]["spe"];
	//	$data["Pruebas_Wifi"][0]["habitacion"][2]["Habitacion"]["Prueba_Descarga"]["spe"];

	$Prueba_Descarga = getArrayObjectPrueba_Descarga($data[$indexArray]["Habitacion"]["Prueba_Descarga"]);

	//	$generalListCertificateSheetDetailCertificateWifi1Title

}

function getSearchIndexArray($room, $frequency, $data) {

	for ($i = 0; $i < count($data); $i++) {
		if (($data[$i]["Habitacion"]["Ubicacion"] == $room) && ($data[$i]["Habitacion"]["Frecuencia"] == $frequency)) {
			return $i;
		}
	}

}

function excelCreateNewSheet($objPHPExcel, $nameSheet) {

	//	$sheetId = 1;
	//	$objPHPExcel->createSheet(NULL, $sheetId);
	//	$sheetId = 1;
	$objPHPExcel -> createSheet();
	$objPHPExcel -> setActiveSheetIndex(1);
	$objPHPExcel -> getActiveSheet() -> setTitle("hla");

}
