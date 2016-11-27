(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
  $scope.name="";
  $scope.myMessage = "";
  $scope.countItems = function (){
      var re = /\s*,\s*/;
      var myList=($scope.name.split(re));//removing spaces from the items
      var myLength=0;
      //console.log(myList);
      //console.log(myList.length);
      for (var i=0; i<myList.length;i++){
        if (myList[i]!=""){myLength++}
      }
      //console.log(myLength);
      if (myLength>3){
        $scope.myMessage="Too much!";
      }
      else if(myLength==0){
        $scope.myMessage = "Please enter the items!"
      }else{
        $scope.myMessage = "Enjoy!";
      }
    }
  };
}
)();
