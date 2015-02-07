/**
 * Created by pilagod on 2/6/15.
 */
(function(){
    /* initialize */
    var x = Math.floor((Math.random() * 5));
    var main_pics = [];

    main_pics[0] = "./imgs/mainpic1.png";
    main_pics[1] = "./imgs/mainpic2.png";
    main_pics[2] = "./imgs/mainpic3.png";
    main_pics[3] = "./imgs/mainpic4.png";
    main_pics[4] = "./imgs/mainpic5.png";

    function changeMainPic(){
        var main_pic = document.getElementById("mainpic");
        main_pic.src = main_pics[x];
        x++;
        if(x >= main_pics.length){
            x = 0;
        }
    }

    function setIntervalAndExecute(fn, t) {
        fn();
        return(setInterval(fn, t));
    }

    setIntervalAndExecute(changeMainPic, 1500);
//
//    function test(){
//        $('#txt_email').removeClass('txt_email-before');
//        $('#txt_email').addClass('txt_email-after');
//        $('#div_btn_signup').removeClass('btn_signup-before');
//        $('#div_btn_signup').addClass('btn_signup-after');
//    }
//
//    $('#btn_signup').click(function(){
//        test();
//    })

}());

