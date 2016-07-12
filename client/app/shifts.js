angular.module('quickShift.shifts', [])
.controller('ShiftController', function($scope, Shifts){
  this.shifts = Shifts.shifts;


  this.addShift = function(hours, rate){
    if(hours > 0 && rate > 0){
      Shifts.shifts.push({hour: hours, rate: rate});
      console.log(Shifts.getShifts()); 
    }
  }
})
