(function() {
    'use strict';


    function Animal(name) {
        // if (!(this instanceof Dog)) { // this is too restrictive
        if (this.__proto__ === Animal.prototype) {
            throw new TypeError('You can\'t create me!');
        }

        this.name = name;
    }

    function Dog(name) {
        Animal.call(this, name);
    }
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;

    function Bird(name) {
        Animal.call(this, name);
    }
    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;


    var bob = new Dog('Bob');
    console.log(bob);

    var bill = new Bird('Bill');
    console.log(bill);

    // I should not be able to do this!
    var stew = new Animal('Stew');
    console.log(stew);


})();
