
(function() {
    'use strict';


    var users = [
        { id: 1, name: 'Jordan', student: false },
        { id: 2, name: 'Samina', student: true },
        { id: 3, name: 'Russell', student: false },
        { id: 4, name: 'Stella', student: true },
        { id: 5, name: 'Austen', student: true }
    ];

    var i, l;
    var studentCount = 0;
    for (i=0, l=users.length; i<l; i++) {
        if (!users[i].student) {
            continue; // go to the next step of iteration
        }
        if (studentCount >= 2) {
            break; // completely escape the `for` loop
        }

        console.log( users[i] );
        studentCount++;
    }
    console.log(i);

    // var threeSecondsFromNow = Date.now() + 3000;
    // while (threeSecondsFromNow > Date.now()) {
    //     // keep executing WHILE the condition above is true
    //     console.log('waiting...');
    // }

    i = 10;
    users.forEach(function(user, i) {
        // "ternary" IF condition...
        var nextName = (users[i+1]) ? users[i+1].name : 'foobar';

        if (!user.student) {
            // continue; // not in a `for` loop so this won't work
            return; // stop this function execution, but the next time through the forEach loop, this function will execute again
        }

        console.log(user.name, nextName);
    });
    console.log(i); // this is a DIFFERENT `i` from inside the forEach function

    // $('.stuff').each(function(item, i) {  });

    var students = users.filter(function(user) {
        return user.student;
        // return true => keep this entry
        // return false => throw away this entry
    });
    console.log(students);

    // DO NOT USE THIS
    function clone(obj) {
        var newObj = {};
        Object.keys(obj).forEach(function(key) {
            newObj[key] = obj[key];
        });
        return newObj;
    }

    // map iterates over an array and creates a NEW array with the return values of the function
    var clonedUsers = users.map(function(user) {
        var clonedUser = clone(user);
        clonedUser.foo = 'bar';
        return clonedUser;
        // return 42; // would result in an array of 5 entires with: 42
    });
    console.log(clonedUsers, users);

    var words = [ 'hello', 'there', 'iron', 'yard', 'class' ];

    console.log( words.join( ' |' ) );
    console.log( words.slice(2, 4), words );
    console.log( words.splice(2, 2), words );

    var moreWords = words.concat( ['more', 'words'] );
    // or do this to change the original array:
    // words = words.concat( ['more', 'words'] );
    console.log( moreWords, words );

})();
