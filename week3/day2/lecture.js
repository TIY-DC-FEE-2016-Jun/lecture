
(function() {

    var x = 10;
    var z = 5;

    var a = z; // a points to the SAME 5 as z

    // function declaration
    // an implicit declaration: var add = ...
    function add(x, y) {
        // implicitly, this is happening...
        // var x = 2; var y = 5;
        z = 10;
        return x + y + z;
    }

    console.log( add(2, 5), z );

    console.log(add.name);

    // function expression
    // no implicit declaration, so foo does not exist as a variable
    var bar = function foo() {};

    console.log(bar.name, typeof(foo));

    var sum = add; // "sum" points to the same object as "add"

    console.log( sum(3, 10), typeof(sum), typeof(add) );

    /**
     * Says hello to the provided function
     * @param  {Function} fn The function to call with the greeting
     * @return {void}
     */
    function makeGreeting(fn) {
        // var fn = alert;
        fn('Hello!');
    }

    // makeGreeting( alert );  // commented out because alerts are annoying

    var count = 0;
    /**
     * Gets a new logger function
     * @return {Function} Returns the NEW function to use as a logger
     */
    function getLogger() {
        count++;
        return function logger(msg) {
            // Count will be whatever it was when this function was created
            console.log('Logger ' + count + ':', msg);
        };
    }

    var theFunction = getLogger();
    console.log(theFunction.name);
    theFunction('hello world');
    getLogger()('wut'); // creates a new logger function and immediately executes it
    theFunction('goodbye world');


    // variadic behavior
    function sumAll() {
        // console.log(this); // points to the default context: window
        console.log( arguments, arguments[0] );

        var i;
        var sum = 0;
        for (i=0; i<arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }

    console.log( sumAll(2, 5, 6, 9) );
    console.log( sumAll(9, 4) );

    // Recursivity: a function which calls itself

    function factorial(num) {
        if ((num - 1) > 0) {
            return factorial(num - 1) * num;
        } else {
            return 1;
        }
    }

    console.log( factorial(4), factorial(10) );


    // Variable scope and hoisting
    function weird(x) {
        // implicit declaration: var x
        // var foo;  // essentially this is what happens
        var bat;
        console.log(x, typeof(foo), bat); // 13, undefined

        console.log(typeof(wut), typeof(other));

        var foo = 'bar';

        // the ENTIRE function (declaration and instantiation) are housted
        function wut() { }

        var other = function stuff() {};
    }
    weird(13);

    function product() {
        // instead of assuming variable hoisting by the browser,
        // let's just do it ourselves to be clear to any future
        // developer exactly what vars we're using in here
        var i, theProduct;

        console.log( theProduct );

        theProduct = 1;
        for (i=0; i<arguments.length; i++) {
            theProduct *= arguments[i];
        }
        return theProduct;
    }

    var outerPrefix;
    // Closures
    function greeting(prefix) {
        outerPrefix = prefix;
        var createTime = Date.now();
        return function doGreeting(name) {
            // functions "remember" the scope in which they were created
            console.log( prefix + name, outerPrefix, createTime );
        };
    }

    var hiGreeting = greeting('Hi ');
    hiGreeting('Jordan');
    var i,o;for(i=0;i<100000;i++){o={};} // slow things down arbitrarily to get a different timestamp
    greeting('Hello ')('Stella');
    for(i=0;i<100000;i++){o={};} // slow things down arbitrarily to get a different timestamp
    hiGreeting('Samina');


    // Strings
    var name = 'Jordan wuz here.';   // Obejct version: new String('Jordan')
    console.log( name.length, name.toUpperCase() );
    console.log( name ); // uppercase? mixed? lower?
    console.log( name.split(' '), name.split('') );
    console.log( name.indexOf('wuz') );
    console.log( name.substr( name.indexOf('wuz') , 3) );
    console.log( name.indexOf('foo') );

})();
// IIFE: immediately invokable function expression

(function() {
    console.log('another IIFE! count?', typeof(count));
})();
