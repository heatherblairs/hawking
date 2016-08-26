angular
   .module('hawking')
   .controller('HomeController', HomeController);

 function HomeController($scope, $state) {
   $scope.getResults = function () {
     $state.go('home.files', {
       file: $scope.fileResults
     });
   }
 }
