angular.module('quickShift.shifts', [])
.controller('ShiftController', function($scope, Shifts){
  this.shifts = Shifts.shifts;


  this.addShift = function(hours, rate){
    if(hours > 0 && rate > 0){
      this.shifts = Shifts.postShift(hours,rate);
      // Shifts.getShifts(hours, rate); 
    }
  }
})
