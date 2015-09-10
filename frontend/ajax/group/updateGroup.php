<?php

$sourceJsonFile="../../json/group/group.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string);


$id=$_POST["id"];
$name=$_POST["name"];
$typeId=$_POST["typeId"];
$active=$_POST["active"];

foreach ($elementsHtml->data as $item):
	if($item->_id==$id){
		$item->name=$name;
		$item->type=$typeId;
		$item->active=$active;
	}
endforeach;

$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);

$data = array(); 

$data["status"]=true;
$data["caption"] = '<i class="icon-checkmark"></i> Grupo';
$data["content"] = "Información modificada satisfactoriamente";

echo json_encode($data);

?>