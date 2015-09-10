function mainController($scope, $http) {
    
    var roomSource;

    switch(language) {
	    case 'es':
			roomSource="../json/room/room_Content-es.json";
	        break;
	    case 'en':
			roomSource="../json/room/room_Content.json";
	        break;
		case 'pt_BR':
			roomSource="../json/room/room_Content-pt_BR.json";
	        break;	        
	    default:   	
	}
	    
    $http.get(roomSource).
    success(function(data, status, headers, config) {
        
        $scope.roomTitle = data.title[0].title;
        
        $scope.roomHeadTitle = data.head[0].title;
        $scope.roomHeadIcon = data.head[0].icon;
        
        $scope.roomListButtonDeleteRoomIcon = data.listButton[0].icon;
        $scope.roomListButtonDeleteRoomHint = data.listButton[0].hint;
        $scope.roomListButtonRefreshTableIcon = data.listButton[1].icon;
        $scope.roomListButtonRefreshTableHint = data.listButton[1].hint;
        $scope.roomListButtonAddRoomIcon = data.listButton[2].icon;
        $scope.roomListButtonAddRoomHint = data.listButton[2].hint;
        $scope.roomListButtonDownloadExcelFileIcon = data.listButton[3].icon;
        $scope.roomListButtonDownloadExcelFileHint = data.listButton[3].hint;
        $scope.roomListButtonDownloadPdfFileIcon = data.listButton[4].icon;
        $scope.roomListButtonDownloadPdfFileHint = data.listButton[4].hint;

        $scope.roomTableTopShow = data.table[0].top[0].show;
        $scope.roomTableTopIcon = data.table[0].top[0].icon;
        $scope.roomTableTopFilter = data.table[0].top[1].filter;
        $scope.roomTableTopIcon = data.table[0].top[1].icon;

//        $scope.roomTableContentHeadColumn1 = data.table[1].content[0].head[0].column;
//        $scope.roomTableContentHeadColumn2 = data.table[1].content[0].head[1].column;
//        $scope.roomTableContentHeadColumn3 = data.table[1].content[0].head[2].column;
//        $scope.roomTableContentHeadColumn4 = data.table[1].content[0].head[3].column;

        $scope.roomModalAddRoomTitle = data.modalAddRoom[0].title;
        $scope.roomModalAddRoomIcon = data.modalAddRoom[0].icon;
        $scope.roomModalAddRoomButtonAdd = data.modalAddRoom[0].buttonAdd;
        $scope.roomModalAddRoomButtonClean = data.modalAddRoom[0].buttonClean;
        $scope.roomModalAddRoomButtonClose = data.modalAddRoom[0].buttonClose;
        $scope.roomModalAddRoomMessageRequired = data.modalAddRoom[0].messageRequired;

        $scope.roomModalUpdateRoomTitle = data.modalUpdateRoom[0].title;
        $scope.roomModalUpdateRoomIcon = data.modalUpdateRoom[0].icon;
        $scope.roomModalUpdateRoomButtonUpdate = data.modalUpdateRoom[0].buttonUpdate;
        $scope.roomModalUpdateRoomButtonClean = data.modalUpdateRoom[0].buttonClean;
        $scope.roomModalUpdateRoomButtonClose = data.modalUpdateRoom[0].buttonClose;
        $scope.roomModalUpdateRoomMessageRequired = data.modalUpdateRoom[0].messageRequired;

        $scope.roomModalDeleteRoomTitle = data.modalDeleteRoom[0].title;
		$scope.roomModalDeleteRoomIcon = data.modalDeleteRoom[0].icon;
		$scope.roomModalDeleteRoomMessageConfirm = data.modalDeleteRoom[0].messageConfirm;
		$scope.roomModalDeleteRoomButtonDelete = data.modalDeleteRoom[0].buttonDelete;
		$scope.roomModalDeleteRoomButtonClose = data.modalDeleteRoom[0].buttonClose;

    }).
    error(function(data, status, headers, config) {
      // log error
    });

 /*
    $scope.roomOpenModal = function() {
        window.location.href="#roomsModalAddroom";
    }
*/


}