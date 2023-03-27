$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    const typed = new Typed(".typing", {
        strings: ["Designer", "Video Editor", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const typed2 = new Typed(".typing-2", {
        strings: ["Designer", "Video Editor", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

/*
Portfolio links
 */

function raklikkelt1() {
    window.open("https://www.petor.net/gallery.html", "_self");
}

function raklikkelt2() {
    window.open("https://www.youtube.com/playlist?list=PLQAn06-lB4_Up3cdv370gqk3zhdF2yKyb", "_blank");
}

function raklikkelt3() {
    window.open("https://play.google.com/store/apps/dev?id=4710023491977711195", "_blank");
}
function raklikkelt4() {
    window.open("https://github.com/peterpetor", "_blank");
}
function raklikkelt5() {
    window.open("https://www.etsy.com/shop/InstaGreetingCards", "_blank");
}
function raklikkelt6() {
    window.open("https://www.amazon.com/s?i=digital-text&rh=p_27%3APeter+Petor&s=relevancerank&text=Peter+Petor&ref=dp_byline_sr_ebooks_1", "_blank");
}
