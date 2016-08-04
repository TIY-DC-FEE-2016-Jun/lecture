(function() {
    'use strict';

    angular.module('school')
        .controller('RegistrarController', RegistrarController);


    RegistrarController.$inject = ['student', '$location'];

    function RegistrarController(theStudentService, $location) {
        var that = this;

        this.path = $location.host();
        console.log($location.host());

        this.students = [];
        theStudentService.findAll()
            .then(function(students) {
                that.students = students;
            });

        this.newStudent = {};

        this.addStudent = function addStudent(data) {
            var student = theStudentService.add(data);
        };
    }

})();
