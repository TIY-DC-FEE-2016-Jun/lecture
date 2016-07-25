(function() {
    'use strict';


    var now = new Date();
    console.log( now.getHours() );
    console.log( now.toString() );

    var obj = new Object();
    console.log( obj.toString() );

    // Constructor function
    function Atom(protons) {
        // console.log( this, protons );
        this.protons = protons;
    }

    var hydrogen = new Atom(1);
    console.log( hydrogen, hydrogen.protons );
    console.log( 'split?', hydrogen.split );

    // var hydrogen = {};
    // hydrogen.protons = 1;

    // what it means to be an Atom
    Atom.prototype.split = function() {
        return [
            new Atom(Math.floor(this.protons / 2)),
            new Atom(Math.floor(this.protons / 2))
        ];
    };

    console.log( 'split?', hydrogen.split );

    var helium = new Atom(2);
    console.log( helium, helium.protons );
    console.log( helium.split() );
    console.log( helium.__proto__ === Atom.prototype );
    console.log( helium.toString() );

    Atom.prototype.toString = function() {
        return 'I am an Atom with ' + this.protons + ' protons!';
    };

    console.log( helium.toString() );
    console.log( hydrogen.toString() );

    // creating a new property ont he prototype which ALL Atoms share
    Atom.prototype.state = 'solid';
    // but we can override ANY prototype value (or method) on specific objects
    helium.state = 'gas';

    console.log( helium );

    console.log( typeof(helium) ); // object
    console.log( helium instanceof Atom );
    console.log( helium instanceof Object );
    console.log(
        helium.__proto__.constructor.name,
        Object.getPrototypeOf(helium) === Atom.prototype
    );


})();
