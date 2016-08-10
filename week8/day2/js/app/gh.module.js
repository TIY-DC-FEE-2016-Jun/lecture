(function() {
    'use strict';

    angular.module('gh', ['ui.router'])
        .config(ghConfig)
        .run(ghStartup);


    ghConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function ghConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/js/app/home.template.html'
            })
            .state('help', {
                url: '/help',
                templateUrl: '/js/app/help.template.html'
            })
            .state('login', {
                url: '/authenticate',
                templateUrl: '/js/profile/login.template.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl',
                params: {
                    message: null
                }
            })
            .state('profile', {
                url: '/my-profile',
                templateUrl: '/js/profile/profile.template.html',
                controller: 'ProfileController',
                controllerAs: 'profile',
                params: {
                    profile: null
                },
                secure: true
            })
            .state('repos', {
                url: '/repos',
                templateUrl: '/js/repos/repos.template.html',
                controller: 'ReposController',
                controllerAs: 'repos',
                secure: true
            })
            .state('repos.repoDetail', {
                url: '/:user/:reponame',
                templateUrl: '/js/repos/repoDetail.template.html',
                controller: 'RepoDetailController',
                controllerAs: 'detail',
                secure: true
            })
            .state('notfound', {
                url: '/404',
                templateUrl: 'js/app/notfound.template.html'
            });

    }

    ghStartup.$inject = ['$rootScope', '$state', 'github'];

    function ghStartup($rootScope, $state, github) {

        $rootScope.$on('$stateChangeStart', function(e, toState) {

            if (toState.secure && !github.isLoggedIn()) {
                e.preventDefault();
                console.log('redirecting to login');
                $state.go('login', {
                    message: 'You need to log in first!'
                });
            }

        });

    }

})();
