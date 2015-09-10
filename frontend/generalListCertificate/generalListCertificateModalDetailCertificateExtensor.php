<!-- Modal Access Group -->
<div id="generalListCertificateModalDetailCertificateExtensor" class="modalmask">
    <div class="modalbox movedown" style="width:800px!important; height:320px!important;">
        <div class="modalBody">
            
            <div class="modalTop">
            	
            	<div style="line-height: 35px;">
					<strong>
						<i class="icon-copy"></i>
						<span id="groupTitle">{{generalListCertificateModalDetailCertificateExtensortitleHead}}</span>					
					</strong>
				</div>
				
            </div>
            
        	<form name="groupModalAccessGroup" action="hola.php" method="POST">		
	        	<div class="modalHead" style="font-size:12px;"><br><strong>{{generalListCertificateModalDetailCertificateExtensortitle1}}.</strong><br><br></div>
	        	<div class="modalMessageError"></div>
	        	<div class="modalMain" style="font-size: 12px;">
    	        	<div style="width: 260px; float: left;">	
    	        		<table id="tableGeneralListCertificateModalDetailExtensor" style="width: 250px; background-color: inherit; ">
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateExtensorCpeType}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateExtensorCpeModel}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateExtensorCpeMac}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateExtensorCpeLocation}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateExtensorAcceptProposalLocation}}:</strong></td>
							  <td></td> 
							</tr>
							<tr>
							  <td><strong>{{generalListCertificateModalDetailCertificateExtensorObservation}}:</strong></td>
							  <td></td> 
							</tr>
						</table>
					</div>
					<div style="width: 450px; float: left;">
						<strong>{{generalListCertificateModalDetailCertificateExtensortitle2}}.</strong>
						
						<table id="tableGeneralListCertificateModalDetailExtensorWifi" style="width: 500px; background-color: inherit; margin-top: 10px; margin-bottom: 10px;">
							<thead>
								<tr class="fg-white bg-black">
									<th align="left"><strong>{{generalListCertificateModalDetailCertificateExtensorTbodyLocation}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateExtensorTbodyNacUp}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateExtensorTbodyNacDown}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateExtensorTbodyIntUp}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateExtensorTbodyIntDown}}</strong></th>
									<th align="right"><strong>{{generalListCertificateModalDetailCertificateExtensorTbodySignal}}</strong></th>
								</tr>
							</thead>
							<tbody>
							</tbody>
							
						</table>
						<div id="modalGeneralListCertificateDetailCertificateExtensorFrequencyCertificateWifiExtensor">
							<strong>{{generalListCertificateModalDetailCertificateExtensorFrequency}}</strong>
							<select name="modalGeneralListCertificateDetailCertificateExtensorSelectFrequencyCertificateWifiExtensor">
								<option value="2.4">2.4 Ghz</option>
								<option value="5">5 Ghz</option>
							</select>
						</div>			
    	        	</div>
    	        	      	
    	        	
                </div>
	        	<div class="modalMessageRequired"></div>
	        	<div class="modalFoot">
                    <!-- <button type="button" name="GroupsModalButtonCloseModalGroup">Cerrar</button> --> 
                    <a class="button small" href="#generalListCertificateModalDetailCertificate"><i class="icon-arrow-left-4"></i> {{generalListCertificateModalDetailCertificateExtensorButtonBack}}</a>
                    <a class="button small" href="#close">{{generalListCertificateModalDetailCertificateExtensorButtonClose}}</a>
                </div>
        	</form>		
        </div>  
        <div class="modalFooter"><img src="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEFOOTMODAL']; ?>" style="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEFOOTMODALSTYLE']; ?>" /></div>
    </div> 
</div>
<!-- /Modal -->

