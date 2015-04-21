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
    });

    //$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    //    e.preventDefault();
    //
    //    var target = this.hash,
    //        $target = $(target);
    //
    //    $('html, body').stop().animate({
    //        'scrollTop': $target.offset().top
    //    }, 900, 'swing', function () {
    //        window.location.hash = target;
    //    });
    //});
});