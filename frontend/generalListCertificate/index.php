<?php 

include'../controller/checkTimeOut.php'; 
$permiso = split ("\|", $_SESSION['access']);
$permiso1 = split ("\,", $permiso[1]);

if($permiso1[1]==0){
	header('Location: ../errortw/');	
}

$_SESSION['place']=1;
$_SESSION['placeNavigationBar']=0;

?>
<!-- http://php.net/manual/es/function.session-cache-expire.php -->
<!DOCTYPE html>
<html class="loading">
	<!--<html ng-app ng-controller="DashboardController" class="loading">-->
	<head>
	<title>TechWizard</title><!-- INCLUDE METAS Y LIBRERIAS --> 
	<?php include '../includes/head.php'; ?>

	<!-- FIN INCLUDE METAS Y LIBRERIAS -->
	<!-- LIBRESRIAS LOCALES -->
	<script src="../js/generalListCertificate/angular/app.js"></script>
	<script src="../lib/metro/js/metro-dropdown.js"></script><!-- SIDEBAR-->
	<script src="../lib/metro/js/metro-calendar.js"></script><!-- CALENDAR-->
	<script src="../lib/metro/js/metro-datepicker.js"></script><!-- CALENDAR-->
	<script src="../lib/metro/js/metro-hint.js"></script><!-- HINT-->
<!--	<script src="../js/default/detectBrowser.js"></script><!--SI NO ES CHROME REDIRIGE A PAGINA DE ERROR-->
	
	<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/generalListCertificate.css"; ?>">		
	<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/navigationBar.css"; ?>">
	<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/sideBar.css"; ?>">
	<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/hint.css"; ?>">
	<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/table.css"; ?>">
	<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/modal.css"; ?>">	        

	<script src="http://cdn.datatables.net/1.10.0/js/jquery.dataTables.js"></script>
	<script src="http://cdn.datatables.net/plug-ins/28e7751dbec/api/fnReloadAjax.js"></script>
	<script src="../js/generalListCertificate/jquery/sorterDate.js"></script> 
	
