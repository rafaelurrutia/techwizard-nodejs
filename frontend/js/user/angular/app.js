function mainController($scope, $http) {
    
    var userSource;
    
    switch(language) {
	    case 'es':
			userSource="../json/user/user_Content-es.json";
	        break;
	    case 'en':
			userSource="../json/user/user_Content.json";
	        break;
		case 'pt_BR':
			userSource="../json/user/user_Content-pt_BR.json";
	        break;
	    default:   	
	}
	
    $http.get(userSource).
    success(function(data, status, headers, config) {
        
        $scope.userTitle = data.title[0].title;
        
        $scope.userHeadTitle = data.head[0].title;
        $scope.userHeadIcon = data.head[0].icon;
        
        $scope.userListButtonDeleteUserIcon = data.listButton[0].icon;
        $scope.userListButtonDeleteUserHint = data.listButton[0].hint;
        $scope.userListButtonRefreshTableIcon = data.listButton[1].icon;
        $scope.userListButtonRefreshTableHint = data.listButton[1].hint;
        $scope.userListButtonAddUserIcon = data.listButton[2].icon;
        $scope.userListButtonAddUserHint = data.listButton[2].hint;
        $scope.userListButtonDownloadExcelFileIcon = data.listButton[3].icon;
        $scope.userListButtonDownloadExcelFileHint = data.listButton[3].hint;
        $scope.userListButtonDownloadPdfFileIcon = data.listButton[4].icon;
        $scope.userListButtonDownloadPdfFileHint = data.listButton[4].hint;

        $scope.userTableTopShow = data.table[0].top[0].show;
        $scope.userTableTopIcon = data.table[0].top[0].icon;
        $scope.userTableTopFilter = data.table[0].top[1].filter;
        $scope.userTableTopIcon = data.table[0].top[1].icon;

//        $scope.userTableContentHeadColumn1 = data.table[1].content[0].head[0].column;
//        $scope.userTableContentHeadColumn2 = data.table[1].content[0].head[1].column;
//        $scope.userTableContentHeadColumn3 = data.table[1].content[0].head[2].column;
//        $scope.userTableContentHeadColumn4 = data.table[1].content[0].head[3].column;

        $scope.userModalAddUserTitle = data.modalAddUser[0].title;
        $scope.userModalAddUserIcon = data.modalAddUser[0].icon;
        $scope.userModalAddUserButtonAdd = data.modalAddUser[0].buttonAdd;
        $scope.userModalAddUserButtonClean = data.modalAddUser[0].buttonClean;
        $scope.userModalAddUserButtonClose = data.modalAddUser[0].buttonClose;
        $scope.userModalAddUserMessageRequired = data.modalAddUser[0].messageRequired;

        $scope.userModalUpdateUserTitle = data.modalUpdateUser[0].title;
        $scope.userModalUpdateUserIcon = data.modalUpdateUser[0].icon;
        $scope.userModalUpdateUserButtonUpdate = data.modalUpdateUser[0].buttonUpdate;
        $scope.userModalUpdateUserButtonClean = data.modalUpdateUser[0].buttonClean;
        $scope.userModalUpdateUserButtonClose = data.modalUpdateUser[0].buttonClose;
        $scope.userModalUpdateUserMessageRequired = data.modalUpdateUser[0].messageRequired;

        $scope.userModalDeleteUserTitle = data.modalDeleteUser[0].title;
		$scope.userModalDeleteUserIcon = data.modalDeleteUser[0].icon;
		$scope.userModalDeleteUserMessageConfirm = data.modalDeleteUser[0].messageConfirm;
		$scope.userModalDeleteUserButtonDelete = data.modalDeleteUser[0].buttonDelete;
		$scope.userModalDeleteUserButtonClose = data.modalDeleteUser[0].buttonClose;

    }).
    error(function(data, status, headers, config) {
      // log error
    });

 /*
    $scope.userOpenModal = function() {
        window.location.href="#usersModalAdduser";
    }
*/


}