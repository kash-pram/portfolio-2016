pfApp.controller('skillsController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.skillsData = {};
    $scope.skillsData = $rootScope.skillsData;
    angular.element(document).ready(function(){
            var spanElems = document.getElementsByClassName('percentageFill');
            var tmpArray = [];
            for(var i=0; i<spanElems.length; i++){
                tmpArray = spanElems[i].className.split(" ");
                var tmpElem = document.createElement('span');
                tmpElem.style.width = tmpArray[1] +'%';
                tmpElem.style.height = spanElems[i].offsetHeight + 'px';
                tmpElem.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                tmpElem.className = "backGroundFill"
                spanElems[i].appendChild(tmpElem);
            }
        $(".loader").fadeOut("slow");
    });
    $('#divCloseContent').fadeIn(1000);
}]);