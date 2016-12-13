(function (){
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',FoundItems);

  function FoundItems(){
    var ddo = {
    templateUrl: 'foundItemsList.html',
    scope: {
      found: '<',
      message: '<',
      onRemove: '&'
    },
    controller: NarrowItDownControllerDirective,
    controllerAs: 'ctrl',
    bindToController: true
  };
    return ddo;
  }

  function NarrowItDownControllerDirective() {
    var ctrl = this;

  }

  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var ctrl=this;
    ctrl.searchTerm="";
    ctrl.found=[];
    ctrl.message="";

    ctrl.getMatchedMenuItems = function(searchTerm){
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

      promise.then(function (response) {
        console.log("Response: ", response, response.length);
        ctrl.found=response;
        if (!ctrl.found.length || searchTerm.length<1){
          ctrl.message="Nothing is found";
        }else{
          ctrl.message="";
        }
      })
      .catch(function (error) {
        console.log("Error: ", error);
      })





    };

    ctrl.removeItem = function (itemIndex) {
      ctrl.found.splice(itemIndex, 1);
      if (!ctrl.found.length){
        ctrl.message="Nothing is found";
      }else{
        ctrl.message="";
      }
    };
  }


  MenuSearchService.$inject=['$http'];
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){

      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      })
      .then(function (result) {

        var foundItems = [];
        var fullList = result.data;

        if (searchTerm.length){
          for (var i=0; i<fullList.menu_items.length; i++){
            if (fullList.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
              foundItems.push(fullList.menu_items[i]);
            }
          }
        }

        return foundItems;
      });
    }
  }



})();
