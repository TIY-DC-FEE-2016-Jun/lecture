(function() {
    'use strict';


    var assert = chai.assert;

    suite('student service', function() {

        var studentService, $rootScope;

        setup(module('school'));

        setup(inject(function(student, _$rootScope_) {
            studentService = student;
            $rootScope = _$rootScope_;
        }));


        test('service functions exist', function() {

            assert.isFunction( studentService.find , 'find fn exists' );
            assert.isFunction( studentService.findAll , 'findAll fn exists' );
            assert.isFunction( studentService.add , 'add fn exists' );

        });

        test('finding all students', function(done) {

            var promise = studentService.findAll();

            assert.isObject( promise, 'return value is an object' );
            assert.isFunction( promise.then, 'return value has a "then"' );
            assert.isFunction( promise.catch, 'return value has a "catch"' );

            console.log('have a promise?', typeof(promise));

            promise
                .then(function(data) {
                    console.log('in then');
                    assert.isArray( data, 'date from findAll is an array' );
                    done();
                })
                .catch(function() {
                    console.log('in catch');
                    assert.fail('should not fail the findAll promise');
                    done();
                });

            $rootScope.$digest();
        });

        test('finding single student works with id', function() {
            var student = studentService.find(13);

            assert.isObject(student, 'got back an object from find');
            // write more assertions!!
        });


    });

})();
