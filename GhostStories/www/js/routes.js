(function () {
    angular
      .module('gs')
      .config(config);
  
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
  
    function config($stateProvider,$urlRouterProvider) {

      $urlRouterProvider.otherwise('welcome');


      //TODO: Do I Need any of these controllers as all are the same and included in index.html?
      $stateProvider
        .state('welcome', {
          url: '/welcome',
          controller: 'DataController',
          templateUrl: 'js/templates/welcome.html'
        })
        .state('dataEntry1', {
          url: '/entergame',
          controller: 'DataController',
          templateUrl: 'js/templates/data-entry1.html'
        })
        .state('dataEntry2', {
          url: '/entergame',
          controller: 'DataController',
          templateUrl: 'js/templates/data-entry2.html'
        })
        .state('saved', {
          url: '/entergame',
          controller: 'DataController',
          templateUrl: 'js/templates/saved.html'
        })
        .state('scoreboard', {
          url: '/scoreboard',
          controller: 'DataController',
          templateUrl: 'js/templates/scoreboard.html'
        })
        .state('details', {
          url: '/scoreboard',
          controller: 'DataController',
          templateUrl: 'js/templates/saved.html'
        })
        ;
    }
  })();