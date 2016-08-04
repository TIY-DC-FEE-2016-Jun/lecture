(function() {
    'use strict';

    angular.module('school')
        .factory('student', StudentService);

    var $q;

    StudentService.$inject = ['$q'];

    // the public API
    function StudentService(_$q_) {
        $q = _$q_;

        return {
            findAll: findAll,
            find: find,
            add: add
        };
    }

    // private stuff (functions and data)
    var nextId = 14;
    var students = [
        { id: 13, name: 'Jordan', grade: 86, dateAdded: new Date() }
    ];

    function findAll() {
        var def = $q.defer();  // in jQuery: $.Deferred()
        def.resolve(students);
        return def.promise;
    }

    /**
     * Finds a student by the given id
     * @param  {Number} id    The student to find
     * @return {Object|null}  The found student or null if not found
     */
    function find(id) {
        var theFoundStudent = null;

        if (!id || !Number(id)) {
            return theFoundStudent;
        }

        students.forEach(function(student) {
            if (student.id === id) {
                theFoundStudent = student;
            }
        });

        return theFoundStudent;
    }

    /**
     * Adds a new student to the school
     * @param {Object} student  The properties required of a student
     * @return {Object}         The student added to the school
     */
    function add(student) {
        var data = {
            id: nextId,
            name: student.name || 'John', // we should really audit this
            grade: student.grade || 0,
            dateAdded: new Date()
        };
        nextId++;

        students.push(data);
        return data;
    }

})();
