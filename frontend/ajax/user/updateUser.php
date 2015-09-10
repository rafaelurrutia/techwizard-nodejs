<?php

$sourceJsonFile="../../json/user/user.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string);

$var1=$_POST["id"];
$var2=$_POST["group"];
$var3=$_POST["username"];
$var4=$_POST["name"];
$var5=$_POST["lastName"];
$var6=$_POST["password"];
$var7=$_POST["email"];
$var8=$_POST["phone"];
$var9=$_POST["active"];

/*
$var1=count($elementsHtml['data'])+1;
$var2=$_POST[""];
$var3=$_POST[""];
$var4=$_POST[""];
$var5=$_POST[""];
*/

foreach ($elementsHtml->data as $item):
	if($item->_id==$var1){
		$item->group=$var2;
		$item->username=$var3;
		$item->name=$var4;
		$item->lastName=$var5;
		$item->password=$var6;
		$item->email=$var7;
		$item->phone=$var8;
		$item->active=$var9;
	}
endforeach;

$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);

$data = array(); 

$data["status"]=true;
$data["caption"] = '<i class="icon-checkmark"></i> Usuario';
$data["content"] = "Información modificada satisfactoriamente";

echo json_encode($data);

?>