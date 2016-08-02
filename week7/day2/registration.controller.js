(function() {
    'use strict';

    angular.module('hotel')
        .controller('RegistrationController', RegistrationController);

    var guests = [
        { name: 'Jordan', arrival: new Date('2016-08-01'), checkout: null }
    ];

    function RegistrationController() {
        var that = this;
        /**
         * Tells you how many guests are not yet checked out
         * @return {Number}
         */
        this.currentGuestCount = function() {
            var count = 0;
            guests.forEach(function(guest) {
                if (guest.checkout === null) {
                    count++;
                }
            });
            return count;
        };

        this.guests = guests;

        this.newGuest = {};

        /**
         * Adds a guest to the registry
         *
         * @param  {Object} guest Must contain a `name`
         * @return {Object}       The guest added with all data
         */
        this.addGuest = function addGuest(guest) {
            console.log('adding a guest..', guest);
            if (!guest || !guest.name) {
                return null;
            }

            guest.arrival = new Date();
            guest.checkout = null;
            guests.push( guest );

            that.newGuest = {};

            return guest;
        };
    }

})();
