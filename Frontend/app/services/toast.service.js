angular
  .module('PeopleRegistrationApp')
  .service('toastService', function ($timeout) {
    const service = {
      messages: [],
      show: function (message, type = 'success') {
        const toast = {
          id: Date.now(),
          message: message,
          type: type,
          visible: true,
        };

        this.messages.push(toast);

        $timeout(() => {
          this.removeToast(toast.id);
        }, 2500);
      },
      removeToast: function (id) {
        this.messages = this.messages.filter((t) => t.id !== id);
      },
    };

    return service;
  });
