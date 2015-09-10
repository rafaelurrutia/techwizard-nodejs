<?php 

include'../controller/checkTimeOut.php'; 
$permiso = split ("\|", $_SESSION['access']);
$permiso1 = split ("\,", $permiso[13]);

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
                background: #9A1616;
				color: #FFFFFF;
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

        <script type="text/javascript" language="JavaScript">
            $(function( ) {
            	            	
				var urlGetGraphic="../json/certifiedTime/certifiedTime.json";
				var findGroup = $.getJSON(urlGetGraphic, function(data) {
		
					if (!data.status) {
						
						var message = "Error";
			
						var not = $.Notify({
							caption : "Error",
							content : message,
							timeout : 5000, // 5 seconds
							style : ( {
								background : 'red',
								color : '#FFFFFF'
							})
						});
						
					} else if (data.status=="true" && data.code=="200") {
			
						var trHTML,sumQ,sumP;
						var graphs = [];
						var chart;
					    var valueTotal=200;		    
					    var chartColors=["#9A1616","#DA5A5A","#BE2F2F","#750000","#4B0000"];
					    var chartText=["Cerrado","Creado","Listo","Pendiente","Activo"];				    
				    	var year="2014";
				    	var titleGraphic="% Instalación por habitación correspondiente al año ";			    	
				    	var toolTipText="Los certificados en estado cerrado representa un 20% () de las certificaciones realizadas sobre una población total de 200 certificaciones.";
						
						$.each(data.data, function(index, value) {
							trHTML += '<tr><td class="fg-white bg-black"><strong>' + value.name + '</strong></td><td>' + value.quantity + '</td><td>' + value.y + '%</td></tr>';
							sumQ +=value.quantity;
							sumP +=value.y;
											
							var graph = {
							    name: value.name,
							    y: value.y,
							    color: chartColors[index],
							    value: value.quantity,
							    id: index,
								dataLabels: { 
									enabled: true	
								} 
							}

							graphs.push(graph);

						});

						trHTML += '<tr><td class="fg-white bg-black"><strong>Total</strong></td><td><strong>' + sumQ + '</strong></td><td><strong>' + sumP + '%</strong></td></tr>';
						$('#selectCertificatedState').append(trHTML);
								
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
			
						$('#container').highcharts({
			      	
							chart: {
								plotBackgroundColor: null,
								plotBorderWidth: null,
								plotShadow: false,
								backgroundColor: null
							},
					
							title: {
								text: titleGraphic+' '+year,
								align: 'center',
								y: 20
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
									return 'Los certificados en estado '+chartText[this.point.id]+'<br> representa un '+ this.y + '% ('+this.point.value+') de las certificaciones<br> realizadas sobre una población total de '+ valueTotal +' certificaciones.';
								}
							},
					
							plotOptions: {
								pie: {
									allowPointSelect: true,
									dataLabels: {
										enabled: true,
										distance: -50,
										style: {
											fontWeight: 'bold',
											color: 'white',
											textShadow: '0px 1px 2px black'
										}
									},
			
									startAngle: -180,
									endAngle: 180,
									center: ['50%', '50%'],
									showInLegend: true
								},
					
								series: {
									cursor: 'pointer',
									point: {
										events: {
											mouseOver: function () {
												$("#selectCertificatedState tr:eq("+this.id+")").addClass("row_selected");
											},
											mouseOut: function () {
												$("#selectCertificatedState tr:eq("+this.id+")").removeClass("row_selected");
											}
										}
									}
								}
							},
					
							series: [{
								type: 'pie',
								name: 'Browser share',
								innerSize: '55%',
								data: graphs
							}]
	
						});
				        												
					}
					
				}).fail(function(jqXHR, textStatus, errorThrown) {

					var message = "Error";		
					var not = $.Notify({
						caption : "Error",
						content : message,
						timeout : 5000, // 5 seconds
						style : ( {
							background : 'red',
							color : '#FFFFFF'
						})
					});

				});
				//	end	getjson

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

            <?php include'certifiedTime.php'; ?>            

        </div>        
    </div>

    <footer>
        <?php include'../includes/footer.php'; ?>
    </footer>

</div>
        

</body>
</html>
