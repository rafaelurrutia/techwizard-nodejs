<form style="float: left">
	<div id="main_Title">
		<legend id="buttonsTestDevicesAndSystem" class="radiobuttonSet">
			<i class="{{settingAplicationHeadIconLaptop}}"></i><i class="{{settingAplicationHeadIconPhone}}"></i><i class="{{settingAplicationHeadIconTablet}}"></i> {{settingAplicationHeadTitle}}

			<button class="info radiobuttonButtonSelect mini" type="button" value="devices">
				<i class="icon-checkmark"></i>
				Devices
			</button>

			<button class="inverse radiobuttonButton mini" type="button" value="system">
				<i class="icon-checkmark" style="display: none"></i>
				System
			</button>
		</legend>

	</div>

	<div id="device">

		<div align="left">

			<div id="buttonsGroups" class="radiobuttonSet" style="float: left; margin-left: 10px;">

				<span>Select group: </span>

				<button class="info buttonGroup radiobuttonButtonSelect mini" type="button" value="todos">
					<i class="fa fa-users"></i>&nbsp;
					Todos&nbsp;<i class="icon-checkmark"></i>
				</button>

			</div>

			<div id="buttonsDevices" class="radiobuttonSet" style="float:left; margin-left: 10px;">

				<span style="margin-left: 10px;">Select device</span>

				<button class="info buttonDevice radiobuttonButtonSelect mini" type="button" value="todos">
					<i class="icon-earth"></i>&nbsp;
					Todos &nbsp;<i class="icon-checkmark"></i>
				</button>

				<button class="inverse buttonDevice radiobuttonButton mini" type="button" value="windows">
					<i class="icon-windows"></i>&nbsp;
					Windows &nbsp;<i class="icon-checkmark" style="display: none;"></i>
				</button>

				<button class="inverse buttonDevice radiobuttonButton mini" type="button" value="android">
					<i class="icon-android"></i>&nbsp;
					Android &nbsp;<i class="icon-checkmark" style="display: none;"></i>
				</button>

				<button class="inverse buttonDevice radiobuttonButton mini" type="button" value="ios">
					<i class="icon-apple"></i>&nbsp;
					iOS &nbsp;<i class="icon-checkmark" style="display: none;"></i>
				</button>

			</div>

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
		<div id="main_FormContent" style="width: 1000px; font-size: 1rem;">

			<input type="hidden" value="" name="hiddenvalue" />

			<!-- download -->
			<div id="download">
				<!-- inicio url download -->
				<div style="width:420px; margin-right: 10px; float: left;">
					<label>{{settingAplicationFormUrlDownloadLabelText}}</label>
					<div class="input-control text" data-role="input-control" style="height: 30px;">
						<input type="text" name="settingAplicationInputUrlDownload" placeholder="{{settingAplicationFormUrlDownloadInputPlaceholder}}" value="" />
						<button class="btn-clear" tabindex="-1"></button>
					</div>
				</div>
				<!-- fin url download -->

				<!-- inicio time out download -->
				<div style="width:180px; float: left;">
					<label>{{settingAplicationFormTimeoutDownloadLabelText}}</label>
					<div class="input-control text size1" data-role="input-control"  style="height: 30px;">
						<input type="text" name="settingAplicationInputTimeoutDownload" placeholder="{{settingAplicationFormTimeoutDownloadInputPlaceholder}}" value="{{settingAplicationFormTimeoutDownloadInputValue}}" maxlength="3">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
					<span style="margin-left: 10px;">{{settingAplicationFormText1}}</span>
					<!--
					<button class="info" style="padding: 1px; margin-right:1px;" data-hint="Transfiera este valor a todos los dispositivos de este grupo" data-hint-position="right"><i class="icon-arrow-left-4"></i> <i class="icon-earth"></i></button>
					<button class="info" style="padding: 1px;" data-hint="Transfiera este valor a todos los dispositivos de todos los grupos" data-hint-position="right"><i class="icon-arrow-left-4"></i> <i class="fa fa-users"></i></button>
					-->
				</div>
				<!-- fin time out download -->

				<!-- inicio sessions download -->
				<div style="width:190px; float: left;">
					<label>*{{settingAplicationFormSessionsDownloadLabelText}}</label>
					<div class="input-control text size1" data-role="input-control" style="height: 30px;" >
						<input type="text" name="settingAplicationInputSessionsDownload" placeholder="{{settingAplicationFormSessionsDownloadInputPlaceholder}}" value="{{settingAplicationFormSessionsDownloadInputValue}}" maxlength="3">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
					<span style="margin-left: 10px;">{{settingAplicationFormText2}}</span>
					<!--
					<button class="info" style="padding: 1px 1px; margin-right:1px;"><i class="icon-arrow-left-4"></i> <i class="icon-earth"></i></button>
					<button class="info" style="padding: 1px 1px;"><i class="icon-arrow-left-4"></i> <i class="fa fa-users"></i></button>
					-->
				</div>
				<!-- fin sessions download -->

				<!-- inicio accept test download -->
				<div style="width:180px; float: left">
					<label>*{{settingAplicationFormAcceptTestDownloadLabelText}}</label>
					<div class="input-control text size1" data-role="input-control" style="height: 30px;">
						<input type="text" name="settingAplicationInputAcceptTestDownload" placeholder="{{settingAplicationFormAcceptTestDownloadInputPlaceholder}}" value="{{settingAplicationFormAcceptTestDownloadInputValue}}" maxlength="3">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
					<span style="margin-left: 10px;">%</span>
				</div>
				<!-- fin accept test download -->

			</div>
			<!-- fin download -->

			<!-- upload -->
			<div id="upload">
				<!-- inicio url upload -->
				<div style="width:420px; margin-right: 10px; float: left;">
					<label>*{{settingAplicationFormUrlUploadLabelText}}</label>
					<div class="input-control text" data-role="input-control" style="height: 30px;" >
						<input type="text" name="settingAplicationInputUrlUpload" placeholder="{{settingAplicationFormUrlUploadInputPlaceholder}}" value="" />
						<button class="btn-clear" tabindex="-1"></button>
					</div>
				</div>
				<!-- fin url upload -->

				<!-- inicio time out upload -->
				<div style="width:180px; float: left;">
					<label>*{{settingAplicationFormTimeoutUploadLabelText}}</label>
					<div class="input-control text size1" data-role="input-control" style="  height: 30px;" >
						<input type="text" name="settingAplicationInputTimeoutUpload" placeholder="{{settingAplicationFormTimeoutUploadInputPlaceholder}}" value="{{settingAplicationFormTimeoutUploadInputValue}}" maxlength="3">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
					<span style="margin-left: 10px;">{{settingAplicationFormText1}}</span>
				</div>
				<!-- fin time out upload -->

				<!-- inicio sessions upload -->
				<div style="width:190px; float: left;">
					<label>*{{settingAplicationFormSessionsUploadLabelText}}</label>
					<div class="input-control text size1" data-role="input-control" style="height: 30px;" >
						<input type="text" name="settingAplicationInputSessionsUpload" placeholder="{{settingAplicationFormSessionsUploadInputPlaceholder}}" value="{{settingAplicationFormSessionsUploadInputValue}}" maxlength="3">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
					<span style="margin-left: 10px;">{{settingAplicationFormText2}}</span>
				</div>
				<!-- fin sessions upload -->

				<!-- inicio accept test upload -->
				<div style="width:180px; float: left">
					<label>*{{settingAplicationFormAcceptTestUploadLabelText}}</label>
					<div class="input-control text size1" data-role="input-control" style="height: 30px;">
						<input type="text" name="settingAplicationInputAcceptTestUpload" placeholder="{{settingAplicationFormAcceptTestUploadInputPlaceholder}}" value="{{settingAplicationFormAcceptTestUploadInputValue}}" maxlength="3">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
					<span style="margin-left: 10px;">%</span>
				</div>
				<!-- fin accept test upload -->
			</div>
			<!-- fin upload -->

			<!-- inicio ping -->
			<div id="ping">
				<!-- inicio url ping -->
				<div style="width:420px; margin-right: 10px; float: left;">
					<label>{{settingAplicationFormUrlPingLabelText}}</label>
					<div class="input-control text" data-role="input-control" style="height: 30px;" >
						<input type="text" name="settingAplicationInputUrlPing" placeholder="{{settingAplicationFormUrlPingInputPlaceholder}}">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
				</div>
				<!-- fin url ping -->

				<!-- inicio count ping -->
				<div style="width:190px; float: left;">
					<label>{{settingAplicationFormCountPingsLabelText}}</label>
					<div class="input-control text size1" data-role="input-control" style="height: 30px;" >
						<input type="text" name="settingAplicationInputCountPings" placeholder="{{settingAplicationFormCountPingsInputPlaceholder}}" maxlength="3">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
					<span style="margin-left: 10px;">{{settingAplicationFormText2}}</span>
				</div>
				<!-- fin count ping -->
			</div>
			<!-- fin ping -->

			<!-- inicio dns -->
			<div id="dns">
				<!-- inicio url dns -->
				<div style="width:420px; margin-right: 10px; clear: both">
					<label>*{{settingAplicationFormUrlDnsLabelText}}</label>
					<div class="input-control text" data-role="input-control" style="height: 30px;" >
						<input type="text" name="settingAplicationInputUrlDns" placeholder="{{settingAplicationFormUrlDnsInputPlaceholder}}">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
				</div>
				<!-- fin url dns -->
			</div>
			<!-- fin dns -->

			<!-- inicio traceroute  -->
			<div id="traceroute">
				<!-- inicio url traceroute  -->
				<div style="width:420px; margin-right: 10px; float: left">
					<label>*{{settingAplicationFormUrlTracerouteLabelText}}</label>
					<div class="input-control text" data-role="input-control" style="height: 30px;" >
						<input type="text" name="settingAplicationInputUrlTraceroute" placeholder="{{settingAplicationFormUrlTracerouteInputPlaceholder}}">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
				</div>
				<!-- fin url traceroute -->

				<!-- inicio hops traceroute  -->
				<div style="width:190px; float: left">
					<label>*{{settingAplicationFormHopsTracerouteLabelText}}</label>
					<div class="input-control text size1" data-role="input-control" style="height: 30px;" >
						<input type="text" name="settingAplicationInputHopsTraceroute" placeholder="{{settingAplicationFormHopsTracerouteInputPlaceholder}}" value="{{settingAplicationFormHopsTracerouteInputValue}}" maxlength="3">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
					<span style="margin-left: 10px;">{{settingAplicationFormText2}}</span>
				</div>
				<!-- fin hops traceroute -->
			</div>
			<!-- fin traceroute  -->

			<!-- inicio otros  -->
			<div id="otros">
				<!-- inicio VU Meter -->
				<div style="width:180px; float:left; clear: both;">
					<label>{{settingAplicationFormVuMeterLabelText}}</label>
					<div class="input-control text size1" data-role="input-control" style="height: 30px;">
						<input type="text" name="settingAplicationInputVuMeter" placeholder="{{settingAplicationFormVuMeterInputPlaceholder}}" maxlength="3">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
					<span style="margin-left: 10px;">%</span>
				</div>
				<!-- fin VU Meter -->

				<!-- inicio min habitaciones to certificate -->
				<div style="width:200px; float: left">
					<label>*{{settingAplicationFormMinRoomsCertificateLabelText}}</label>
					<div class="input-control text size1" data-role="input-control" style="height: 30px;">
						<input type="text" name="settingAplicationInputMinRoomsCertificate" placeholder="{{settingAplicationFormMinRoomsCertificateInputPlaceholder}}" value="{{settingAplicationFormMinRoomsCertificateInputValue}}" maxlength="3">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
					<span style="margin-left: 10px;">{{settingAplicationFormText7}}</span>
				</div>
				<!-- fin min habitaciones to certificate -->

				<!-- inicio max habitaciones to certificate -->
				<div style="width:200px; float: left; ">
					<label>*{{settingAplicationFormMaxRoomsCertificateLabelText}}</label>
					<div class="input-control text size1" data-role="input-control" style="height: 30px;">
						<input type="text" name="settingAplicationInputMaxRoomsCertificate" placeholder="{{settingAplicationFormMaxRoomsCertificateInputPlaceholder}}" value="{{settingAplicationFormMaxRoomsCertificateInputValue}}" maxlength="3">
						<button class="btn-clear" tabindex="-1"></button>
					</div>
					<span style="margin-left: 10px;">{{settingAplicationFormText7}}</span>
				</div>

				<div id="buttonsForceCertificateBothFrequencies" class="radiobuttonSet" style="margin-top: 5px; float: left">
					<label>* {{settingAplicationFormForceCertificateBothFrequenciesLabelText}}</label>
					<button class="radiobuttonButton mini" type="button" value="true">
						<i class="icon-checkmark" style="display: none"></i>
						{{settingAplicationHeadEnableSpeedtestTextOption1}}
					</button>

					<button class="radiobuttonButton mini" type="button" value="false">
						<i class="icon-checkmark" style="display: none"></i>
						{{settingAplicationHeadEnableSpeedtestTextOption2}}
					</button>

				</div>
				<!-- fin max habitaciones to certificate -->
			</div>
			<!-- fin otros -->

			<!-- inicio speedtest -->
			<div id="speedtest" style="display:none;">
				<h4 style="clear:both; margin-bottom: 10px;"><i class="icon-dashboard"></i> Speedtest</h4>

				<!-- inicio habilitar prueba cableado -->
				<div id="buttonsEnableSpeedtest" class="radiobuttonSet" style="margin-top: 5px; ">
					<label> {{settingAplicationHeadEnableSpeedtestText}}</label>
					<button class="radiobuttonButton mini" type="button" value="true">
						<i class="icon-checkmark" style="display: none"></i>
						{{settingAplicationHeadEnableSpeedtestTextOption1}}
					</button>

					<button class="radiobuttonButton mini" type="button" value="false">
						<i class="icon-checkmark" style="display: none"></i>
						{{settingAplicationHeadEnableSpeedtestTextOption2}}
					</button>

				</div>
				<!-- fin habilitar prueba cableado -->

				<!-- inicio speedtest -->
				<div id="settingAplicationDivSpeedtest" style="visibility: visible;">

					<!-- inicio aceptacion de prueba -->
					<div id="buttonsSpeedtestAcceptTest" class="radiobuttonSet" style="width:260px; float: left">
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
					<div style="width:210px; float: left">
						<label>{{settingAplicationForm_RequirementTestSpeedtestNacional_LabelText}}</label>
						<div class="input-control text size1" data-role="input-control" style="height: 30px;">
							<input type="text" name="settingAplicationInputTestSpeedtestNacional" placeholder="{{settingAplicationForm_RequirementTestSpeedtestNacional_InputPlaceholder}}" maxlength="3">
							<button class="btn-clear" tabindex="-1"></button>
						</div><span style="margin-left: 10px;">%</span>
					</div>
					<!-- fin % aceptacion prueba nacional -->

					<!-- inicio % aceptacion prueba internacional -->
					<div style="width:210px; float: left; ">
						<label>{{settingAplicationForm_RequirementTestSpeedtestInternacional_LabelText}}</label>
						<div class="input-control text size1" data-role="input-control" style="height: 30px;">
							<input type="text" name="settingAplicationInputTestSpeedtestInternacional" placeholder="{{settingAplicationForm_RequirementTestSpeedtestInternacional_InputPlaceholder}}" maxlength="3">
							<button class="btn-clear" tabindex="-1"></button>
						</div><span style="margin-left: 10px;">%</span>
					</div>
					<!-- fin % aceptacion prueba internacional -->

					<!-- inicio url speedtest -->
					<div style="width:420px; margin-right: 10px; float: left">
						<label>*{{settingAplicationFormUrlSpeedtestLabelText}}</label>
						<div class="input-control text" data-role="input-control" style="height: 30px;">
							<input type="text" name="settingAplicationInputUrlSpeedtest" placeholder="{{settingAplicationFormUrlSpeedtestInputPlaceholder}}">
							<button class="btn-clear" tabindex="-1"></button>
						</div>
					</div>
					<!-- fin url speedtest -->

					<!-- inicio tamaño del flash de speedtest -->
					<div style="width:180px; float: left; ">
						<label>*{{settingAplicationFormSizeSpeedtestLabelText}}</label>
						<div class="input-control text size1" data-role="input-control" style="height: 30px;">
							<input type="text" name="settingAplicationInputSpeedtestSize" placeholder="{{settingAplicationFormSizeSpeedtestInputPlaceholder}}" value="{{settingAplicationFormSizeSpeedtestInputValue}}" maxlength="3">
							<button class="btn-clear" tabindex="-1"></button>
						</div><span style="margin-left: 10px;">%</span>
					</div>
					<!-- fin tamaño del flash de speedtest -->

					<!-- inicio posicion del flash de speedtest eje x -->
					<div style="width:180px; float: left; ">
						<label>*{{settingAplicationFormPositionSpeedtestLabelText}}</label>
						<div class="input-control text size1" data-role="input-control" style="height: 30px;">
							<input type="text" name="settingAplicationInputSpeedtestPosition" placeholder="{{settingAplicationFormPositionSpeedtestInputPlaceholder}}" value="{{settingAplicationFormPositionSpeedtestInputValue}}" maxlength="3">
							<button class="btn-clear" tabindex="-1"></button>
						</div><span style="margin-left: 10px;"></span>
					</div>
					<!-- fin posicion del flash de speedtest -->

					<!-- inicio posicion del flash de speedtest eje y -->
					<div style="width:180px; float: left; ">
						<label>*{{settingAplicationFormPositionYSpeedtestLabelText}}</label>
						<div class="input-control text size1" data-role="input-control" style="height: 30px;">
							<input type="text" name="settingAplicationInputSpeedtestYPosition" placeholder="{{settingAplicationFormPositionYSpeedtestInputPlaceholder}}" value="{{settingAplicationFormPositionYSpeedtestInputValue}}" maxlength="3">
							<button class="btn-clear" tabindex="-1"></button>
						</div><span style="margin-left: 10px;"></span>
					</div>
					<!-- fin posicion del flash de speedtest -->

					<!-- fin speedtest -->

				</div><!-- fin speedtest -->
			</div>

		</div>
	</div>

	<div id="system" style="display: none;">

		<div style="margin-top: 5px; float: left">
			* {{settingAplicationFormFormatDateLabelText}}
			<div>
				<div class="input-control radio default-style" data-role="input-control">
					<label>
						<input id="radio_date1" type="radio" name="r3" value="{{settingAplicationFormFormatDateRadioButtonTextValue1}}" />
						<span class="check"></span>{{settingAplicationFormFormatDateRadioButtonTextOption1}}</label>
				</div>
				<div class="input-control radio  default-style" data-role="input-control">
					<label>
						<input id="radio_date2" type="radio" name="r3" value="{{settingAplicationFormFormatDateRadioButtonTextValue2}}" />
						<span class="check"></span> {{settingAplicationFormFormatDateRadioButtonTextOption2}} </label>
				</div>
			</div>

		</div>

		<div style="margin-left:40px; margin-top: 5px; float: left">
			* {{settingAplicationFormFormatNumericLabelText}}
			<div>
				<div class="input-control radio default-style" data-role="input-control">
					<label>
						<input id="radio_numeric1" type="radio" name="r4" value="{{settingAplicationFormFormatNumericRadioButtonTextValue1}}" />
						<span class="check"></span> <span data-hint="{{settingAplicationFormFormatNumericRadioButtonHint1}}" data-hint-position="right">{{settingAplicationFormFormatNumericRadioButtonTextOption1}}</span> </label>
				</div>
				<div class="input-control radio  default-style" data-role="input-control">
					<label>
						<input id="radio_numeric2" type="radio" name="r4" value="{{settingAplicationFormFormatNumericRadioButtonTextValue2}}" />
						<span class="check"></span> <span data-hint="{{settingAplicationFormFormatNumericRadioButtonHint2}}" data-hint-position="right">{{settingAplicationFormFormatNumericRadioButtonTextOption2}}</span> </label>
				</div>
				<div class="input-control radio  default-style" data-role="input-control">
					<label>
						<input id="radio_numeric3" type="radio" name="r4" value="{{settingAplicationFormFormatNumericRadioButtonTextValue3}}" />
						<span class="check"></span> <span data-hint="{{settingAplicationFormFormatNumericRadioButtonHint3}}" data-hint-position="right">{{settingAplicationFormFormatNumericRadioButtonTextOption3}}</span> </label>
				</div>
			</div>

		</div>

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

	<br>
	<div style="clear: both; font-size: 12px; margin-top: 15px;">
		<strong>Note: All elements marked  with '*' are future enhancement.</strong>
	</div>
</form>
