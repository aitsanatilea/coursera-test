(function (){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })
    .state('categories',{
      url: '/categories',
      templateUrl:'src/templates/categories.template.html',
      controller:'CategoriesController as categCtrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items',{
      url:'/categories/{categoryShortName}',
      templateUrl:'src/templates/items.template.html',
      controller:'ItemsController as itemsCtrl',
      resolve:{
        categoryItems:['$stateParams', 'MenuDataService',
                    function($stateParams, MenuDataService){
                      return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                      .then(function (items){
                        return items;
                      });
                    }]
      }
    });
}

})();
