
(function(ns) {
    'use strict';

    window.foo = ns = ( ns || {} );

    console.log( window.foo.cards, ns.getRandomCard() );

})( window.foo );
