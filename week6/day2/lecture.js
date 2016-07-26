(function lecture() {
    'use strict';


    function sum(nums) {
        if (!nums) {
            var err = new Error('something went wrong');
            throw err;
            // no other lines will execute past here!!
        }

        var total = 0;
        nums.forEach(function(num) {
            total += Number(num);
        });

        return total;
    }

    try {
        var total = sum([1,2,3]);
        console.log(total); // we WILL hit this line because there was no error
    } catch(theError) {
        console.warn(theError);
    } finally {
        console.info('I will ALWAYS execute');
    }


    try {

        var total = sum();
        console.log( 'the total:', total ); // line will never be hit

    } catch (theError) {
        // we need to handle this error properly
        // maybe tell the user what happened and how to fix it
        console.error(theError);
    } finally {
        console.info('I will ALWAYS execute');
    }

    console.log('this is good... always executes');

    try {
        sum();
    } catch(e) {
        // you don't technically have to handle it....
        // BUT YOU SHOULD!!
    }

    console.log('still good... always executes');

    sum();

    console.log('will this execute?');
    console.log( sum([3, 6, 9]) );


})();
