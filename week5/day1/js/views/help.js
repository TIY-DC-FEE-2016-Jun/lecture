(function(ns) {
    'use strict';

    window.spa = ns = (ns || {});

    ns.help = {};
    ns.help.load = function initializeHelp(view) {
        if (view === '#help') {
            // check to see if we have already initialized help topics!!
            listHelpTopcs();
        } else {
            loadHelpTopic( view.split('/')[2] );
        }
    };

    function listHelpTopcs() {
        $('#help article').append(
            '<ul> \
            <li><a href=\'#help/topics/1\'>Topic 1</a></li> \
            <li><a href=\'#help/topics/2\'>Topic 2</a></li> \
            </ul>'
        );
    }

    /**
     * [loadHelpTopic description]
     * @param  {Number} topic  The topic to load
     */
    function loadHelpTopic( topic ) {
        $('#help article').append(
            '<h2>Topic ' +  topic + '</h2>'
        );

        // do an ajax call for the data!

        // Maybe when the user clicks on something here you want to take them to
        // another view?
        //
        // window.location.hash = '#view-2';
    }

})(window.spa);
