angular
  .module('PeopleRegistrationApp')
  .service('AuthService', function ($http) {
    this.login = function (credentials) {
      return $http
        .post('http://localhost:5168/api/pessoa/login', credentials)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          throw error;
        });
    };
  });
