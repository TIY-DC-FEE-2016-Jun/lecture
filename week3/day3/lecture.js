
(function(ns) {
    'use strict';

    window.foo = ns = ( ns || {} );

    ns.cards = [ 'A', '2', '3' ];
    ns.getRandomCard = function getRandomCard() {
        return ns.cards[ Math.floor(Math.random() * ns.cards.length) ];
    };

    // DOM Interaction

    // var someElem = window.document.getElemenById('someId');
    var hobbyContainer = document.querySelector('.hobbies');
    console.log( hobbyContainer.childNodes, hobbyContainer.innerHTML );
    var hobbies = hobbyContainer.querySelectorAll('li');
    console.log( hobbies ); // a NodeList
    console.log( hobbies[0].innerText );
    console.log( hobbies[0].parentNode );
    console.log( hobbies[0].childNodes[0].textContent );
    hobbies[0].innerText = 'Jumping';

    console.log( document.querySelector('a').getAttribute('href') );

    hobbies[0].addEventListener('click', changeColor);
    hobbies[1].addEventListener('click', changeColor);

    function changeColor(eventObj) {
        console.log(eventObj);
        eventObj.target.style.color = 'red';

        // Add a new hobby as well...
        var elem = document.createElement('li');
        elem.innerText = 'NEW HOBBY';
        elem.setAttribute('data-type', 'new hobby');
        elem.classList.add('new-hobby');
        eventObj.target.parentNode.appendChild(elem);
    }


})( window.foo );
