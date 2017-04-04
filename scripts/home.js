$(".project-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects-top").offset().top
    }, 1000);
});

$(".contact-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-top").offset().top
    }, 1000);
});

$(".about-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-top").offset().top
    }, 1000);
});


$(".dropdown").click(function(e){
    $(".dropdown-content").show();
     e.stopPropagation();
});

$(".dropdown").click(function(e){
    e.stopPropagation();
});

$(document).click(function(){
    $(".dropdown-content").hide();
});