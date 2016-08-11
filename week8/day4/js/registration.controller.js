(function() {
    'use strict';

    angular.module('hotel')
        .controller('RegistrationController', RegistrationController);


    function RegistrationController() {
        var that = this;

        this.guests = [
            { name: 'Jordan', id: 123456, room: 743, memberId: 5555, hometown: 'Washington' },
            { name: 'Billy', id: 65884, room: 123, memberId: 4444, hometown: 'Austin' },
            { name: 'Cindy', id: 33657, room: 746, memberId: 8888, hometown: 'New York City' }
        ];

        this.checkout = function(id) {
            console.log('removing guest', id);
            that.guests.forEach(function(guest, i) {
                if (guest.id === id) {
                    that.guests.splice(i, 1);
                }
            });
        };

    }

})();
