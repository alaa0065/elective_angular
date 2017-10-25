(function() {
  var app = angular.module('absenceList', []);

// the controller with $scope notation
  app.controller('StudentController', function($scope) {
    $scope.studentList= students;
        console.log("studentList "+ $scope.studentList);
        console.log("hello "+students[0].images[0]); //specific student property value

    //console.log("hello "+students[0].name+ "Absence "+students[0].absence );
  });

  // the model
    var students = [
      { name: 'Kim', absence: false , images:['image/kim1.jpg', 'image/kim2.jpg']},
      { name: 'Bjarne', absence: true },
      { name: 'Simon', absence: false },
    ];
    console.log(students);

})();
