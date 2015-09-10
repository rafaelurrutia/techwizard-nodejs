<?php

$sourceJsonFile="../../json/user/user.json";
$string = file_get_contents($sourceJsonFile);
$elementsHtml=json_decode($string);

$ids=$_GET["id"];
$data = array(); 

$results = count($elementsHtml->data);
for ($r = 0; $r < $results; $r++){
	if($elementsHtml->data[$r]->_id == $ids){
		$data["_id"]=$elementsHtml->data[$r]->_id;
		$data["group"] =$elementsHtml->data[$r]->group;
		$data["username"] =$elementsHtml->data[$r]->username;
		$data["name"] =$elementsHtml->data[$r]->name;
		$data["lastName"] =$elementsHtml->data[$r]->lastName;
		$data["password"] =$elementsHtml->data[$r]->password;
		$data["email"] =$elementsHtml->data[$r]->email;
		$data["phone"] =$elementsHtml->data[$r]->phone;
		$data["active"] =$elementsHtml->data[$r]->active;				
	}
 }

$elementsHtml->data = array_values($elementsHtml->data);

$jsonData = json_encode($elementsHtml);
file_put_contents($sourceJsonFile,$jsonData);


$data["status"]=true;

echo json_encode($data);

?>