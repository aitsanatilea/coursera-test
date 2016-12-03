(function() {
'use strict';

var shoppingList = [
  {
    name:"milk",
    quantity: "2"
  },
  {
    name:"croissants",
    quantity: "4"
  },
  {
    name:"coffee",
    quantity: "1"
  },
  {
    name:"sausage",
    quantity: "4"
  },
  {
    name:"rice",
    quantity: "1"
  },
  {
    name:"tomatoes",
    quantity: "10"
  },
  {
    name:"salad",
    quantity: "2"
  }
];


angular.module('ShoppingApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getItems();

  toBuy.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

}

//-----------------------------------------------
function ShoppingListCheckOffService(){
    var service = this;
    var items = shoppingList;
    var bought = [];

    service.addItem = function(itemName, itemQuantity){
      var item =
      {
        name: itemName,
        quantity: itemQuantity
      }
      items.push(item);
    };

    service.moveItem = function (itemIndex) {
      bought.push(items[itemIndex]);
      items.splice(itemIndex, 1);

    };

    // service.removeItem = function (itemIdex) {
    //   items.splice(itemIdex, 1);
    // };

    service.getItems = function () {
      return items;
    };

    service.getBoughtItems = function () {
      return bought;
    };
}

})();
