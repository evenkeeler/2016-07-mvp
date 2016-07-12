angular.model('quickShift.services',[])
.factory('Shifts', function($http){
  var shifts = [
    { hour: 8, rate: 15},
    { hour: 11, rate: 16},
    { hour: 7, rate: 13},
    { hour: 8, rate: 13}
  ];
});