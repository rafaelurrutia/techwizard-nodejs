<?php

$sourceJsonFile="../json/groups.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string);


$id=$_POST["id"];
$name=$_POST["name"];
$defect=$_POST["groupDefault"];
$active=1;

/*
$id=8;
$name="alemania1";
$defect=0;
$active=1;
*/

foreach ($elementsHtml->data as $item):
	if($item->id==$id){
		$item->name=$name;
		$item->defect=$defect;
		$item->active=$active;
	}
endforeach;

$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);

$data = array(); 

$data["succes"]=true;
$data["caption"] = '<i class="icon-checkmark"></i> Grupo';
$data["content"] = "Información modificada satisfactoriamente";

echo json_encode($data);

?>