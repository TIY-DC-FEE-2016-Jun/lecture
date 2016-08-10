(function() {
    'use strict';

    angular.module('gh')
        .controller('ReposController', ReposController);

    ReposController.$inject = ['github'];

    function ReposController(github) {
        var that = this;

        this.list = [];

        var user = github.getCurrentUser();
        if (user) {
            github.getRepos( user.login )
                .then(function(data) {
                    console.log(data);
                    that.list = data;
                })
                .catch(function() {
                    // show the user a message??
                });
        }
    }

})();
