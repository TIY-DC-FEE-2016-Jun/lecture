(function() {
    'use strict';

    angular.module('gh')
        .controller('ReposController', ReposController);

    ReposController.$inject = ['github'];

    function ReposController(github) {
        var that = this;

        this.list = [];

        github.getRepos( github.getCurrentUser() )
            .then(function(data) {
                console.log(data);
                that.list = data;
            })
            .catch(function() {
                // show the user a message??
            });

    }

})();
