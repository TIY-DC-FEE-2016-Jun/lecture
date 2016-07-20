(function(ns) {
    'use strict';

    window.gh = ns = (ns || {});

    $('.user-input').on('submit', function(e) {
        e.preventDefault();
        getRepoList( $('[name="gh-user"]').val() )
            .done(displayRepos)
            .fail(handleAjaxFail);
    });

    ns.getRepoList = function getRepoList(username) {
        if (!username) {
            var def = $.Deferred();
            def.reject({ status: 400, responseText: 'No username provided' });
            return def.promise();
        }

        return $.ajax({
            url: 'https://api.github.com/users/' + username + '/repos',
            method: 'get',
            dataType: 'json'
        });
    };

    ns.displayRepos = function displayRepos(repos) {
        repos.forEach(function(repo) {
            $('.results').append('<li>' + repo.name + '</li>');
        });
        notifyUser('All repos listed!');
    };

    function notifyUser(msg) {
        console.log(msg);
    }

    function handleAjaxFail(xhr) {
        console.log(xhr);
    }

})(window.gh);
