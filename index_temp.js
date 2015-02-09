/**
 * Created by pilagod on 2/6/15.
 */
(function(){
    /* initialize */
    var x = Math.floor((Math.random() * 3));
    var main_pics = [];

    main_pics[0] = "./imgs/mainpic1-3.png";
    main_pics[1] = "./imgs/mainpic2-3.png";
    main_pics[2] = "./imgs/mainpic3-3.png";
//    main_pics[3] = "./imgs/mainpic4.png";
//    main_pics[4] = "./imgs/mainpic5.png";



//    test Block

    var img = new Image();
    img.src = "./header2.png";

    var logo = new canvasImage(100, 100, 61, 80, img);

    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    var canvasOffset=$("#canvas").offset();
    var offsetX=canvasOffset.left;
    var offsetY=canvasOffset.top;
    var canvasWidth=canvas.width;
    var canvasHeight=canvas.height;
    var isDragging=false;

    var arc = Math.PI/180;
    var rotateflag = 2;

    function handleMouseDown(e){
        canMouseX=parseInt(e.clientX-offsetX);
        canMouseY=parseInt(e.clientY-offsetY);
        if((canMouseX <= logo.x + logo.width) && (canMouseX >= logo.x) &&
            (canMouseY <= logo.y + logo.height) && (canMouseY >= logo.y))
            isDragging=true; // set the drag flag

    }

    function handleMouseUp(e){
        canMouseX=parseInt(e.clientX-offsetX);
        canMouseY=parseInt(e.clientY-offsetY);
        // clear the drag flag
        isDragging=false;
    }

    function handleMouseOut(e){
        canMouseX=parseInt(e.clientX-offsetX);
        canMouseY=parseInt(e.clientY-offsetY);
        // user has left the canvas, so clear the drag flag
        //isDragging=false;
    }

    function handleMouseMove(e){
        canMouseX=parseInt(e.clientX-offsetX);
        canMouseY=parseInt(e.clientY-offsetY);
        // if the drag flag is set, clear the canvas and draw the image
        if(isDragging){
            logo.x = canMouseX-logo.width/2;
            logo.y = canMouseY-logo.height/2;

            renderLogo();
        }
    }

    $("#canvas").mousedown(function(e){handleMouseDown(e);});
    $("#canvas").mousemove(function(e){handleMouseMove(e);});
    $("#canvas").mouseup(function(e){handleMouseUp(e);});
    $("#canvas").mouseout(function(e){handleMouseOut(e);});


    function canvasImage(x, y, w, h, img) {
        this.image = img;
        this.x = x;
        this.y = y;
        this.width = w | img.width;
        this.height = h | img.height;
        this.deg = 0;
        return this;
    }

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

    function setCanvasFullScreen(){
        var w = $(document).width();
        var h = $(document).height();

        $("#canvas").attr("width", w);
        $("#canvas").attr("height", h);

        canvasWidth = canvas.width;
        canvasHeight = canvas.height;
    }

    function renderLogo(){
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.save();
        ctx.translate(logo.x + logo.width/2, logo.y + logo.height/2);
        ctx.rotate(logo.deg * arc);
        ctx.drawImage(logo.image, -logo.width/2, -logo.height/2, logo.width, logo.height);
        ctx.restore();
    }

    function swingLogo(){
        if(logo.deg >= 20){
            rotateflag = -2
        }else if(logo.deg <= -20){
            rotateflag = 2;
        }

        logo.deg += rotateflag;

        renderLogo();
    }

    function setNtuPosition(){
        var mainpic_offsetX = $('#mainpic').offset().left - 16*5;
        var mainpic_offsetY = $('#mainpic').offset().top;
        $('#ntu').offset({top: mainpic_offsetY, left: mainpic_offsetX});
    }

    function init(){
        setIntervalAndExecute(changeMainPic, 1500);
        setCanvasFullScreen();
        setIntervalAndExecute(swingLogo, 50);
        setNtuPosition();

        $(window).bind("resize", function(){
            setCanvasFullScreen();
            renderLogo();
            setNtuPosition();
        });

        $('#message').removeClass('hide');
        $('#div_signup').removeClass('hide');
    }

    $(document).ready(function(){
        init();
    });


}());

