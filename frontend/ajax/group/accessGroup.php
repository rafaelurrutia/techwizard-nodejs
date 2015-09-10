<?php

$sourceJsonFile="../json/group/groups.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string,true);

$myArray = $_REQUEST['access'];

/*
if ($_SERVER["REQUEST_METHOD"] == "POST") {  
    $groupDefault=$_POST["groupDefault"];
    $count = count($groupDefault);
}    
*/

$id=count($elementsHtml['data'])+1;
$name=$_POST["name"];
$defect=$_POST["groupDefault"];
$active=1;

$data= array('id' => $id, 'name' => $name, 'defect' => $defect, 'active' => $active);
array_push($elementsHtml['data'],$data);
$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);

$data = array(); 

$data["succes"]=true;
$data["caption"] = '<i class="icon-checkmark"></i> Grupo';
$data["content"] = "Información ingresada satisfactoriamente";

echo json_encode($data);

?>