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
    var typed = new Typed(".typing", {
        strings: ["Web Designer", "Video Editor", "Web Developer", "Graphic Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Designer", "Video Editor", "Web Developer", "Graphic Designer"],
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
    window.open("https://www.petor.net/video.html", "_self");
}

function raklikkelt3() {
    window.open("https://play.google.com/store/apps/dev?id=4710023491977711195", "_blank");
}

function raklikkelt4() {
    window.open("https://apps.apple.com/us/developer/peter-petor/id1168436849#see-all/i-phonei-pad-apps", "_blank");
}

function raklikkelt5() {
    window.open("https://www.petor.net/#home", "_self");
}
function raklikkelt6() {
    window.open("https://www.petor.net/#about", "_self");
}
