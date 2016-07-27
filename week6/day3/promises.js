(function() {
    'use strict';


    /**
     * Show a message
     *
     * @param  {String} msg the message
     * @return {Promise}
     */
    function showMessage(msg) {
        return new Promise(function(resolve, reject) {
            var p = document.createElement('p');
            p.innerText = msg;
            document.querySelector('.messages')
                .appendChild(p);

            setTimeout(function() {
                // after this timeout, allow call code to
                // determine what to do...
                resolve(p);
                // reject(new Error('NOOOOOO'));
            }, 2000);
        });
    }

    /**
     * Hide a tag
     * @param  {HTMLElement} tag  The tag to hide
     * @return {Promise}
     */
    function hideMessage(tag) {
        return new Promise(function(resolve, reject) {
            if (!tag || !tag.classList) {
                return reject(new TypeError('Gimme a tag!'));
                // return;
            }
            tag.classList.add('hide');
            setTimeout(function() {
                tag.parentNode.removeChild(tag);
                resolve(tag);
            }, 3000);
        });
    }

    // Somewhere else in our codebase...

    showMessage('Hello world!')
        // this "then" is from `showMessage()`
        .then(hideMessage)
        // this second "then" is from `hideMessage()`
        .then(function(tag) {
            console.log(tag);
            return showMessage('Another message!');
        })
        .then(function(tag) {
            console.log('after 2 sec timeout showing second message');
            return hideMessage(tag);
        })
        .then(function(tag) {
            console.log(tag);
        })
        // this "catch" will handle ANY rejection in ANY promise above
        .catch(function(err) {
            console.error(err);
        });


})();
