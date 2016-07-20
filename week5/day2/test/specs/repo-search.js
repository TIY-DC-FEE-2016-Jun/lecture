(function() {
    'use strict';

    var assert = chai.assert;

    var fixtures = $('#fixtures').html();

    // BDD style testing
    // describe('get repo list', function() {
    //     it('should exist on namespace', function() {
    //         expect(window.gh.getRepoList).to.be.a.function;
    //     });
    // });

    // TDD style testing

    suite('get repo list', function() {

        setup(function() {
            // before each test...
            $.mockjax({
                url: 'https://api.github.com/users/jakerella/repos',
                method: 'get',
                responseText: [ { name: 'foobar' }, { name: 'batbaz' } ]
            });

            $.mockjax({
                url: 'https://api.github.com/users/xyxyxyxyxy/repos',
                method: 'get',
                status: 404,
                responseText: {
                    "message": "Not Found",
                    "documentation_url": "https://developer.github.com/v3"
                }
            });
        });

        teardown(function() {
            $.mockjax.clear();
        });

        test('ensure function exists', function() {
            assert.ok( window.gh.getRepoList, 'getRepoList exists' );
            assert.strictEqual( typeof(window.gh.getRepoList), 'function', 'getRepoList is a function' );
        });

        test('getRepoList makes ajax call', function(doneCallback) {
            var returnVal = window.gh.getRepoList('jakerella');

            assert.strictEqual( typeof(returnVal), 'object' );
            assert.strictEqual( typeof(returnVal.done), 'function' );
            assert.strictEqual( typeof(returnVal.fail), 'function' );

            returnVal
                .done(function(data) {
                    var mockedCalls = $.mockjax.mockedAjaxCalls();
                    assert.strictEqual( mockedCalls.length, 1 );
                    assert.strictEqual( mockedCalls[0].url, 'https://api.github.com/users/jakerella/repos' );
                    assert.isArray( data );
                    assert.strictEqual( data.length, 2 );
                })
                .fail(function(xhr) {
                    assert.fail('should not fail github API call');
                })
                .always(function() {
                    doneCallback();
                });

        });

        test('fail works with unknown user', function(doneCallback) {
            var returnVal = window.gh.getRepoList('xyxyxyxyxy');

            // make sure it's a promise...

            returnVal
                .done(function() {
                    assert.fail('bad user should not result in success');
                })
                .fail(function(xhr) {
                    assert.strictEqual( xhr.status, 404 );
                    assert.strictEqual( JSON.parse(xhr.responseText).message, 'Not Found' );
                    // what else to test?
                    // was a message shown to the user? should it have been?
                })
                .always(function() {
                    doneCallback();
                });
        });

    });

    suite('display repo list', function() {

        setup(function() {
            $('#fixtures').html(fixtures);
        });

        teardown(function() {
            console.log('after each test!');
        });

        test('displays single repo', function() {

            window.gh.displayRepos( [ { name: 'foobar' } ] );
            var items = $('.results li');
            assert.strictEqual( items.length, 1 );
            assert.strictEqual( items.text(), 'foobar' );

        });

        test('displays multiple repos', function() {

            var repos = [ { name: 'foobar' }, { name: 'batbaz' } ];
            window.gh.displayRepos( repos );

            var items = $('.results li');
            assert.strictEqual( items.length, 2 );
            items.each(function(i, item) {
                assert.strictEqual( $(item).text(), repos[i].name );
            });

        });

    });


})();
