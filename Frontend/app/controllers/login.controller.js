angular
  .module('PeopleRegistrationApp')
  .controller(
    'LoginController',
    function ($scope, $http, $location, toastService) {
      $scope.login = {};

      $scope.loginUser = function () {
        $http
          .post('http://localhost:5062/api/auth/login', $scope.login)
          .then(function (response) {
            toastService.show(response.data);
            $location.path('/dashboard');
          })
          .catch(function (error) {
            toastService.show(error.data, 'error');
          });
      };
    }
  );
