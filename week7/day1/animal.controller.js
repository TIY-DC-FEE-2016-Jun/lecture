(function() {
    'use strict';

    angular.module('zoo')
        .controller('AnimalController', AnimalController);

    var oldDate = (Date.now() - (1000*60*60*24*365*5));

    function AnimalController() {
        this.displayLimit = 2;

        /**
         * Determines if the provided dob is old or not
         * @param  {Date}  dob  The date to check
         * @return {Boolean}
         */
        this.isOld = function determineAge(dob) {
            dob = (dob || new Date());
            return dob.getTime() < oldDate;
        };

        // this SHOULD go in a service...
        this.animals = [
            { name: 'Bob', species: 'bobcat', dob: null, mammal: true },
            { name: 'Puck', species: 'mallard', dob: new Date('2012-02-05'), mammal: false },
            { name: 'Gene', species: 'alligator', dob: new Date('1998-09-20'), mammal: false },
            { name: 'Hank', species: 'bat', dob: new Date('2016-04-16'), mammal: true },
            { name: 'Roger', species: 'rhinocerous', dob: new Date('2001-07-04'), mammal: true }
        ];

    }

})();
