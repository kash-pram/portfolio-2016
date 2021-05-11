pfApp.controller('MainCtrl', ['$scope', '$rootScope', 'getService', '$location', function($scope, $rootScope, getService, $location) {

    $scope.init = function(){
        $(".loader").fadeIn("slow");

        $rootScope.typeText = [
            "I'm Prakash Mariappan",
            "I'm an aspiring Web-Developer.",
            "This is my online portfolio.",
            "What would you like to know about me?"
        ];
        $rootScope.toViewList = {
            'about':'Interests',
            'skillset':'Skill-set',
            'projects':'Projects'
        };
        $rootScope.viewedList = {};
        $rootScope.contactsData = {};
        $rootScope.mailTo = "";
        $rootScope.projectsData = {};
        $rootScope.aboutData = {};
        $rootScope.keypoints = [];
        $rootScope.skillsData = {};
        
        $rootScope.pageState = 0;
    };
    $scope.init();

    getService.getData("data/contacts.data.json").then(function(resolved) {
        $rootScope.contactsData = resolved["social"];
        $rootScope.mailTo = resolved["mail"];
    });

    getService.getData("data/projects.data.json").then(function(resolved) {
        $rootScope.projectsData = resolved;
    });

    getService.getData("data/about.data.json").then(function(resolved) {
        $rootScope.aboutData = resolved["interests"];
        $rootScope.keypoints = resolved["keypoints"];
    });

    getService.getData("data/skills.data.json").then(function(resolved) {
        $rootScope.skillsData = resolved;
    });

    $scope.skipIntro = function (){
        skipTyped =  true;
        $('#divGreetings').hide();
        $('.typed-cursor').css('display','none');
        $rootScope.dynamicText = "What would you like to know about me?";
        $('#spSkip').hide();
        $(".viewBox").css('display','inline-block');;
        $(".divabout").fadeIn(1000);
        $(".divskillset").fadeIn(2000);
        $(".divprojects").fadeIn(3000);
    };

    $scope.closeClick = function(){
        $scope.currentIndex = window.location.pathname;
        
        // REPLACE URL TO BE MODIFIED IF THE GITHUB REPOSITORY IS MOVED
        // $scope.currentIndex = $scope.currentIndex.replace('app-portfolio-2017/','');
        $scope.currentIndex = $scope.currentIndex.replace('/','');

        if($scope.currentIndex in $rootScope.toViewList){
            $rootScope.viewedList[$scope.currentIndex] = $rootScope.toViewList[$scope.currentIndex];
            delete $rootScope.toViewList[$scope.currentIndex];
            $rootScope.pageState++;
        } else {
            // do nothing
        }

        /*if(Object.keys($rootScope.viewedList).length === 1){
            $rootScope.greetings = "";
            $rootScope.descript = "";
            $rootScope.quest = "Would you also like to view?";
        } else if (Object.keys($rootScope.viewedList).length === 3) {
            $rootScope.greetings = "Thanks for visiting!";
            $rootScope.quest = "reach me:  "+ $rootScope.mailTo;
        }*/
        
        $location.path('/');
        $('#divCloseContent').fadeOut();
    };
}]);