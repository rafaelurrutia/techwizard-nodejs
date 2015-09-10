<?php

if($permiso1[2]==1){
	$add='<button type="button" class="inverse" data-hint="{{planServiceListButtonAddPlanServiceHint}}" data-hint-position="right" id="addModal"><i class="{{planServiceListButtonAddPlanServiceIcon}}"></i></button>';	
}

?>
<div class="table_body">

    <div class="table_head1">
        <h2><i class="{{planServiceHeadIcon}} on-left"></i>{{planServiceHeadTitle}}</h2> 
        <span class="messageErrorAccess" style="display: none;"><strong>Lo sentimos, en este momento no es posible acceder a la información. Se recargará la conexión cada 5 segundos hasta que se concrete el acceso.</strong></span><br />
    </div>
    <div class="table_head">
<!--        <button type="button" class="inverse" data-hint="{{planServiceListButtonDeletePlanServiceHint}}" data-hint-position="right" id="deleterow"><i class="{{planServiceListButtonDeletePlanServiceIcon}}"></i></button>  -->
        <button type="button" class="inverse" data-hint="{{planServiceListButtonRefreshTableHint}}" data-hint-position="right" id="refreshtable"><i class="{{planServiceListButtonRefreshTableIcon}}"></i></button> 
        <?php echo $add; ?>
<!--        <button type="button" class="inverse" data-hint="{{planServiceListButtonDownloadExcelFileHint}}" data-hint-position="right"><i class="{{planServiceListButtonDownloadExcelFileIcon}}"></i></button>
        <button type="button" class="inverse" data-hint="{{planServiceListButtonDownloadPdfFileHint}}" data-hint-position="right"><i class="{{planServiceListButtonDownloadPdfFileIcon}}"></i></button>  -->
    </div>
    <div class="table_main">
        <table id="example" class="table striped hovered dataTable" cellspacing="0" width="100%">
            <thead>
                <tr>
                	<th align="left"></th>
                	<th align="left"></th>
                    <th align="left"></th>
                    <th align="left"></th>
                    <th align="left"></th>                  
                </tr>
            </thead>
        </table>
    </div>
    <div class="table_foot">
                    
    </div>

</div>