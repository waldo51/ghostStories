angular.module("starter")
    .factory("DataService",DataService);

    function DataService($cordovaSQLite){
        return {
            setupDB: setupDB,
            db : db,
            getAll: getAll
        };

        var db = null;

        function setupDB(){
            db = $cordovaSQLite.openDB({name:"ghost.db",location:'default'});
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS games (id integer primary key, date text, difficulty text, boss text, points integer, players text)");
            setTestData();
        }

        function setTestData(){
            var query = "INSERT INTO games (date, points) VALUES ('Yesterday',22)";
            $cordovaSQLite.execute(db, query).then(function(res) {
                result = "INSERT ID -> " + res.insertId;
            }, function (err) {
                result = err;
            });
        }

        function db(){
            return db;
        }
        function getAll(){
            var qry = "Select * from games";
            var result = null;
            $cordovaSQLite.execute(db, query).then(function(res) {
                if(res.rows.length > 0) {
                    result = "SELECTED -> " + res.rows.item(0).date + " " + res.rows.item(0).points;
                } else {
                    result = "No results found";
                }
            }, function (err) {
                result = "Error: " + err;
            });
            return result;
        }
    }