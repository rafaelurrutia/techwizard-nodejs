<?php 

include'../controller/checkTimeOut.php'; 
$permiso = split ("\|", $_SESSION['access']);
$permiso1 = split ("\,", $permiso[14]);

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

		<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/speedtest.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/navigationBar.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/sideBar.css"; ?>">
		<link rel="stylesheet" href="<?php echo "../css/".$_SERVER["SERVER_NAME"]."/hint.css"; ?>">

		<script src="http://code.highcharts.com/highcharts.js"></script>
		<script src="http://code.highcharts.com/modules/exporting.js"></script>
		<script src="../js/certificateByStatus/jquery/certificateByStatus.js"></script>
		<script src="../js/certificateByStatus/angular/app.js"></script>

<!--        <link rel="stylesheet" href="../css/table.css">	-->

<!--        <script src="../js/user/angular/angular.js"></script>	-->

        <!--    FIN LIBRERIAS LOCALES   -->
        
        <script type="text/javascript" language="JavaScript"><!-- GRAFICOS-->    	
        	
        	var url = {
				"read" 				: "/techwizard/stats/certbystatus/"
			};
        	
        	var statusTextName;
        	
	    	
//	    	delete graphs,graph,getJson,getGraphicObject;
   	 	    	
		$(function () {


			$("#withExtensor").on("mouseover", function() {
				
				chart = $('#container').highcharts();
				var point = chart.series[0].data[0];
				
				point.select();
				chart.tooltip.refresh(point);
				point.setState('hover');
		
				chart.series[0].data[1].update({
					selected: false,
					sliced: false
				});

				chart.series[0].data[0].update({
					selected: true,
					sliced: true
				});
			
			});
			
			$("#selectCertificatedState tr").on("mouseover", function() {
				var RowIndex=$(this).index();
				var chart = $('#container').highcharts();
				var point = chart.series[0].data[RowIndex];
				
				point.select();
				chart.tooltip.refresh(point);
				point.setState('hover');
					
				chart.series[0].data[RowIndex].update({
					selected: true,
			       	sliced: true			            
				});
				
			});
					
			$("#withoutExtensor").on("mouseover", function() {
				var chart = $('#container').highcharts();
				var point = chart.series[0].data[1];
				
				point.select();
				chart.tooltip.refresh(point);
				point.setState('hover');
					
			    chart.series[0].data[0].update({
					selected: false,
			       	sliced: false			            
				});
					
				chart.series[0].data[1].update({
					selected: true,
			       	sliced: true			            
				});

			});
				
			$("#selectCertificatedState tr").on("mouseleave", function() {
									
				var chart = $('#container').highcharts();
				var series = chart.series[0];
                var shift = series.data.length;

				for (index = 0; index < shift; ++index) {
					chart.series[0].data[index].update({
						selected: false,
						sliced: false			            
					});
				}
                				  
			});							
				
			
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

            <?php include'speedtest.php'; ?>            

        </div>        
    </div>

    <footer>
        <?php include'../includes/footer.php'; ?>
    </footer>

</div>
        

</body>
</html>
