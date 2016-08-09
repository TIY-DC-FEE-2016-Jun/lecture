(function() {
    'use strict';

    angular.module('gh', ['ui.router'])
        .config(ghConfig);


    ghConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function ghConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

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
                controllerAs: 'loginCtrl'
            })
            .state('profile', {
                url: '/my-profile',
                templateUrl: '/js/profile/profile.template.html',
                controller: 'ProfileController',
                controllerAs: 'profile',
                params: {
                    profile: {}
                }
            })
            .state('repos', {
                url: '/repos',
                templateUrl: '/js/repos/repos.template.html',
                controller: 'ReposController',
                controllerAs: 'repos'
            });

    }

})();
