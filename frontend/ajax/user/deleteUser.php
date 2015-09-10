<?php

$sourceJsonFile="../../json/user/user.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string);

$ids=$_POST["id"];

$results = count($elementsHtml->data);
for ($r = 0; $r < $results; $r++){
	if($elementsHtml->data[$r]->_id == $ids){
		unset($elementsHtml->data[$r]);		
	}
 }

$elementsHtml->data = array_values($elementsHtml->data);

$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);

$data = array(); 
$data["status"]=true;

echo json_encode($data);

?>