angular
  .module('hawking', ['ui.router'])
  .config(config)

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/home',
    controller: 'HomeController',
    templateUrl: 'home.html'
  }).state('home.full', {
    url: '/full',
    controller: 'FullListController',
    templateUrl: 'full-list.html'
  }).state('home.random', {
    url: '/random',
    controller: 'RandomController',
    templateUrl: 'random.html'
  });
}
