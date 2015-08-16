var myApp = angular.module('myApp', []);

myApp.controller("pageController", ['$scope', '$http', function($scope, $http){
    $scope.note = {};

    $scope.getData = function(){
        //GET
        $http.get('/api/data').then(function(data){
            $scope.names = data.data;
            console.log("here is scope.names:", $scope.names);
            console.log(data);
        });
    };

    $scope.updateMessage = function(note){
        //POST
        console.log(note);
        $http.post('/api/data', note).then($scope.getData());
        //$scope.message = $scope.name
    };

    $scope.removeTask = function(data){
        console.log(data.id);
        $http.delete('/api/data/' + data.id, data).then($scope.getData());
    };


    //$scope.getData();
}]);


//var taskData;
//
//$(document).ready(function(){
//    $("#taskForm").submit(function(event){
//        event.preventDefault();
//        var formData = $("#taskForm").serialize();
//        formData += "&complete=false";
//        $.ajax({
//            type: "POST",
//            data: formData,
//            url: "/api/todos",
//            success: function(data){
//                taskData = data;
//                appendTasks();
//            }
//        });
//    });
//
//    $("#someContainer").on('click', '.task p', function(){
//        var complete;
//        complete = !$(this).parent().data("complete");
//        var text = $(this).text().replace(" ", "+");
//        var putData = "text=" + text + "&complete=" + complete;
//
//        $.ajax({
//            type: "PUT",
//            data: putData,
//            url: "/api/todos/" + $(this).parent().data("id"),
//            success: function(data){
//                taskData = data;
//                appendTasks();
//            }
//        });
//    });
//
//    $("#someContainer").on('click', '.delete', function(){
//        var id = $(this).parent().data("id");
//        $.ajax({
//            type: "DELETE",
//            url: "/api/todos/" + id,
//            success: function(data){
//                taskData = data;
//                appendTasks();
//            }
//        });
//    });
//
//    $(".get").on('click', function(){
//        getData();
//    });
//
//    getData();
//});
//
//function getData(){
//    $.ajax({
//        type: "GET",
//        url: "/api/todos",
//        success: function(data){
//            taskData = data;
//            appendTasks();
//        }
//    });
//}
//
//function appendTasks(){
//    $("#someContainer").empty();
//
//    for(var i = 0 ; i < taskData.length ; i ++){
//        $("#someContainer").append("<div class='task well col-md-3'></div>");
//        var $el = $("#someContainer").children().last();
//        $el.data("id", taskData[i].id);
//        $el.data("complete", taskData[i].complete);
//        if(taskData[i].complete){
//            $el.css("text-decoration", "line-through");
//        }
//
//        $el.append("<p class='lead'>" + taskData[i].text + "</p>");
//        $el.append("<button class='btn btn-danger delete'>X</button>");
//    }
//}
