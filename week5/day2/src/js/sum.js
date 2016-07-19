(function(ns) {
    'use strict';

    window.math = ns = (ns || {});

    /**
     * Sum all of the numbers provided
     *
     * @param  {Array} nums  The numbers to sum up
     * @return {Number}      The sum
     */
    ns.sum = function sum(nums) {
        var theSum = 0;

        if ( nums && nums.forEach ) {
            nums.forEach(function addToSum(num) {
                var theNum = Number(num);
                if (theNum || theNum === 0) {
                    theSum += theNum;
                }
            });
        }

        return theSum;
    };


})(window.math);
