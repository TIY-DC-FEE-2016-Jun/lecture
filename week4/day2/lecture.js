(function() {
    'use strict';


    // var req = new XMLHttpRequest();
    // // req.headers
    // req.onreadystatechange = function(xhrRes) {
    //     if (xhrRes.state >= 4) {
    //         if (xhrRes.status < 300) {
    //             // it was successful
    //         }
    //     }
    // };
    // req.open('some url');
    // req.send('some data/body');

    $('.do-stuff').on('click', function() {

        $.ajax({
            url: 'https://api.github.com/users/jakerella',
            method: 'GET',  // this would be the default if I did not include it
            headers: {
                'Content-Type': 'application/json'  // what data we are sending TO the server
            },
            dataType: 'json',  // what data/content type we're expecting back from the server
            data: { foo: 'bar' } // jQuery will convert this into a JSON string for us

            // success: function() {},  // we'll use the "Promise" methods below instead
            // error: function() {},
            // complete: function() {}
        })
        .done(function(data) {
            console.log( data );
            console.log( data.login );
            console.log( JSON.stringify(data).toUpperCase() );
            $('.results').text( JSON.stringify(data) );  // make a string out of a JavaScript object
        })
        .fail(function(xhr) {
            handleAjaxError(xhr, $('.results'));
        })
        .always(function() {
            console.log('all done'); // this will ALWAYS print out (success or failure)
        });

    });

    var user = "{ \"name\": \"Jordan\" }";
    console.log( user );
    console.log( JSON.parse(user) );  // create an object out of a JSON string
    // console.log( JSON.parse("asdf:sdfsd") ); // NOT valid JSON string, so we get a SyntaxError

    // What is JSON?
    // JavaScript Object Notation
    // See example.json


    function handleAjaxError(xhr, elem) {
        console.log( xhr );
        if (xhr.status === 404) {
            elem.text('Nobody home');
        } else {
            elem.text('DANGER!');
        }
    }

    


})();
