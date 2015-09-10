<?php

include "../controller/generateHtmlFormElements.php";

?>
<!-- Modal Group -->
<div id="GroupsModalGroup" class="modalmask">
	<div class="modalbox movedown" style="width: 500px !important; height: 289px !important;">
		<div class="modalBody">
			<div class="modalTop">
				<div style="line-height: 35px;">
					<strong>
						<i class="{{groupModalAddGroupIcon}}"></i>
						<span id="groupTitle">{{groupModalAddGroupTitle}}</span>
						<!--
						<img style="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEHEADMODALSTYLE']; ?>" src="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEHEADMODAL']; ?>" />
						-->					
					</strong>
				</div>
			</div>
			<form name="groupModalGroup" method="POST" data-op="0" >
				<div class="modalHead"></div>
				<div class="modalMessageError"></div>
				<div class="modalMain">
					<input type="hidden" name="modalGroupInputHiddenIdGroup">
					<?php for($x=0;$x<count($elementsHtml->elements);$x++){
					?>
					<div class="htmlElement">
						<?php echo $element[$x]; ?>
					</div>
					<?php } ?>
				</div>
				<div class="modalMessageRequired">{{groupModalAddGroupMessageRequired}}</div>
				<div class="modalFoot">
					<button type="submit" name="GroupsModalButtonAddGroup">
						{{groupModalAddGroupButtonAdd}}
					</button>
					<button type="submit" name="GroupsModalButtonUpdateGroup" style="display:none;">
						{{groupModalUpdateGroupButtonUpdate}}
					</button>
					<button type="button" name="GroupsModalButtonCleanGroup">
						{{groupModalAddGroupButtonClean}}
					</button>
					<button type="button" name="GroupsModalButtonCloseModalGroup">
						{{groupModalAddGroupButtonClose}}
					</button>
				</div>
			</form>
		</div>
		<div class="modalFooter">
			<img src="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEFOOTMODAL']; ?>" style="<?php echo $company[$_SERVER["SERVER_NAME"]]['LOGOSOURCEFOOTMODALSTYLE']; ?>" />
		
		</div>
	</div>
