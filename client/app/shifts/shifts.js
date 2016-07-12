angular.model('quickShift.shifts', [])
.controller('ShiftController', function($scope, Shifts){
  this.shifts = Shifts.shifts;
})
.controller("ShiftDirector", function($scope, $location){
  this.render = function(){
    $location.path('/shifts');
  }
})