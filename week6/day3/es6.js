(function() {
    'use strict';

    const MAX_NUMS = 10; // by convention we use all caps, but not required
    // MAX_NUMS++; // this will fail

    const user = {};
    user.name = 'Jordan'; // this WILL work, because the object reference did not change
    // user = new Employee(); // this will fail, because it's an entirely new object

    function sum(nums) {
        var total = 0;

        // x does not exist here
        if (nums.length > MAX_NUMS) {
            let x = 5;
        }
        // x does not exist here

        nums.forEach(function(num) {
            total += num;
        });
    }

    let x = 5;
    let y = 6;

    let numbers = {
        x,
        y
        // x: x,
        // y: y
    };

    let user = { firstName: 'Jordan', lastName: 'Kasper' };
    let { firstName: f, lastName: l } = user;
    console.log(f); // Jordan
    console.log(l); // Kasper

    function createUser(name = 'George') { // default values for args
        return { name, dob: new Date() };
    }

    function layEggs(...names) {
        console.log(names.length); // will always be an array
    }
    layEggs('bob');
    layEggs('bob', 'mike');
    layEggs('bob', 'mike', 'ariel');

})();
