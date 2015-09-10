<?php
$dir_images = "images";

if(isset($_GET["name"]) && $_GET["name"] != ""){
	if(file_exists("$dir_images/".$_GET["name"])){
		unlink("$dir_images/".$_GET["name"]);
	}
}
?>
