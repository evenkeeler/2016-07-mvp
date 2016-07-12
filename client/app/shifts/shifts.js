angular.model('quickShift.shifts', [])
.controller('ShiftController', function($scope, Shifts){
  this.shifts = Shifts.shifts;
});