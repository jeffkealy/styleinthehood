/*jshint esversion: 6 */
const app = angular.module('app', ['ngRoute', 'ngMaterial']);

app.config(function ($routeProvider, $mdThemingProvider) {

    // $mdThemingProvider.theme('default')
    //   .primaryPalette('red')
    //   .accentPalette('blue')
    //   .warnPalette('yellow')
    //   .dark();

    $routeProvider
      .when('/home', {
        templateUrl: 'views/templates/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/newhood', {
        templateUrl: 'views/templates/newhood.html',
        controller: 'NewController',
        controllerAs: 'new'
      })
      .when('/patterns', {
        templateUrl: 'views/templates/patterns.html',
      })
      .when('/about', {
        templateUrl: 'views/templates/about.html'
      })
      .when('/thankyou', {
        templateUrl: 'views/templates/thankyou.html'
      })
      .otherwise({
        redirectTo: 'home'
      });
  });
