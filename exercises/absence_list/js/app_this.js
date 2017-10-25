(function() {
  var app = angular.module('absenceList', []);

// the controller with $scope notation
  app.controller('StudentController', function() {
  this.studentList= students;
  console.log("inside controlelr "+ this.studentList);

    //console.log("hello "+students[0].name+ "Absence "+students[0].absence );
  });

  // the model
    var students = [
      { name: 'Kim', absence: false },
      { name: 'Bjarne', absence: true },
      { name: 'Simon', absence: false },
    ];
    console.log(students);

})();
