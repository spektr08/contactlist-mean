var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
   
   var refresh = function(){
   $http.get('/contactlist').then(function (success){
       $scope.contactlist = success.data;
       $scope.contact = {};
   });
   };
   
   
   refresh();
   
   $scope.addContact = function(){
       //console.log($scope.contact);
       $http.post('/contactlist',$scope.contact).then(function(success){
           console.log(success);
           refresh();
       });
   }
   
   $scope.remove = function(id){
      /// console.log(id);
       $http.delete('/contactlist/'+id).then(function(success){
           refresh();
       });
   }
   
   
   $scope.edit = function(id){
       $http.get('/contactlist/'+id).then(function(success){           
           $scope.contact = success.data;
       });
   }
   
   $scope.update = function(){
       $http.put('/contactlist/'+$scope.contact._id,$scope.contact).then(function(success){
            refresh();
       });
   };
   
   $scope.clear = function(){
       $scope.contact = {};
   }
    
}]);