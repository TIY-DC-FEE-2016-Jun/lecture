(function() {
    'use strict';


    var fruit = [ 'apple', 'orange', 'banana' ];

    console.log( fruit.toString() );

    // Highly discourage you from changing native object methods
    Array.prototype.toString = function() {
        return '[' + this.join('; ') + ']';
    };
    // instead, implement a new method!
    Array.prototype.toBracketString = function() {
        return '[' + this.join('; ') + ']';
    };

    console.log( fruit.toString() );


    // This doesn't work, but is generally how we might
    // extend a built in object for other purposes
    // 
    // function BetterDate(dateLikeThing) {
    //     return Date.call(this, dateLikeThing);
    // }
    // BetterDate.prototype = Object.create(Date.prototype);
    // BetterDate.prototype.constructor = BetterDate;
    // BetterDate.toString = function() {
    //     return (this.getMonth() + 1) + '/' + this.getDate();
    // };
    //
    // console.log( (new BetterDate()) );

})();
