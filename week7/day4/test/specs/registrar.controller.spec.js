(function() {
    'use strict';

    var assert = chai.assert;

    suite('registrar controller', function() {

        var registrarController, $rootScope;
        var mockStudentService = {};

        setup(module('school'));

        setup(module(function($provide) {
            $provide.value( 'student', mockStudentService );
        }));

        setup(inject(function($controller, $q, _$rootScope_) {
            $rootScope = _$rootScope_;

            mockStudentService.findAll = function() {
                var def = $q.defer();
                def.resolve([]);
                return def.promise;
            };

            mockStudentService.add = function(data) {
                mockStudentService.add.called++;
                return { id: 1, name: data.name, grade: data.grade, dateAdded: new Date() };
            };
            mockStudentService.add.called = 0;

            registrarController = $controller('RegistrarController');
        }));

        test('registrar controller has expected data', function() {

            assert.isString(registrarController.path, 'path exists');
            assert.isArray(registrarController.students, 'controller has student array');
            assert.isObject(registrarController.newStudent, 'controller has a new student object');
            assert.strictEqual( Object.keys(registrarController.newStudent).length, 0, 'controller has an empty new student' );
            assert.isFunction(registrarController.addStudent, 'controller has a method for adding a student');

            $rootScope.$digest();
        });

        test('registrar can add student', function() {
            registrarController.addStudent({ name: 'John', grade: 50 });
            assert.strictEqual( mockStudentService.add.called, 1, 'the student service add method was executed' );

            $rootScope.$digest();
        });

    });

})();
