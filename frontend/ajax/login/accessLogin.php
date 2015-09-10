<?php

function loadJsonFromWebService() {

//	$url = "http://devel1.baking.cl/techwizard/stats/getCertificados/";
	$url = "http://".$_SERVER["SERVER_NAME"]."/techwizard/general/getParam/";
	$str = file_get_contents($url);
	$url = json_decode($str, true);
	
	return $url;
	
}

session_start();

$errors = array();  	
$data = array(); 		

if(!isset($_POST)){
	header('Location: ../../login/');	
}

if (empty($_POST['nameGroup']))
	$errors['nameGroup'] = '';

if (empty($_POST['nameUser']))
	$errors['nameUser'] = '';
	
if (empty($_POST['groupPrivileges']))
	$errors['groupPrivileges'] = '';

if (empty($_POST['lang']))
	$errors['lang'] = '';

if (empty($_POST['password']))
	$errors['password'] = '';

if (empty($_POST['username']))
	$errors['username'] = '';

if ( ! empty($errors)) {
	$data['success'] = false;
	$data['errors']  = $errors;
} else {

	$nameGroup=$_POST['nameGroup'];
	$nameUser=$_POST['nameUser'];
	$groupPrivileges=$_POST['groupPrivileges'];
	$settings=loadJsonFromWebService();
	
	$_SESSION['group']=$nameGroup;
	$_SESSION['name']=$nameUser;
	$_SESSION['password']=$_POST['password'];
	$_SESSION['username']=$_POST['username'];
	$_SESSION['FORMAT0001']=$settings["data"][0]["FORMAT0001"];
	$_SESSION['FORMAT0002']=$settings["data"][0]["FORMAT0002"];
	$_SESSION['lang']=substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
	$_SESSION['lang']=(!empty($_POST['lang'])) ? $_POST['lang']:$company[$_SERVER["SERVER_NAME"]]['LANGUAGE'];
//	$_SESSION['lang']='en';

    $_SESSION['start'] = time(); // Taking now logged in time.   
            
	// Ending a session in 50 minutes from the starting time.
	$_SESSION['expire'] = $_SESSION['start'] + (50 * 60);
	$_SESSION['access'] = $groupPrivileges;

//	echo $_SESSION['access'];

	$permiso = preg_split ("[\|]" , $groupPrivileges);

	$reports0=array("sectionDashboard","sectionGeneralListCertificate","sectionCertifiedHomeCoverage","sectionCertifiedHighPropagation","sectionCertifiedTime","sectionSpeedtest");
	$reports1=array("../dashboard/","../generalListCertificate/","../certifiedHomeCoverage/","../certifiedHighPropagation/","../certifiedTime/","../speedtest/");
	
	$manager0=array("sectionGroup","sectionUser","sectionPlanService","sectionRoom","sectionCPEType","sectionCPEModel","sectionExtensorType","sectionExtensorModel","sectionApplicationSettings");
	$manager1=array("../group/","../user/","../planService/","../room/","../cpeType/","../cpeModel/","../extensorType/","../extensorModel/","../settingAplication/");
	
	$routeAccess=array("../dashboard/","../generalListCertificate/","../certifiedHomeCoverage/","../certifiedHighPropagation/","../certifiedTime/","../speedtest/","../group/","../user/","../planService/","../room/","../cpeType/","../cpeModel/","../extensorType/","../extensorModel/","../settingAplication/");
	
	$permisoVisualizar=array();
	$permisoVisualizarPlace=array();
	
	$flagReport=false;
	$flagManager=false;

	foreach ($permiso as $index => $value) {			
		$permiso1 = preg_split ("[\,]", $value);
		if($permiso1[1]==1){
			array_push($permisoVisualizar,$index);
		}
	}
	
	//reportes
	foreach ($permisoVisualizar as $index => $value) {				
		if($value<count($reports1)){
			if($flagReport==false){
				$flagReport=true;
				$_SESSION["reportHref"]=$routeAccess[$value];
			}  
		}
	}
	
	//administracion
	foreach ($permisoVisualizar as $index => $value) {
		if($index>=(count($reports1))-1){
			if($flagManager==false){
				$flagManager=true;
				$_SESSION["managerHref"]=$routeAccess[$value+1];
			}  
		}
	}

	foreach ($permiso as $index => $access) {

		$permiso1 = preg_split ("[\,]", $access);

		if($permiso1[1]==1){
			$flag=true;
			switch ($permiso1[0]) {
				case 'sectionDashboard':
					$redirection="../dashboard/";
					$data['redirection']=$redirection;
					break;
				case 'sectionGeneralListCertificate':
					$redirection="../generalListCertificate/";
					$data['redirection']=$redirection;
					break;			
				case 'sectionCertifiedHomeCoverage':
					$redirection="../certifiedHomeCoverage/";
					$data['redirection']=$redirection;
					break;
				case 'sectionCertifiedHighPropagation':
					$redirection="../certifiedHighPropagation/";
					$data['redirection']=$redirection;
					break;
				case 'sectionCertifiedTime':
					$redirection="../certifiedTime/";
					$data['redirection']=$redirection;
					break;
				case 'sectionSpeedtest':
					$redirection="../speedtest/";
					$data['redirection']=$redirection;
					break;
				case 'sectionGroup':
					$redirection="../group/";
					$data['redirection']=$redirection;
					break;
				case 'sectionUser':
					$redirection="../user/";
					$data['redirection']=$redirection;
					break;
				case 'sectionPlanService':
					$redirection="../planService/";
					$data['redirection']=$redirection;
					break;
				case 'sectionRoom':
					$redirection="../room/";
					$data['redirection']=$redirection;
					break;
				case 'sectionCPEType':
					$redirection="../cpeType/";
					$data['redirection']=$redirection;
					break;
				case 'sectionCPEModel':
					$redirection="../cpeModel/";
					$data['redirection']=$redirection;
					break;
				case 'sectionExtensorType':
					$redirection="../extensorType/";
					$data['redirection']=$redirection;
					break;
				case 'sectionExtensorModel':
					$redirection="../extensorModel/";
					$data['redirection']=$redirection;
					break;
				case 'sectionApplicationSettings':
					$redirection="../settingAplication/";
					$data['redirection']=$redirection;
					break;
			}
			$_SESSION['redirection']=$redirection;
			
//			echo $_SESSION['access']. " ".$data['redirection']." ".$_SESSION["reportHref"]." ".$_SESSION["managerHref"];
			
			$data['success'] = true;
			break;

		}
		
	}
	
	if(!$flag){
		$errors['session'] = 'Lo sentimos, no tiene permisos para acceder al sitio.';
		$data['errors']  = $errors;
		$data['success'] = false;
		$data['redirect'] = "../changePassword/#ChangePasswordModal";
	}

}
	
echo json_encode($data);

exit();
?>