pfApp.controller('projectsController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.projectsData = {};
    $scope.projectsData = $rootScope.projectsData;
    $scope.is_array = function (variable) {
        return Object.prototype.toString.call(variable) === '[object Array]' ? true : false;
    };
    
    $(".loader").fadeOut("slow");
    $('#divCloseContent').fadeIn(1000);
}]);