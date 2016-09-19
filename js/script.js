$(document).ready(function(){
  $('#menu-scroll-bot').hide();
  $('.filtre-modal').hide();

  $("#panel-bottom-btn-container, #close-scroll-menu").click(function(){
    $("#menu-scroll-bot").slideToggle(500);
    $('.filtre-modal').fadeToggle(500);
  });

  $('.menu-icon').click(function(){
    $(this).toggleClass('active-icon');
  });

  $('.fa-play').click(function(){
    $(this).toggleClass('fa-pause');
  });

});
