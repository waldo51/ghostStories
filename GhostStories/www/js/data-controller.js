angular.module("gs")
.controller("DataController",DataController);

function DataController(DataService){
    var $ctrl = this;

    $ctrl.count = DataService.getCount();
    $ctrl.players = [1,2,3,4];
    $ctrl.data = {};
    $ctrl.bosses = [1,2,3,4];

    $ctrl.saveGame = function () {
        //save game
        DataService.saveGame($ctrl.data);

        //move data to new variable (for score page) calc score and then reset data and count
        $ctrl.saved = $ctrl.data;
        setScore();
        $ctrl.data = {};
        $ctrl.count = DataService.getCount();
    };
    
    $ctrl.data1Complete = function (){
       return $ctrl.data.playerNum !== undefined &&
        $ctrl.data.mode !== undefined &&
        $ctrl.data.win !== undefined && 
        $ctrl.data.qi !== undefined && 
        $ctrl.data.cardsLeft !== undefined &&
        $ctrl.data.deadPlayers !== undefined &&
        $ctrl.data.hauntedTiles !== undefined &&
        $ctrl.data.bossesKilled !== undefined;
    };


    function setScore(){
        var score = 0;

        //win points and cards remaining
        if($ctrl.saved.win){
            score += 10;
            if($ctrl.saved.mode === "Hell") score += 10;
            //cards left are good if you win
            score += $ctrl.saved.cardsLeft
        }else {
            //cards are bad if you lose
            score -= $ctrl.saved.cardsLeft
        }

        //qi
        score += $ctrl.saved.qi;
        //taoists dead
        score -= $ctrl.saved.deadPlayers * 3;
        //haunted tiles
        score -= $ctrl.saved.hauntedTiles * 4;

        if($ctrl.saved.mode === "Hell" || $ctrl.saved.mode === "Nightmare"){
            switch($ctrl.saved.bossesKilled){
                case 4:
                case 3: score += 6;
                case 2: score += 4;
                case 1: score += 2;
                default: break;
            }
        }

        $ctrl.saved.score = score;
    }
};