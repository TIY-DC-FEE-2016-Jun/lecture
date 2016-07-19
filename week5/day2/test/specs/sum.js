(function() {
    'use strict';

    var assert = chai.assert;

    suite('math stuff', function() {

        test('ensure sum method exists', function() {
            // this is a "sanity check"
            assert.ok( window.math.sum, 'sum does exist' );
            assert.strictEqual( typeof(window.math.sum), 'function', 'sum is a function' );
        });

        test('basic sum works with array of numbers', function() {

            assert.strictEqual( window.math.sum([1, 2, 3]), 6, 'three numbers sum correctly' );
            assert.strictEqual( window.math.sum([1, 0, 3]), 4, 'including a zero still works' );
            assert.strictEqual( window.math.sum([5]), 5, 'works with one number' );

        });

        test('sum should work with non-numeric enrties', function() {

            assert.strictEqual( window.math.sum([ ]), 0, 'works with zero entries' );
            assert.strictEqual( window.math.sum([ 1, '5', 6 ]), 12, 'works with string entries' );
            assert.strictEqual( window.math.sum([ 1, 'a', 6 ]), 7, 'works with non-number string entries' );
            assert.strictEqual( window.math.sum([ 1, null, 6 ]), 7, 'works with null entries' );

        });

        test('sum should not error with non-array arguments', function() {

            assert.strictEqual( window.math.sum(), 0, 'works with no arguments' );
            assert.strictEqual( window.math.sum(null), 0, 'works with null' );
            assert.strictEqual( window.math.sum('foobar'), 0, 'works with string argument' );

        });

    });

})();
