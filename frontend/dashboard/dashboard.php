<div class="report_content" >
	<div class="dashboard_widget_large" align="center">
        <div class="dashboard_widget_option"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
            <table width="100%" border="1" cellpadding="0" cellspacing="1" bordercolor="#3d3d3d" style="border-collapse:collapse;">
                <tr>
                    <th align="left" colspan="12" style="font-size: 13px; "><strong style="margin-left: 5px;">{{dashboardWidgetGetCertificateQuantity_titleText}}</strong></th>
                </tr>
                <tr>
                    <th>{{dashboardWidgetGetCertificateQuantity_titleMonthJan}}</th>
                    <th>{{dashboardWidgetGetCertificateQuantity_titleMonthFeb}}</th>
                    <th>{{dashboardWidgetGetCertificateQuantity_titleMonthMar}}</th>
                    <th>{{dashboardWidgetGetCertificateQuantity_titleMonthApr}}</th>
                    <th>{{dashboardWidgetGetCertificateQuantity_titleMonthMay}}</th>
                    <th>{{dashboardWidgetGetCertificateQuantity_titleMonthJun}}</th>
                    <th>{{dashboardWidgetGetCertificateQuantity_titleMonthJul}}</th>
                    <th>{{dashboardWidgetGetCertificateQuantity_titleMonthAug}}</th>
                    <th>{{dashboardWidgetGetCertificateQuantity_titleMonthSep}}</th>
                    <th>{{dashboardWidgetGetCertificateQuantity_titleMonthOct}}</th>
                    <th>{{dashboardWidgetGetCertificateQuantity_titleMonthNov}}</th>
                    <th>{{dashboardWidgetGetCertificateQuantity_titleMonthDec}}</th>
                </tr>
                <tr>
                    <td>{{dashboardWidgetGetCertificateQuantity_jan}}</td>
                    <td>{{dashboardWidgetGetCertificateQuantity_feb}}</td>
                    <td>{{dashboardWidgetGetCertificateQuantity_mar}}</td>
                    <td>{{dashboardWidgetGetCertificateQuantity_apr}}</td>
                    <td>{{dashboardWidgetGetCertificateQuantity_may}}</td>
                    <td>{{dashboardWidgetGetCertificateQuantity_jun}}</td>
                    <td>{{dashboardWidgetGetCertificateQuantity_jul}}</td>
                    <td>{{dashboardWidgetGetCertificateQuantity_aug}}</td>
                    <td>{{dashboardWidgetGetCertificateQuantity_sep}}</td>
                    <td>{{dashboardWidgetGetCertificateQuantity_oct}}</td>
                    <td>{{dashboardWidgetGetCertificateQuantity_nov}}</td>
                    <td>{{dashboardWidgetGetCertificateQuantity_dec}}</td>
                </tr>
            </table>
        </div>
	</div>

<!--
    <div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">Certificaciones realizadas al año</div>
            <div class="dashboard_widget_content"><span class="text_month">2014</span> <br><span class="text_number">250.000</span><span class="text_indicator icon-arrow-down-4 fg-red">1%</span></div> 
           	<div class="dashboard_widget_footer">Certificaciones</div>
        </div>
	</div>
-->
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">{{dashboardWidgetGetCertificateByYear_titleText}}</div>
            <div class="dashboard_widget_content">
            	<span class="text_month"><?php echo date("Y"); ?></span> <br>
            	<span class="text_number">{{dashboardWidgetGetCertificateByYear_quantity}} </span>
            	<span class="text_indicator fg-green" data-hint="<span class='fg-green'><strong>{{dashboardWidgetGetCertificateByYear_closedPercentage}}% ({{dashboardWidgetGetCertificateByYear_closedQuantity}}) {{dashboardWidgetGetCertificateByYear_hintCertificatesClosedText}}</strong></span><br><span class='fg-red'>{{dashboardWidgetGetCertificateByYear_slopePercentage}}% ({{dashboardWidgetGetCertificateByYear_slopeQuantity}}) {{dashboardWidgetGetCertificateByYear_hintCertificatesSlopeText}}</span><br><span class='fg-white'>{{dashboardWidgetGetCertificateByYear_activeReadyCreatedPercentage}}% ({{dashboardWidgetGetCertificateByYear_activeReadyCreatedQuantity}}) {{dashboardWidgetGetCertificateByYear_hintCertificatesActiveReadyCreatedText}}</span>" data-hint-position="left"><strong>{{dashboardWidgetGetCertificateByYear_closedPercentage}}%</strong></span></div>           	
           	<div class="dashboard_widget_footer" style="font-size: 25px;">{{dashboardWidgetGetCertificateByYear_footerText}}</div>
        </div>
	</div>
	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">{{dashboardWidgetGetCertificateByMonth_titleText}}</div>
            <div class="dashboard_widget_content">
            	<span class="text_month">{{dashboardWidgetGetCertificateByMonth_middleText}}</span> <br>
            	<span class="text_number">{{dashboardWidgetGetCertificateByMonth_quantity}} </span>
            	<span class="text_indicator fg-green" data-hint="<span class='fg-green'><strong>{{dashboardWidgetGetCertificateByMonth_closedPercentage}}% ({{dashboardWidgetGetCertificateByMonth_closedQuantity}}) {{dashboardWidgetGetCertificateByMonth_hintCertificatesClosedText}}</strong><span><br><span class='fg-red'>{{dashboardWidgetGetCertificateByMonth_slopePercentage}}% ({{dashboardWidgetGetCertificateByMonth_slopeQuantity}}) {{dashboardWidgetGetCertificateByMonth_hintCertificatesSlopeText}}</span><span class='fg-white'><br>{{dashboardWidgetGetCertificateByMonth_activeReadyCreatedPercentage}}% ({{dashboardWidgetGetCertificateByMonth_activeReadyCreatedQuantity}}) {{dashboardWidgetGetCertificateByMonth_hintCertificatesActiveReadyCreatedText}}</span>" data-hint-position="left"><strong>{{dashboardWidgetGetCertificateByMonth_closedPercentage}}%</strong></span></div>           	
           	<div class="dashboard_widget_footer" style="font-size: 25px;">{{dashboardWidgetGetCertificateByMonth_footerText}}</div>
        </div>
	</div>
