angular.module("gs")
.controller("DataController",DataController);

function DataController(DataService){
    var $ctrl = this;

    $ctrl.count = DataService.getCount();
    $ctrl.getAllGames = getAllGames;
    $ctrl.players = [1,2,3,4];
    $ctrl.data = {};
    $ctrl.bosses = [1,2,3,4];
    $ctrl.getAllGames();
    $ctrl.initPlayerNames = initPlayerNames;

    $ctrl.saveGame = function () {
        //calculate and set score
        setScore();
        //add date
        setDate();
        //save game
        DataService.saveGame($ctrl.data);
        //update history in memory
        $ctrl.getAllGames();
        //move data to new variable (for score page) and then reset data and count
        $ctrl.saved = $ctrl.data;
        $ctrl.data = {};
        $ctrl.count = DataService.getCount();
    };
    
    $ctrl.dataComplete = function (){
       return $ctrl.data.playerNum !== undefined &&
        $ctrl.data.mode !== undefined &&
        $ctrl.data.win !== undefined && 
        $ctrl.data.qi !== undefined && 
        $ctrl.data.cardsLeft !== undefined &&
        $ctrl.data.deadPlayers !== undefined &&
        $ctrl.data.hauntedTiles !== undefined &&
        $ctrl.data.bossesKilled !== undefined;
    };


    //calculates then sets the score for current game being added
    function setScore(){
        var score = 0;

        //win points and cards remaining
        if($ctrl.data.win){
            score += 10;
            if($ctrl.data.mode === "Hell") score += 10;
            //cards left are good if you win
            score += $ctrl.data.cardsLeft
        }else {
            //cards are bad if you lose
            score -= $ctrl.data.cardsLeft
        }

        //qi
        score += $ctrl.data.qi;
        //taoists dead
        score -= $ctrl.data.deadPlayers * 3;
        //haunted tiles
        score -= $ctrl.data.hauntedTiles * 4;

        if($ctrl.data.mode === "Hell" || $ctrl.data.mode === "Nightmare"){
            switch($ctrl.data.bossesKilled){
                case 4:
                case 3: score += 6;
                case 2: score += 4;
                case 1: score += 2;
                default: break;
            }
        }

        $ctrl.data.score = score;
    }

    function getAllGames(){
        $ctrl.games = DataService.getAllGames();
    }

    function setDate(){
        var newDate = new Date(); 
        var dateString = "";  
        dateString += (newDate.getMonth() + 1) + "/";  
        dateString += newDate.getDate() + "/";  
        dateString += newDate.getFullYear(); 
        $ctrl.data.date = dateString;
    }

    function initPlayerNames(){
        $ctrl.data.playerNames = new Array($ctrl.data.playerNum - 1);
    }
};