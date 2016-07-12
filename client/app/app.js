angular.module('quickShift',[
  'quickShift.services',
  'quickShift.shifts',
  'ui.router'
])
.config(function($stateProvider, $httpProvider) {
  $stateProvider
    .state('employees', {
      url: '/employees',
      templateUrl: 'app/employees/employees.html',
      controller: 'EmployeeController'
    })
    .state('shifts',{
      url: '/shifts',
      templateUrl: 'app/shifts/shifts.html',
      controller: 'ShiftController'
    });

});
