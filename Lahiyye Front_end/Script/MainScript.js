// When scroll header is fixed
$(document).scroll(function(){
    $("header").css({"opacity":0});
    if(window.pageYOffset >= 103){
        $("header").addClass("headerFixed");
        $("header").css({"opacity":1});

    }else if(window.pageYOffset <= 1){
        $("header").removeClass("headerFixed");
        $("header").css({"opacity":1});
    }

})



//for slider sec Index
$(document).ready(function() {
    document.body.style.overflow = "none";
    $("#devformcontent").css({"display":"none"});
    setTimeout(function(){
        $('.preloader').fadeOut('slow');
        document.body.style.overflowY = "scroll";
        $("#devformcontent").css({"display":"block"})

    },500)
    
    setTimeout(function(){
        $(".mainSlider h1").addClass("animated fadeInDown");

    },500)
    setTimeout(function(){
        $(".mainSlider p").addClass("animated fadeIn");
        $(".mainSlider hr").addClass("animated fadeIn");
        $(".mainSlider a").addClass("animated fadeIn");
    },500)
});


//For main slider
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});


$('#particle').particleground({
    dotColor: '#000000',
    lineColor: '#101820ff'
});


//For navbar

$("#resNavMenu").click(function(){
    $(".resNavLayout").css({
        "display":"block"
    });
    document.body.style.overflow = "hidden";
})

$(".closeNav").click(function(){
    $(".resNavLayout").css({
        "display":"none"
    });
    document.body.style.overflowY = "scroll";
})


  