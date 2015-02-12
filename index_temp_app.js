/**
 * Created by pilagod on 2/7/15.
 */
var index = angular.module('Index', []);

//index.directive('focus', function($timeout) {
//        return {
//            scope : {
//                trigger : '@focus'
//            },
//            link : function(scope, element) {
//                scope.$watch('trigger', function(value) {
//                    if (value === "true") {
//                        $timeout(function() {
//                            element[0].focus();
//                        });
//                    }
//                });
//            }
//        };
//    }
//);

index.controller('IndexCtrl', ['$scope', '$location', '$timeout', function($scope, $location, $timeout){
    $scope.signup_show = false;

    $scope.message_type = 0; // 1: "Error", 2: "Success"
    $scope.message_show = false;

    $scope.postContactToGoogle = function(){

        var email = $('#txt_email').val();

        if (validateEmail(email)) {
            $.ajax({
                url: "https://docs.google.com/forms/d/1U6T9OdjdWTSVqwz2HGiih7cViRoNyq78_0Ed0hHlEjw/formResponse",
                data: {"entry.761531259" : email},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function (){
                        //Success Message
                        $scope.message_type = 2;
                        $scope.message_show = true;
                        $timeout(function(){$scope.message_show = false;}, 5000);
                    },
                    200: function (){
                        //Success Message
                        $scope.message_type = 2;
                        $scope.message_show = true;
                        $timeout(function(){$scope.message_show = false;}, 5000);
                    }
                }
            });
        }
        else {
            //Error Message
            $scope.message_type = 1;
            $scope.message_show = true;
            $timeout(function(){$scope.message_show = false;}, 5000);
        }
    };

    $scope.registrationOnClick = function(){
        $scope.signup_show = true;
        $('#btn_signup').attr('value', 'Sign Up');
        setTimeout(function(){$('#txt_email').focus();}, 700);

        $scope.signupOnClick = $scope.postContactToGoogle;
    };

    $scope.signupOnClick = $scope.registrationOnClick;


}]);

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}