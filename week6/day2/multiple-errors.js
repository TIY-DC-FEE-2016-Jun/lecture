(function() {
    'use strict';

    /**
     * Sums an array of numbers
     * @param  {Array} nums  Numbers to sum
     * @return {Number}      total of all numbers
     * @throws {Error}       you get an Error if you don't give me any args
     * @throws {TypeError}   you get a TypeError if any array entry is NaN
     */
    function sum(nums) {
        if (!nums) {
            var err = new Error('Please provide an array to sum');
            throw err;
        }
        if (!nums.forEach) {
            // this still works!
            // but don't do it...
            throw 'oops, nums is not an array... and this is not an Error!';
        }

        var total = 0;
        nums.forEach(function sumNumbers(num) {
            var numValue = Number(num);
            if (!numValue) {
                console.log('PROBLEM!');
                // return; // only returns from INNER most function
                // throw exits the current function, and if not
                // immediately caught, keeps exiting outer functions
                var err = new TypeError('One of the numbers is not a number!');
                throw err;
            }
            total += numValue;
        });

        return total;
    }

    try {

        var total = sum([ 1, 'a', 5, 10 ]);
        console.log(total);

    } catch(foobar) {
        if (foobar instanceof TypeError) {
            console.warn('one of your entries was invalid');
        } else if (foobar instanceof Error) {
            console.log('wut.');
        } else {
            // ALWAYS have a catchall like this..
            // but handle it properly, of course... like inform the user
            console.error('bad stuff!');
        }
    }

    try {
        sum(45);
    } catch(e) {
        console.log(e, e instanceof Error);
    }


})();
