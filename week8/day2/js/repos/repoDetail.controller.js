(function() {
    'use strict';

    angular.module('gh')
        .controller('RepoDetailController', RepoDetailController);

    RepoDetailController.$inject = ['$stateParams'];

    function RepoDetailController($stateParams) {

        this.user = $stateParams.user;
        this.reponame = $stateParams.reponame;

    }

})();
