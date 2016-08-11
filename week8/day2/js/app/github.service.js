(function() {
    'use strict';

    angular.module('gh')
        .factory('github', GitHubService);

    GitHubService.$inject = ['$http', '$q'];

    function GitHubService($http, $q) {
        var apiKey;
        var currentUser;

        init();

        return {
            getProfile: getProfile,
            getRepos: getRepos,
            getCurrentUser: getCurrentUser,
            logout: logout,
            isLoggedIn: isLoggedIn
        };

        function init() {
            apiKey = localStorage.getItem('api-key');
            if (apiKey) {
                getProfile(apiKey)
                    .catch(function() {
                        apiKey = null;
                        localStorage.removeItem('api-key');
                    });
            }
        }

        function getCurrentUser() {
            return currentUser;
        }

        function isLoggedIn() {
            return !!apiKey;
        }

        function logout() {
            apiKey = null;
            currentUser = null;
        }

        /**
         * [getProfile description]
         * @param  {[type]} key [description]
         * @return {[type]}     [description]
         */
        function getProfile(key) {
            if (!key) {
                if (apiKey) {
                    key = apiKey;
                } else {
                    var err = new Error('You need an API key to get profile data');
                    err.status = 401;
                    return $q.reject(err);
                }
            }

            if (currentUser) {
                return $q.resolve(currentUser);
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
                currentUser = response.data;

                localStorage.setItem('api-key', apiKey);

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
                return $q.reject(new Error('Please provide username to get repos'));
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
