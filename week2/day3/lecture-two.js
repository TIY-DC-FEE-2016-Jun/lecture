
console.log(name, age, boat, old);

var fullName = name;

console.log(fullName);

name = 'George';

console.log(fullName);

fullName = fullName + ' Kasper';

console.log(fullName);

age = age + 1;  //  -. /, *, %

console.log(age);

//           |   3  |  |  20  |
console.log( age / 12, age - 16 );

console.log( age % 15 ); // 6

console.log( 27 % 2, 14 % 2 );  // which is even which is odd? Modulo tells us!

/*
multi-line comment
 */

// console.log( samina );  ReferenceError  - no code below here will execute!!!

var stella;  // variable declaration

console.log( stella );  // undefined

stella = 'Ma'; // variable instantiation (first value assignment)

console.log( stella );
