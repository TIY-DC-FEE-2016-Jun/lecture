
(function($) {

    console.log( $('.hobbies li') );

    // add event listener to EACH li at page load time
    // $('.hobbies li').on('click', makeAwesome);
    // add ONE event listener to a container and DELEGATE
    $('.hobbies ul').on('click', 'li', makeAwesome);

    function makeAwesome(e) {
        console.log(e);
        // `this` is a core JS HTMLElement --- NOT jQuery
        // this === e.target
        // this.style.fontWeight = 'bold';
        // this.style.fontStyle = 'italic';

        // wrap the core JS HTMLElement in jQuery
        $(this).css({
            fontWeight: 'bold',  // we should really do this by adding a class
            fontStyle: 'italic'  // ... (same as above)
        });
    }

    // jQuery DOM traversal
    $('.about-me')
        .addClass('text-block')
        .attr({
            id: 'foobar',
            'data-type': 'text'
        })
        .find('p')
            .addClass('intro')
            .find('a[href^="https"]')
                .addClass('secure');

    console.log($('.hobbies ul').length); // as a debugginh mechanism...
    $('.hobbies ul')
        .append('<li class=\'foobar\'>video games</li>')
        .prepend('<li>reading</li>');

    $('<p>')  // create a detached node/element
        .addClass('copyright')
        .text('Copyright Jordan Kasper')
        .appendTo('footer');  // now add it to our DOM

    var anchorTags = $('a').remove();
    console.log( anchorTags );
    anchorTags.appendTo('footer');


})(window.jQuery);