<!--	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">{{dashboardWidgetGetCertificateByWeek_titleText}}</div>
            <div class="dashboard_widget_content">
            	<span class="text_month">{{dashboardWidgetGetCertificateByWeek_middleText}}</span> <br>
            	<span class="text_number">{{dashboardWidgetGetCertificateByWeek_quantity}} </span>
            	<span class="text_indicator fg-green" data-hint="<span class='fg-green'><strong>{{dashboardWidgetGetCertificateByWeek_closedPercentage}}% ({{dashboardWidgetGetCertificateByWeek_closedQuantity}}) {{dashboardWidgetGetCertificateByWeek_hintCertificatesClosedText}}</strong><span><br><span class='fg-red'>{{dashboardWidgetGetCertificateByWeek_slopePercentage}}% ({{dashboardWidgetGetCertificateByWeek_slopeQuantity}}) {{dashboardWidgetGetCertificateByWeek_hintCertificatesSlopeText}}</span><span class='fg-white'><br>{{dashboardWidgetGetCertificateByWeek_activeReadyCreatedPercentage}}% ({{dashboardWidgetGetCertificateByWeek_activeReadyCreatedQuantity}}) {{dashboardWidgetGetCertificateByWeek_hintCertificatesActiveReadyCreatedText}}</span>" data-hint-position="left"><strong>{{dashboardWidgetGetCertificateByWeek_closedPercentage}}%</strong></span></div>           	
           	<div class="dashboard_widget_footer" style="font-size: 25px;">{{dashboardWidgetGetCertificateByWeek_footerText}}</div>
        </div>
	</div>
-->	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">{{dashboardWidgetGetCertificateByDay_titleText}}</div>
            <div class="dashboard_widget_content">
            	<span class="text_month">{{dashboardWidgetGetCertificateByDay_middleText}}</span> <br>
            	<span class="text_number">{{dashboardWidgetGetCertificateByDay_quantity}} </span>
            	<span class="text_indicator fg-green" data-hint="<span class='fg-green'><strong>{{dashboardWidgetGetCertificateByDay_closedPercentage}}% ({{dashboardWidgetGetCertificateByDay_closedQuantity}}) {{dashboardWidgetGetCertificateByDay_hintCertificatesClosedText}}</strong><span><br><span class='fg-red'>{{dashboardWidgetGetCertificateByDay_slopePercentage}}% ({{dashboardWidgetGetCertificateByDay_slopeQuantity}}) {{dashboardWidgetGetCertificateByDay_hintCertificatesSlopeText}}</span><span class='fg-white'><br>{{dashboardWidgetGetCertificateByDay_activeReadyCreatedPercentage}}% ({{dashboardWidgetGetCertificateByDay_activeReadyCreatedQuantity}}) {{dashboardWidgetGetCertificateByDay_hintCertificatesActiveReadyCreatedText}}</span>" data-hint-position="left"><strong>{{dashboardWidgetGetCertificateByDay_closedPercentage}}%</strong></span></div>           	
           	<div class="dashboard_widget_footer" style="font-size: 25px;">{{dashboardWidgetGetCertificateByDay_footerText}}</div>
        </div>
	</div>
	
