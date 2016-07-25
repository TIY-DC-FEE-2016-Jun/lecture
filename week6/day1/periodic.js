(function() {
    'use strict';


    function Atom(protons) {
        this.protons = protons;
    }
    Atom.prototype.state = 'solid';
    Atom.prototype.split = function() {
        return [
            new Atom(Math.floor(this.protons / 2)),
            new Atom(Math.floor(this.protons / 2))
        ];
    };

    console.log( new Atom(2) );
    console.log( (new Atom(16)).split() );

    function Gas(protons) {
        Atom.call(this, protons);
    }
    console.log( Gas.prototype.constructor );
    // create an empty object whose protoype is the Atom protoype
    // then assign that blank canvas to our Gas prototype.
    Gas.prototype = Object.create(Atom.prototype);
    console.log( Gas.prototype.constructor );
    Gas.prototype.constructor = Gas;
    Gas.prototype.state = 'gas';


    var helium = new Gas(2);
    console.log( helium, helium.state );
    console.log( helium.split() );


    function foo(x, y) {
        console.log( this, x, y );
    }
    foo();
    foo.call( { bar: 1 }, 2, 3 );
    foo.apply( { bar: 1 }, [4, 5] );


})();
