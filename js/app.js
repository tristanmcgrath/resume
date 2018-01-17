$(document).ready(function() {
  setHeight();
});

function setHeight() {
  const screenHeight = window.innerHeight;
  $('.full-screen-image').css({"height": screenHeight+"px"});
  $('.overlay').css({"height": screenHeight+"px"});
  $('.welcome-container').css({"height": screenHeight+"px"});
  $('.full-screen-image a').css({"top": (screenHeight - 64)+"px"});
}

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

$('.see-more-documatix').click(function(){

    $('.first-p-documatix').css({"white-space": "normal"});
    $('.nth-p-documatix').css({"display": "block"});
    $('.see-more-documatix').css({"display": "none"});
    $('.see-less-documatix').css({"display": "block"});
});

$('.see-less-documatix').click(function(){

    $('.first-p-documatix').css({"white-space": "nowrap"});
    $('.nth-p-documatix').css({"display": "none"});
    $('.see-more-documatix').css({"display": "block"});
    $('.see-less-documatix').css({"display": "none"});
});

$('.see-more-qualtrics').click(function(){

    $('.first-p-qualtrics').css({"white-space": "normal"});
    $('.nth-p-qualtrics').css({"display": "block"});
    $('.see-more-qualtrics').css({"display": "none"});
    $('.see-less-qualtrics').css({"display": "block"});
});

$('.see-less-qualtrics').click(function(){

    $('.first-p-qualtrics').css({"white-space": "nowrap"});
    $('.nth-p-qualtrics').css({"display": "none"});
    $('.see-more-qualtrics').css({"display": "block"});
    $('.see-less-qualtrics').css({"display": "none"});
});
