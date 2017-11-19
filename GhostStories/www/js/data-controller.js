angular.module("gs")
.controller("DataController",DataController);

function DataController(DataService){
    var $ctrl = this;

    $ctrl.count = DataService.getCount();

    $ctrl.addGame = addGame;
    
    
    function addGame() {
        DataService.addGame();
        $ctrl.count = DataService.getCount();
    }
}