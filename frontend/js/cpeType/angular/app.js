function mainController($scope, $http) {
    
    var cpeTypeSource;

    switch(language) {
	    case 'es':
			cpeTypeSource="../json/cpeType/cpeType_Content-es.json";
	        break;
	    case 'en':
			cpeTypeSource="../json/cpeType/cpeType_Content.json";
	        break;
		case 'pt_BR':
			cpeTypeSource="../json/cpeType/cpeType_Content-pt_BR.json";
	        break;	        
	    default:   	
	}
	    
    $http.get(cpeTypeSource).
    success(function(data, status, headers, config) {
        
        $scope.cpeTypeTitle = data.title[0].title;
        
        $scope.cpeTypeHeadTitle = data.head[0].title;
        $scope.cpeTypeHeadIcon = data.head[0].icon;
        
        $scope.cpeTypeListButtonDeleteCpeTypeIcon = data.listButton[0].icon;
        $scope.cpeTypeListButtonDeleteCpeTypeHint = data.listButton[0].hint;
        $scope.cpeTypeListButtonRefreshTableIcon = data.listButton[1].icon;
        $scope.cpeTypeListButtonRefreshTableHint = data.listButton[1].hint;
        $scope.cpeTypeListButtonAddCpeTypeIcon = data.listButton[2].icon;
        $scope.cpeTypeListButtonAddCpeTypeHint = data.listButton[2].hint;
        $scope.cpeTypeListButtonDownloadExcelFileIcon = data.listButton[3].icon;
        $scope.cpeTypeListButtonDownloadExcelFileHint = data.listButton[3].hint;
        $scope.cpeTypeListButtonDownloadPdfFileIcon = data.listButton[4].icon;
        $scope.cpeTypeListButtonDownloadPdfFileHint = data.listButton[4].hint;

        $scope.cpeTypeTableTopShow = data.table[0].top[0].show;
        $scope.cpeTypeTableTopIcon = data.table[0].top[0].icon;
        $scope.cpeTypeTableTopFilter = data.table[0].top[1].filter;
        $scope.cpeTypeTableTopIcon = data.table[0].top[1].icon;

//        $scope.cpeTypeTableContentHeadColumn1 = data.table[1].content[0].head[0].column;
//        $scope.cpeTypeTableContentHeadColumn2 = data.table[1].content[0].head[1].column;
//        $scope.cpeTypeTableContentHeadColumn3 = data.table[1].content[0].head[2].column;
//        $scope.cpeTypeTableContentHeadColumn4 = data.table[1].content[0].head[3].column;

        $scope.cpeTypeModalAddCpeTypeTitle = data.modalAddCpeType[0].title;
        $scope.cpeTypeModalAddCpeTypeIcon = data.modalAddCpeType[0].icon;
        $scope.cpeTypeModalAddCpeTypeButtonAdd = data.modalAddCpeType[0].buttonAdd;
        $scope.cpeTypeModalAddCpeTypeButtonClean = data.modalAddCpeType[0].buttonClean;
        $scope.cpeTypeModalAddCpeTypeButtonClose = data.modalAddCpeType[0].buttonClose;
        $scope.cpeTypeModalAddCpeTypeMessageRequired = data.modalAddCpeType[0].messageRequired;

        $scope.cpeTypeModalUpdateCpeTypeTitle = data.modalUpdateCpeType[0].title;
        $scope.cpeTypeModalUpdateCpeTypeIcon = data.modalUpdateCpeType[0].icon;
        $scope.cpeTypeModalUpdateCpeTypeButtonUpdate = data.modalUpdateCpeType[0].buttonUpdate;
        $scope.cpeTypeModalUpdateCpeTypeButtonClean = data.modalUpdateCpeType[0].buttonClean;
        $scope.cpeTypeModalUpdateCpeTypeButtonClose = data.modalUpdateCpeType[0].buttonClose;
        $scope.cpeTypeModalUpdateCpeTypeMessageRequired = data.modalUpdateCpeType[0].messageRequired;

        $scope.cpeTypeModalDeleteCpeTypeTitle = data.modalDeleteCpeType[0].title;
		$scope.cpeTypeModalDeleteCpeTypeIcon = data.modalDeleteCpeType[0].icon;
		$scope.cpeTypeModalDeleteCpeTypeMessageConfirm = data.modalDeleteCpeType[0].messageConfirm;
		$scope.cpeTypeModalDeleteCpeTypeButtonDelete = data.modalDeleteCpeType[0].buttonDelete;
		$scope.cpeTypeModalDeleteCpeTypeButtonClose = data.modalDeleteCpeType[0].buttonClose;

    }).
    error(function(data, status, headers, config) {
      // log error
    });

 /*
    $scope.cpeTypeOpenModal = function() {
        window.location.href="#cpeTypesModalAddcpeType";
    }
*/


}