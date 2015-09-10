<?php

$sourceJsonFile="../json/extensorModel/extensorModel.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string);

$var1=$_POST["id"];
$var2=$_POST["name"];
$var3=$_POST["extensorType"];


/*
$var1=count($elementsHtml['data'])+1;
$var2=$_POST[""];
$var3=$_POST[""];
$var4=$_POST[""];
$var5=$_POST[""];
*/

/*
$id=8;
$name="alemania1";
$defect=0;
$active=1;
*/

foreach ($elementsHtml->data as $item):
	if($item->id==$var1){
		$item->name=$var2;
		$item->extensorType=$var3;
	}
endforeach;

$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);

$data = array(); 

$data["succes"]=true;
$data["caption"] = '<i class="icon-checkmark"></i> Modelo Extensor';
$data["content"] = "Información modificada satisfactoriamente";

echo json_encode($data);

?>