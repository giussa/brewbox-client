angular.module('brewbox.directives', [])
.directive('poll',function(){
  return {
    restrict: 'E', // E A C M
    templateUrl: 'templates/directives/poll.html',
    controller: 'pollCtrl',
  }
})
.controller('pollCtrl',function($scope) {
  // console.log($scope);

  $scope.voteOption = function(pollId){
    /* TODO: aggiungere chiamata per votazione */

    console.log(this.poll);
    console.log(this.option);

  }
})
.directive('pollOption',function(){
  return {
    restrict: 'E', // E A C M
    replace: true,
    templateUrl: 'templates/directives/poll-option.html',
  }
})
;
