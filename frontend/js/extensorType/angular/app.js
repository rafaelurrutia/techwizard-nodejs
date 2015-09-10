function mainController($scope, $http) {
    
    var extensorTypeSource;
    
    switch(language) {
	    case 'es':
			extensorTypeSource="../json/extensorType/extensorType_Content-es.json";
	        break;
	    case 'en':
			extensorTypeSource="../json/extensorType/extensorType_Content.json";
	        break;
		case 'pt_BR':
			extensorTypeSource="../json/extensorType/extensorType_Content-pt_BR.json";
	        break;	        
	    default:   	
	}
	
    $http.get(extensorTypeSource).
    success(function(data, status, headers, config) {
        
        $scope.extensorTypeTitle = data.title[0].title;
        
        $scope.extensorTypeHeadTitle = data.head[0].title;
        $scope.extensorTypeHeadIcon = data.head[0].icon;
        
        $scope.extensorTypeListButtonDeleteExtensorTypeIcon = data.listButton[0].icon;
        $scope.extensorTypeListButtonDeleteExtensorTypeHint = data.listButton[0].hint;
        $scope.extensorTypeListButtonRefreshTableIcon = data.listButton[1].icon;
        $scope.extensorTypeListButtonRefreshTableHint = data.listButton[1].hint;
        $scope.extensorTypeListButtonAddExtensorTypeIcon = data.listButton[2].icon;
        $scope.extensorTypeListButtonAddExtensorTypeHint = data.listButton[2].hint;
        $scope.extensorTypeListButtonDownloadExcelFileIcon = data.listButton[3].icon;
        $scope.extensorTypeListButtonDownloadExcelFileHint = data.listButton[3].hint;
        $scope.extensorTypeListButtonDownloadPdfFileIcon = data.listButton[4].icon;
        $scope.extensorTypeListButtonDownloadPdfFileHint = data.listButton[4].hint;

        $scope.extensorTypeTableTopShow = data.table[0].top[0].show;
        $scope.extensorTypeTableTopIcon = data.table[0].top[0].icon;
        $scope.extensorTypeTableTopFilter = data.table[0].top[1].filter;
        $scope.extensorTypeTableTopIcon = data.table[0].top[1].icon;

//        $scope.extensorTypeTableContentHeadColumn1 = data.table[1].content[0].head[0].column;
//        $scope.extensorTypeTableContentHeadColumn2 = data.table[1].content[0].head[1].column;
//        $scope.extensorTypeTableContentHeadColumn3 = data.table[1].content[0].head[2].column;
//        $scope.extensorTypeTableContentHeadColumn4 = data.table[1].content[0].head[3].column;

        $scope.extensorTypeModalAddExtensorTypeTitle = data.modalAddExtensorType[0].title;
        $scope.extensorTypeModalAddExtensorTypeIcon = data.modalAddExtensorType[0].icon;
        $scope.extensorTypeModalAddExtensorTypeButtonAdd = data.modalAddExtensorType[0].buttonAdd;
        $scope.extensorTypeModalAddExtensorTypeButtonClean = data.modalAddExtensorType[0].buttonClean;
        $scope.extensorTypeModalAddExtensorTypeButtonClose = data.modalAddExtensorType[0].buttonClose;
        $scope.extensorTypeModalAddExtensorTypeMessageRequired = data.modalAddExtensorType[0].messageRequired;

        $scope.extensorTypeModalUpdateExtensorTypeTitle = data.modalUpdateExtensorType[0].title;
        $scope.extensorTypeModalUpdateExtensorTypeIcon = data.modalUpdateExtensorType[0].icon;
        $scope.extensorTypeModalUpdateExtensorTypeButtonUpdate = data.modalUpdateExtensorType[0].buttonUpdate;
        $scope.extensorTypeModalUpdateExtensorTypeButtonClean = data.modalUpdateExtensorType[0].buttonClean;
        $scope.extensorTypeModalUpdateExtensorTypeButtonClose = data.modalUpdateExtensorType[0].buttonClose;
        $scope.extensorTypeModalUpdateExtensorTypeMessageRequired = data.modalUpdateExtensorType[0].messageRequired;

        $scope.extensorTypeModalDeleteExtensorTypeTitle = data.modalDeleteExtensorType[0].title;
		$scope.extensorTypeModalDeleteExtensorTypeIcon = data.modalDeleteExtensorType[0].icon;
		$scope.extensorTypeModalDeleteExtensorTypeMessageConfirm = data.modalDeleteExtensorType[0].messageConfirm;
		$scope.extensorTypeModalDeleteExtensorTypeButtonDelete = data.modalDeleteExtensorType[0].buttonDelete;
		$scope.extensorTypeModalDeleteExtensorTypeButtonClose = data.modalDeleteExtensorType[0].buttonClose;

    }).
    error(function(data, status, headers, config) {
      // log error
    });

 /*
    $scope.extensorTypeOpenModal = function() {
        window.location.href="#extensorTypesModalAddextensorType";
    }
*/


}