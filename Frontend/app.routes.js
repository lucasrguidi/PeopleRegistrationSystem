angular.module('PeopleRegistrationApp').config(function ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'app/templates/login.html',
      controller: 'LoginController',
    })
    .when('/dashboard', {
      templateUrl: 'app/templates/dashboard.html',
      controller: 'DashboardController',
    })
    .otherwise({
      redirectTo: '/login',
    });
});
