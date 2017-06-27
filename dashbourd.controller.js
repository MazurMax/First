;(function () {
    angular
            .module("myApp")
            .controller("DashbordCtrl", function($scope){
                $scope.message = "Hello";

                $scope.todos = {
    current: ['Task1', 'Task2', 'Task3'],
    delayed: ['Task4', 'Task5', 'Task6', 'Task7', 'Task8'],
    urgent: ['Task9', 'Task10', 'Task11', 'Task12']
};
            });

            
})();

 