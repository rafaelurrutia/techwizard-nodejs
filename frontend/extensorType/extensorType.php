<?php

if($permiso1[2]==1){
	$add='<button type="button" class="inverse" data-hint="{{extensorTypeListButtonAddExtensorTypeHint}}" data-hint-position="right" id="addModal"><i class="{{extensorTypeListButtonAddExtensorTypeIcon}}"></i></button>';	
}

?>
<div class="table_body">

    <div class="table_head1">
        <h2><i class="{{extensorTypeHeadIcon}} on-left"></i>{{extensorTypeHeadTitle}}</h2> 
        <span class="messageErrorAccess" style="display: none;"><strong>Lo sentimos, en este momento no es posible acceder a la información. Se recargará la conexión cada 10 segundos hasta que se concrete el acceso.</strong></span><br />
    </div>
    <div class="table_head">
        <button type="button" class="inverse" data-hint="{{extensorTypeListButtonRefreshTableHint}}" data-hint-position="right" id="refreshtable"><i class="{{extensorTypeListButtonRefreshTableIcon}}"></i></button> 
        <?php echo $add; ?>
    </div>
    <div class="table_main">
        <table id="example" class="table striped hovered dataTable" cellspacing="0" width="100%">
            <thead>
                <tr>
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