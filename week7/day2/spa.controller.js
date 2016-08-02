(function() {
    'use strict';

    angular.module('hotel')
        .controller('SpaController', SpaController);

    SpaController.$inject = ['$scope'];

    function SpaController($scope) {
        this.hasVisited = function(guest) {
            // do some lookup to see if they've visited the spa...
            console.log(guest);
            return true;
        };

        // this is dangerous!
        // what if someone renames `reg` in the HTML??
        console.log( $scope.reg.currentGuestCount() );

        console.log(this, $scope);
    }

})();
