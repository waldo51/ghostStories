angular.module("starter")
.controller("DataController",DataController);

function DataController(DataService){
    var ctrl = this;

    this.select = function select(){
        return DataService.getall();
    }
}