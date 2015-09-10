<?php

$sourceJsonFile="../../json/groups.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string);


if ($_SERVER["REQUEST_METHOD"] == "POST") {  
    $ids=$_POST["id"];
    $count = count($ids);
}    

$results = count($elementsHtml->data);
for ($r = 0; $r < $results; $r++){
	if(in_array($elementsHtml->data[$r]->id, $ids)){
		unset($elementsHtml->data[$r]);		
	}
 }

$elementsHtml->data = array_values($elementsHtml->data);

$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);

$data = array(); 

$data["succes"]=true;
$data["caption"] = '<i class="icon-checkmark"></i> Grupo';
$data["content"] = "Información eliminada satisfactoriamente";

echo json_encode($data);

?>