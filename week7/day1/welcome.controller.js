(function() {
    'use strict';

    angular.module('zoo')
        .controller('WelcomeController', WelcomeController);

    var next = 1;

    function WelcomeController() {

        this.greeting = 'Hello Animals!';
        // $scope.greeting = 'Hello Animals!';

        this.counter = next;
        next++;

        this.now = function now() {
            var today = (new Date());
            return (today.getMonth() + 1) + ' / ' + today.getDate();
        };
    }

})();
