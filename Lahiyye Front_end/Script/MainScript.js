// $(document).scroll(function(){
//     if(window.pageYOffset >= 103){
//         $("header").addClass("headerFixed");
      
//     }else if(window.pageYOffset <= 1){
//         $("header").removeClass("headerFixed");
//     }
// })




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


  