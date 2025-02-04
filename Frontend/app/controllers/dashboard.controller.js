angular
  .module('PeopleRegistrationApp')
  .controller('DashboardController', function ($scope, $http) {
    $scope.loadPeople = function () {
      $http
        .get('http://localhost:5062/api/person/list')
        .then(function (response) {
          $scope.person = response.data;
        })
        .catch(function (error) {
          alert('Erro ao carregar lista de pessoas');
        });
    };

    $scope.addPerson = function () {
      if (!$scope.newPerson.name || !$scope.newPerson.cpf) {
        alert('Os campos Nome e CPF são obrigatórios.');
        return;
      }

      $http
        .post('http://localhost:5062/api/person/add', $scope.newPerson)
        .then(function (response) {
          console.log('🚀 ~ response:', response);
          $scope.newPerson = {};
          alert(response.data);
          $scope.loadPeople();
        })
        .catch(function (error) {
          console.log(error);
          alert('Erro ao cadastrar a pessoa');
        });
    };

    $scope.loadPeople();
  });
