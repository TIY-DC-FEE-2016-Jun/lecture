(function(ns) {
    'use strict';

    window.words = ns = (ns || {});

    ns.count = function count(text) {
        var wordCount = {};

        text
            .toLowerCase()
            .replace(/\'s/g, ' ')
            .replace(/[^a-z\-\s]/g, ' ')
            .split(' ')
            .filter(function excludeSingles(word) {
                return word.length > 1;
            })
            .forEach(function doCount(word) {
                wordCount[word] = (wordCount[word]) ? wordCount[word]+1 : 1;
            });

        return wordCount;
    };


})(window.words);
