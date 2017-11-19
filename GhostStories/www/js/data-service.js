angular.module("gs")
    .factory("DataService",DataService);

    function DataService($window){
        return {
            addGame: addGame,
            getAll: getAll,
            getCount: getCount
        };

        function addGame(){
            count = getCount();
            $window.localStorage.setItem('gsCount', JSON.stringify(count += 1));
        }

        function getAll(){
            return "test";
        }

        function getCount(){
            var count = JSON.parse($window.localStorage.getItem('gsCount'));
            return count? count : 0;
        }
    }