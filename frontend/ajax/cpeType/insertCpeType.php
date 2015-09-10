<?php

$sourceJsonFile="../json/cpeType/cpeType.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string,true);

/*
if ($_SERVER["REQUEST_METHOD"] == "POST") {  
    $groupDefault=$_POST["groupDefault"];
    $count = count($groupDefault);
}    
*/

$var1=count($elementsHtml['data'])+1;
$var2=$_POST["name"];

/*
$var1=count($elementsHtml['data'])+1;
$var2=$_POST[""];
$var3=$_POST[""];
$var4=$_POST[""];
$var5=$_POST[""];
*/


$data= array('id' => $var1, 'name' => $var2);
array_push($elementsHtml['data'],$data);
$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);

$data = array(); 

$data["succes"]=true;
$data["caption"] = '<i class="icon-checkmark"></i> Tipo CPE';
$data["content"] = "Información ingresada satisfactoriamente";

echo json_encode($data);

?>