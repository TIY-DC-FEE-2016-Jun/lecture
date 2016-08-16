(function() {
    'use strict';

    angular.module('lecture')
        .directive('myTime', MyTime);

    MyTime.$inject = ['dateFilter'];
    function MyTime(dateFilter) {
        // only ever executed once per application load

        return {
            restrict: 'E',
            templateUrl: 'my-time.template.html',
            scope: {
                format: '='
            },
            link: setupTimeUpdater
        };

        // executed once per directive use
        function setupTimeUpdater(scope, element, attributes, controller) {
            console.log(scope, element, attributes);

            updateTime();
            setInterval(updateTime, 1000);

            function updateTime() {
                var now = new Date();
                element[0].querySelector('time').innerText = dateFilter(now, scope.format);
                element[0].querySelector('time').style.backgroundColor = '#' + dateFilter(now, 'HHmmss');
            }

        }

    }

})();
