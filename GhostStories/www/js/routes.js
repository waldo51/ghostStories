(function () {
    angular
      .module('gs')
      .config(config);
  
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
  
    function config($stateProvider,$urlRouterProvider) {

      $urlRouterProvider.otherwise('welcome');

      $stateProvider
        .state('welcome', {
          url: '/welcome',
          views: {
            settings: {
              controller: 'DataController',
              templateUrl: 'js/templates/welcome.html'
            }
          }
        });
    }
  })();