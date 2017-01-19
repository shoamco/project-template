// JavaScript source code
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: "classes.html",
                controller: "ClassesCtrl"
            })

        .when('/classes',
            {
                templateUrl: "classes.html",
                controller: "ClassesCtrl"
            })
        // $routeparams in controller
        .when('/classes/:id',
            {
                templateUrl: "class.html",
                controller: "ClassCtrl"
            })
        .when('/classes/:id/students',
            {
                templateUrl: "students.html",
                controller: "ClassCtrl"
            })
        .when('/classes/:id/grades',
            {
                templateUrl: "grades.html",
                controller: "GradesCtrl"
            })
        .when("/classes/:classId/students/:studentId", {
            templateUrl: "student.html",
            controller: "StudentCtrl"
        })
        .when('/classes/:id/class',
            {
                templateUrl: "class.html",
                controller: "ClassCtrl"
            })
////////////////////////////////admin side
        .when('/admin',
            {
                templateUrl: "admin.html",
                controller: "AdminCtrl"
            })
        .when('/admin/allClasses',
            {
                templateUrl: "allClasses.html",
                controller: "AdminCtrl"
            })
        .when('/admin/allClasses/students',
            {
                templateUrl: "students.html",
                controller: "ClassCtrl"
            })
        .when('/admin/creatStudent',
            {
                templateUrl: "creatStudent.html",
                controller: "AdminCtrl"
            })
        .when('/admin/creatStaff',
            {
                templateUrl: "creatStaff.html",
                controller: "AdminCtrl"
            })
});
