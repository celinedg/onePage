$(document).ready(function(){
    $(window).on("resize", function(){
    if($(window).width() <= 768){
         $('main section:first-of-type').find('br').remove();
    }}).resize();
});