<?php /*	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">{{dashboardWidgetGetCertificateByDay_titleText}}</div>
            <div class="dashboard_widget_content"><span class="text_month">{{dashboardWidgetGetCertificateByDay_middleText}}</span> <br><span class="text_number">{{dashboardWidgetGetCertificateByDay_quantity}} </span><span class="text_indicator fg-green" data-hint="<span class='fg-green'><strong>{{dashboardWidgetGetCertificateByDay_closedPercentage}}% ({{dashboardWidgetGetCertificateByDay_closedQuantity}}) {{dashboardWidgetGetCertificateByDay_hintCertificatesClosedText}}</strong><span><br><span class='fg-red'>{{dashboardWidgetGetCertificateByDay_slopePercentage}}% ({{dashboardWidgetGetCertificateByDay_slopeQuantity}}) {{dashboardWidgetGetCertificateByDay_hintCertificatesSlopeText}}</span><span class='fg-white'><br>{{dashboardWidgetGetCertificateByDay_closedPercentage}}% ({{dashboardWidgetGetCertificateByDay_closedQuantity}}) {{dashboardWidgetGetCertificateByDay_hintCertificatesActiveReadyCreatedText}}</span>" data-hint-position="left"><strong>{{dashboardWidgetGetCertificateByDay_closedPercentage}}%</strong></span></div>           	
           	<div class="dashboard_widget_footer" style="font-size: 25px;">{{dashboardWidgetGetCertificateByDay_footerText}}</div>
        </div>
	</div>

	<!-- the sky is crying srv  -->	
<!--
    <div class="dashboard_widget">
        <div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">Certificaciones realizadas al mes</div>
            <div class="dashboard_widget_content"><span class="text_month">Mayo</span> <br><span class="text_number">3.175</span><span class="text_indicator icon-arrow-up-4 fg-green">5%</span></div>
            <div class="dashboard_widget_footer">Certificaciones</div>
        </div>
	</div>

    <div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
            <div class="dashboard_widget_head">Certificaciones realizadas a la semana</div>
            <div class="dashboard_widget_content"><span class="text_month">Semana</span> <br><span class="text_number">862</span><span class="text_indicator icon-arrow-up-4 fg-green">5%</span></div>
            <div class="dashboard_widget_footer">Certificaciones</div>
        </div>
	</div>
	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
            <div class="dashboard_widget_head">Certificaciones realizadas durante el día</div>
            <div class="dashboard_widget_content">
            	<span class="text_month">Día</span> <br>
            	<span class="text_number">862</span>
            	<span class="text_indicator icon-arrow-up-4 fg-green">5%</span>
            </div>
            <div class="dashboard_widget_footer">Certificaciones</div>
        </div>
	</div>
-->
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">{{dashboardWidgetGetCertificateCreatedAtMonth_titleText}}</div>
			<div class="dashboard_widget_content" align="left">
				<span style="font-size: 25px; color: #CCC; margin-left: 15px;"><strong>Septiembre</strong></span>
				
				<div style="margin-bottom: 5px; margin-left: 15px;">
					<table style="width: 130px; background-color: inherit; font-size: 13px; " border="0">
						<tr>
							<td><strong>1 Semana</strong></td>
							<td>{{dashboardWidgetGetCertificateWeek1_quantity}}</td>
						</tr>
						<tr>
							<td><strong>2 Semana</strong></td>
							<td>{{dashboardWidgetGetCertificateWeek2_quantity}}</td>
						</tr>
						<tr>
							<td><strong>3 Semana</strong></td>
							<td>{{dashboardWidgetGetCertificateWeek3_quantity}}</td>
						</tr>
						<tr>
							<td><strong>4 Semana</strong></td>
							<td>{{dashboardWidgetGetCertificateWeek4_quantity}}</td>
						</tr>
					</table>
				</div>
				<div class="dashboard_widget_footer">{{dashboardWidgetGetCertificateCreatedAtMonth_footerText}}</div>
			</div>
        </div>
	</div>
	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">{{dashboardWidgetGetCertificateAtLastSevenDays_titleText}}</div>
			<div class="dashboard_widget_content" align="left">
				<span style="font-size: 25px; color: #CCC; margin-left: 15px;"><strong>Septiembre</strong></span>
				
				<div style="margin-top: 5px; margin-bottom: 5px; margin-left: 15px;">
					<table style="width: 130px; background-color: inherit; font-size: 12px; " border="0" cellpadding="4px"cellspacing="4px">
						<tr class="fg-white" style="background-color: #9A1616">
							<td><strong>Jue</strong></td>
							<td><strong>Vie</strong></td>
							<td><strong>Sab</strong></td>
							<td><strong>Dom</strong></td>
							<td><strong>Lun</strong></td>
							<td><strong>Mar</strong></td>
							<td><strong>Mie</strong></td>
						</tr>
						<tr>
							<td>{{dashboardWidgetGetCertificateDay1_quantity}}</td>
							<td>{{dashboardWidgetGetCertificateDay2_quantity}}</td>
							<td>{{dashboardWidgetGetCertificateDay3_quantity}}</td>
							<td>{{dashboardWidgetGetCertificateDay4_quantity}}</td>
							<td>{{dashboardWidgetGetCertificateDay5_quantity}}</td>
							<td>{{dashboardWidgetGetCertificateDay6_quantity}}</td>
							<td>{{dashboardWidgetGetCertificateDay7_quantity}}</td>
						</tr>
					</table>
				</div>
				<div class="dashboard_widget_footer">{{dashboardWidgetGetCertificateAtLastSevenDays_footerText}}</div>
			</div>
        </div>
	</div>
	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">{{dashboardWidgetGetCertificateAtLastHours_titleText}}</div>
			<div class="dashboard_widget_content" align="left">
				<span style="font-size: 25px; color: #CCC; margin-left: 15px;"><strong>Septiembre</strong></span>
				
				<div style="margin-top: 5px; margin-bottom: 5px; margin-left: 15px;" data-hint="{{dashboardWidgetGetCertificateAtLastHours_hintCertificatesText1}} {{dashboardWidgetGetCertificateLast24Hours_quantity}} {{dashboardWidgetGetCertificateAtLastHours_hintCertificatesText2}}" data-hint-position="left">
					<table style="background-color: inherit; font-size: 16px; " border="0" cellpadding="4px"cellspacing="4px">
						<tr class="fg-white" style="background-color: #9A1616">
							<td><strong><i class="icon-sun-2"></i><i class="icon-moon"></i></strong>{{dashboardWidgetGetCertificateAtLastHours_middleText}}</td>
						</tr>
						<tr>
							<td><strong>{{dashboardWidgetGetCertificateLast24Hours_quantity}}</strong></td>
						</tr>
					</table>
				</div>
				<div class="dashboard_widget_footer">{{dashboardWidgetGetCertificateAtLastHours_footerText}}</div>
			</div>
        </div>
	</div>
<!--	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">% Cantidad de dispositivos en viviendas</div>
			<div class="dashboard_widget_content" align="left" >
				<span style="font-size: 25px; color: #CCC; margin-left: 15px;"><strong>Septiembre</strong></span>
				
				<div style="margin-bottom: 5px; margin-left: 15px;">
					<table style="width: 190px; background-color: inherit; font-size: 13px; " border="0">
						<tr>
							<td><strong>Entre 1 a 3 Dispositivos.</strong></td>
							<td>33%</td>
						</tr>
						<tr>
							<td><strong>Entre 4 a 6 Dispositivos.</strong></td>
							<td>50%</td>
						</tr>
						<tr>
							<td><strong>+ de 7 Dispositivos.</strong></td>
							<td>17%</td>
						</tr>
					</table>
				</div>
				<div class="dashboard_widget_footer">Dispositivos</div>
			</div>
        </div>
	</div>

	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head" style="margin-bottom: 0px;">% Cantidad de redes inalámbricas que hay al realizar una certificación</div>
			<div class="dashboard_widget_content" align="left">
				<span style="font-size: 25px; color: #CCC; margin-left: 15px;"><strong>Septiembre</strong></span>
				
				<div style="margin-bottom: 5px; margin-left: 15px;">
					<table style="width: 150px; background-color: inherit; font-size: 13px; " border="0">
						<tr>
							<td><strong>Entre 0 a 4 Redes</strong></td>
							<td>33%</td>
						</tr>
						<tr>
							<td><strong>Entre 5 a 9 Redes</strong></td>
							<td>50%</td>
						</tr>
						<tr>
							<td><strong>+ de 10 Redes</strong></td>
							<td>17%</td>
						</tr>
					</table>
				</div>
				<div class="dashboard_widget_footer" style="font-size: 26px;">Redes Inalámbricas</div>
			</div>
        </div>
	</div>
	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head" style="margin-bottom: 0px;">% Cobertura de la red Wifi en todas las habitaciones disponibles</div>
			<div class="dashboard_widget_content" align="left">
				<span style="font-size: 25px; color: #CCC; margin-left: 15px;"><strong>Septiembre</strong></span>
				
				<div style="margin-bottom: 5px; margin-left: 15px;">
					<table style="width: 195px; background-color: inherit; font-size: 13px; " border="0">
						<tr>
							<td><strong>Entre 1 a 2 Habitaciones</strong></td>
							<td>33%</td>
						</tr>
						<tr>
							<td><strong>entre 3 a 4 Habitaciones</strong></td>
							<td>50%</td>
						</tr>
						<tr>
							<td><strong>+ de 5 Habitaciones</strong></td>
							<td>17%</td>
						</tr>
					</table>
				</div>
				<div class="dashboard_widget_footer">Habitaciones</div>
			</div>
        </div>
	</div>
-->	
	<!--
	<div class="dashboard_widget_middle">
		<div class="dashboard_widget_option">
			<span>-</span><span>x</span>
		</div>
		
		<div class="dashboard_widget_container" align="center">
			<div style="width:50%; float:left;">
				<i class="fa fa-building fa-3x"></i><br><span style="font-size: 20px;"><strong>5.000</strong></span>
				
			</div>
			<div style="width:50%; float:left; ">
				<i class="fa fa-home fa-3x"></i><br><span style="font-size: 20px;"><strong>5.000</strong></span>
			</div>
		</div>
	</div>
	-->
	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">{{dashboardWidgetGetCertificateByApartmentType_titleText}}</div>
			<div class="dashboard_widget_content" align="left">
				<span style="font-size: 25px; color: #CCC; margin-left: 15px;"><strong>Septiembre</strong></span>
				
				<div style="margin-bottom: 5px; margin-left: 23px;">
					<div style="width:35%; float:left; padding-left: 5px;" align="left">
						<span><strong>{{dashboardWidgetGetCertificateByApartmentType_quantity}}</strong></span><br />
						<span style="font-size: 13px;">{{dashboardWidgetGetCertificateByApartmentType_footerText}}</span>
					</div>
					<div style="width:65%; float:left; padding-left: 18px; padding-top: 34px;">
						<div align="left" style="font-size: 23px;" data-hint="{{dashboardWidgetGetCertificateByApartmentType_hintCertificatesText1}} {{dashboardWidgetGetCertificateByApartmentType_quantity}} {{dashboardWidgetGetCertificateByApartmentType_hintCertificatesText2}} {{dashboardWidgetGetCertificateByApartmentType_apartmentQuantity}} ({{dashboardWidgetGetCertificateByApartmentType_apartmentPercentage}}%) {{dashboardWidgetGetCertificateByApartmentType_hintCertificatesText3}}" data-hint-position="left">
							<i class="fa fa-building"></i><span><strong> {{dashboardWidgetGetCertificateByApartmentType_apartmentQuantity}} </strong></span>
							<span style="font-size: 13px;"><strong>({{dashboardWidgetGetCertificateByApartmentType_apartmentPercentage}}%)</strong></span><br />
						</div>
						<div align="left" style="margin-top: 5px; font-size: 23px;" data-hint="{{dashboardWidgetGetCertificateByApartmentType_hintCertificatesText1}} {{dashboardWidgetGetCertificateByApartmentType_quantity}} {{dashboardWidgetGetCertificateByApartmentType_hintCertificatesText2}} {{dashboardWidgetGetCertificateByApartmentType_homeQuantity}} ({{dashboardWidgetGetCertificateByApartmentType_homePercentage}}%) {{dashboardWidgetGetCertificateByApartmentType_hintCertificatesText4}}" data-hint-position="left">
							<i class="fa fa-home"></i><span><strong> {{dashboardWidgetGetCertificateByApartmentType_homeQuantity}} </strong></span>
							<span style="font-size: 13px;"><strong>({{dashboardWidgetGetCertificateByApartmentType_homePercentage}}%)</strong></span><br />	
						</div>
					</div>
				</div>
				<div class="dashboard_widget_footer">{{dashboardWidgetGetCertificateByApartmentType_footerText}}</div>
			</div>
        </div>
	</div>
<!--	
	<div class="dashboard_widget_middle">
		<div class="dashboard_widget_option">
			<span>-</span><span>x</span>
		</div>
		<div class="dashboard_widget_container" align="center">
			<div style="width:35%; float:left; padding-left: 5px;" align="left">
				<span style="font-size: 25px; color: #CCC;"><strong>Septiembre</strong></span><br /><span>375</span><br />
				<span style="font-size: 20px;">Viviendas</span>
			</div>
			<div style="width:65%; float:left; padding-left: 25px; padding-top: 34px;">
				<div align="left">
					<i class="fa fa-building"></i><span><strong> 96 </strong></span>
					<span style="font-size: 13px;"><strong>(25.6%)</strong></span><br />
				</div>
				<div align="left" style="margin-top: 5px;">
					<i class="fa fa-home"></i><span><strong> 279 </strong></span>
					<span style="font-size: 13px;"><strong>(74.4%)</strong></span><br />	
				</div>
			</div>
		</div>
	</div>
-->	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">{{dashboardWidgetGetCertificateByExtensor_titleText}}</div>
			<div class="dashboard_widget_content" align="left">
				<span style="font-size: 25px; color: #CCC; margin-left: 15px;"><strong>Septiembre</strong></span>
				
				<div style="margin-bottom: 5px; margin-left: 23px;">
					<div style="width:35%; float:left; padding-left: 5px;" align="left">
						<span><strong>{{dashboardWidgetGetCertificateByExtensor_quantity}}</strong></span><br />
						<span style="font-size: 13px;">{{dashboardWidgetGetCertificateByExtensor_footerText}}</span>
					</div>
					<div style="width:50%; float:left; padding-left: 10px; margin-left: 25px; ">
						<div align="left" data-hint="{{dashboardWidgetGetCertificateByExtensor_hintCertificatesText1}} {{dashboardWidgetGetCertificateByExtensor_quantity}} {{dashboardWidgetGetCertificateByExtensor_hintCertificatesText2}} {{dashboardWidgetGetCertificateByExtensor_withExtensorQuantity}} ({{dashboardWidgetGetCertificateByExtensor_withExtensorPercentage}}%) {{dashboardWidgetGetCertificateByExtensor_hintCertificatesText3}}" data-hint-position="left">
							<span style="font-size: 12px; background-color: #9A1616; color: #FFFFFF;" ><strong>{{dashboardWidgetGetCertificateByExtensor_middleText1}}</strong></span><br /><span><strong> {{dashboardWidgetGetCertificateByExtensor_withExtensorQuantity}} </strong></span>
							<span style="font-size: 12px;"><strong>({{dashboardWidgetGetCertificateByExtensor_withExtensorPercentage}}%)</strong></span>
						</div>
						<div align="left" data-hint="{{dashboardWidgetGetCertificateByExtensor_hintCertificatesText1}} {{dashboardWidgetGetCertificateByExtensor_quantity}} {{dashboardWidgetGetCertificateByExtensor_hintCertificatesText2}} {{dashboardWidgetGetCertificateByExtensor_withOutExtensorQuantity}} ({{dashboardWidgetGetCertificateByExtensor_withOutExtensorPercentage}}%) {{dashboardWidgetGetCertificateByExtensor_hintCertificatesText4}}" data-hint-position="left">
							<span style="font-size: 12px; background-color: #9A1616; color: #FFFFFF;"><strong>{{dashboardWidgetGetCertificateByExtensor_middleText2}}</strong></span><br /><span><strong> {{dashboardWidgetGetCertificateByExtensor_withOutExtensorQuantity}} </strong></span>
							<span style="font-size: 12px;"><strong>({{dashboardWidgetGetCertificateByExtensor_withOutExtensorPercentage}}%)</strong></span>	
						</div>
					</div>
				</div>
				<div class="dashboard_widget_footer">{{dashboardWidgetGetCertificateByExtensor_footerText}}</div>
			</div>
        </div>
	</div>
	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">{{dashboardWidgetGetCertificateByVisitTypeMonth_titleText}}</div>
			<div class="dashboard_widget_content" align="left">
				<span style="font-size: 25px; color: #CCC; margin-left: 15px;"><strong>Septiembre</strong></span>
				
				<div style="margin-bottom: 5px; margin-left: 23px;">
					<div style="width:35%; float:left; padding-left: 5px;" align="left">
						<span><strong>{{dashboardWidgetGetCertificateByVisitType_monthQuantity}}</strong></span><br />
						<span style="font-size: 13px;">{{dashboardWidgetGetCertificateByVisitTypeMonth_footerText}}</span>
					</div>
					<div style="width:50%; float:left; padding-left: 35px; ">
						<div align="left" data-hint="{{dashboardWidgetGetCertificateByVisitTypeMonth_hintCertificatesText1}} {{dashboardWidgetGetCertificateByVisitType_monthQuantity}} {{dashboardWidgetGetCertificateByVisitTypeMonth_hintCertificatesText2}} {{dashboardWidgetGetCertificateByVisitType_monthTypeVisitAltaQuantity}} ({{dashboardWidgetGetCertificateByVisitType_monthTypeVisitAltaPercentage}}%) {{dashboardWidgetGetCertificateByVisitTypeMonth_hintCertificatesText3}}" data-hint-position="left">
							<span style="font-size: 12px; background-color: #9A1616; color: #FFFFFF;"><strong>{{dashboardWidgetGetCertificateByVisitTypeMonth_middleText1}}</strong></span><br> <span><strong> {{dashboardWidgetGetCertificateByVisitType_monthTypeVisitAltaQuantity}} </strong></span>
							<span style="font-size: 12px;"><strong>({{dashboardWidgetGetCertificateByVisitType_monthTypeVisitAltaPercentage}}%)</strong></span>
						</div>
						<div align="left" data-hint="{{dashboardWidgetGetCertificateByVisitTypeMonth_hintCertificatesText1}} {{dashboardWidgetGetCertificateByVisitType_monthQuantity}} {{dashboardWidgetGetCertificateByVisitTypeMonth_hintCertificatesText2}} {{dashboardWidgetGetCertificateByVisitType_monthTypeVisitSoporteQuantity}} ({{dashboardWidgetGetCertificateByVisitType_monthTypeVisitSoportePercentage}}%) {{dashboardWidgetGetCertificateByVisitTypeMonth_hintCertificatesText4}}" data-hint-position="left">
							<span style="font-size: 12px; background-color: #9A1616; color: #FFFFFF;"><strong>{{dashboardWidgetGetCertificateByVisitTypeMonth_middleText2}}</strong></span> <br /> <span><strong> {{dashboardWidgetGetCertificateByVisitType_monthTypeVisitSoporteQuantity}} </strong></span>
							<span style="font-size: 12px;"><strong>({{dashboardWidgetGetCertificateByVisitType_monthTypeVisitSoportePercentage}}%)</strong></span>	
						</div>
					</div>
				</div>
				<div class="dashboard_widget_footer">{{dashboardWidgetGetCertificateByVisitTypeMonth_footerText}}</div>
			</div>
        </div>
	</div>
	
	<div class="dashboard_widget">
    	<div class="dashboard_widget_option" align="right"><span>-</span><span>x</span></div>
        <div class="dashboard_widget_container">
        	<div class="dashboard_widget_head">{{dashboardWidgetGetCertificateByVisitTypeWeek_titleText}}</div>
			<div class="dashboard_widget_content" align="left">
				<span style="font-size: 25px; color: #CCC; margin-left: 15px;"><strong>{{dashboardWidgetGetCertificateByVisitTypeWeek_middleText}}</strong></span>
				
				<div style="margin-bottom: 5px; margin-left: 23px;">
					<div style="width:35%; float:left; padding-left: 5px;" align="left">
						<span><strong>{{dashboardWidgetGetCertificateByVisitType_weekQuantity}}</strong></span><br />
						<span style="font-size: 13px;">{{dashboardWidgetGetCertificateByVisitTypeWeek_footerText}}</span>
					</div>
					<div style="width:50%; float:left; padding-left: 35px; ">
						<div align="left" data-hint="{{dashboardWidgetGetCertificateByVisitTypeWeek_hintCertificatesText1}} {{dashboardWidgetGetCertificateByVisitType_weekQuantity}} {{dashboardWidgetGetCertificateByVisitTypeWeek_hintCertificatesText2}} {{dashboardWidgetGetCertificateByVisitType_weekTypeVisitAltaQuantity}} ({{dashboardWidgetGetCertificateByVisitType_weekTypeVisitAltaPercentage}}%) {{dashboardWidgetGetCertificateByVisitTypeWeek_hintCertificatesText3}}" data-hint-position="left">
							<span style="font-size: 12px; background-color: #9A1616; color: #FFFFFF;"><strong>{{dashboardWidgetGetCertificateByVisitTypeWeek_middleText1}}</strong></span><br> <span><strong> {{dashboardWidgetGetCertificateByVisitType_weekTypeVisitAltaQuantity}} </strong></span>
							<span style="font-size: 12px;"><strong>({{dashboardWidgetGetCertificateByVisitType_weekTypeVisitAltaPercentage}}%)</strong></span>
						</div>
						<div align="left" data-hint="{{dashboardWidgetGetCertificateByVisitTypeWeek_hintCertificatesText1}} {{dashboardWidgetGetCertificateByVisitType_weekQuantity}} {{dashboardWidgetGetCertificateByVisitTypeWeek_hintCertificatesText2}} {{dashboardWidgetGetCertificateByVisitType_weekTypeVisitSoporteQuantity}} ({{dashboardWidgetGetCertificateByVisitType_weekTypeVisitAltaPercentage}}%) {{dashboardWidgetGetCertificateByVisitTypeWeek_hintCertificatesText4}}" data-hint-position="left">
							<span style="font-size: 12px; background-color: #9A1616; color: #FFFFFF;"><strong>{{dashboardWidgetGetCertificateByVisitTypeWeek_middleText2}}</strong></span> <br /> <span><strong> {{dashboardWidgetGetCertificateByVisitType_weekTypeVisitSoporteQuantity}} </strong></span>
							<span style="font-size: 12px;"><strong>(14.5%)</strong></span>	
						</div>
					</div>
				</div>
				<div class="dashboard_widget_footer">{{dashboardWidgetGetCertificateByVisitTypeWeek_footerText}}</div>
			</div>
        </div>
	</div>
<!--		
	<div class="dashboard_widget_middle">
		<div class="dashboard_widget_option">
			<span>-</span><span>x</span>
		</div>
		<div class="dashboard_widget_container" align="center" style="padding-top: 3px;">
			<div style="width:50%; float:left; padding-left: 5px;" align="left">
				<span style="font-size: 100%;"><strong>Mayo</strong></span><br /><span>375</span><br />
				<span style="font-size: 20px;">Viviendas</span>
			</div>
			<div style="width:50%; float:left; padding-left: 10px; ">
				<div align="left" >
					<span style="font-size: 13px;">Con Extensores</span> <span><strong> 96 </strong></span>
					<span style="font-size: 13px;"><strong>(25.6%)</strong></span>
				</div>
				<div align="left" >
					<span style="font-size: 13px;">Sin Extensores</span><span><strong> 279 </strong></span>
					<span style="font-size: 13px;"><strong>(74.4%)</strong></span>	
				</div>
			</div>
		</div>
	</div>

	<div class="dashboard_widget_middle">
		<div class="dashboard_widget_option">
			<span>-</span><span>x</span>
		</div>
		<div class="dashboard_widget_container" align="center" style="padding-top: 3px;">
			<div style="width:50%; float:left; padding-left: 5px;" align="left">
				<span style="font-size: 100%;"><strong>Mayo</strong></span><br /><span>450</span><br />
				<span style="font-size: 20px;">Visitas</span>
			</div>
			<div style="width:50%; float:left; padding-left: 10px; ">
				<div align="left" >
					<span style="font-size: 13px;">Alta</span><br> <span><strong> 385 </strong></span>
					<span style="font-size: 13px;"><strong>(85.5%)</strong></span>
				</div>
				<div align="left" >
					<span style="font-size: 13px;">Soporte</span> <br /> <span><strong> 65 </strong></span>
					<span style="font-size: 13px;"><strong>(14.5%)</strong></span>	
				</div>
			</div>
		</div>
	</div>
	
	<div class="dashboard_widget_middle">
		<div class="dashboard_widget_option">
			<span>-</span><span>x</span>
		</div>
		<div class="dashboard_widget_container" align="center" style="padding-top: 3px;">
			<div style="width:50%; float:left; padding-left: 5px;" align="left">
				<span style="font-size: 100%;"><strong>Semana</strong></span><br /><span>450</span><br />
				<span style="font-size: 20px;">Visitas</span>
			</div>
			<div style="width:50%; float:left; padding-left: 10px; ">
				<div align="left" >
					<span style="font-size: 13px;">Alta</span><br> <span><strong> 385 </strong></span>
					<span style="font-size: 13px;"><strong>(85.5%)</strong></span>
				</div>
				<div align="left" >
					<span style="font-size: 13px;">Soporte</span> <br /> <span><strong> 65 </strong></span>
					<span style="font-size: 13px;"><strong>(14.5%)</strong></span>	
				</div>
			</div>
		</div>
	</div>
-->	
 */ ?>
