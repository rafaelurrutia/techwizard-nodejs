function mainController($scope, $http) {
    
    var extensorModelSource;
    
    switch(language) {
	    case 'es':
			extensorModelSource="../json/extensorModel/extensorModel_Content-es.json";
	        break;
	    case 'en':
			extensorModelSource="../json/extensorModel/extensorModel_Content.json";
	        break;
		case 'pt_BR':
			extensorModelSource="../json/extensorModel/extensorModel_Content-pt_BR.json";
	        break;	        
	    default:
	    	extensorModelSource="../json/extensorModel/extensorModel_Content.json";
	        break;   	
	}
    
    $http.get(extensorModelSource).
    success(function(data, status, headers, config) {
        
        $scope.extensorModelTitle = data.title[0].title;
        
        $scope.extensorModelHeadTitle = data.head[0].title;
        $scope.extensorModelHeadIcon = data.head[0].icon;
        
        $scope.extensorModelListButtonDeleteExtensorModelIcon = data.listButton[0].icon;
        $scope.extensorModelListButtonDeleteExtensorModelHint = data.listButton[0].hint;
        $scope.extensorModelListButtonRefreshTableIcon = data.listButton[1].icon;
        $scope.extensorModelListButtonRefreshTableHint = data.listButton[1].hint;
        $scope.extensorModelListButtonAddExtensorModelIcon = data.listButton[2].icon;
        $scope.extensorModelListButtonAddExtensorModelHint = data.listButton[2].hint;
        $scope.extensorModelListButtonDownloadExcelFileIcon = data.listButton[3].icon;
        $scope.extensorModelListButtonDownloadExcelFileHint = data.listButton[3].hint;
        $scope.extensorModelListButtonDownloadPdfFileIcon = data.listButton[4].icon;
        $scope.extensorModelListButtonDownloadPdfFileHint = data.listButton[4].hint;

        $scope.extensorModelTableTopShow = data.table[0].top[0].show;
        $scope.extensorModelTableTopIcon = data.table[0].top[0].icon;
        $scope.extensorModelTableTopFilter = data.table[0].top[1].filter;
        $scope.extensorModelTableTopIcon = data.table[0].top[1].icon;

//        $scope.extensorModelTableContentHeadColumn1 = data.table[1].content[0].head[0].column;
//        $scope.extensorModelTableContentHeadColumn2 = data.table[1].content[0].head[1].column;
//        $scope.extensorModelTableContentHeadColumn3 = data.table[1].content[0].head[2].column;
//        $scope.extensorModelTableContentHeadColumn4 = data.table[1].content[0].head[3].column;

        $scope.extensorModelModalAddExtensorModelTitle = data.modalAddExtensorModel[0].title;
        $scope.extensorModelModalAddExtensorModelIcon = data.modalAddExtensorModel[0].icon;
        $scope.extensorModelModalAddExtensorModelButtonAdd = data.modalAddExtensorModel[0].buttonAdd;
        $scope.extensorModelModalAddExtensorModelButtonClean = data.modalAddExtensorModel[0].buttonClean;
        $scope.extensorModelModalAddExtensorModelButtonClose = data.modalAddExtensorModel[0].buttonClose;
        $scope.extensorModelModalAddExtensorModelMessageRequired = data.modalAddExtensorModel[0].messageRequired;

        $scope.extensorModelModalUpdateExtensorModelTitle = data.modalUpdateExtensorModel[0].title;
        $scope.extensorModelModalUpdateExtensorModelIcon = data.modalUpdateExtensorModel[0].icon;
        $scope.extensorModelModalUpdateExtensorModelButtonUpdate = data.modalUpdateExtensorModel[0].buttonUpdate;
        $scope.extensorModelModalUpdateExtensorModelButtonClean = data.modalUpdateExtensorModel[0].buttonClean;
        $scope.extensorModelModalUpdateExtensorModelButtonClose = data.modalUpdateExtensorModel[0].buttonClose;
        $scope.extensorModelModalUpdateExtensorModelMessageRequired = data.modalUpdateExtensorModel[0].messageRequired;

        $scope.extensorModelModalDeleteExtensorModelTitle = data.modalDeleteExtensorModel[0].title;
		$scope.extensorModelModalDeleteExtensorModelIcon = data.modalDeleteExtensorModel[0].icon;
		$scope.extensorModelModalDeleteExtensorModelMessageConfirm = data.modalDeleteExtensorModel[0].messageConfirm;
		$scope.extensorModelModalDeleteExtensorModelButtonDelete = data.modalDeleteExtensorModel[0].buttonDelete;
		$scope.extensorModelModalDeleteExtensorModelButtonClose = data.modalDeleteExtensorModel[0].buttonClose;

    }).
    error(function(data, status, headers, config) {
      // log error
    });

 /*
    $scope.extensorModelOpenModal = function() {
        window.location.href="#extensorModelsModalAddextensorModel";
    }
*/


}