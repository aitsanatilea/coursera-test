(function (){
  'use strict';

  angular.module('data')
  .service('MenuDataService',MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService($http, ApiBasePath){
    var service=this;

    service.getAllCategories = function(){
      return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      })
      .then(function (result) {
        return result.data;
      });
    };

    service.getItemsForCategory = function(categoryShortName){
      return $http({
        method: "GET",
        url: (ApiBasePath+"/menu_items.json")
      })
      .then(function (result) {
        var fullList = result.data;
        var categoryItems = [];

        for (var i=0; i<fullList.menu_items.length; i++){
          var patt = new RegExp(categoryShortName.toLowerCase()+"[0-9]+", "i");
          if (fullList.menu_items[i].short_name.toLowerCase().search(patt)==0){
            categoryItems.push(fullList.menu_items[i]);
          }
        }
        return categoryItems;
      });
    };
  }
})();
