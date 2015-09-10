<?php

switch($_SESSION['lang']) {
	case 'es':
		$footText="";
		break;
	case 'en':
		$footText="";
		break;
	default:   	
}

?>

<div style="margin-top: 5px;"><?php echo $footText; ?> 
	<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEFOOT']; ?> 
	© Copyright <?php echo date("Y"); ?> version <?php echo $company[$_SERVER["SERVER_NAME"]]['VERSION']; ?>
<!--	<img src="../img/logo-set1.png" style="width:7.5%;" />  
	© Copyright 2014 Baking -->
	
</div>
