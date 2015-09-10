<?php

$sourceJsonFile="../../json/group/group.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string);

$ids=$_GET["id"];
$data = array(); 

$results = count($elementsHtml->data);
for ($r = 0; $r < $results; $r++){
	if($elementsHtml->data[$r]->_id == $ids){
		$data["_id"]=$elementsHtml->data[$r]->_id;
		$data["name"] =$elementsHtml->data[$r]->name;
		$data["typeId"] =$elementsHtml->data[$r]->type;
		$data["active"] =$elementsHtml->data[$r]->active;
		$data["privileges"] =$elementsHtml->data[$r]->privileges;				
	}
 }

$elementsHtml->data = array_values($elementsHtml->data);

$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);


$data["status"]=true;

echo json_encode($data);

?>