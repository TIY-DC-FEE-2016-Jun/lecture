(function() {
    'use strict';

    angular.module('hotel')
        .directive('vCard', VCard);

    function VCard() {

        return {
            restrict: 'AE',  // use me as an "A"ttribute OR "E"lement
            templateUrl: 'templates/vcard.template.html',
            scope: {
                // "guest" is the name of the scoped variable in OUR directive
                // "person" is the name of the ATTRIBUTE we will use ont he element where this directive is applied
                guest: '=person',
                foobar: '&'
            }
        };

    }

})();
