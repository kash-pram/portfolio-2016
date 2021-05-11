pfApp.controller('aboutController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.aboutData = {};
    $scope.keypoints = [];
    /*$('#typed-Container').css("position","relative");
    $('#typed-Container').css("top","-1000px");
    $('#typed-Container').css("left","-1000px");*/

    if(angular.equals($rootScope.aboutData, {})){
        setInterval(function(){
            if(!angular.equals($rootScope.aboutData, {})){
                $(".loader").fadeOut("slow");
                $scope.aboutData = $rootScope.aboutData;
                $scope.keypoints = $rootScope.keypoints;
                clearInterval();
            }
        }, 100);
    } else {
        $(".loader").fadeOut("slow");
        $scope.aboutData = $rootScope.aboutData;
        $scope.keypoints = $rootScope.keypoints;
    }
    /*resetType();
    setTimeout(function(){
        $('#typed-Container').css("position","static");
        $('#typed-Container').css("top","0");
        $('#typed-Container').css("left","0");
        $('#typed-Container').fadeTo(0, 0);
        $('#typed-Container').fadeTo(2000, 1);
        setTimeout(type,500);
    },1500);*/
    
    $('#divCloseContent').fadeIn(1000);
}]);