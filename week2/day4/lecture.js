
//              constructor function
// var me = new Object();

// object literal notation (actually calls new Object() behind the scenes)
var me = {
    name: 'Jordan',
    age: 35,
    job: 'Instructor',
    happy: true,
    boat: null,
    pet: {
        type: 'dog',
        name: 'Vincent',
        age: 12
    }
};

console.log(  me  );
console.log(  me.name  );
console.log(  me.pet.type  );

if (me.age > 18) {
    console.log('you are an adult');
}

var cat = {
    name: 'Pod',
    gender: 'female',
    breed: 'tabby'
};

cat.color = 'orange';
cat.age = 13;

me.pet = cat;  // same as: me.pet = { name: 'Pod', breed: 'tabby', ... }

// both labels are still on that object value
console.log(me.pet, cat);

// remove the "cat" label from its object value...
cat = null;
// I can still access the object via `me.pet`

var x = 4; // point x at 4
var y = x; // point y at the same thing x points to
x = null;  // point x at nothing (but y still points to 4)
y = null;  // point y at nothing, 4 will be garbage collected

var anotherCat = {
    name: 'Pod',
    gender: 'female',
    breed: 'tabby',
    color: 'orange',
    age: 13
};

if (me.pet === anotherCat) {
    // will not work because these two object point to different places in computer memory
    console.log('samesies');
}

if (me.pet.name === anotherCat.name) {
    console.log('same name');
}

anotherCat.speak = function speak() {
    // inside the speak function, `this` will point to anotherCat
    console.log( 'my name is ' + this.name );
};

anotherCat.speak();
anotherCat.name = 'kitty';
anotherCat.speak();

anotherCat.getAttribute = function getAttribute( attribute ) {
    console.log( this[attribute] );
};

anotherCat.getAttribute( 'color' );
anotherCat.getAttribute( 'breed' );
anotherCat.getAttribute( 'weight' );

console.log( anotherCat['na' + 'me'] );


// Arrays!

// var list = new Array(5);

var fruit = ['apple', 'orange', 'banana'];

console.log( fruit, fruit[1] );
console.log( fruit.length );
console.log( fruit[ fruit.length - 1 ] ); // get last entry

var i;
//    first run;  keep going?  step
for (   i=1;       i<5;        i++ ) {  // i++ is the same as i = i + 1
    // keep going check happens here, each time through
    console.log(i);
} // step occurs here, each time through

console.log('final value of i:', i);

// for every fruit show me the friut's name
var l;
for ( i=0, l=fruit.length; i < l ; i++ ) {
    console.log( fruit[i] );
}

console.log('length?', l);

fruit[1] = 'cherry';
fruit[ fruit.length ] = 'orange';
// fruit[ 8 ] = 'avocado';  // be careful! this will create undefined entries for 4, 5, 6, 7
fruit.push('avocado');      // add to end
fruit.unshift('blueberry'); // add to beginning
// fruit.shift();           // remove a single entry from the beginning and return it
console.log( fruit.pop() ); // remove the last entry (and return it)
console.log( fruit );

console.log( fruit.indexOf('cherry') );
console.log( fruit.indexOf('pineapple') );
