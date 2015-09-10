<form>
	<div id="main_Title">
		<legend>
			<i class="{{settingAplicationHeadIconLaptop}}"></i><i class="{{settingAplicationHeadIconPhone}}"></i><i class="{{settingAplicationHeadIconTablet}}"></i> {{settingAplicationHeadTitle}}
		</legend>
	</div>

	<div id="main_HeadMessage">
		{{settingAplicationHeadDescription}}
	</div>

	<div id="main_AlertMessage">
		<!--	En estos momentos no es posible acceder a la información. -->
	</div>

	<div id="main_ValidationMessage">

	</div>

	<!--	Asignar nombre main_FormContent	-->
	<div id="main_FormContent" style="width: 1100px;">

		<!-- download -->

		<!-- inicio url download -->
		<div style="width:420px; margin-right: 10px; float: left;">
			<label>{{settingAplicationFormUrlDownloadLabelText}}</label>
			<div class="input-control text" data-role="input-control" >
				<input type="text" name="settingAplicationInputUrlDownload" placeholder="{{settingAplicationFormUrlDownloadInputPlaceholder}}" value="" />
				<button class="btn-clear" tabindex="-1"></button>
			</div>
		</div>
		<!-- fin url download -->

		<!-- inicio time out download -->
		<div style="width:180px; float: left;">
			<label>{{settingAplicationFormTimeoutDownloadLabelText}}</label>
			<div class="input-control text size1" data-role="input-control" >
				<input type="text" name="settingAplicationInputTimeoutDownload" placeholder="{{settingAplicationFormTimeoutDownloadInputPlaceholder}}" value="{{settingAplicationFormTimeoutDownloadInputValue}}" maxlength="3">
				<button class="btn-clear" tabindex="-1"></button>
			</div><span style="margin-left: 10px;">{{settingAplicationFormText1}}</span>
		</div>
		<!-- fin time out download -->

		<!-- fin download -->


		<!-- inicio ping -->

		<!-- inicio url ping -->
		<div style="width:420px; margin-right: 10px; clear: both; float:left">
			<label>{{settingAplicationFormUrlPingLabelText}}</label>
			<div class="input-control text" data-role="input-control" >
				<input type="text" name="settingAplicationInputUrlPing" placeholder="{{settingAplicationFormUrlPingInputPlaceholder}}">
				<button class="btn-clear" tabindex="-1"></button>
			</div>
		</div>
		<!-- fin url ping -->

		<!-- inicio count ping -->
		<div style="width:200px; float: left;">
			<label>{{settingAplicationFormCountPingsLabelText}}</label>
			<div class="input-control text size1" data-role="input-control" >
				<input type="text" name="settingAplicationInputCountPings" placeholder="{{settingAplicationFormCountPingsInputPlaceholder}}" maxlength="3">
				<button class="btn-clear" tabindex="-1"></button>
			</div><span style="margin-left: 10px;">{{settingAplicationFormText2}}</span>
		</div>
		<!-- fin count ping -->

		<!-- fin ping -->

		<!-- inicio VU Meter  -->

		<!-- inicio VU Meter -->
		<div style="width:200px; clear: both;">
			<label>{{settingAplicationFormVuMeterLabelText}}</label>
			<div class="input-control text size1" data-role="input-control">
				<input type="text" name="settingAplicationInputVuMeter" placeholder="{{settingAplicationFormVuMeterInputPlaceholder}}" maxlength="3">
				<button class="btn-clear" tabindex="-1"></button>
			</div><span style="margin-left: 10px;">%</span>
		</div>
		<!-- fin VU Meter -->

		<!-- fin VU Meter  -->

		<!-- inicio speedtest -->

		<h4 style="clear:both; margin-bottom: 10px;"><i class="icon-dashboard"></i> Speed test</h4>

		<!-- inicio habilitar prueba cableado -->
		<div style="display: none">
			{{settingAplicationHeadEnableSpeedtestText}}
			<div>
				<div class="input-control radio default-style" data-role="input-control">
					<label>
						<input id="radio_1" type="radio" name="r1" value="true" />
						<span class="check"></span> {{settingAplicationHeadEnableSpeedtestTextOption1}} </label>
				</div>
				<div class="input-control radio  default-style" data-role="input-control">
					<label>
						<input id="radio_2" type="radio" name="r1" value="false" />
						<span class="check"></span> {{settingAplicationHeadEnableSpeedtestTextOption2}} </label>
				</div>
			</div>

		</div>
		<!-- fin habilitar prueba cableado -->

		<div id="settingAplicationDivSpeedtest" style="visibility: visible;">

			<!-- inicio aceptacion de prueba -->
			<div class="radiobuttonSet" style="width:260px; float: left">
				<label>{{settingAplicationFormText6}}</label>
				<button class="radiobuttonButton mini" type="button" value="0">
					<i class="icon-checkmark" style="display: none"></i>
					{{settingAplicationFormText3}}
				</button>

				<button class="radiobuttonButton mini" type="button" value="1">
					<i class="icon-checkmark" style="display: none"></i>
					{{settingAplicationFormText4}}
				</button>

				<button class="radiobuttonButton mini" type="button" value="2">
					<i class="icon-checkmark" style="display: none"></i>
					{{settingAplicationFormText5}}
				</button>
			</div>
			<!-- fin aceptacion de prueba -->

			<!-- inicio % aceptacion prueba nacional -->
			<div style="width:250px; float: left">
				<label>{{settingAplicationForm_RequirementTestSpeedtestNacional_LabelText}}</label>
				<div class="input-control text size1" data-role="input-control">
					<input type="text" name="settingAplicationInputTestSpeedtestNacional" placeholder="{{settingAplicationForm_RequirementTestSpeedtestNacional_InputPlaceholder}}" maxlength="3">
					<button class="btn-clear" tabindex="-1"></button>
				</div><span style="margin-left: 10px;">%</span>
			</div>
			<!-- fin % aceptacion prueba nacional -->

			<!-- inicio % aceptacion prueba internacional -->
			<div style="width:300px; float: left; ">
				<label>{{settingAplicationForm_RequirementTestSpeedtestInternacional_LabelText}}</label>
				<div class="input-control text size1" data-role="input-control">
					<input type="text" name="settingAplicationInputTestSpeedtestInternacional" placeholder="{{settingAplicationForm_RequirementTestSpeedtestInternacional_InputPlaceholder}}" maxlength="3">
					<button class="btn-clear" tabindex="-1"></button>
				</div><span style="margin-left: 10px;">%</span>
			</div>
			<!-- fin % aceptacion prueba internacional -->

			<!-- fin speedtest -->

		</div>

		<div id="main_FootMessage">

		</div>
		<?php

if($permiso1[2]==1){

		?>
		<div id="main_ButtonsSet">
			<button name="settingAplicationFormButtonApplyChange" type="submit">
				{{settingAplicationFormButtonApplyChangeText}}
			</button>
			<button name="settingAplicationFormButton_Clean" type="button">
				{{settingAplicationFormButtonCleanText}}
			</button>
			<button name="settingAplicationFormButton_Restore" type="button">
				{{settingAplicationFormButtonRestoreText}}
			</button>
		</div>
		<?php

		}
		?>
</form>