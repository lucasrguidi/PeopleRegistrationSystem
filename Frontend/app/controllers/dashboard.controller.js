angular
  .module('PeopleRegistrationApp')
  .controller('DashboardController', function ($scope, $http, toastService) {
    $scope.toastService = toastService;

    $scope.loadPeople = function () {
      $http
        .get('http://localhost:5062/api/person/list')
        .then(function (response) {
          $scope.person = response.data;
        })
        .catch(function (error) {
          toastService.show(error.data, 'error');
        });
    };

    $scope.addPerson = function () {
      if (!$scope.newPerson.name || !$scope.newPerson.cpf) {
        toastService.show('Os campos Nome e CPF são obrigatórios.', 'error');
        return;
      }

      $http
        .post('http://localhost:5062/api/person/add', $scope.newPerson)
        .then(function (response) {
          $scope.newPerson = {};
          toastService.show(response.data);
          $scope.loadPeople();
        })
        .catch(function (error) {
          toastService.show(error.data, 'error');
        });
    };

    $scope.removePerson = function (id) {
      if (confirm('Tem certeza que deseja remover esta pessoa?')) {
        $http
          .delete('http://localhost:5062/api/person/remove/' + id)
          .then(function (response) {
            toastService.show(response.data);
            $scope.loadPeople(); 
          })
          .catch(function (error) {
            toastService.show(error.data, 'error');
          });
      }
    };

    $scope.loadPeople();
  });
