/**
 * Created by pilagod on 4/21/15.
 */
$(document).ready(function(){
    console.log("ready");
    $(window).on('scroll', function(){
        console.log($(window).scrollTop());
    })
});