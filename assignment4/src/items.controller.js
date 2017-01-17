(function (){
  'use strict';

  angular.module('data')
  .controller('ItemsController', ItemsController);

  // ItemsController.$inject = ['MenuDataService'];
  // function ItemsController(MenuDataService){
  ItemsController.$inject = ['categoryItems'];
  function ItemsController(categoryItems){
    var itemsCtrl = this;
    itemsCtrl.items = categoryItems;

    // itemsList.getItemsForCategory = function(categoryShortName){
    //   var promise = MenuDataService.getItemsForCategory(categoryShortName)
    //
    //   promise.then(function(result){
    //     itemsList.items = result;
    //   })
    //   .catch(function (error) {
    //     console.log("Error: ", error);
    //   });
    // };

  }
})();
