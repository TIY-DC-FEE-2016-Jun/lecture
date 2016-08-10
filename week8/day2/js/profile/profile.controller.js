(function() {
    'use strict';

    angular.module('gh')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$stateParams', '$state', 'github'];

    function ProfileController($stateParams, $state, github) {
        console.log('constructing profile controller');

        var that = this;
        this.data = $stateParams.profile;

        if (!this.data) {
            github.getProfile()
                .then(function(data) {
                    that.data = data;
                })
                .catch(function(err) {
                    console.warn(err);
                    if (err.status === 401) {
                        $state.go('login');
                    } else {
                        // TODO send them to a different error state
                    }
                });
        }
    }

})();
