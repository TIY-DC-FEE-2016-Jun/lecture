(function(ns) {
    'use strict';

    window.lecture = ns = (ns || {});

    console.log('1');
    $.ajax({
        url: 'https://api.github.com/users/jakerella/repos',
        method: 'get',
        headers: {
            'Authorization': 'token [INSERT TOKEN VALUE HERE]'
        },
        dataType: 'json'
    }) // returns a (jQuery version of) XHR object
    .done(function handleRepoData(data) {
        console.log('2');
        // call some other function??
    })
    .fail(function handleRepoFail(xhr) {
        console.log('3');
    })
    .always(function logSomeStuff() {
        console.log('4');
    });

    console.log('5');

    $('.foo').on('click', function doStuff(e) {
        // This event handler is ASYNC!
        console.log('click');
    });

    console.log('6');

    var fruits = ['apple', 'orange', 'banana'];
    fruits.forEach(function handleFruit(fruit) {
        // This IS a callback, just not async
        console.log(fruit);
    });

    console.log('7');

    /**
     * Print a message after some time
     *
     * @param  {Number} length  How many seconds to wait
     * @param  {String} msg    The medsage to print
     * @return {void}
     */
    function timer(length, msg) {
        var rando = Math.random();

        setTimeout(function printMessage() {
            // Async callback
            console.log(msg + rando); // I can use rando here because of closures
        }, length * 1000);
    }

    console.log('8');

    timer(3, 'hello long timer!');
    timer(2, 'hello timer!');

    console.log('9');


    ns.getOrgs = function getOrgData(username) {
        if (!username) {
            // handle this ERROR
            return;
        }

        var xhr = $.ajax({
            url: 'https://api.github.com/users/' + username + '/orgs',
            method: 'get',
            headers: {
                'Authorization': 'token [INSERT TOKEN VALUE HERE]'
            },
            dataType: 'json'
        }); // returns the jQuery version of the XHR object
        // .done(function handleOrgData(data) {
        //     console.log('org data complete');
        //     // we CANNOT return ANYTHING from async callbacks
        //     // they do not "return" anywhere useful
        //     // return data;
        //
        // })
        // .fail(function handleOrgFail(xhr) {
        //
        // });

        return xhr;
    };

    function customTimer(time, cb) {
        if (typeof(cb) !== 'function') {
            // return an error? print somehting? I dunno...
            return;
        }
        // will execute your custom function after some time
        setTimeout(function() {
            cb();
        }, time * 1000);
    }

    customTimer(2, printTime); // printTime and "cb" will point to the same function

    function printTime() {
        console.log(Date.now());
    }

})(window.lecture);
