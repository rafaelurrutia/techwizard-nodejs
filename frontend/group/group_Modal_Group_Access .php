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
							<div style="margin-left: 25px;">
								<strong> {{groupModalAccessGroup_textGraphicsCoveredCertificatesHousing}} </strong>
								<i style="display: none" class="icon-arrow-right-4"></i>
							</div>
							<div style="margin-left: 25px;">
								<strong> {{groupModalAccessGroup_textGraphicsCertificatesWithExtensor}} </strong>
								<i style="display: none" class="icon-arrow-right-4"></i>
							</div>
							<div style="margin-left: 25px;">
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
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Show Group</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Add Group</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Update Group</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Delete Group</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Access Group</strong></label>
						</div>
					</div>
					<div class="sectionUser" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Show Usuario</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Add Usuario</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Update Usuario</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Delete Usuario</strong></label>
						</div>
					</div>
					<div class="sectionPlanService" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Show Service Plan</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Add Service Plan</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Update Service Plan</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Delete Service Plan</strong></label>
						</div>
					</div>
					<div class="sectionRoom" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Show Room</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Add Room</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Update Room</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Delete Room</strong></label>
						</div>
					</div>
					<div class="sectionCPEType" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Show Cpe Type</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Add Cpe Type</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Update Cpe Type</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Delete Cpe Type</strong></label>
						</div>
					</div>
					<div class="sectionCPEModel" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Show Cpe Model</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Add Cpe Model</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Update Cpe Model</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Delete Cpe Model</strong></label>
						</div>
					</div>
					<div class="sectionExtensorType" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Show Extensor Type</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Add Extensor Type</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Update Extensor Type</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Delete Extensor Type</strong></label>
						</div>
					</div>
					<div class="sectionExtensorModel" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Show Extensor Model</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Add Extensor Model</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Update Extensor Model</strong></label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i><strong> Enable Delete Extensor Model</strong></label>
						</div>
					</div>
					<div class="sectionApplicationSettings" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span><i class="padlock fg-red icon-locked"></i> <strong> Habilitar Listar Prueba Dispositivos </strong> </label>
						</div>
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span> <i class="padlock fg-red icon-locked"></i> <strong> Habilitar Modificar Prueba Dispositivos </strong> </label>
						</div>
					</div>
					<div class="sectionCertifiedHomeCoverage" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span><i class="padlock fg-red icon-locked"></i> <strong> Habilitar Listar Certificados con cobertura vivienda </strong> </label>
						</div>
					</div>
					<div class="sectionCertifiedHighPropagation" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span><i class="padlock fg-red icon-locked"></i> <strong> Habilitar Listar % Certificados con extensores </strong> </label>
						</div>
					</div>
					<div class="sectionCertifiedTime" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span><i class="padlock fg-red icon-locked"></i> <strong> Habilitar Listar % Instalación por habitación </strong> </label>
						</div>
					</div>
					<div class="sectionSpeedtest" style="display:none;">
						<div class="input-control checkbox" data-role="input-control">
							<label>
								<input type="checkbox">
								<span class="check"></span><i class="padlock fg-red icon-locked"></i> <strong> Habilitar Listar % Status por certificados </strong> </label>
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
