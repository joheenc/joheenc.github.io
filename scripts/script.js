$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           width: '+=10px',
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px',
           width: '-=10px'
       });
   });
});
