(function() {
    'use strict';

    angular.module('lecture')
        .directive('theWall', TheWall);


    function TheWall() {
        return {
            restrict: 'A',
            template: '<section>I am a wall made of {{material}}.</section>',
            replace: true, // replace the containing element with the template
            scope: {
                // material: '=foobar'  // use thue "foobar" attribute when using this directive
                material: '=' // use the same named attribute
            }
        };
    }

})();
