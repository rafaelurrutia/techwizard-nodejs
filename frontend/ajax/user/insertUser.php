<?php

$sourceJsonFile="../../json/user/user.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string,true);

/*
if ($_SERVER["REQUEST_METHOD"] == "POST") {  
    $groupDefault=$_POST["groupDefault"];
    $count = count($groupDefault);
}    
*/

$var1=md5(rand(100, 200));
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


$data= array('_id' => $var1, 'group' => $var2, 'username' => $var3, 'name' => $var4, 'lastName' => $var5, 'password' => $var6, 'email' => $var7, 'phone' => $var8, 'active' => $var9);
array_push($elementsHtml['data'],$data);
$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);

$data = array(); 

$data["status"]=true;
$data["caption"] = '<i class="icon-checkmark"></i> Usuario';
$data["content"] = "Información ingresada satisfactoriamente";

echo json_encode($data);

?>