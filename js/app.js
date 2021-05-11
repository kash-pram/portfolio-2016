/*var pfApp = angular.module('pmApp', ['ngAnimate', 'ngRoute', 'ui.router', 'ngSanitize']);*/
/*var pfApp = angular.module('pmApp', ['ngAnimate', 'ngRoute', 'ui.router']);*/
var pfApp = angular.module('pmApp', ['ngAnimate', 'ngRoute']);

pfApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.html5Mode({enabled: false, requireBase: true});
    $routeProvider
    .when("/", {
        templateUrl : "views/initial.html",
        controller: "initialController"
    })
    .when("/projects", {
        templateUrl : "views/projects.html",
        controller: "projectsController"
    })
    .when("/skillset", {
        templateUrl : "views/skillset.html",
        controller: "skillsController"
    })
    .when("/about", {
        templateUrl : "views/about.html",
        controller: "aboutController"
    })
    .otherwise({
        redirectTo: '/'
    });
}]);



