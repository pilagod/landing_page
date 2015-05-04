/**
 * Created by pilagod on 4/21/15.
 */
$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 5){
            $('#navbar').css('background-color', "rgba(250, 190, 1, 0.8)");
        }else {
            $('#navbar').css('background-color', "transparent");
        }
    });

    $('#txt_email').keyup(function(e){
        if(e.keyCode == 13)
        {
            var email = $(this).val();
            if(email == ""){
                return
            }
            else{
                if (validateEmail(email)) {
                    $.ajax({
                        url: "https://docs.google.com/forms/d/1U6T9OdjdWTSVqwz2HGiih7cViRoNyq78_0Ed0hHlEjw/formResponse",
                        data: {"entry.761531259" : email},
                        type: "POST",
                        dataType: "jsonp",
                        statusCode: {
                            0: function (){
                                alert("Success");
                            },
                            200: function (){
                                alert("Success");
                            }
                        }
                    });
                }
                else {
                    alert("email type error");
                }
            };
        }
    });

    //$('#btn_interested').on('click', function() {
    //    $('#txt_email').removeClass('hide');
    //
    //    //    var email = $('#txt_email').val();
    //    //
    //    //    if (validateEmail(email)) {
    //    //        //Success Message
    //    //        $scope.message_type = 2;
    //    //        $scope.message_show = true;
    //    //        $timeout(function(){$scope.message_show = false;}, 5000);
    //    //        $.ajax({
    //    //            url: "https://docs.google.com/forms/d/1U6T9OdjdWTSVqwz2HGiih7cViRoNyq78_0Ed0hHlEjw/formResponse",
    //    //            data: {"entry.761531259" : email},
    //    //            type: "POST",
    //    //            dataType: "jsonp",
    //    //            statusCode: {
    //    //                0: function (){
    //    //                },
    //    //                200: function (){
    //    //
    //    //                }
    //    //            }
    //    //        });
    //    //    }
    //    //    else {
    //    //        //Error Message
    //    //        $scope.message_type = 1;
    //    //        $scope.message_show = true;
    //    //        $timeout(function () {
    //    //            $scope.message_show = false;
    //    //        }, 5000);
    //    //    }
    //    //});
    //
    //    //$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    //    //    e.preventDefault();
    //    //
    //    //    var target = this.hash,
    //    //        $target = $(target);
    //    //
    //    //    $('html, body').stop().animate({
    //    //        'scrollTop': $target.offset().top
    //    //    }, 900, 'swing', function () {
    //    //        window.location.hash = target;
    //    //    });
    //    //});
    //    });
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}