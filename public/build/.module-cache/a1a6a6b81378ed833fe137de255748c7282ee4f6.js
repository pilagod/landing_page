/**
 * Created by pilagod on 4/21/15.
 */
$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 5){
            $('#navbar').css('background-color', "rgba(241, 139, 0, 0.7)");
        }else {
            $('#navbar').css('background-color', "transparent");
        }
    })
});