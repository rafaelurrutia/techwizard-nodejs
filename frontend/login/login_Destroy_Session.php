<?php
	
	session_start();
	
	session_unset();
	unset($_SESSION["name"]);
	unset($_SESSION["group"]);
	unset($_SESSION["start"]);
	unset($_SESSION["expire"]);
	session_destroy();

	$_SESSION = array();

	header('Status: 200');
//	header('Location: ' . urlencode('../login/'));
	header('Location: ../login/');
	exit;

?>