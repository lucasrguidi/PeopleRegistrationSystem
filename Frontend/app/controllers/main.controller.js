angular
  .module('PeopleRegistrationApp')
  .controller('MainController', function ($scope, toastService) {
    $scope.toastService = toastService;
  });
