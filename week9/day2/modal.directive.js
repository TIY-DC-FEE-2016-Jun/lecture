(function() {
    'use strict';

    angular.module('lecture')
        .directive('modal', Modal);

    function Modal() {

        return {
            restrict: 'E',
            templateUrl: 'modal.template.html',
            transclude: true,
            scope: {
                title: '=modalTitle'
            }
        };

    }

})();
