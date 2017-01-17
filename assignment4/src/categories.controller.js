(function (){
  'use strict';

  angular.module('data')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories){
    var catList = this;
    catList.items = categories;
  }
})();
