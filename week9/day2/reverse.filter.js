(function() {
    'use strict';

    angular.module('lecture')
        .filter('reverse', ReverseFilter);


    function ReverseFilter() {

        return function reverse(input, uppercase) {
            var newText = input;
            if (uppercase) {
                newText = input.toUpperCase();
            }

            return newText.split('').reverse().join('');
        };

    }

})();
