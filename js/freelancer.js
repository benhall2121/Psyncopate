// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        var slide_extra = 0;
        var this_href = $(this).attr("href");

//navbar-fixed-top
        if($('.navbar-shrink').length == 0){
          if(this_href == '#about'){
          	console.log("about");
            slide_extra = 0;
          } else if (this_href == '#services'){
          	console.log("services");
            slide_extra = 60;
          }  else if (this_href == '#philosophy'){
          	console.log("philosophy");
            slide_extra = 60;
          }  else if (this_href == '#bio'){
          	console.log("bio");
            slide_extra = 60;
          } 

        }

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-40+slide_extra
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})