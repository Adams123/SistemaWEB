var app_module = angular.module('app', ['ngRoute']);

app_module.config(['$routeProvider'
    , function ($routeProvider)
    {
        $routeProvider.when('/', {
            templateUrl: 'templates/index.html'
        }).when('/read', {
            templateUrl: '/templates/read.html'
        }).otherwise({
            redirectTo: '/'
        })
        }
]);