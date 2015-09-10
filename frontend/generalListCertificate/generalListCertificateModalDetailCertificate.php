<!-- Modal Access Group -->
<div id="generalListCertificateModalDetailCertificate" class="modalmask">
    <div class="modalbox movedown" style="width:900px!important; ">
<!--    <div class="modalbox movedown" style="width:875px!important; height:440px!important;">	--> 
        <div class="modalBody">
            <div class="modalTop">
            	<!--
            	<h2>
            		<i class="{{groupModalAccessGroupIcon}}"></i>
            		Certificado de Plan
            		<img style="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEHEADMODALSTYLE']; ?>" src="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEHEADMODAL']; ?>" />
            	</h2>
            	-->
            	<div style="line-height: 35px;">
					<strong>
						<i class="icon-copy"></i>
						<span id="groupTitle">{{generalListCertificateModalDetailCertificateTitleHead}}</span>					
					</strong>
				</div>
				
            </div>
            
            
        	<form name="groupModalAccessGroup" action="hola.php" method="POST">		
	        	<!--
	        	<div class="modalHead" style="font-size:12px;"><br><strong>{{generalListCertificateModalDetailCertificateTitle1}}</strong><br><br></div>
	        
	        	<div class="modalMessageError"></div>
	        -->
	        	<div class="modalMain" style="font-size: 11px;">
    	        	<div style="width: 270px; float: left;">
    	        		<strong>{{generalListCertificateModalDetailCertificateTitle1}}</strong>	<br /><br />
    	        		<table id="tableGeneralListCertificateModal" style="width: 265px; background-color: inherit; ">
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateIdTechnical}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateVisitType}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateHousingType}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateFloor}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateCpeLocation}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateAcceptProposalLocation}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateWifiOwn}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>&nbsp;</strong></td>
							  <td><strong></strong></td> 
							</tr>
							
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateIdClient}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateEmailClient}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateReceptorName}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateRelationship}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>&nbsp;</strong></td>
							  <td><strong></strong></td> 
							</tr>
							
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateServicePlan}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateCpeType}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateCpeModel}}:</strong></td>
							  <td></td> 
							</tr>					
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateCpeMac}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateTechnicalOrder}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>&nbsp;</strong></td>
							  <td><strong></strong></td> 
							</tr>
														
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateCertificateState}}:</strong></td>
							  <td></td> 
							</tr>					
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateBroadcastDate}}:</strong></td>
							  <td></td> 
							</tr>													
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateDateActive}}:</strong></td>
							  <td></td> 
							</tr>

							<tr>
							  <td><strong>&nbsp;</strong></td>
							  <td><strong></strong></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateObservation}}:</strong></td>
							  <td></td> 
							</tr>
						</table>
						
						<button id="generalListCertificateExcelDetailReport" type="button" class="inverse" style="margin-top: 10px;">
							<i class="{{generalListCertificateListButtonDownloadExcelFileIcon}}"></i> 
							{{generalListCertificateModalDetailCertificateButtonReportDetails}}
							<i id="excelReportShow" class="icon-loading" style="display: none"></i>
						</button>
					</div>
					<div style="width: 550px; float: left;">
						<strong>{{generalListCertificateModalDetailCertificateWiredTest}}.</strong>
						
						<table id="tableGeneralListCertificateTest" style="width: 595px; background-color: inherit; margin-top: 10px; margin-bottom: 10px;">
							<thead>
								<tr class="fg-white bg-black">
									<th align="left"><strong>{{generalListCertificateModalDetailCertificateTbodyLocation}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodyNacUp}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodyNacDown}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodyIntUp}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodyIntDown}}</strong></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td align="left"></td>
								  	<td align="right"></td>
								  	<td align="right"></td>
								  	<td align="right"></td> 
								</tr>
							</tbody>
						</table>
						
						
						<strong>{{generalListCertificateModalDetailCertificateTitle2}}.</strong>
						
						<table id="tableGeneralListCertificateWifiModal" class="tableModal" style="width: 595px; background-color: inherit; margin-top: 10px; margin-bottom: 10px;">
							<thead>
								<tr class="fg-white bg-black">
									<th align="left"><strong>{{generalListCertificateModalDetailCertificateTbodyLocation}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodyNacUp}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodyNacDown}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodyIntUp}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodyIntDown}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodySignal}}</strong></th>
								</tr>
							</thead>
							<tbody>
								
							</tbody>
						</table>
						
						<div id="modalGeneralListCertificateDetailCertificateFrequencyCertificateWifiCPE">
							<strong>{{generalListCertificateModalDetailCertificateFrequency}}</strong>
							<select name="modalGeneralListCertificateDetailCertificateSelectFrequencyCertificateWifiCPE">
								<option value="2.4">2.4 Ghz</option>
								<option value="5">5 Ghz</option>
							</select>
							<br />
						</div>
						<strong>{{generalListCertificateModalDetailCertificateTitle3}}.</strong>
						
						<table id="tableGeneralListCertificateExtensorModal" class="tableModal tableModalExtensorCertificate" style="width:595px; background-color: inherit; margin-top: 10px; margin-bottom: 10px;">
							<thead>
								<tr class="fg-white bg-black">
									<th align="left"><strong>{{generalListCertificateModalDetailCertificateTbodyType}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodyModel}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodyMac}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodyLocation}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodyAcceptLocation}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateTbodyStatus}}</strong></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Living</td>
								  	<td>563 Kbytes</td>
								  	<td>00:16:7D:F9:EA:5F</td>
								  	<td>Baño</td>
								  	<td>Si</td>
								  	<td>True</td> 
								</tr>
							</tbody>
						</table>
						
						<div id="divGeneralListCertificateComments" >
						<strong>Comentarios</strong>

						<table id="tableGeneralListCertificateComments" class="tableModal" style="width:595px; background-color: inherit; margin-top: 10px; margin-bottom: 10px;">

							<thead>

								<tr class="fg-white bg-black">

									<th align="left"><strong>Fecha</strong></th>

									<th align="right"><strong>Técnico</strong></th>

									<th align="right"><strong>Mensaje</strong></th>

								</tr>

							</thead>

							<tbody>
								<tr>

									<td colspan="3" align="center">No hay comentarios</th>



								</tr>
							</tbody>

						</table>
</div>
    	        	</div>
    	        	<?php 
    	        	//include'../../../controller/generateListAccess.php'; ?>
    	        	
    	        	
                </div>
	        	<div class="modalMessageRequired"></div>
	        	<div class="modalFoot">
                    <!-- <button type="button" name="GroupsModalButtonCloseModalGroup">Cerrar</button> --> 
                    
                    <a class="button small" href="#close">{{generalListCertificateModalDetailCertificateButtonClose}}</a>
                </div>
        	</form>	<br /><br />
        </div>  
        <div class="modalFooter"><img src="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEFOOTMODAL']; ?>" style="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEFOOTMODALSTYLE']; ?>" /></div> 
    </div> 
</div>
<!-- /Modal -->

