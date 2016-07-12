angular.module('quickShift.shifts', [])
.controller('ShiftController', function($scope, Shifts){
  $scope.shifts = Shifts.shifts;


  this.addShift = function(hours, rate){
    if(hours > 0 && rate > 0){
      Shifts.postShift(hours,rate)
        .then(function(data){
          console.log(data);
          $scope.shifts = data;
        })
      // Shifts.getShifts(hours, rate); 
    }
  }
})
