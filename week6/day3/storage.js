(function() {
    'use strict';


    function login() {
        var token, data;

        try {
            data = JSON.parse(localStorage.getItem('token'));
        } catch(err) { /* I don't care about this error */ }

        if (!data) {
            token = window.prompt('What is your token?');
            data = {
                token: token,
                name: 'Jordan'
            };
            localStorage.setItem('token', JSON.stringify(data));
        }

        console.log(data.token, data.name);
    }

    function logout() {
        localStorage.removeItem('token');
    }

    // on button click perhaps?
    login();

    document.querySelector('.logout')
        .addEventListener('click', logout);

})();
