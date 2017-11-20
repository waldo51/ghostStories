angular.module("gs")
    .factory("DataService",DataService);

    function DataService($window){
        return {
            saveGame: saveGame,
            getAll: getAll,
            getCount: getCount
        };

        function saveGame(game){
            count = getCount();
            $window.localStorage.setItem('game' + (count+1) , JSON.stringify(game));
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