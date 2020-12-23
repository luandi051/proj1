$(function(){
    $('#top_popup button').click(function(){
     $('#top_popup').fadeOut(); 
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

})