<?php
session_start();


 /*
$_SESSION['expire'] = $_SESSION['start'] + (50 * 60);
$_SESSION["access"] = "sectionDashboard,1|sectionGeneralListCertificate,1|sectionGroup,1,1,1,1,1|sectionUser,1,1,1,1|sectionPlanService,1,1,1,1|sectionRoom,1,1,1,1|sectionCPEType,1,1,1,1|sectionCPEModel,1,1,1,1|sectionExtensorType,1,1,1,1|sectionExtensorModel,1,1,1,1|sectionApplicationSettings,1,1|sectionCertifiedHomeCoverage,0|sectionCertifiedHighPropagation,1|sectionCertifiedTime,0|sectionSpeedtest,1|sectionSoftware,1";
$_SESSION["lang"]="es";

$_SESSION["group"]="ADMIN";
$_SESSION["name"]="baking";
$_SESSION["reportHref"]="../dashboard/";
$_SESSION["managerHref"]="../group/";
$_SESSION['redirection']="../dashboard/";
  
*/
if ((time() - $_SESSION['start']) > (60 * 50)) {
	session_unset();
	unset($_SESSION["name"]);
	unset($_SESSION["group"]);
	unset($_SESSION["start"]);
	unset($_SESSION["expire"]);
	session_destroy();

	$_SESSION = array();

	header('Status: 200');
	header('Location: ../login/');
	exit ;

}

//	if ((time() - $_SESSION['start']) > (60 * 30)) {
?>