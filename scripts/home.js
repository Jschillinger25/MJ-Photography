$(document).ready(function () {
  $("li").click(function () {
    $('li > ul').not($(this).children("ul").toggle()).hide();
  });
});

$(document).on('click',function (e) {
  footerUl = $('.top-ul:first li');
  if (!footerUl.is(e.target) 
      && footerUl.has(e.target).length === 0){
    footerUl.children('ul').hide();
  }
});

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


/*$(".dropdown").click(function(e){
    e.stopPropagation();
});

$(document).click(function(){
    $(".dropdown-content").hide();
});*/