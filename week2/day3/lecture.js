
// These are variable declarations and instantiations in one line...

// vars can only begin with a letter or $ or _
// vars cannot be keywords, or contain certain other characters

var name = 'Jordan';
var age = 35;
var old = true;
var boat = null;

// var foo-bar = 'hi!'; cannot use hyphens in names

// All of these are "global", and thus accessible in ALL js files


// Conditionals

if (true) {
    // this code will execute!
    console.log('true is true!!');
}

if (false) {
    console.log('this will not print out');
}

if (name === 'Jordan') {
    console.log('hello jordan!');
}

if (age == '35') {
    // simple equality coerces the values to be the same type before comparison
    console.log('you are 35!');
}
if (age === '35') {
    // simple equality coerces the values to be the same type before comparison
    console.log('you are not strictly 35');
}

if (name !== 'Samina') {  // simple inequality: !=
    console.log('you are not Samina');
}

if ( age > 18 ) {  //  <  <= >=
    console.log('you are an adult');
}
//        true          false
if ( boat === null && age > 50 ) {  // the entire condition is false if ANY piece is false
    console.log('why do not own a boat?');
}

//        true          false
if ( boat === null || age > 50 ) { // the entire condition is true if ANY piece is true
    console.log('|| works');
}

//      true          true ----> false <--- false
if ( age > 18 || (name === 'Jordan' && boat !== null) ) {
    console.log('entire group is true!!');
}

if (name === 'Samina') {
    console.log('hello!');
} else {
    console.log('hi!');
}

if (age < 5) {
    console.log('toddler');
} else if (age < 13) {
    console.log('adolescent');
} else if (age < 18) {
    console.log('teenager');
} else {
    // a final "else" is optional
    console.log('adult');
}

if ( null ) {
    console.log('am I true?');  // FALSE
}
if ( 35 ) {
    // true or false??
    // TRUE!
}

// Falsy: false, null, NaN, undefined, 0, ""
// Truthy: anything that is not falsy

// Functions

// keyword   name     argument list
function concatWords(text, secondPart) {
    // function body
    console.log('i\'m gonna concatentate');

    var newText = text + ' ' + secondPart;
    // "newText" is only accessible in this function!!

    // return value
    return newText;
}

console.log('about to execute concat function');

// function execution / calling the function
//                     | ------ newText value ------ |
//                     |         'hello world'       |
var concatenatedText = concatWords( 'hello', 'world' );
// var newText = ...

console.log( concatenatedText );

if ( typeof(newText) !== 'undefined' ) {
    console.log( newText );
}
