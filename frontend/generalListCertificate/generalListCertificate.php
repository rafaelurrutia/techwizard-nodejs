<div class="table_body">

	<div class="table_head1">
		<h2><i class="{{generalListCertificateHeadIcon}} on-left"></i>{{generalListCertificateHeadTitle}}</h2>
	</div>
	<div class="table_head">
		<button id="showFilter" type="button" class="inverse" data-hint="{{generalListCertificateListButtonFilterGeneralListCertificateHint}}" data-hint-position="right">
			<i class="{{generalListCertificateListButtonFilterGeneralListCertificateIcon}}"></i> {{generalListCertificateListButtonFilterGeneralListCertificateText}} 
		</button>
		
		<button id="generalListCertificateRefresh" type="button" class="inverse" data-hint="{{generalListCertificateListButtonRefreshTableHint}}" data-hint-position="right">
			<i class="{{generalListCertificateListButtonRefreshTableIcon}}"></i> {{generalListCertificateListButtonRefreshTableText}}
		</button>
        
        <button id="generalListCertificateExcelReport" type="button" class="inverse" data-hint="{{generalListCertificateListButtonDownloadExcelFileHint}}" data-hint-position="right">
        	<i class="{{generalListCertificateListButtonDownloadExcelFileIcon}}"></i> {{generalListCertificateListButtonDownloadExcelFileText}}
        	<i id="showExcel" class="icon-loading" style="display:none"></i>
        </button>
        <!--
		<button id="generalListCertificateExcelReportDetailRange" type="button" class="inverse" data-hint="{{generalListCertificateListButtonDownloadExcelFileRangeHint}}" data-hint-position="right">
			<i class="{{generalListCertificateListButtonDownloadExcelFileIcon}}"></i> Detalle
			<i id="showExcelRange" class="icon-loading" style="display:none"></i>
		</button>
		-->
		<button id="generalListCertificateExcelReportDetailRange" type="button" class="inverse">
			<i class="{{generalListCertificateListButtonDownloadFullExcelFileIcon}}"></i> {{generalListCertificateListButtonDownloadFullExcelFileText}}
			<i id="showExcelRange" class="icon-loading" style="display:none"></i>
		</button>
	</div>
	<div class="box" id="filter" style="display:none; background-color:#FFFFFF; height:70px; margin-top: 4px; margin-bottom: 6px; ">
		<form>
			
			<div class="elements">
				<label><strong>{{generalListCertificateTableFilterOptionText1}}</strong></label>
				<div class="input-control text" data-role="input-control">
					<input id="col1_filter" class="column_filter1" type="text" name="" />
				</div>
			</div>
			
			<div class="elements">
				<label><strong>{{generalListCertificateTableFilterOptionText2}}</strong></label>
				<div class="input-control text" data-role="input-control">
					<input id="col2_filter" class="column_filter1" type="text" name="" />
				</div>
			</div>
			
			<div class="elements">
				<label><strong>{{generalListCertificateTableFilterOptionText3}}</strong></label>
				<div class="input-control select">
					<select id="statusCertificateFilter" name="">
						<option value="">{{generalListCertificateTableFilter_StateCertificateText1}}</option>
						<option value="{{generalListCertificateTableFilter_StateCertificateText2}}">{{generalListCertificateTableFilter_StateCertificateText2}}</option>
						<option value="{{generalListCertificateTableFilter_StateCertificateText3}}">{{generalListCertificateTableFilter_StateCertificateText3}}</option>
						<option value="{{generalListCertificateTableFilter_StateCertificateText4}}">{{generalListCertificateTableFilter_StateCertificateText4}}</option>
						<option value="{{generalListCertificateTableFilter_StateCertificateText5}}">{{generalListCertificateTableFilter_StateCertificateText5}}</option>
						<option value="{{generalListCertificateTableFilter_StateCertificateText6}}">{{generalListCertificateTableFilter_StateCertificateText6}}</option>
					</select>
				</div>
			</div>

			<div class="elements">
				<label><strong>{{generalListCertificateTableFilterOptionText4}}</strong></label>
				<div class="input-control text" data-role="datepicker" data-week-start="1" data-format="<?php echo $_SESSION['FORMAT0001']; ?>" >
                	<input id="dateMinFilter" type="text">
               	</div>
           	</div>
           	
           	<div class="elements" style="width: 45px;">
           		<br />
               	<button name="buttonClearDateMin" type="button" class="inverse" style="margin-top: 5px;" data-hint="{{generalListCertificateTableFilter_StateCertificateText8}}" data-hint-position="right"><i class="fa fa-eraser"></i></button>
           	</div>
			

			<div class="elements">
				<label><strong>{{generalListCertificateTableFilterOptionText5}}</strong></label>
				<div class="input-control text" data-role="datepicker" data-week-start="1" data-format="<?php echo $_SESSION['FORMAT0001']; ?>" >
                	<input id="dateMaxFilter" type="text">
               	</div>
           	</div>
           	
           	<div class="elements" style="width: 45px;">
           		<br />
               	<button name="buttonClearDateMax" type="button" class="inverse" style="margin-top: 5px;" data-hint="{{generalListCertificateTableFilter_StateCertificateText9}}" data-hint-position="right"><i class="fa fa-eraser"></i></button>
           	</div>
           	<!--
           	<div class="elements">
				<button id="buttonApplyFilter" type="button" class="inverse" style="margin-top: 25px;">
					<i class="icon-filter"></i> Aplicar Filtro 
				</button>
			</div>
			-->
		</form>

	</div>
	<div class="table_main" style="min-height:250px;">
		<table id="example" class="table striped hovered dataTable" cellspacing="0" width="100%">
			<thead style="font-size:12px!important;">
				<tr>
				<!--	<th align="center"></th> -->
					<th align="left"><strong></strong></th>
					<th align="left"><strong></strong></th>
					<th align="left"><strong></strong></th>
					<th align="left"><strong></strong></th>
					<th align="left"><strong></strong></th>
					<th align="left"><strong></strong></th>
					<th align="left"><strong></strong></th>
					<th align="left"><strong></strong></th>
					<th align="left"><strong></strong></th>
<!--					<th align="center"></th> -->
				</tr>
			</thead>
		</table>
		<br />
	</div>

</div>