<?php

if(!isset($_POST["data"])) {
	header('Location: ../errortw/');
}

$str_json = file_get_contents('php://input');

error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
date_default_timezone_set('Europe/London');

if (PHP_SAPI == 'cli')
	die('This example should only be run from a Web Browser');

/** Include PHPExcel */
require_once '../lib/phpexcel/Classes/PHPExcel.php';

function saveExcelToLocalFile($objWriter){
    // make sure you have permission to write to directory
    $filePath = '../tmp/saved_File.xlsx';
    $objWriter->save($filePath);
    return $filePath;
}

function addImage($objPHPExcel){
    $objDrawing = new PHPExcel_Worksheet_Drawing();
    $objDrawing->setWorksheet($objPHPExcel->getActiveSheet());
    $objDrawing->setName("name");
    $objDrawing->setDescription("Description");
//    $objDrawing->setPath('../img/logo-set1.png');
	$objDrawing->setPath('../img/LogoBSW.png');    
    $objDrawing->setCoordinates('A1');
    $objDrawing->setOffsetX(5);
    $objDrawing->setWidth(115);	
    $objDrawing->setOffsetY(5);    
}

function addImageFooter($objPHPExcel,$index){
    $objDrawing = new PHPExcel_Worksheet_Drawing();
    $objDrawing->setWorksheet($objPHPExcel->getActiveSheet());
    $objDrawing->setName("name");
    $objDrawing->setDescription("Description");
    $objDrawing->setPath('../img/LogoBSW.png');    
    $objDrawing->setCoordinates("A".$index);
    $objDrawing->setOffsetX(10);
    $objDrawing->setWidth(20);
    $objDrawing->setHeight(20);
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
    
    // orientacion vertical
    // hoja a4
    // hoja carta chile 11 × 8½ pulgadas o 21,59 × 27,94 cm
    // ajustar a una pagina de ancho
    // ajustar a nada de alto
    
    $objPHPExcel->getActiveSheet()->getPageSetup()->setOrientation(PHPExcel_Worksheet_PageSetup::ORIENTATION_PORTRAIT);
    $objPHPExcel->getActiveSheet()->getPageSetup()->setPaperSize(PHPExcel_Worksheet_PageSetup::PAPERSIZE_A4);
    $objPHPExcel->getActiveSheet()->getPageSetup()->setFitToPage(true);
    $objPHPExcel->getActiveSheet()->getPageSetup()->setFitToWidth(1);
    $objPHPExcel->getActiveSheet()->getPageSetup()->setFitToHeight(0);    
}

function getPostValues(){
	
	$data=$_POST["data"];
	$data=json_decode("$data",true);
	
	return $data;
}

function getCountValues(){
	$data=$_POST["data"];
	$data=json_decode("$data",true);
	return count($data); 
}

/*
$title="Listado General Certificados";


$title="General List Certificates";

// asignar variables cabecera idioma

$headerTableColumn['es'] = array(
	'title'	=> 'Listado General Certificados',
	'headerTableColumn1' => 'Id Cliente',
	'headerTableColumn2' => 'Id Técnico',
	'headerTableColumn3' => 'Plan Contratación',
	'headerTableColumn4' => 'CPE',
	'headerTableColumn5' => 'Modelo CPE',
	'headerTableColumn6' => 'MAC CPE',
	'headerTableColumn7' => 'Estado Certificado',
	'headerTableColumn8' => 'Fecha Certificación Creada',
	'headerTableColumn9' => 'Fecha Certificación Activa'
);

$headerTableColumn['en'] = array(
	'title'	=> 'General List Certificates',
	'headerTableColumn1' => 'Id Client',
	'headerTableColumn2' => 'Id Technical',
	'headerTableColumn3' => 'Service Plan',
	'headerTableColumn4' => 'CPE',
	'headerTableColumn5' => 'CPE Model',
	'headerTableColumn6' => 'CPE MAC',
	'headerTableColumn7' => 'Certificate State',
	'headerTableColumn8' => 'Created Certificate Date',
	'headerTableColumn9' => 'Active Certificate Date'
);

$headerTableColumn1="Id Cliente";
$headerTableColumn2="Id Técnico";
$headerTableColumn3="Plan Contratación";
$headerTableColumn4="CPE";
$headerTableColumn5="Modelo CPE";
$headerTableColumn6="MAC CPE";
$headerTableColumn7="Certificate State";
$headerTableColumn8="Created Certificate Date";
$headerTableColumn9="Active Certificate Date";

// ingles
$headerTableColumn1="Id Client";
$headerTableColumn2="Id Technical";
$headerTableColumn3="Service Plan";
$headerTableColumn4="CPE";
$headerTableColumn5="CPE Model";
$headerTableColumn6="CPE MAC";
$headerTableColumn7="Certificate State";
$headerTableColumn8="Created Certificate Date";
$headerTableColumn9="Active Certificate Date";
*/

$language=getPostValues();
$language=$language[0]["language"];


