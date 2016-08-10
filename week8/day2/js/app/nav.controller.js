(function() {
    'use strict';

    angular.module('gh')
        .controller('NavController', NavController);


    NavController.$inject = ['$state', 'github'];

    function NavController($state, github) {

        //   double bang converts any value into a boolean based on truthiness
        this.loggedin = github.isLoggedIn;

        this.logout = function logout() {
            github.logout();
            $state.go('home');
        };
    }

})();
