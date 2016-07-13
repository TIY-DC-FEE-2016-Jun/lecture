(function(ns) {
    'use strict';

    window.lecture = ns = (ns || {});


    var xhr = ns.getOrgs('jakerella');
    console.log(xhr);

    xhr
        .done(function(data) {
            console.log('got data from other module');
        })
        .fail(function(xhr) {
            console.log('org data call failed');
        });


})(window.lecture);
