(function() {
  var app = angular.module('absenceList', []);
// the controller
  app.controller('StudentController', function() {
    this.studentList = students;
  });

// the model
  var students = [
    { name: 'Kim', absence: false },
    { name: 'Bjarne', absence: true },
    { name: 'Simon', absence: false },
  ];
})();
