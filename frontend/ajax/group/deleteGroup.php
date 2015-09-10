<?php

$sourceJsonFile="../../json/group/group.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string);

/*
if ($_SERVER["REQUEST_METHOD"] == "POST") {  
    $ids=$_POST["id"];
    $count = count($ids);
}    
*/
$ids=$_POST["id"];
//$ids="149e9677a5989fd342ae44213df68868";
/*
$results = count($elementsHtml->data);
for ($r = 0; $r < $results; $r++){
	if(in_array($elementsHtml->data[$r]->id, $ids)){
		unset($elementsHtml->data[$r]);		
	}
 }

$elementsHtml->data = array_values($elementsHtml->data);
*/

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
$data["caption"] = '<i class="icon-checkmark"></i> Grupo';
$data["content"] = "Información eliminada satisfactoriamente";

echo json_encode($data);

?>