switch ($language) {
    case 'en':
		$title="General List Certificates";
        $headerTableColumn1="Client Id";
		$headerTableColumn2="Technical Id";
		$headerTableColumn3="Package";
		$headerTableColumn4="CPE";
		$headerTableColumn5="CPE model";
		$headerTableColumn6="CPE MAC";
		$headerTableColumn7="Certificate state";
		$headerTableColumn8="Created certificate date";
		$headerTableColumn9="Active cartificate date";
        break;
	case 'es':
		$title="Listado General de Certificados";
        $headerTableColumn1="Id Cliente";
		$headerTableColumn2="Id Técnico";
		$headerTableColumn3="Plan Contratación";
		$headerTableColumn4="CPE";
		$headerTableColumn5="Modelo CPE";
		$headerTableColumn6="MAC CPE";
		$headerTableColumn7="Estado Certificado";
		$headerTableColumn8="Fecha Certificación Creada";
		$headerTableColumn9="Fecha Certificación Activa";
        break;
	case 'pt_BR':
		$title="Lista Geral Certificados";
        $headerTableColumn1="Id Cliente";
		$headerTableColumn2="Id Técnico";
		$headerTableColumn3="Plano Contratado";
		$headerTableColumn4="CPE";
		$headerTableColumn5="Modelo CPE";
		$headerTableColumn6="MAC CPE";
		$headerTableColumn7="Estado Certificado";
		$headerTableColumn8="Data Certificação Criada";
		$headerTableColumn9="Data Certificação Ativa";
        break;
	default:        
		$title="General List Certificates";
        $headerTableColumn1="Id Client";
		$headerTableColumn2="Id Technical";
		$headerTableColumn3="Service Plan";
		$headerTableColumn4="CPE";
		$headerTableColumn5="CPE Model";
		$headerTableColumn6="CPE MAC";
		$headerTableColumn7="Certificate State";
		$headerTableColumn8="Created Certificate Date";
		$headerTableColumn9="Active Certificate Date";
}

// Create new PHPExcel object
$objPHPExcel = new PHPExcel();

setDocumentProperties($objPHPExcel);

$styleHeader = array(
    'fill' => array(
        'type' => PHPExcel_Style_Fill::FILL_SOLID,
        'startcolor' => array(
            'rgb' => '3490DF',
        ),
    )
    
);

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

$objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A3', $headerTableColumn1)
            ->setCellValue('B3', $headerTableColumn2)
            ->setCellValue('C3', $headerTableColumn3)
            ->setCellValue('D3', $headerTableColumn4)
            ->setCellValue('E3', $headerTableColumn5)
            ->setCellValue('F3', $headerTableColumn6)
            ->setCellValue('G3', $headerTableColumn7)
			->setCellValue('H3', $headerTableColumn8)
			->setCellValue('I3', $headerTableColumn9);

$objPHPExcel->getActiveSheet()->getStyle('A3:I3')->applyFromArray($styleHeaderTableColumn);
$objPHPExcel->getActiveSheet()->getStyle('A1:I2')->applyFromArray($styleHeader);

$data=getPostValues();
for($i=4;$i<getCountValues()+4;$i++){
    $objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A'.$i, $data[$i-4]["rutClient"])
            ->setCellValue('B'.$i, $data[$i-4]["rutTechnical"])
			->setCellValue('C'.$i, $data[$i-4]["planService"])
            ->setCellValue('D'.$i, $data[$i-4]["cpe"])
            ->setCellValue('E'.$i, $data[$i-4]["modelCpe"])
            ->setCellValue('F'.$i, $data[$i-4]["macCpe"])
            ->setCellValue('G'.$i, $data[$i-4]["certificateState"])
            ->setCellValue('H'.$i, $data[$i-4]["certificateDateCreate"])
			->setCellValue('I'.$i, $data[$i-4]["certificateDateActive"]);
}

$objPHPExcel->setActiveSheetIndex(0)->mergeCells("A".$i.":I".$i);
$objPHPExcel->getActiveSheet()->getStyle("A".$i)->applyFromArray($styleHeaderTableColumn);

//addImageFooter($objPHPExcel,$i);
$objPHPExcel->getActiveSheet()->getStyle("A".$i)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

$objPHPExcel->getActiveSheet()->setTitle($title);

$objPHPExcel->getActiveSheet()->getColumnDimension('A')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('B')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('C')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('D')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('E')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('F')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('G')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('H')->setAutoSize(true);
$objPHPExcel->getActiveSheet()->getColumnDimension('I')->setAutoSize(true);

setOrientationSizeScalingPage($objPHPExcel);
addImage($objPHPExcel);

$objPHPExcel->setActiveSheetIndex(0);

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
$response = array(
	'success' => true,
	'url' => saveExcelToLocalFile($objWriter)
 );
 
echo json_encode($response);

exit();
 
/*
// Redirect output to a client’s web browser (Excel2007)
header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Disposition: attachment;filename="01simple.xlsx"');
header('Cache-Control: max-age=0');
// If you're serving to IE 9, then the following may be needed
header('Cache-Control: max-age=1');

// If you're serving to IE over SSL, then the following may be needed
header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
header ('Pragma: public'); // HTTP/1.0

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
$objWriter->save('php://output');
exit;
*/