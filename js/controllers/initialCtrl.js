
pfApp.controller('initialController', ['$scope', '$rootScope', function($scope, $rootScope) {

    if($rootScope.pageState === 0){
        $('#divGreetings').fadeIn(3000, function(){
            $('#divGreetings').fadeOut(2000, function(){
                if(skipTyped === false){
                    $('#spSkip').hide();
                    $("#spDynamicText").typed({
                        strings: $rootScope.typeText,
                        typeSpeed: 150,
                        callback: function(){
                            displayBoxes(500,0,1);
                        }
                    });
                }
            });
        });
    } else if($rootScope.pageState === 1){
        $('#spSkip').hide();
        $rootScope.dynamicText = "";
        $("#spDynamicText").typed({
            strings: ["Would you also like to view?"],
            startDelay: 500,
            typeSpeed: 150,
            callback: function(){
                displayBoxes(500,1,1);
            }
        });
    } else if ($rootScope.pageState === 2){
        $('#spSkip').hide();
        $('#spDynamicText').hide();
        $rootScope.dynamicText = "Also, kindly take a look at...";
        $('#spDynamicText').fadeIn(2000);
        displayBoxes(500,1,1);
    } else if ($rootScope.pageState === 3){
        $('#spSkip').hide();
        $rootScope.dynamicText = "";
        $('#divGreetings').text("Thanks for visiting...");
        $('#divGreetings').fadeIn(2000, function(){
            $('#divGreetings').fadeOut(1000, function(){
                displayBoxes(500,1,1);
                $("#spDynamicText").typed({
                    strings: ["contact: <b>"+$rootScope.mailTo+"</b>"],
                    startDelay: 500,
                    typeSpeed: 150,
                    callback: function(){
                        $('#divToView').html("<div id='divResume' class='fontMont'>Resume:<button id='btnDwnRes' class='btn btn-default'>Download</button></div>");
                        var resumeUrl="https://www.dropbox.com/s/irfva9mgufdoliv/PM_PRAKASH_web_4yrs.doc?dl=1";
                        $("#btnDwnRes").off().on('click', function(){
                            window.open(resumeUrl, '_blank');
                        });
                    }
                });
            });
        });
    }
    $(".loader").fadeOut("slow");
}]);