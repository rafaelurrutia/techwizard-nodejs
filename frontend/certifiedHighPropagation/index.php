<?php 

include'../controller/checkTimeOut.php'; 
$permiso = split ("\|", $_SESSION['access']);
$permiso1 = split ("\,", $permiso[12]);

if($permiso1[1]==0){
	header('Location: ../errortw/');	
}

$_SESSION['place']=2;
$_SESSION['placeNavigationBar']=0;

?>
<!DOCTYPE html>
<html class="loading">

    <head>
        <title>TechWizard</title>

        <!--   INCLUDE METAS Y LIBRERIAS -->
        <?php include'../includes/head.php'; ?>
        <!--    FIN INCLUDE METAS Y LIBRERIAS -->

       <!--    LIBRESRIAS LOCALES  -->      

        <script src="../lib/metro/js/metro-dropdown.js"></script><!-- SIDEBAR	-->
        
<!--        <script src="../js/default/detectBrowser.js"></script><!--	SI NO ES CHROME REDIRIGE A PAGINA DE ERROR	-->

		<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/certifiedHighPropagation.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/navigationBar.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/sideBar.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/hint.css"; ?>">

	
		<script src="http://code.highcharts.com/highcharts.js"></script>
		<script src="http://code.highcharts.com/modules/exporting.js"></script>

<!--        <link rel="stylesheet" href="../css/table.css">	-->

		<script src="../js/certificateWithExtensors/angular/app.js"></script>
		<script src="../js/certificateWithExtensors/jquery/certificateWithExtensors.js"></script>	

        <!--    FIN LIBRERIAS LOCALES   -->
        
    </head>
    
<body class="metro" ng-app ng-controller="mainController">
<div id="wrapper">

    <div id="header">
        <!--    MENU    -->
        <?php include "../layouts/menu.php"; ?>
        <!--  END MENU    -->
    </div>

    <div id="content">

        <div id="sidebar">
            <!--    SIDEBAR    -->
            <?php 
            $sidebar=1;
            include "../layouts/sidebar.php"; ?>
            <!--  END SIDEBAR    -->
        </div>

        <div id="main">

            <?php include'certifiedHighPropagation.php'; ?>            

        </div>        
    </div>

    <footer>
        <?php include'../includes/footer.php'; ?>
    </footer>

</div>
        

</body>
</html>