</div><!--	FIN REPORT CONTENT	-->
<!--
        <div class="dashboard_widget">
            <div class="dashboard_widget_option"><span>-</span><span>x</span></div>
            <div class="dashboard_widget_container">
                <div class="dashboard_widget_head">Cantidad horas promedio de técnico por visita</div>
                <div class="dashboard_widget_content"><span class="text_month">Mayo</span> <br><span class="text_number">3</span></div>
                <div class="dashboard_widget_footer">Horas</div>
            </div>
        </div>

        <div class="dashboard_widget_middle">
            <div class="dashboard_widget_option"><span>-</span><span>x</span></div>
            <div class="dashboard_widget_container" align="center">
                <div style="width:25%; float:left; margin-top:15px;">
                    <span id="text" style="color:#848484; font-weight: 700!important; margin-top:10px;">227550</span><br>
                    <span style="font-size:12px; color:#ccc;">1 Semana</span>
                </div>
                <div style="width:25%; float:left;">
                    <span id="text" style="color:#ccc; font-weight: 700!important">1233</span><br>
                    <span style="font-size:12px; color:#ccc;">2 Semana</span>
                </div>
                <div style="width:25%; float:left;">
                    <span id="text" style="color:#ccc; font-weight: 700!important">1337</span><br>
                    <span style="font-size:12px; color:#ccc;">3 Semana</span>
                </div>
                <div style="width:25%; float:left;">
                    <span id="text" style="font-size:32px; font-size:2vmax; color:#ccc; font-weight: 700!important">373</span><br>
                    <span style="font-size:12px; color:#ccc;">4 Semana</span>
                </div> 

            </div>
        </div>

        <div class="dashboard_widget_middle">
            <div class="dashboard_widget_option"><span>-</span><span>x</span></div>
            <div class="dashboard_widget_container" align="center">
                <div style="width:25%; float:left; margin-top:15px;">
                    <span style="font-size:32px; font-size:2vmax; color:#848484; font-weight: 700!important; margin-top:10px;">227550</span><br>
                    <span style="font-size:12px; color:#ccc;">1 Semana</span>
                </div>
                <div style="width:25%; float:left;">
                    <span style="font-size:32px; font-size:2vmax; color:#ccc; font-weight: 700!important">1233</span><br>
                    <span style="font-size:12px; color:#ccc;">2 Semana</span>
                </div>
                <div style="width:25%; float:left;">
                    <span style="font-size:32px; font-size:2vmax; color:#ccc; font-weight: 700!important">1337</span><br>
                    <span style="font-size:12px; color:#ccc;">3 Semana</span>
                </div>
                <div style="width:25%; float:left;">
                    <span style="font-size:32px; font-size:2vmax; color:#ccc; font-weight: 700!important">373</span><br>
                    <span style="font-size:12px; color:#ccc;">4 Semana</span>
                </div> 

            </div>
        </div>

        <div class="dashboard_widget_middle">
            <div class="dashboard_widget_option"><span>-</span><span>x</span></div>
            <div class="dashboard_widget_container">
                <div style="width:34%; float:left;">
                    <span style="font-size:18px; font-weight: 700!important; margin-left:5px; color:#ccc;">Semana</span><br>
                    <span style="font-size:18px; font-weight: 700!important; margin-left:5px; color:#ccc;">13313</span><br>
                    <span style="font-size:18px; font-weight: 700!important; margin-left:5px; color:#ccc;">Visitas</span></div>
                <div style="width:33%; float:left;">
                    <span style="font-size:18px; font-weight: 700!important; margin-left:5px; color:#ccc;">Alta</span><br>
                    <span style="font-size:24px; font-weight: 700!important; margin-left:5px; color:#ccc;">1143</span><br><span style="font-size:12px; font-weight: 700!important; margin-left:5px; color:#3d3d3d;">85%</span><br>
                    <span style="font-size:18px; font-weight: 700!important; margin-left:5px; color:#ccc;"></span>
                </div>
                <div style="width:33%; float:left;">
                    <span style="font-size:18px; font-weight: 700!important; margin-left:5px; color:#ccc;">Soporte</span><br>
                    <span style="font-size:24px; font-weight: 700!important; margin-left:5px; color:#ccc;">1447</span><br><span style="font-size:12px; font-weight: 700!important; margin-left:5px; color:#3d3d3d; float:right;">15%</span><br>
                    <span style="font-size:18px; font-weight: 700!important; margin-left:5px; color:#ccc;"></span>
                </div>

            </div>
        </div>


            <div class="dashboard_widget">
                <div class="dashboard_widget_option"><span>-</span><span>x</span></div>
                <span class="dashboard_widget_head">Cantidad certificaciones realizadas durante el mes</span><br> 
                <div align="center">
                    <table>
                    <tr>
                        <td>Semana 1</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>Semana 2</td>
                        <td>102</td>
                    </tr>
                    <tr>
                        <td>Semana 3</td>
                        <td>170</td>
                    </tr>
                    <tr>
                        <td>Semana 4</td>
                        <td>73</td>
                    </tr>
                    </table> 
                </div>
            </div>
        <?php for($x=0;$x<5;$x++){ ?>
            <div class="dashboard_widget">
                <div class="dashboard_widget_option"><span>-</span><span>x</span></div>
                <span class="dashboard_widget_head">Cantidad horas promedio de técnico por visita</span><br> <span class="text_month">Mayo</span> <br><span class="text_number">3</span> <br><span class="text_hour">Horas</span>
            </div>
        <?php } ?>
</div>
-->
