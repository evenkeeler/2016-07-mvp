angular.module('quickShift.shifts', [])
.controller('ShiftController', function($scope, Shifts){
  this.shifts = Shifts.shifts;


  this.addShift = function(hours, rate){
    Shifts.shifts.push({hours, rate});
    console.log(Shifts.getShifts());
  }
})
