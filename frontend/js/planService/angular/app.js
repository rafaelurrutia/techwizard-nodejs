function mainController($scope, $http) {
    
    var planServiceSource;
    
    switch(language) {
	    case 'es':
			planServiceSource="../json/planService/planService_Content-es.json";
	        break;
	    case 'en':
			planServiceSource="../json/planService/planService_Content.json";
	        break;
		case 'pt_BR':
			planServiceSource="../json/planService/planService_Content-pt_BR.json";
	        break;
	    default:   	
	}
	
    $http.get(planServiceSource).
    success(function(data, status, headers, config) {
        
        $scope.planServiceTitle = data.title[0].title;
        
        $scope.planServiceHeadTitle = data.head[0].title;
        $scope.planServiceHeadIcon = data.head[0].icon;
        
        $scope.planServiceListButtonDeletePlanServiceIcon = data.listButton[0].icon;
        $scope.planServiceListButtonDeletePlanServiceHint = data.listButton[0].hint;
        $scope.planServiceListButtonRefreshTableIcon = data.listButton[1].icon;
        $scope.planServiceListButtonRefreshTableHint = data.listButton[1].hint;
        $scope.planServiceListButtonAddPlanServiceIcon = data.listButton[2].icon;
        $scope.planServiceListButtonAddPlanServiceHint = data.listButton[2].hint;
        $scope.planServiceListButtonDownloadExcelFileIcon = data.listButton[3].icon;
        $scope.planServiceListButtonDownloadExcelFileHint = data.listButton[3].hint;
        $scope.planServiceListButtonDownloadPdfFileIcon = data.listButton[4].icon;
        $scope.planServiceListButtonDownloadPdfFileHint = data.listButton[4].hint;

        $scope.planServiceTableTopShow = data.table[0].top[0].show;
        $scope.planServiceTableTopIcon = data.table[0].top[0].icon;
        $scope.planServiceTableTopFilter = data.table[0].top[1].filter;
        $scope.planServiceTableTopIcon = data.table[0].top[1].icon;

        $scope.planServiceTableContentHeadColumn1 = data.table[1].content[0].head[0].column;
        $scope.planServiceTableContentHeadColumn2 = data.table[1].content[0].head[1].column;
        $scope.planServiceTableContentHeadColumn3 = data.table[1].content[0].head[2].column;
        $scope.planServiceTableContentHeadColumn4 = data.table[1].content[0].head[3].column;

        $scope.planServiceModalAddPlanServiceTitle = data.modalAddPlanService[0].title;
        $scope.planServiceModalAddPlanServiceIcon = data.modalAddPlanService[0].icon;
        $scope.planServiceModalAddPlanServiceButtonAdd = data.modalAddPlanService[0].buttonAdd;
        $scope.planServiceModalAddPlanServiceButtonClean = data.modalAddPlanService[0].buttonClean;
        $scope.planServiceModalAddPlanServiceButtonClose = data.modalAddPlanService[0].buttonClose;
        $scope.planServiceModalAddPlanServiceMessageRequired = data.modalAddPlanService[0].messageRequired;

        $scope.planServiceModalUpdatePlanServiceTitle = data.modalUpdatePlanService[0].title;
        $scope.planServiceModalUpdatePlanServiceIcon = data.modalUpdatePlanService[0].icon;
        $scope.planServiceModalUpdatePlanServiceButtonUpdate = data.modalUpdatePlanService[0].buttonUpdate;
        $scope.planServiceModalUpdatePlanServiceButtonClean = data.modalUpdatePlanService[0].buttonClean;
        $scope.planServiceModalUpdatePlanServiceButtonClose = data.modalUpdatePlanService[0].buttonClose;
        $scope.planServiceModalUpdatePlanServiceMessageRequired = data.modalUpdatePlanService[0].messageRequired;

        $scope.planServiceModalDeletePlanServiceTitle = data.modalDeletePlanService[0].title;
		$scope.planServiceModalDeletePlanServiceIcon = data.modalDeletePlanService[0].icon;
		$scope.planServiceModalDeletePlanServiceMessageConfirm = data.modalDeletePlanService[0].messageConfirm;
		$scope.planServiceModalDeletePlanServiceButtonDelete = data.modalDeletePlanService[0].buttonDelete;
		$scope.planServiceModalDeletePlanServiceButtonClose = data.modalDeletePlanService[0].buttonClose;

    }).
    error(function(data, status, headers, config) {
      // log error
    });

 /*
    $scope.planServiceOpenModal = function() {
        window.location.href="#planServicesModalAddplanService";
    }
*/


}