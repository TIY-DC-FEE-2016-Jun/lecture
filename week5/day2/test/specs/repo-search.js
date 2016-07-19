(function() {
    'use strict';

    var assert = chai.assert;

    var fixtures = $('#fixtures').html();

    suite('get repo list', function() {

        test('ensure function exists', function() {
            assert.ok( window.gh.getRepoList, 'getRepoList exists' );
            assert.strictEqual( typeof(window.gh.getRepoList), 'function', 'getRepoList is a function' );
        });

        test('getRepoList makes ajax call', function(doneCallback) {
            var returnVal = window.gh.getRepoList('jakerella');

            assert.ok( returnVal.done );
            assert.ok( returnVal.fail );

            returnVal
                .done(function(data) {
                    assert.isArray( data );
                })
                .fail(function(xhr) {
                    assert.fail();
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
