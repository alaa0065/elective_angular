(function() {
  var app = angular.module('absenceList', []);
  
// the controller with $scope notation
  app.controller('StudentController', function($scope) {
    $scope.studentList = students;

    //console.log("hello "+students[0].name);
  });

// the model
  var students = [
    { name: 'Kim', absence: false },
    { name: 'Bjarne', absence: true },
    { name: 'Simon', absence: false },
  ];
})();
