$(document).ready(function(){
  $('#menu-scroll-bot').hide();
  $('.filtre-modal').hide();
  $('#keyboard').hide();

  $("#panel-bottom-btn-container, #close-scroll-menu").click(function(){
    $("#menu-scroll-bot").slideToggle(500);
    $('.filtre-modal').fadeToggle(500);
  });

  $('.menu-icon').click(function(){
    $(this).toggleClass('active-icon');
  });

  $('.fa-play').click(function(){
    $(this).toggleClass('fa-pause');
    $('#music-title').children().toggleClass('hide');
  });

  $('.container-airplay').click(function(){
    $(this).children().toggleClass('airplay-active');
  });

  // APPARITION CLAVIER MESSAGES
  var keyboard = false;
  $('#writing-area').click(function(){
    keyboard = true;
    if (keyboard === true) {
      $('#keyboard').slideDown(500);
    }
    else {
      $('#keyboard').slideUp(500);
    }
  });

  $('#messages-sent').click(function(){
    keyboard = false;
    $('#keyboard').slideUp(500)
  });

  // TOUCHE MAJUSCULE
  $('.maj').click(function(){
      $('.letter').toggleClass('toUppercase');
  });
});
