(function() {
    'use strict';

    var assert = chai.assert;

    suite('github service', function() {
        var github, $httpBackend;

        setup(module('gh'));

        setup(inject(function(_github_, _$httpBackend_) {
            github = _github_;
            $httpBackend = _$httpBackend_;

            $httpBackend
                .whenGET('https://api.github.com/users/jakerella/repos')
                .respond([
                    { id: 1234, name: 'asteroids', owner: { login: 'jakerella' } }
                ]);

            $httpBackend
                .whenGET('/js/app/home.template.html')
                .respond('<h1>Hello World</h1>');

        }));

        test('github service functions exist', function() {
            assert.isFunction( github.getProfile );
            assert.isFunction( github.getRepos );
            assert.isFunction( github.getCurrentUser );
            assert.isFunction( github.logout );
            assert.isFunction( github.isLoggedIn );
        });

        test('able to get repos with valid username', function(done) {

            var result = github.getRepos('jakerella');

            assert.isObject( result, 'result is an object' );
            assert.isFunction( result.then, 'result has a then method' );
            assert.isFunction( result.catch, 'result has a catch method' );

            result
                .then(function(repos) {

                    assert.isArray( repos );
                    assert.isObject( repos[0] );
                    done();

                })
                .catch(function(err) {
                    console.log(err);
                    assert.fail('should not get in catch for repo listing');
                    done();
                });

            $httpBackend.flush();
        });


    });

})();
