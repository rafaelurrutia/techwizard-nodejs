<?php

$sourceJsonFile="../json/room/room.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string);

$var1=$_POST["id"];
$var2=$_POST["name"];

foreach ($elementsHtml->data as $item):
	if($item->id==$var1){
		$item->name=$var2;
	}
endforeach;

$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);

$data = array(); 

$data["succes"]=true;
$data["caption"] = '<i class="icon-checkmark"></i> Habitación';
$data["content"] = "Información modificada satisfactoriamente";

echo json_encode($data);

?>