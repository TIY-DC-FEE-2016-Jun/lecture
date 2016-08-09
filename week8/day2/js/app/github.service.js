(function() {
    'use strict';

    angular.module('gh')
        .factory('github', GitHubService);

    GitHubService.$inject = ['$http'];

    function GitHubService($http) {
        var apiKey;
        var currentUser;

        return {
            getProfile: getProfile,
            getRepos: getRepos,
            getCurrentUser: getCurrentUser
        };

        function getCurrentUser() {
            return currentUser;
        }

        /**
         * [getProfile description]
         * @param  {[type]} key [description]
         * @return {[type]}     [description]
         */
        function getProfile(key) {
            if (!key) {
                // return a promise that is rejected
            }

            return $http({
                url: 'https://api.github.com/user',
                method: 'get',
                headers: {
                    Authorization: 'token ' + key
                }
            })
            .then(function(response) {
                apiKey = key;
                currentUser = response.data.login;
                return response.data;
            });

        }

        /**
         * [getRepos description]
         * @param  {[type]} username [description]
         * @return {[type]}          [description]
         */
        function getRepos(username) {
            if (!username) {
                // what do I do here???
            }

            return $http({
                url: 'https://api.github.com/users/' + username + '/repos',
                method: 'get',
                headers: {
                    Authorization: 'token ' + apiKey
                }
            })
            .then(function(response) {
                return response.data;
            });
        }
    }

})();
