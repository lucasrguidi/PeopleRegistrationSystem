angular
  .module('PeopleRegistrationApp')
  .controller('LoginController', function ($scope, $http, $location) {
    $scope.login = {};

    $scope.loginUser = function () {
      $http
        .post('http://localhost:5062/api/auth/login', $scope.login)
        .then(function (response) {
          alert('Login bem-sucedido');
          $location.path('/dashboard');
        })
        .catch(function (error) {
          alert('Credenciais inválidas');
        });
    };
  });
