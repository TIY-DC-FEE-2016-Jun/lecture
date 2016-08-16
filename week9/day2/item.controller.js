(function() {
    'use strict';

    angular.module('lecture')
        .controller('ItemController', ItemController);

    function ItemController() {
        var that = this;

        this.title = 'Week 9 Day 2 (More Directives)';

        this.itemToBeDeleted = null;

        this.confirmDeletion = function(itemId) {
            that.itemToBeDeleted = itemId;
        };

        this.addItem = function() {
            console.log('item added!');
        };

        this.deleteItem = function() {
            console.log('item deleted');
        };

    }

})();
