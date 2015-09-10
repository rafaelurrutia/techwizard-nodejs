<?php 

include'../controller/checkTimeOut.php'; 

$permiso = split ("\|", $_SESSION['access']);
$permiso1 = split ("\,", $permiso[0]);

if($permiso1[1]==0){
	header('Location: ../errortw/');	
}

$_SESSION['place']=0;
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
		<script src="../js/dashboard/jquery/dashboard.js"></script>

		<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/dashboard.css"; ?>">		
        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/navigationBar.css"; ?>">
        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/sideBar.css"; ?>">
        <link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/hint.css"; ?>">

		<script src="../js/dashboard/angular/app.js"></script>	
<!--        <link rel="stylesheet" href="../css/table.css">	-->
<!--        <link rel="stylesheet" href="../lib/fontawesome/css/font-awesome.min.css"> -->
<!--        <link rel="stylesheet" href="../css/hint.css">	-->
<!--        <script src="../js/user/angular/angular.js"></script>	-->

        <!--    FIN LIBRERIAS LOCALES   -->
        <style>

            div[class="table_body"] > div[class="table_head"] > button{
                border-radius:8px;
                -moz-border-radius: 8px;
                -webkit-border-radius: 8px;
            }

            .bottom{
                background-color: #FFF;
                height: 50px;
                margin: 5px;
            }

            .row_selected{
                background-color: #9FAFD1 !important; 
            }
        
        </style>
        <script type="text/javascript" language="JavaScript">

            $(function( ) {
/*
                 $.each($("nav ul li"), function( i, item ) {

                    if($(this).text()==" Dashboard"){
                        $(this).children(":first").css("background-color","rgb(154, 22, 22)");
                    }
                 });
*/
/*
                 $.each($("div div ul a"), function( i, item ) {
                    // 	0=reportes 
                    //	1=administracion
                    if(i==0){
                        $(this).css("background-color","rgb(154, 22, 22)");
                    }        
                });                
*/                
            });

        </script>


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

            <?php include'dashboard.php'; ?>            

        </div>        
    </div>

    <footer>
        <?php include'../includes/footer.php'; ?>
    </footer>

</div>
        

</body>
</html>
