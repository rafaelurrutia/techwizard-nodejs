function mainController($scope, $http) {
    
    var groupSource;
    
    switch(language) {
	    case 'es':
			groupSource="../json/group/group_Content-es.json";
	        break;
	    case 'en':
			groupSource="../json/group/group_Content.json";
	        break;
		case 'pt_BR':
			groupSource="../json/group/group_Content-pt_BR.json";
	        break;
	    default:   	
	}
	    
    $http.get(groupSource).
    success(function(data, status, headers, config) {
        
        $scope.groupTitle = data.title[0].title;
        
        $scope.groupHeadTitle = data.head[0].title;
        $scope.groupHeadIcon = data.head[0].icon;
        
        $scope.groupListButtonDeleteGroupIcon = data.listButton[0].icon;
        $scope.groupListButtonDeleteGroupHint = data.listButton[0].hint;
        $scope.groupListButtonRefreshTableIcon = data.listButton[1].icon;
        $scope.groupListButtonRefreshTableHint = data.listButton[1].hint;
        $scope.groupListButtonAddGroupIcon = data.listButton[2].icon;
        $scope.groupListButtonAddGroupHint = data.listButton[2].hint;
        $scope.groupListButtonDownloadExcelFileIcon = data.listButton[3].icon;
        $scope.groupListButtonDownloadExcelFileHint = data.listButton[3].hint;
        $scope.groupListButtonDownloadPdfFileIcon = data.listButton[4].icon;
        $scope.groupListButtonDownloadPdfFileHint = data.listButton[4].hint;

        $scope.groupTableTopShow = data.table[0].top[0].show;
        $scope.groupTableTopIcon = data.table[0].top[0].icon;
        $scope.groupTableTopFilter = data.table[0].top[1].filter;
        $scope.groupTableTopIcon = data.table[0].top[1].icon;

        $scope.groupTableContentHeadColumn1 = data.table[1].content[0].head[0].column;
        $scope.groupTableContentHeadColumn2 = data.table[1].content[0].head[1].column;
        $scope.groupTableContentHeadColumn3 = data.table[1].content[0].head[2].column;
        $scope.groupTableContentHeadColumn4 = data.table[1].content[0].head[3].column;

        $scope.groupModalAddGroupTitle = data.modalAddGroup[0].title;
        $scope.groupModalAddGroupIcon = data.modalAddGroup[0].icon;
        $scope.groupModalAddGroupButtonAdd = data.modalAddGroup[0].buttonAdd;
        $scope.groupModalAddGroupButtonClean = data.modalAddGroup[0].buttonClean;
        $scope.groupModalAddGroupButtonClose = data.modalAddGroup[0].buttonClose;
        $scope.groupModalAddGroupMessageRequired = data.modalAddGroup[0].messageRequired;

        $scope.groupModalUpdateGroupTitle = data.modalUpdateGroup[0].title;
        $scope.groupModalUpdateGroupIcon = data.modalUpdateGroup[0].icon;
        $scope.groupModalUpdateGroupButtonUpdate = data.modalUpdateGroup[0].buttonUpdate;
        $scope.groupModalUpdateGroupButtonClean = data.modalUpdateGroup[0].buttonClean;
        $scope.groupModalUpdateGroupButtonClose = data.modalUpdateGroup[0].buttonClose;
        $scope.groupModalUpdateGroupMessageRequired = data.modalUpdateGroup[0].messageRequired;

        $scope.groupModalDeleteGroupTitle = data.modalDeleteGroup[0].title;
		$scope.groupModalDeleteGroupIcon = data.modalDeleteGroup[0].icon;
		$scope.groupModalDeleteGroupMessageConfirm = data.modalDeleteGroup[0].messageConfirm;
		$scope.groupModalDeleteGroupButtonDelete = data.modalDeleteGroup[0].buttonDelete;
		$scope.groupModalDeleteGroupButtonClose = data.modalDeleteGroup[0].buttonClose;
		
		$scope.groupModalAccessGroupTitle = data.modalAccessGroup[0].title;
        $scope.groupModalAccessGroupIcon = data.modalAccessGroup[0].icon;
        $scope.groupModalAccessGroupButtonAccess = data.modalAccessGroup[0].buttonApplyChanges;
        $scope.groupModalAccessGroupButtonRestore = data.modalAccessGroup[0].buttonRestore;
        $scope.groupModalAccessGroupButtonClose = data.modalAccessGroup[0].buttonClose;
        $scope.groupModalAccessGroupMessageDescription = data.modalAccessGroup[0].messageDescription;

		$scope.groupModalAccessGroup_textEnableAllAccess= data.modalAccessGroup[0].textEnableAllAccess;
		$scope.groupModalAccessGroup_textDisableAllAccess= data.modalAccessGroup[0].textDisableAllAccess;
		$scope.groupModalAccessGroup_textEnableAccess= data.modalAccessGroup[0].textEnableAccess;
		$scope.groupModalAccessGroup_textDisableAccess= data.modalAccessGroup[0].textDisableAccess;
		
		$scope.groupModalAccessGroup_textReport= data.modalAccessGroup[0].textReport;
		$scope.groupModalAccessGroup_textAdministration= data.modalAccessGroup[0].textAdministration;
		$scope.groupModalAccessGroup_textAplication= data.modalAccessGroup[0].textAplication;
		$scope.groupModalAccessGroup_textAplicationEnable= data.modalAccessGroup[0].textAplicationEnable;
		
		$scope.groupModalAccessGroup_textDashboard= data.modalAccessGroup[0].textDashboard;
		$scope.groupModalAccessGroup_textGeneralListCertificate= data.modalAccessGroup[0].textGeneralListCertificate;
		
		$scope.groupModalAccessGroup_textGraphics= data.modalAccessGroup[0].textGraphics;
		
		$scope.groupModalAccessGroup_textGraphicsCoveredCertificatesHousing= data.modalAccessGroup[0].textGraphicsCoveredCertificatesHousing;
		$scope.groupModalAccessGroup_textGraphicsCoveredCertificatesHousingEnableShow= data.modalAccessGroup[0].textGraphicsCoveredCertificatesHousingEnableShow;
		
		$scope.groupModalAccessGroup_textGraphicsCertificatesWithExtensor= data.modalAccessGroup[0].textGraphicsCertificatesWithExtensor;
		$scope.groupModalAccessGroup_textGraphicsCertificatesWithExtensorEnableShow= data.modalAccessGroup[0].textGraphicsCertificatesWithExtensorEnableShow;
		
		$scope.groupModalAccessGroup_textGraphicsInstallationPerRoom= data.modalAccessGroup[0].textGraphicsInstallationPerRoom;
		$scope.groupModalAccessGroup_textGraphicsInstallationPerRoomEnableShow= data.modalAccessGroup[0].textGraphicsInstallationPerRoomEnableShow;
		
		$scope.groupModalAccessGroup_textGraphicsStatusByCertificate= data.modalAccessGroup[0].textGraphicsStatusByCertificate;
		$scope.groupModalAccessGroup_textGraphicsStatusByCertificateEnableShow= data.modalAccessGroup[0].textGraphicsStatusByCertificateEnableShow;
		
		$scope.groupModalAccessGroup_textGroup= data.modalAccessGroup[0].textGroup;
		$scope.groupModalAccessGroup_textGroupEnableShow= data.modalAccessGroup[0].textGroupEnableShow;
		$scope.groupModalAccessGroup_textGroupEnableAdd= data.modalAccessGroup[0].textGroupEnableAdd;
		$scope.groupModalAccessGroup_textGroupEnableUpdate= data.modalAccessGroup[0].textGroupEnableUpdate;
		$scope.groupModalAccessGroup_textGroupEnableDelete= data.modalAccessGroup[0].textGroupEnableDelete;
		$scope.groupModalAccessGroup_textGroupEnableAccess= data.modalAccessGroup[0].textGroupEnableAccess;
		
		$scope.groupModalAccessGroup_textUser= data.modalAccessGroup[0].textUser;
		$scope.groupModalAccessGroup_textUserEnableShow= data.modalAccessGroup[0].textUserEnableShow;
		$scope.groupModalAccessGroup_textUserEnableAdd= data.modalAccessGroup[0].textUserEnableAdd;
		$scope.groupModalAccessGroup_textUserEnableUpdate= data.modalAccessGroup[0].textUserEnableUpdate;
		$scope.groupModalAccessGroup_textUserEnableDelete= data.modalAccessGroup[0].textUserEnableDelete;
		
		$scope.groupModalAccessGroup_textProvision= data.modalAccessGroup[0].textProvision;
		
		$scope.groupModalAccessGroup_textServicePlan= data.modalAccessGroup[0].textServicePlan;
		$scope.groupModalAccessGroup_textServicePlanEnableShow= data.modalAccessGroup[0].textServicePlanEnableShow;
		$scope.groupModalAccessGroup_textServicePlanEnableAdd= data.modalAccessGroup[0].textServicePlanEnableAdd;
		$scope.groupModalAccessGroup_textServicePlanEnableUpdate= data.modalAccessGroup[0].textServicePlanEnableUpdate;
		$scope.groupModalAccessGroup_textServicePlanEnableDelete= data.modalAccessGroup[0].textServicePlanEnableDelete;

		$scope.groupModalAccessGroup_textRoom= data.modalAccessGroup[0].textRoom;
		$scope.groupModalAccessGroup_textRoomEnableShow= data.modalAccessGroup[0].textRoomEnableShow;
		$scope.groupModalAccessGroup_textRoomEnableAdd= data.modalAccessGroup[0].textRoomEnableAdd;
		$scope.groupModalAccessGroup_textRoomEnableUpdate= data.modalAccessGroup[0].textRoomEnableUpdate;
		$scope.groupModalAccessGroup_textRoomEnableDelete= data.modalAccessGroup[0].textRoomEnableDelete;
			
		$scope.groupModalAccessGroup_textCpeType= data.modalAccessGroup[0].textCpeType;
		$scope.groupModalAccessGroup_textCpeTypeEnableShow= data.modalAccessGroup[0].textCpeTypeEnableShow;
		$scope.groupModalAccessGroup_textCpeTypeEnableAdd= data.modalAccessGroup[0].textCpeTypeEnableAdd;
		$scope.groupModalAccessGroup_textCpeTypeEnableUpdate= data.modalAccessGroup[0].textCpeTypeEnableUpdate;
		$scope.groupModalAccessGroup_textCpeTypeEnableDelete= data.modalAccessGroup[0].textCpeTypeEnableDelete;
		
		$scope.groupModalAccessGroup_textCpeModel= data.modalAccessGroup[0].textCpeModel;
		$scope.groupModalAccessGroup_textCpeModelEnableShow= data.modalAccessGroup[0].textCpeModelEnableShow;
		$scope.groupModalAccessGroup_textCpeModelEnableAdd= data.modalAccessGroup[0].textCpeModelEnableAdd;
		$scope.groupModalAccessGroup_textCpeModelEnableUpdate= data.modalAccessGroup[0].textCpeModelEnableUpdate;
		$scope.groupModalAccessGroup_textCpeModelEnableDelete= data.modalAccessGroup[0].textCpeModelEnableDelete;
		
		$scope.groupModalAccessGroup_textExtensorType= data.modalAccessGroup[0].textExtensorType;
		$scope.groupModalAccessGroup_textExtensorTypeEnableShow= data.modalAccessGroup[0].textExtensorTypeEnableShow;
		$scope.groupModalAccessGroup_textExtensorTypeEnableAdd= data.modalAccessGroup[0].textExtensorTypeEnableAdd;
		$scope.groupModalAccessGroup_textExtensorTypeEnableUpdate= data.modalAccessGroup[0].textExtensorTypeEnableUpdate;
		$scope.groupModalAccessGroup_textExtensorTypeEnableDelete= data.modalAccessGroup[0].textExtensorTypeEnableDelete;
		
		$scope.groupModalAccessGroup_textExtensorModel= data.modalAccessGroup[0].textExtensorModel;
		$scope.groupModalAccessGroup_textExtensorModelEnableShow= data.modalAccessGroup[0].textExtensorModelEnableShow;
		$scope.groupModalAccessGroup_textExtensorModelEnableAdd= data.modalAccessGroup[0].textExtensorModelEnableAdd;
		$scope.groupModalAccessGroup_textExtensorModelEnableUpdate= data.modalAccessGroup[0].textExtensorModelEnableUpdate;
		$scope.groupModalAccessGroup_textExtensorModelEnableDelete= data.modalAccessGroup[0].textExtensorModelEnableDelete;
		
		$scope.groupModalAccessGroup_textTestDevice= data.modalAccessGroup[0].textTestDevice;
		$scope.groupModalAccessGroup_textTestDeviceEnableShow= data.modalAccessGroup[0].textTestDeviceEnableShow;
		$scope.groupModalAccessGroup_textTestDeviceUpdate= data.modalAccessGroup[0].textTestDeviceEnableUpdate;

    }).
    error(function(data, status, headers, config) {
      // log error
    });

}