<!--	<script src="http://cdn.datatables.net/plug-ins/be7019ee387/sorting/date-uk.js"></script> -->
	<script src="../js/generalListCertificate/jquery/tableReportCertificate.js"></script>

	<!-- FIN LIBRERIAS LOCALES -->
	<script type="text/javascript" language="JavaScript">
		var url = {
			"read" 							: "/techwizard/stats/getCertificados/",
			"modalColorChange" 				: "../json/default/modal.json",
			"generateExcelFile" 			: "../controller/htmlTableGenerateExcelFile.php",
			"generateExcelDetailFile" 		: "../controller/htmlTableGenerateExcelDetailFile.php",
			"generateExcelDetailRangeFile"	: "../excelReport/htmlTableGenerateExcelDetailRangeFileVtr.php"
		};
		
		var hash = {
			"modalCertificate" 				: "#generalListCertificateModalDetailCertificate",
			"modalCertificateExtensor" 		: "#generalListCertificateModalDetailCertificateExtensor",
			"modalCertificateTest" 			: "#generalListCertificateModalDetailTests"
		};
		
		var idImageWifiChannel;
		
		var maxRowLoad=50;
		var messageErrorGetWifi,messageErrorGetExtensor,contentNotify,textNameDispositiveSniffer;
		var empty,securityText,canalText,originTestText,urlImage,snifferTextMessage,snifferTextMessage2,networkAvailableTextMessage;
		
		var datatableTitle = [];
		var month = new Array();
		var messageDescriptionPing;
		var messageDescriptionDownload;
		var messageDescriptionWifi;
		var statusTextName;
				
		switch(language) {
		    case 'es':
				month[0] = "Enero";
				month[1] = "Febrero";
				month[2] = "Marzo";
				month[3] = "Abril";
				month[4] = "Mayo";
				month[5] = "Junio";
				month[6] = "Julio";
				month[7] = "Agosto";
				month[8] = "Septiembre";
				month[9] = "Octubre";
				month[10] = "Noviembre";
				month[11] = "Diciembre";	
		        break;
		    case 'en':
				month[0] = "January";
				month[1] = "February";
				month[2] = "March";
				month[3] = "April";
				month[4] = "May";
				month[5] = "June";
				month[6] = "July";
				month[7] = "August";
				month[8] = "September";
				month[9] = "October";
				month[10] = "November";
				month[11] = "December";		
		        break;
			case 'pt_BR':
				month[0] = "Janeiro";
				month[1] = "Fevereiro";
				month[2] = "Março";
				month[3] = "Abril";
				month[4] = "Maio";
				month[5] = "Junho";
				month[6] = "Julho";
				month[7] = "Agosto";
				month[8] = "Septembro";
				month[9] = "Outubro";
				month[10] = "Novembro";
				month[11] = "Dezembro";			
		        break;		        
		    default: 		   	
		}
		
		switch(language) {
		    case 'es':
				datatableTitle = [
					"ID cliente",
					"ID técnico",
					"Plan contratación",
					"CPE",
					"Modelo CPE",
					"MAC CPE",
					"Estado certificado",
					"Fecha certificación creada",
					"Fecha certificación activa"
				];
				
				messageErrorGetWifi = "Lo sentimos, por el momento no hay certificaciones Wi-Fi.";
				messageErrorGetExtensor = "Por el momento no hay instalación de algún extensor en este certificado.";
				contentNotify = "Lo sentimos, intentelo más tarde.";
				textNameDispositiveSniffer="Dispositivo";
				empty="vacio";
				securityText="Seguridad";
				canalText="Canal";
				originTestText="Origen prueba";
				snifferTextMessage="De un total de: ";
				snifferTextMessage2=" dispositivos.";
				networkAvailableTextMessage=" redes disponibles.";
				messageDescriptionPing=[
					"<strong>Enviados:</strong> se encarga de dar a conocer la cantidad de paquetes ip enviadas.",
					"<strong>Recibidos:</strong> se encarga de dar a conocer la cantidad de paquetes ip recibidas.",
					"<strong>Perdidos:</strong> se encarga de dar a conocer la cantidad de paquetes ip perdidas.",
					"<strong>Promedio:</strong> se encarga de dar a conocer el tiempo promedio que se demora en recibir un paquete ip.",
					"<strong>Mínimo:</strong> se encarga de dar a conocer el tiempo que menos se demoró en recibir un paquete ip.",
					"<strong>Máximo:</strong> se encarga de dar a conocer el tiempo que más se demoró en recibir un paquete ip.",
					"<strong>Jitter:</strong> se encarga de dar a conocer la cantidad de paquetes ip.",
					"<strong>URL:</strong> Corresponde a la dirección url que se dió para iniciar la prueba."
				];
				
				messageDescriptionDownload=[
					"<strong>SPE:</strong> (Network Bandwidth) The average download speed  measured from the network interface for the complete download. Bytes per second.",
					"<strong>AVG:</strong> (Average Bandwidth) The average download speed measured for the complete download. Bytes per second.",
					"<strong>TIM:</strong> (Download Time) The total time, in seconds, that the full operation lasted",		
					"<strong>SIZ:</strong> (Download File Size) The total amount of bytes that were downloaded. (bytes)",
					"<strong>TLO:</strong> (Time for Lookup) The time, in seconds, it took from the start until the name resolving was completed. (s)",
					"<strong>TCO:</strong> (Time to Connect) The time, in seconds, it took from the start until the TCP connect to the remote host (or proxy) was completed. (s)",
					"<strong>TPR:</strong> (Time to pre-transfer) The time, in seconds, it took from the start until the file transfer was just about to begin. This includes all pre-transfer commands and negotiations that are specific to the particular protocol(s) involved. (s)",
					"<strong>TST:</strong> (Time to start transfer) The time, in seconds, it took from the start until the first byte was just about to be transferred. This includes time_pretransfer and also the time the server needed to calculate the result. (s)",
					"<strong>URL:</strong> The URL that was fetched last. This is most meaningful if you've told curl to follow location: headers."
				];
				
				messageDescriptionWifi=[
					"<strong>SSID:</strong> Service Set Identifier."
				];
				
		        break;
		    case 'en':
				datatableTitle = [
					"Client ID",
					"Technician ID",
					"Package",
					"CPE",
					"CPE model",
					"CPE MAC",
					"Certificate state",
					"Created certificate date",
					"Active certificate date"
				];
				
				messageErrorGetWifi = "No Wi-Fi test.";
				messageErrorGetExtensor = "Currently no extender is specified for this certificate.";
				contentNotify = "We are sorry, try later.";
				textNameDispositiveSniffer="Device";
				empty="empty";
				securityText="Security";
				canalText="Channel";
				originTestText="Test origin";
				snifferTextMessage="From a total of:";
				snifferTextMessage2=" devices.";
				networkAvailableTextMessage=" Wi-Fi networks availables.";
				messageDescriptionPing=[
					"<strong>Send:</strong> Number of packets sent.",
					"<strong>Received:</strong> Number of packets received.",
					"<strong>Lost:</strong> Number of packets lost.",
					"<strong>Average:</strong> The round-trip average of the success received packets (delay).",
					"<strong>Minimun:</strong> The minimum round-trip value from the received caplets (minimum delay).",
					"<strong>Maximun:</strong> The maximum round-trip value from the received caplets (maximum delay).",
					"<strong>Jitter:</strong> The variation in latency as measured in the variability over time of the packet latency across a network.",
					"<strong>Url:</strong> It corresponds to the url that was given to start the test."
				];
				
				messageDescriptionDownload=[
					"<strong>SPE:</strong> (Network Bandwidth) The average download speed  measured from the network interface for the complete download. Bytes per second.",
					"<strong>AVG:</strong> (Average Bandwidth) The average download speed measured for the complete download. Bytes per second.",
					"<strong>TIM:</strong> (Download Time) The total time, in seconds, that the full operation lasted",		
					"<strong>SIZ:</strong> (Download File Size) The total amount of bytes that were downloaded. (bytes)",
					"<strong>TLO:</strong> (Time for Lookup) The time, in seconds, it took from the start until the name resolving was completed. (s)",
					"<strong>TCO:</strong> (Time to Connect) The time, in seconds, it took from the start until the TCP connect to the remote host (or proxy) was completed. (s)",
					"<strong>TPR:</strong> (Time to pre-transfer) The time, in seconds, it took from the start until the file transfer was just about to begin. This includes all pre-transfer commands and negotiations that are specific to the particular protocol(s) involved. (s)",
					"<strong>TST:</strong> (Time to start transfer) The time, in seconds, it took from the start until the first byte was just about to be transferred. This includes time_pretransfer and also the time the server needed to calculate the result. (s)",
					"<strong>URL:</strong> The URL that was fetched last. This is most meaningful if you've told curl to follow location: headers."
				];
				
				messageDescriptionWifi=[
					"<strong>SSID:</strong> Service Set Identifier."
				];
				
		        break;
			case 'pt_BR':
				datatableTitle = [
					"ID cliente",
					"ID técnico",
					"Certificado de plano",
					"CPE",
					"Modelo CPE",
					"MAC CPE",
					"Estado certificado",
					"Data certificado criado",
					"Data certificado ativo"
				];
				
				messageErrorGetWifi = "Desculpe, mas atualmente não tem certificações Wi-Fi.";
				messageErrorGetExtensor = "No momento não há nenhuma instalação de qualquer extender neste certificado.";
				contentNotify = "Sinto muito, tente novamente mais tarde.";
				textNameDispositiveSniffer="Dispositivo";
				empty="vácuo";
				securityText="Segurança";
				canalText="Canal";
				originTestText="Teste de origem";
				snifferTextMessage="Um total de:";
				snifferTextMessage2=" dispositivos.";
				networkAvailableTextMessage=" Redes Wi-Fi disponíveis.";
				messageDescriptionPing=[
					"<strong>Enviados:</strong>dá a conhecer a quantidade de pacotes ip enviados.",
					"<strong>Recebido:</strong>dá a conhecer a quantidade de pacotes ip recebidos.",
					"<strong>Perdidos:</strong>dá a conhecer a quantidade de pacotes ip perdidos.",
					"<strong>Média:</strong>dá a conhecer o tempo médio que demora em receber um pacote ip.",
					"<strong>Mínimo:</strong>dá a conhecer o tempo médio que menos demorou em receber um pacote ip.",
					"<strong>Máximo:</strong>dá a conhecer o tempo médio que mais demorou em receber um pacote ip.",
					"<strong>Jitter:</strong>dá a conhecer a quantidade de pacotes ip.",
					"<strong>Url:</strong>Corresponde ao endereço url dado para iniciar o teste."
				];
				
				messageDescriptionDownload=[
					"<strong>SPE:</strong> (Network Bandwidth) The average download speed  measured from the network interface for the complete download. Bytes per second.",
					"<strong>AVG:</strong> (Average Bandwidth) The average download speed measured for the complete download. Bytes per second.",
					"<strong>TIM:</strong> (Download Time) The total time, in seconds, that the full operation lasted",		
					"<strong>SIZ:</strong> (Download File Size) The total amount of bytes that were downloaded. (bytes)",
					"<strong>TLO:</strong> (Time for Lookup) The time, in seconds, it took from the start until the name resolving was completed. (s)",
					"<strong>TCO:</strong> (Time to Connect) The time, in seconds, it took from the start until the TCP connect to the remote host (or proxy) was completed. (s)",
					"<strong>TPR:</strong> (Time to pre-transfer) The time, in seconds, it took from the start until the file transfer was just about to begin. This includes all pre-transfer commands and negotiations that are specific to the particular protocol(s) involved. (s)",
					"<strong>TST:</strong> (Time to start transfer) The time, in seconds, it took from the start until the first byte was just about to be transferred. This includes time_pretransfer and also the time the server needed to calculate the result. (s)",
					"<strong>URL:</strong> The URL that was fetched last. This is most meaningful if you've told curl to follow location: headers."
				];
				
				messageDescriptionWifi=[
					"<strong>SSID:</strong> Service Set Identifier."
				];
				
		        break;
		    default:   	
		}
		/*		
		var datatableData = [
			"General.0.rut_cliente",
			"General.0.plan.nombre",
			"CPE.0.tipo",
			"CPE.0.modelo",
			"CPE.0.mac",
			"General.0.status",
			"General.0.fecha_certificado",
			"General.0.id_tecnico"
		];
		*/
		var datatableData = [
			"General[0].rut_cliente",
			"General[0].id_tecnico",
			"General[0].plan.nombre",
			"CPE[0].tipo",
			"CPE[0].modelo",
			"CPE[0].mac",
			"General[0].status",
			"General[0].fecha_certificado",
			"General[0].fecha_activo"
			
		];
		
		var ajax_data = {
			"frequencyCertificateWifiCPE"		: $("select[name='modalGeneralListCertificateDetailCertificateSelectFrequencyCertificateWifiCPE']"),
			"frequencyCertificateWifiExtensor"	: $("select[name='modalGeneralListCertificateDetailCertificateExtensorSelectFrequencyCertificateWifiExtensor']")
		}; 
		
		switch(language) {
		    case 'es':
				urlDatatableLanguageUrl="http://cdn.datatables.net/plug-ins/be7019ee387/i18n/Spanish.json";
		        break;
		    case 'en':
				urlDatatableLanguageUrl="http://cdn.datatables.net/plug-ins/a5734b29083/i18n/English.json";
		        break;
			case 'pt_BR':
				urlDatatableLanguageUrl="http://cdn.datatables.net/plug-ins/f2c75b7247b/i18n/Portuguese-Brasil.json";
		        break;
		    default:   	
		}
	
		var eventHandle,table, rowData, date, day, month, year, lengthTable, enablePaging,activeDate,receptorName,relationship,floor,technicalOrder;
		var indexCertificateRow, indexExtensorRow;
		var generalListCertificateValue, generalListCertificateValueExtensor,generalListCertificateTestDownloadValue,generalListCertificateTestPingValue,generalListCertificateTestSpeedtestValue;
		var populateTableCertificate, populateTableExtensorCertificate;
		var unitOfMeasurement = "Kbps";
				
		var timeToRefreshDatatables=10;
		var captionNotify = "Error";
		var timeoutNotify = 5000;
		var bgColorNotify = "red";
		var fgColorNotify = "#FFFFFF";
		var getSnifferTestWifiCPE=[];
		var getVisibleNetworksTestWifiCPE=[];
		var getSnifferTestWifiExtensor=[];
		var getVisibleNetworksTestWifiExtensor=[];
		var getRoomsTestWifi=[];
		var getRoomsLocation=[];
		var getRooms=[];
		$(function() {

			/* 0=reportes 1=administracion */
/*
			$.each($("div div ul a"), function(i, item) {
				if (i == 0) {
					$(this).css("background-color", "rgb(154, 22, 22)");
				}
			});
*/
			/* CODIGO PARA RECUPERAR LOS IDS A LA HORA DE ELIMINAR VARIOS REGISTROS var table = $('#example').DataTable(); $("#childShow").css("display","block"); $.each($("nav ul li"), function( i, item ) { 1=dashboard 2=listados 6=graficos if(i==2){ $(this).children(":first").css("background-color","rgb(154, 22, 22)"); } }); */
		});
	</script>
</head>	
		


<body class="metro" ng-app ng-controller="mainController">
	<div id="wrapper">
		<div id="header">
			<!-- MENU --> <?php
			include "../layouts/menu.php";
		?>
			<!-- END MENU -->
		</div>
		<div id="content">
			<div id="sidebar">
				<!-- SIDEBAR --> 
			<?php 
			//	$c = 1;
				$sidebar=1;
				include "../layouts/sidebar.php";
			?>
				<!-- END SIDEBAR -->
			</div>
			<div id="main">
				<?php
				include 'generalListCertificate.php';
			?> <?php
				include 'generalListCertificateModalDetailCertificate.php';
			?> <?php
				include 'generalListCertificateModalDetailCertificateExtensor.php';
			?>
			<?php
				include 'generalListCertificateModalDetailTests.php';
			?>
			</div>
		</div>
		<footer>
			<?php
			include '../includes/footer.php';
		?>
		</footer>
	</div>
</body></html>