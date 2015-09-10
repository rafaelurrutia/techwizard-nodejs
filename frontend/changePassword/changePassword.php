<div id="ChangePasswordModal" class="modalmask">
	<div class="modalbox movedown">
		<div class="modalBody">
			<div class="modalTop">

				<div style="line-height: 35px;">
					<strong> <i class=" icon-locked"></i> <span id="planServiceTitle">{{text0}}</span> </strong>
				</div>

			</div>
			<form name="planServiceModalPlanService" method="POST" data-op="0" >
				<div class="modalHead"></div>
				<div class="modalMessageError"></div>
				<div class="modalMain">
					<input type="hidden" name="modalChangePasswordInputHiddenId" value="<?php echo $_SESSION["username"]; ?>">
					<input type="hidden" name="modalChangePasswordInputHiddenPassword" value="<?php echo md5($_SESSION["password"]); ?>">
					<div class="htmlElement">
						<label>{{text1}}</label>
						<div class="input-control password">
							<input type="password" name="modalChangePasswordInputCurrentPassword" maxlength="10" placeholder="{{text2}}" autocomplete="off"  />
							<button class="btn-reveal"></button>
						</div>
					</div>
					<div class="htmlElement">
						<label data-element="text">{{text3}}</label>
						<div class="input-control password">
							<input type="password" name="modalChangePasswordInputNewPassword" maxlength="10" placeholder="{{text4}}" autocomplete="off"  />
							<button class="btn-reveal"></button>
						</div>
					</div>
					<div class="htmlElement">
						<label>{{text5}}</label>
						<div class="input-control password">
							<input type="password" name="modalChangePasswordInputConfirmNewPassword" maxlength="10" placeholder="{{text6}}" autocomplete="off"  />
							<button class="btn-reveal"></button>
						</div>
					</div>
				</div>
				<div class="modalMessageRequired">
					{{text7}}
				</div>
				<div class="modalFoot">
					<button type="submit" name="ChangePasswordModalButtonUpdateChangePassword">
						<i class="icon-loading" style="display:none"></i>
						{{text8}}
					</button>
					<button type="button" name="ChangePasswordModalButtonBackChangePassword" onclick="javascript:history.back(1)">
						{{text9}}
					</button>
				</div>
			</form>
		</div>
		<div class="modalFooter"><img src="../img/techwizarddev.baking.cl/logo-footer.png" style="width:70px; margin-top: 0px;" />
		</div>
	</div>
</div>

