<?php 

include'../controller/checkTimeOut.php'; 
$permiso = split ("\|", $_SESSION['access']);
$permiso1 = split ("\,", $permiso[11]);

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

        <link rel="stylesheet" href="../css/navigationBar.css">
        <link rel="stylesheet" href="../lib/fontawesome/font-awesome.min.css">
        <link rel="stylesheet" href="../css/hint.css">

		<script src="http://code.highcharts.com/highcharts.js"></script>
		<script src="http://code.highcharts.com/modules/exporting.js"></script>


<!--        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>	-->
<!--        <link rel="stylesheet" href="../css/table.css">	-->

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

$("#childShow").css("display","block");
                 $.each($("nav ul li"), function( i, item ) {
                    // 1=grupos 2=usuarios 3=provisiones
                  //  if(i==3){
                    //    $(this).addClass('active');
                  //  }
                    if(i==3){
//                        $($(this)+ " a").css("background-color","rgb(154, 22, 22)");
//                        $(this+" a").css("background-color","rgb(154, 22, 22)");
                        $(this).children(":first").css("background-color","rgb(154, 22, 22)");
                    }
                 });

                 $.each($("div div ul a"), function( i, item ) {
                    // 0=reportes 1=administracion
                    if(i==0){
                        $(this).css("background-color","rgb(154, 22, 22)");
                    }        
                });                
            });

        </script>
        
        <script type="text/javascript" language="JavaScript"><!-- GRAFICOS-->
            $(function( ) {
            	
            	var chartColors=["#9A1616","#DA5A5A","#BE2F2F","#750000","#4B0000"];
				var monthsEs=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
				var monthsEn=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				
				
				$('#container').highcharts({
					chart: {
						type: 'column',
						backgroundColor: null
					},
					title: {
						text: 'Certificados con cobertura vivienda correspondiente al año 2014'
					},
					xAxis: {
						categories: monthsEs
					},
					yAxis: {
						min: 0,
						title: {
							text: 'Cobertura'
						},
						stackLabels: {
							enabled: true,
							style: {
								fontWeight: 'bold',
								color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
							}
						}
					},
					legend: {
						align: 'right',
						x: -70,
						verticalAlign: 'top',
						y: 20,
						floating: true,
						backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
						borderColor: '#CCC',
						borderWidth: 1,
						shadow: false
					},
					tooltip: {
						style: {
							color: '#FFFFFF'
						},
						backgroundColor: '#3d3d3d',
						borderColor: 'black',
						borderRadius: 10,
						borderWidth: 1,
						formatter: function() {
							return '<b>'+ this.x +'</b><br/>'+this.series.name +': '+ this.y +'<br/>'+'Total: '+ this.point.stackTotal;
						}
					},
					plotOptions: {
						column: {
							stacking: 'normal',
							dataLabels: {
								enabled: true,
								color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
								style: {
									textShadow: '0 0 3px black, 0 0 3px black'
								}
							}
						}
					},
					series: [
						{
							name: 'Menor a 40%',
							data: [10, 3, 4, 7, 2, 3, 4, 7, 2, 3, 4, 7],
							color: chartColors[0]
						},
						{
							name: 'Entre 40% y <90%',
							data: [5, 3, 4, 7, 2, 3, 4, 7, 2, 3, 4, 7],
							color: chartColors[1]
						},
						{
							name: '90%',
							data: [3, 3, 4, 7, 2, 3, 4, 7, 2, 3, 4, 7],
							color: chartColors[2]
						},
						{
							name: 'Mayor a 90%',
							data: [2, 3, 4, 7, 2, 3, 4, 7, 2, 3, 4, 7],
							color: chartColors[3]
						}
					]
				}); 
            });
        </script>


    </head>
    
<body class="metro">
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

            <?php include'certifiedHomeCoverage.php'; ?>            

        </div>        
    </div>

    <footer>
        <?php include'../includes/footer.php'; ?>
    </footer>

</div>
        

</body>
</html>