</div>
<!-- /Modal -->
<!-- Modal Access Group -->
<div id="GroupsModalAccessGroup" class="modalmask">
	<div class="modalbox movedown" style="width: 840px !important; height: 480px !important;">
		<div class="modalBody">
			<div class="modalTop">

				<div style="line-height: 35px;">
					<strong> <i class="{{groupModalAccessGroupIcon}}"></i> <span id="groupTitle">{{groupModalAccessGroupTitle}}</span> </strong>
				</div>
			</div>

			<div class="modalHead">

			</div>
			<div class="modalMessageError">

			</div>
			<div class="modalMain" style="height: 350px !important;">

				<input type="hidden" name="modalGroupAccessInputHiddenIdGroup">
				<div class="box1" style="width: 260px; margin-top: 20px; height: 315px; float: left; border-right-style: solid; border-right-color: #c3c3c3; border-right-width: 1px;">
					<div class="generalOptions" style="font-size: 13px; margin-bottom: 20px;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input id="enabledAllAccess" type="checkbox">
								<span class="check"></span> <strong><i class="fg-green icon-unlocked"></i> {{groupModalAccessGroup_textEnableAllAccess}}</strong> </label>
						</div>

						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input id="disabledAllAccess" type="checkbox">
								<span class="check"></span> <strong><i class="fg-red icon-locked"></i> {{groupModalAccessGroup_textDisableAllAccess}}</strong> </label>
						</div>

						<br />
						<span id="checkboxChecked">0</span><strong> {{groupModalAccessGroup_textEnableAccess}}</strong>
						<br />
						<span id="checkboxNotChecked">41</span><strong> {{groupModalAccessGroup_textDisableAccess}}</strong>

					</div>


					<div class="reports">
						<strong> {{groupModalAccessGroup_textReport}} </strong>
						<i style="display: none" class="icon-arrow-right-4"></i>
					</div>

					<div class="manager">
						<strong> {{groupModalAccessGroup_textAdministration}} </strong>
						<i style="display: none" class="icon-arrow-right-4"></i>
					</div>

				</div>

				<div class="box2" style="width: 260px; margin-top: 20px; height: 315px; float: left; border-right-style: solid; border-right-color: #c3c3c3; border-right-width: 1px; margin-left: 10px;">

					<div class="optionReports" style="display: none; font-size:12px;">

						<div class="sectionDashboard input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textDashboard}}</strong> </label>
						</div>
						<div class="sectionGeneralListCertificate input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textGeneralListCertificate}}</strong> </label>
						</div>

						<div class="optionGraphics" style="margin-top: 5px; padding: 0 15px;">
							<div>
								<strong> {{groupModalAccessGroup_textGraphics}} </strong>
								<i style="display: none" class="icon-arrow-right-4"></i>
							</div>
							<div style="margin-left: 25px; display: none;">
								<strong> {{groupModalAccessGroup_textGraphicsCoveredCertificatesHousing}} </strong>
								<i style="display: none" class="icon-arrow-right-4"></i>
							</div>
							<div style="margin-left: 25px;">
								<strong> {{groupModalAccessGroup_textGraphicsCertificatesWithExtensor}} </strong>
								<i style="display: none" class="icon-arrow-right-4"></i>
							</div>
							<div style="margin-left: 25px; display: none;">
								<strong> {{groupModalAccessGroup_textGraphicsInstallationPerRoom}} </strong>
								<i style="display: none" class="icon-arrow-right-4"></i>
							</div>
							<div style="margin-left: 25px;">
								<strong> {{groupModalAccessGroup_textGraphicsStatusByCertificate}} </strong>
								<i style="display: none" class="icon-arrow-right-4"></i>
							</div>
						</div>

					</div>

					<div class="optionManager" style="display: none; font-size:12px; margin-top: 5px; padding: 0 15px;">
						<div>
							<strong> {{groupModalAccessGroup_textGroup}} </strong>
							<i style="display: none" class="icon-arrow-right-4"></i>
						</div>
						<div>
							<strong> {{groupModalAccessGroup_textUser}} </strong>
							<i style="display: none" class="icon-arrow-right-4"></i>
						</div>
						<div>
							<strong> {{groupModalAccessGroup_textProvision}} </strong>
							<i style="display: none" class="icon-arrow-right-4"></i>
						</div>
						<div style="margin-left: 25px;">
							<strong> {{groupModalAccessGroup_textServicePlan}} </strong>
							<i style="display: none" class="icon-arrow-right-4"></i>
						</div>
						<div style="margin-left: 25px;">
							<strong> {{groupModalAccessGroup_textRoom}} </strong>
							<i style="display: none" class="icon-arrow-right-4"></i>
						</div>
						<div style="margin-left: 25px;">
							<strong> {{groupModalAccessGroup_textCpeType}} </strong>
							<i style="display: none" class="icon-arrow-right-4"></i>
						</div>
						<div style="margin-left: 25px;">
							<strong> {{groupModalAccessGroup_textCpeModel}} </strong>
							<i style="display: none" class="icon-arrow-right-4"></i>
						</div>
						<div style="margin-left: 25px;">
							<strong> {{groupModalAccessGroup_textExtensorType}} </strong>
							<i style="display: none" class="icon-arrow-right-4"></i>
						</div>
						<div style="margin-left: 25px;">
							<strong> {{groupModalAccessGroup_textExtensorModel}} </strong>
							<i style="display: none" class="icon-arrow-right-4"></i>
						</div>
						<div style="margin-left: 25px;">
							<strong> {{groupModalAccessGroup_textTestDevice}} </strong>
							<i style="display: none" class="icon-arrow-right-4"></i>
						</div>

					</div>


				</div>

				<div class="box3" style="width: 260px; margin-top: 20px; height: 315px; float: left; margin-left: 10px; font-size: 12px;">
					<div class="sectionGroup" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textGroupEnableShow}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textGroupEnableAdd}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textGroupEnableUpdate}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textGroupEnableDelete}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textGroupEnableAccess}}</strong></label>
						</div>
					</div>
					<div class="sectionUser" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textUserEnableShow}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textUserEnableAdd}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textUserEnableUpdate}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textUserEnableDelete}}</strong></label>
						</div>
					</div>
					<div class="sectionPlanService" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textServicePlanEnableShow}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textServicePlanEnableAdd}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textServicePlanEnableUpdate}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textServicePlanEnableDelete}}</strong></label>
						</div>
					</div>
					<div class="sectionRoom" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textRoomEnableShow}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textRoomEnableAdd}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textRoomEnableUpdate}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textRoomEnableDelete}}</strong></label>
						</div>
					</div>
					<div class="sectionCPEType" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textCpeTypeEnableShow}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textCpeTypeEnableAdd}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textCpeTypeEnableUpdate}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textCpeTypeEnableDelete}}</strong></label>
						</div>
					</div>
					<div class="sectionCPEModel" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textCpeModelEnableShow}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textCpeModelEnableAdd}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textCpeModelEnableUpdate}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textCpeModelEnableDelete}}</strong></label>
						</div>
					</div>
					<div class="sectionExtensorType" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textExtensorTypeEnableShow}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textExtensorTypeEnableAdd}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textExtensorTypeEnableUpdate}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textExtensorTypeEnableDelete}}</strong></label>
						</div>
					</div>
					<div class="sectionExtensorModel" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textExtensorModelEnableShow}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textExtensorModelEnableAdd}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textExtensorModelEnableUpdate}}</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> {{groupModalAccessGroup_textExtensorModelEnableDelete}}</strong></label>
						</div>
					</div>
					<div class="sectionApplicationSettings" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span><i class="padlock fg-red icon-locked"></i> <strong> {{groupModalAccessGroup_textTestDeviceEnableShow}} </strong> </label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i> <strong> {{groupModalAccessGroup_textTestDeviceUpdate}} </strong> </label>
						</div>
					</div>
					<div class="sectionCertifiedHomeCoverage" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span><i class="padlock fg-red icon-locked"></i> <strong> {{groupModalAccessGroup_textGraphicsCoveredCertificatesHousingEnableShow}} </strong> </label>
						</div>
					</div>
					<div class="sectionCertifiedHighPropagation" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span><i class="padlock fg-red icon-locked"></i> <strong> {{groupModalAccessGroup_textGraphicsCertificatesWithExtensorEnableShow}} </strong> </label>
						</div>
					</div>
					<div class="sectionCertifiedTime" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span><i class="padlock fg-red icon-locked"></i> <strong> {{groupModalAccessGroup_textGraphicsInstallationPerRoomEnableShow}} </strong> </label>
						</div>
					</div>
					<div class="sectionSpeedtest" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span><i class="padlock fg-red icon-locked"></i> <strong> {{groupModalAccessGroup_textGraphicsStatusByCertificateEnableShow}} </strong> </label>
						</div>
					</div>
				</div>

			</div>
			<div class="modalMessageRequired">
				<strong>{{groupModalAccessGroupMessageDescription}}</strong>
			</div>
			<div class="modalFoot">
				<button type="submit" name="GroupsModalButtonAccessGroup">
					{{groupModalAccessGroupButtonAccess}}
				</button>
				<button type="button" name="GroupsModalButtonRestoreGroup">
					{{groupModalAccessGroupButtonRestore}}
				</button>
				<button type="button" name="GroupsModalButtonCloseModalGroup">
					{{groupModalAccessGroupButtonClose}}
				</button>
			</div>

		</div>
		<div class="modalFooter">

			<img src="../img/techwizarddev.baking.cl/logo-footer.png" style="width:70px; margin-top: 0px;" />

		</div>
	</div>
</div>
<!-- /Modal -->
