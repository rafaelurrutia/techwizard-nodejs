function mainController($scope, $http) {
    
    var cpeModelSource;
    
    switch(language) {
	    case 'es':
			cpeModelSource="../json/cpeModel/cpeModel_Content-es.json";
	        break;
	    case 'en':
			cpeModelSource="../json/cpeModel/cpeModel_Content.json";
	        break;
		case 'pt_BR':
			cpeModelSource="../json/cpeModel/cpeModel_Content-pt_BR.json";
	        break;	        
	    default:   	
	}
	
    $http.get(cpeModelSource).
    success(function(data, status, headers, config) {
        
        $scope.cpeModelTitle = data.title[0].title;
        
        $scope.cpeModelHeadTitle = data.head[0].title;
        $scope.cpeModelHeadIcon = data.head[0].icon;
        
        $scope.cpeModelListButtonDeleteCpeModelIcon = data.listButton[0].icon;
        $scope.cpeModelListButtonDeleteCpeModelHint = data.listButton[0].hint;
        $scope.cpeModelListButtonRefreshTableIcon = data.listButton[1].icon;
        $scope.cpeModelListButtonRefreshTableHint = data.listButton[1].hint;
        $scope.cpeModelListButtonAddCpeModelIcon = data.listButton[2].icon;
        $scope.cpeModelListButtonAddCpeModelHint = data.listButton[2].hint;
        $scope.cpeModelListButtonDownloadExcelFileIcon = data.listButton[3].icon;
        $scope.cpeModelListButtonDownloadExcelFileHint = data.listButton[3].hint;
        $scope.cpeModelListButtonDownloadPdfFileIcon = data.listButton[4].icon;
        $scope.cpeModelListButtonDownloadPdfFileHint = data.listButton[4].hint;

        $scope.cpeModelTableTopShow = data.table[0].top[0].show;
        $scope.cpeModelTableTopIcon = data.table[0].top[0].icon;
        $scope.cpeModelTableTopFilter = data.table[0].top[1].filter;
        $scope.cpeModelTableTopIcon = data.table[0].top[1].icon;

//        $scope.cpeModelTableContentHeadColumn1 = data.table[1].content[0].head[0].column;
//        $scope.cpeModelTableContentHeadColumn2 = data.table[1].content[0].head[1].column;
//        $scope.cpeModelTableContentHeadColumn3 = data.table[1].content[0].head[2].column;
//        $scope.cpeModelTableContentHeadColumn4 = data.table[1].content[0].head[3].column;

        $scope.cpeModelModalAddCpeModelTitle = data.modalAddCpeModel[0].title;
        $scope.cpeModelModalAddCpeModelIcon = data.modalAddCpeModel[0].icon;
        $scope.cpeModelModalAddCpeModelButtonAdd = data.modalAddCpeModel[0].buttonAdd;
        $scope.cpeModelModalAddCpeModelButtonClean = data.modalAddCpeModel[0].buttonClean;
        $scope.cpeModelModalAddCpeModelButtonClose = data.modalAddCpeModel[0].buttonClose;
        $scope.cpeModelModalAddCpeModelMessageRequired = data.modalAddCpeModel[0].messageRequired;

        $scope.cpeModelModalUpdateCpeModelTitle = data.modalUpdateCpeModel[0].title;
        $scope.cpeModelModalUpdateCpeModelIcon = data.modalUpdateCpeModel[0].icon;
        $scope.cpeModelModalUpdateCpeModelButtonUpdate = data.modalUpdateCpeModel[0].buttonUpdate;
        $scope.cpeModelModalUpdateCpeModelButtonClean = data.modalUpdateCpeModel[0].buttonClean;
        $scope.cpeModelModalUpdateCpeModelButtonClose = data.modalUpdateCpeModel[0].buttonClose;
        $scope.cpeModelModalUpdateCpeModelMessageRequired = data.modalUpdateCpeModel[0].messageRequired;

        $scope.cpeModelModalDeleteCpeModelTitle = data.modalDeleteCpeModel[0].title;
		$scope.cpeModelModalDeleteCpeModelIcon = data.modalDeleteCpeModel[0].icon;
		$scope.cpeModelModalDeleteCpeModelMessageConfirm = data.modalDeleteCpeModel[0].messageConfirm;
		$scope.cpeModelModalDeleteCpeModelButtonDelete = data.modalDeleteCpeModel[0].buttonDelete;
		$scope.cpeModelModalDeleteCpeModelButtonClose = data.modalDeleteCpeModel[0].buttonClose;

    }).
    error(function(data, status, headers, config) {
      // log error
    });

 /*
    $scope.cpeModelOpenModal = function() {
        window.location.href="#cpeModelsModalAddcpeModel";
    }
*/


}