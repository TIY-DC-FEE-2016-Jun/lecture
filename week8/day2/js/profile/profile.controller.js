(function() {
    'use strict';

    angular.module('gh')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$stateParams'];

    function ProfileController($stateParams) {
        this.data = $stateParams.profile;
    }

})();
