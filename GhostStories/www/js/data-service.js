angular.module("gs")
    .factory("DataService",DataService);

    function DataService($window){
        return {
            saveGame: saveGame,
            getAllGames: getAllGames,
            getCount: getCount
        };

        function saveGame(game){
            count = getCount();
            $window.localStorage.setItem('game' + (count+1) , JSON.stringify(game));
            $window.localStorage.setItem('gsCount', JSON.stringify(count += 1));
        }

        function getAllGames(){
            count = getCount();
            var games = new Array(count);
            for (i = 0; i < count; i++){
                games[i] = JSON.parse($window.localStorage.getItem('game' + (i + 1)));
            }
            return games;
        }

        function getCount(){
            var count = JSON.parse($window.localStorage.getItem('gsCount'));
            return count? count : 0;
        }
    }