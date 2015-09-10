<?php

//header('Content-type: application/pdf');


require('../../lib/pdf/fpdf.php');

/*
header('Content-type: application/pdf');
header('Content-Disposition: attachment; filename="yourfilename.pdf');
header('Cache-Control: private');
header('Pragma: private');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

*/
//	$data = json_decode(stripslashes($_POST['data']));
//	var_dump ($data);
//		var_dump ($d);

$var1=$_POST["rutClient"];
$var2=$_POST["planService"];
$var3=$_POST["cpe"];
$var4=$_POST["modelCpe"];
$var5=$_POST["macCpe"];
$var6=$_POST["certificateState"];
$var7=$_POST["certificateDate"];

/*
if (!empty($_POST)){
	
	$data=$_POST["data"];
	$data=json_decode("$data",true);
//	echo "key1 : ".$data[1]["rutClient"];
	
//	echo count($data);
/*	
	for($i=0;$i<count($data);$i++){
		echo $data[$i]["rutClient"];
		echo $data[$i]["planService"];
		echo $data[$i]["cpe"];
	}
	
	
}else{
	echo "no se ha recibido nada";
}

*/



$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->Cell(40,10,"hola");
//$pdf->Output('yourfilename.pdf','D');

$rand = rand(1,1000000);

//Output the document F means save to server, D for download window popup
$pdf->Output('weld.pdf','F');

$url = "http://www.".$_SERVER["HTTP_HOST"]."/weld.pdf";

echo $url;

header("Content-disposition: attachment; filename=weld.pdf");
header("Content-type: application/pdf");
readfile("weld.pdf");

exit();
//$pdf->Output('yourfilename.pdf','D');
//$pdf->Output('yourfilename.pdf','I');


//header('Content-type: application/pdf');
//header('Content-Disposition: attachment; filename="downloaded.pdf"');
//readfile('original.pdf');
/*
define('FPDF_FONTPATH', 'font/');
//require('html_table.php');
require('../../controller/htmlTableGenerate.php');

$pdf=new PDF();
$pdf->AddPage();
$pdf->SetFont('Arial', '', 12);

$html='<table border="1">
<tr>
<td width="200" height="30">cell 1</td><td width="200" height="30">cell 2</td>
</tr>
<tr>
<td width="200" height="30">cell 3</td><td width="200" height="30">cell 4</td>
</tr>
</table>';

$pdf->WriteHTML($html);
$pdf->Output();
*/
/*
foreach ($_POST["rutClient"] as $email) {
	echo json_encode($email);
}



  foreach($data as $d){
     echo $d["rutClient"];
  }
  

if(isset($_POST['datatableDataFiltered'])) {
	$data = json_decode($_POST['rutClient']);
	$settings_messages = $data['rutClient']; //  'settings_messages' is a key in the javascript array with value of 0.
	echo $settings_messages;
	exit();
}else{
	echo "no se ha recibido ningun valor";
}

*/



?>