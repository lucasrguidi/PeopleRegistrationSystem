angular
  .module('PeopleRegistrationApp')
  .controller(
    'LoginController',
    function ($scope, $http, $location, toastService, config) {
      const baseUrl = config.apiUrl;

      $scope.login = {};

      $scope.loginUser = function () {
        $http
          .post(baseUrl + '/auth/login', $scope.login)
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
