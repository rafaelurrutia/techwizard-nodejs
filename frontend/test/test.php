<div class="table_body">

    <div class="table_head1">
        <h2><i class="{{testHeadIcon}} on-left"></i>{{testHeadTitle}}</h2> 
        <span class="messageErrorAccess" style="display: none;"><strong>Lo sentimos, en este momento no es posible acceder a la información. Se recargará la conexión cada 5 segundos hasta que se concrete el acceso.</strong></span><br />
    </div>
    <div class="table_head">
<!--        <button type="button" class="inverse" data-hint="{{testListButtonDeleteTestHint}}" data-hint-position="right" id="deleterow"><i class="{{testListButtonDeleteTestIcon}}"></i></button>  -->
        <button type="button" class="inverse" data-hint="{{testListButtonRefreshTableHint}}" data-hint-position="right" id="refreshtable"><i class="{{testListButtonRefreshTableIcon}}"></i></button> 
        <button type="button" class="inverse" data-hint="{{testListButtonAddTestHint}}" data-hint-position="right" id="addModal"><i class="{{testListButtonAddTestIcon}}"></i></button>
<!--        <button type="button" class="inverse" data-hint="{{testListButtonDownloadExcelFileHint}}" data-hint-position="right"><i class="{{testListButtonDownloadExcelFileIcon}}"></i></button>
        <button type="button" class="inverse" data-hint="{{testListButtonDownloadPdfFileHint}}" data-hint-position="right"><i class="{{testListButtonDownloadPdfFileIcon}}"></i></button>  -->
    </div>
    <div class="table_main">
        <table id="example" class="table striped hovered dataTable" cellspacing="0" width="100%">
            <thead>
                <tr>
                	<th></th>
                	<th>Nombre</th>
                    <th>Subida</th>
                    <th>Bajada</th>
                    <th>Opciones</th>                  
                </tr>
            </thead>
        </table>
    </div>
    <div class="table_foot">
                    
    </div>

</div>