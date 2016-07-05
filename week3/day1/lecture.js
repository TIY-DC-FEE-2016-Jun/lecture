
var game = new Object();  // better way: {}

game.name = 'Asteroids';
game.round = 1;
game.highScore = 1000000;

// game['enemies-first'] = 'foo';
// game['enemies-last'] = 'bar';
// game['enemies-strongest'] = 'foo';
// function getEnemy(which) {
//     return game['enemies-' + which];
// }

// better way of doing this...
game.enemies = {
    first: 'foo',
    last: 'bar',
    strongest: 'foo'
};


// technically, this should be above in my code, not down here
game.findUser = function findUser( name ) {
    var i;
    for (i = 0; i < this['user-list'].length; i++) {
        if (this['user-list'][i].name === name) {
            return this['user-list'][i];
        }
    }
};

// technically, this should be above in my code, not down here
game.addUser = function addUser( name ) {
    if ( this['user-list'] === undefined ) {
        this['user-list'] = [];
    }

    this['user-list'].push({
        score: 0,
        name: name
    });
};

game.addUser('Jordan');
game.addUser('Samina');

// access the 'Jordan' user
game['user-list'][0]; // and then do whatever with it
// but how do we know to go to index 0?
var player = game.findUser('Jordan');


// print out each property (and its value) of my game
var allPropertyNames = Object.keys( game );  // an array of property NAMES
console.log(allPropertyNames);

for (i=0; i<allPropertyNames.length; i++) {
    // console.log( allPropertyNames[i], game[ allPropertyNames[i] ] );
    //                                      |----- round -----|
}

// var now = 'July 5, 2016';
// var now = '2016-07-05';

var now = new Date();

console.log( now );
console.log( now.getMonth(), now.getDate(), now.getDay() );

console.log( now.getTime() );

var backThen = new Date( now.getTime() - ( 1000 * 60 * 60 * 24 * 194 ) );

console.log(backThen);

console.log( Math.PI, Math.max( -236, 0 ) );

var velocity = 12;
velocity -= 15;
velocity = Math.max(velocity, 0);

var randomDecimal = Math.random();
console.log( randomDecimal, Math.ceil(randomDecimal * 3) );  // Math.floor()
