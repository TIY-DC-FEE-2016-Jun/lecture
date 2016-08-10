(function() {
    'use strict';

    angular.module('gh')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$stateParams', '$state', 'github'];

    function LoginController($stateParams, $state, github) {
        var that = this;

        this.message = $stateParams.message;

        this.data = {};
        this.authenticate = function authenticate() {
            github.getProfile(that.data.key)
                .then(function(data) {
                    // take me to my profile
                    $state.go('profile', {
                        profile: data
                    });
                })
                .catch(function(err) {
                    console.error('Unable to authenticate!', err);
                });
        };

    }

})();
