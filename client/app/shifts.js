angular.module('quickShift.shifts', [])
.controller('ShiftController', function($scope, Shifts){
  $scope.shifts = Shifts.shifts;
  $scope.moneyMade = Shifts.shifts.reduce(function(passed, object){
    passed += object.hours*object.rate;
  }, 0)


  this.addShift = function(hours, rate){
    if(hours > 0 && rate > 0){
      Shifts.postShift(hours,rate)
        .then(function(data){
          console.log('shifts.js: ' + data);
          $scope.shifts = data;
        });
      // Shifts.getShifts(hours, rate); 
    }
  }
})
