<?php
$dir_images = "images";
/*
$data = file_get_contents("php://input");
if(isset($_GET["name"]) && $_GET["name"] != ""){
	file_put_contents("$dir_images/".$_GET["name"], $data);
}
*/

$result["status"] = false;

error_log(print_r($_FILES,true));

if(isset($_FILES['file']['name'])) {
	$saveto = "$dir_images/".$_FILES["file"]["name"];
      	$respuesta = move_uploaded_file($_FILES['file']['tmp_name'], $saveto);
        error_log(print_r($respuesta,true));

	$result["status"] = true;
}

echo json_encode($result);
?>

