<?php

switch($_SESSION['lang']) {
	case 'es':
		$source="../json/default/menu-es.json";
		break;
	case 'en':
		$source="../json/default/menu.json";
		break;
	case 'pt_BR':
		$source="../json/default/menu-pt_BR.json";
		break;	
	default:   	
}

$string = file_get_contents($source);
$elementsHtml=json_decode($string);

$acceso=array();
$reporte=array();
$administracion=array();
$software=array();
$menuAcceso=array();

$hrefNav=array($_SESSION["reportHref"],$_SESSION["managerHref"]);

foreach ($permiso as $index => $value) {
	$permisoAll = split ("\,", $value);	
	$acceso[$index]=$permisoAll[1];
	
	if(($index>=0&&$index<=1)||($index>=11&&$index<=14)){
		array_push($reporte,$acceso[$index]);		
	}else if($index>=2&&$index<=10){
		array_push($administracion,$acceso[$index]);
	}else if($index==15){
		array_push($software,$acceso[$index]);
	}
}

if (in_array(1, $reporte)) {
	$menuAcceso[0]=1;
}else{
	$menuAcceso[0]=0;
}

if (in_array(1, $administracion)) {
	$menuAcceso[1]=1;
}else{
	$menuAcceso[1]=0;
}

?>

<div class="navigation-bar dark">
    <div class="navigation-bar-content">
        <?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOTOPNAVBAR']; ?>
 <!--       <a href="<?php echo $_SESSION['redirection']; ?>" class="element"><img src="../img/logo-set11.png" width="25" height="19" style="margin-right: 5px"><b>vtr</b>.com</a> -->
        <span class="element-divider"></span>

        <a class="element1 pull-menu" href="#"></a>
        <ul class="element-menu">
<?php 
$i=0;
foreach ($elementsHtml->data as $menu):
/*		
	if($menuAcceso[$i]==1){		
		$active=($_SESSION['placeNavigationBar']==$i) ? 'active': '';
		echo '<a class="element brand '.$active.'" href="'.$menu->menuHref.'"><span class="'.$menu->menuIcon.'"></span> '.$menu->menuTitle.'</a>
		<span class="element-divider"></span>';		
	}
*/	
	if($menuAcceso[$i]==1){		
		$active=($_SESSION['placeNavigationBar']==$i) ? 'active': '';
		echo '<a class="element brand '.$active.'" href="'.$hrefNav[$i].'"><span class="'.$menu->menuIcon.'"></span> '.$menu->menuTitle.'</a>
		<span class="element-divider"></span>';		
	}

	$i++;
			
endforeach; ?>

            <div class="element place-right no-tablet-portrait no-phone">
                <a class="dropdown-toggle" href="#">
                    <span class="icon-cog"></span>
                </a>
                <ul class="dropdown-menu place-right" data-role="dropdown">
                    <li><a href="../changePassword/#ChangePasswordModal"><?php echo $elementsHtml->options[0]->menuTextChangePassword; ?></a></li>
                    <li><a href="../login/login_Destroy_Session.php"><?php echo $elementsHtml->options[0]->menuTextCloseSession; ?></a></li>                   
                </ul>
            </div>
            <div class="element place-right on-tablet-portrait on-phone no-desktop no-large">
                <a class="dropdown-toggle" href="#">
                    <span class="icon-cog"></span> <?php echo $elementsHtml->options[0]->menuTextOption; ?>
                </a>
                <ul class="dropdown-menu place-right" data-role="dropdown">
                    <li><a href="../changePassword/#ChangePasswordModal"><?php echo $elementsHtml->options[0]->menuTextChangePassword; ?></a></li>
                    <li><a href="../login/login_Destroy_Session.php"><?php echo $elementsHtml->options[0]->menuTextCloseSession; ?></a></li>
                </ul>
            </div>
            <span class="element-divider place-right"></span>
            <div class="no-tablet-portrait no-phone">
                <span class="element place-right"><?php echo $elementsHtml->options[0]->menuTextWelcomeUser; ?> <?php echo (isset($_SESSION['name']) ? $_SESSION['name'] : 'User');  ?></span>
                <span class="element-divider place-right"></span>
            </div>
        </ul>

    </div>
    <div class="border-bottom"></div>
</div>
