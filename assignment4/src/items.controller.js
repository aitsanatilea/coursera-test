(function (){
  'use strict';

  angular.module('data')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['categoryItems'];
  function ItemsController(categoryItems){
    var itemsCtrl = this;
    itemsCtrl.items = categoryItems.menu_items;
  }
})();
