(function(ns) {
    'use strict';

    window.spa = ns = (ns || {});

    window.addEventListener('hashchange', function() {
        ns.loadView(window.location.hash);
    });
    window.addEventListener('load', function() {
        ns.loadView( window.location.hash || '#help' );
    });

    ns.loadView = function loadView(view) {
        $('.view').hide();

        var viewBase = view.split('/')[0];
        var $view = $( viewBase );

        if ( !$view.length ) {
            $view = $( '#help' );
        }

        $view.show();
        console.log('loading', view);

        if (ns[viewBase.substr(1)] && ns[viewBase.substr(1)].load) {
            ns[viewBase.substr(1)].load( view );
        }
    };

})(window.spa);
