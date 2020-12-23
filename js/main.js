$(function(){
    $('#top_popup button').click(function(){
     $('#top_popup').stop().slideUp(); 
    })
    var slide;
     slide = setInterval(function(){
       $('#sec2 .font .notice_list > li:first-child').animate({
           'margin-top':'-50px'},600,function(){
            $('.font  .notice_list').append($('.font  .notice_list > li:first-child'));
            $('.font  .notice_list > li:last-child').css('margin-top',0);
           });
     },1000);
     var slide;
     slide = setInterval(function(){
       $('#sec2 .font .notice_list2 > li:first-child').animate({
           'margin-top':'-50px'},600,function(){
            $('.font  .notice_list2').append($('.font  .notice_list2 > li:first-child'));
            $('.font  .notice_list2 > li:last-child').css('margin-top',0);
           });
     },1000);

     $(window).scroll(function(){
      if($(document).scrollTop() >= 500 && $(document).scrollTop() <= $('#footer') .offset().top - 1000) { $( '#quickmenu').fadeIn(200);
    }else{$('#quickmenu').fadeOut(200);}  
    })

    $('.bbb').click(function(){     
      $('#nav_pop').fadeIn();
    })
    $('#nav_pop .nav_close').click(function(){
    $('#nav_pop').fadeOut();
     })
})