angular.module('quickShift.services',[])
.factory('Shifts', function($http){
  var shifts = [];

  var postShift = function(hours, rate){
    var req = {
      method: "POST",
      url: "/shifts",
      data: {hours: hours, rate: rate}
    };

    return $http(req).then(function(res){
      shifts = res.data;
      return shifts;
    });
  };

  var getShifts = function(){

    var req = {
      method: "GET",
      url: "/shifts",
    };

    $http(req).then(function(res){
      console.log(res.data);
    });
  };

  return {
    shifts: shifts,
    getShifts: getShifts,
    postShift: postShift
  }
});