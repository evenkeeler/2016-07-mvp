angular.module('quickShift.services',[])
.factory('Shifts', function($http){
  var shifts = [
    { hour: 8, rate: 15},
    { hour: 11, rate: 16},
    { hour: 7, rate: 13},
    { hour: 8, rate: 13}
  ];

  var postShift = function(shift){
    $http.get('127.0.1.0');
  };

  var getShifts = function(){
    console.log('getting link');
    return $http.get('/shifts').then(function(res){
      debugger;
      console.log(res);
      return resp.data;
    });
  };

  return {
    shifts: shifts,
    getShifts: getShifts
  }
});