$(document).ready(function(){

  // FULL SCREEN MODE
  var body = document.documentElement;
  if (body.requestFullscreen) {
    body.requestFullscreen();
  } else if (body.webkitrequestFullscreen) {
    body.webkitrequestFullscreen();
  } else if (body.mozrequestFullscreen) {
    body.mozrequestFullscreen();
  } else if (body.msrequestFullscreen) {
    body.msrequestFullscreen();
  }


  // MODAL PAGE LOCK
  $('#menu-scroll-bot').hide();
  $('.filtre-modal').hide();
  $('.btn-active').hide();
  // CLAVIER PAGE MESSAGE
  $('#keyboard').hide();
  $('.hdr-enabled').hide();
  $('.no-battery').hide();


  // APPAREIL PHOTO WEBCAM

  // HEADER BOUTONS CAMERA
  $('#left-header').click(function(){
    $('.non').toggle();
  });

  $('.hdr').click(function(){
    $('.hdr').toggle();
  });



  // BOUTONS CAMERA
  $('#picture-mode li').click(function(){
    $('.yellow-round').fadeOut();
    $('.yellow-round', this).fadeToggle();

  });


  // ======== DATE PAGE LOCK

  function updateClock() {
    // INSTANT PRESENT
    var now = new Date();

    // JOURS DE LA SEMAINE
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var day = weekday[now.getDay()];

    // MOIS DE L'ANNEE
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var TodaysMonth = month[now.getMonth()];

    // HEURES
    var heures = now.getHours();
    if (heures < 10) {
      heures = "0" + now.getHours();
    }

    // MINUTES
    var minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = "0" + now.getMinutes();
    }

    // SECONDES
    // var secondes = now.getSeconds();
    // if (secondes < 10) {
    //   secondes = "0" + now.getSeconds();
    // }

    // AFFICHAGE DATE PAGE LOCK
    $('#date h1').text(heures + ":" + minutes);
    $('#date p').text(day + " " + now.getDate() + " " + TodaysMonth);

    // AFFICHAGE HEURE HEADER
    $('.currentHour').text(heures + ":" + minutes);
    setTimeout(updateClock, 1000);
  }
  updateClock();

  //MODAL PAGE LOCK
  $("#panel-bottom-btn-container, #close-scroll-menu").click(function(){
    $("#menu-scroll-bot").slideToggle(500);
    $('.filtre-modal').fadeToggle(500);
  });

  // ANIMATION BOUTONS WIFI,ETC.
  $('#modal-plane').click(function(){
    $(this).toggleClass('active-icon');
    $('#header-plane').fadeToggle();
  });

  $('#modal-wifi').click(function(){
    $(this).toggleClass('active-icon');
    $('#header-wifi').toggle();
    $('#header-3g').toggle();
  });

  $('#modal-bluetooth').click(function(){
    $(this).toggleClass('active-icon');
    $('#header-bluetooth').fadeToggle();
  });

  $('#modal-moon').click(function(){
    $(this).toggleClass('active-icon');
    $('#header-moon').fadeToggle();
  });

  $('#modal-lock').click(function(){
    $(this).toggleClass('active-icon');
    $('#header-lock').fadeToggle();
  });

  $('.bottom-icon').click(function(){
    $(this).toggleClass('active-icon');
  });



  // REGLAGE LUMINOSITE
  $(document).on('input', '#luminosity-settings', function(){
    var luminosityValue = $('#luminosity-settings').val();

    $('.filtre-brightness').css('opacity',luminosityValue);
    console.log(luminosityValue);
  });


  // PLAY MUSIC
  $('.fa-play').click(function(){
    $(this).toggleClass('fa-pause');
    $('#music-title').children().toggleClass('hide');
  });

  // MUSIC PLAYER

  // $('.musicplay').trigger('.fa-pause');

  // ANIMATION AIRPLAY
  $('.container-airplay').click(function(){
    $(this).children().toggleClass('airplay-active');
  });




  // ====== PAGE MAIN
  // $('.app-container').draggable();

  // BATTERIE
  pourcentage = 100;


  var counting = setInterval(function(){

    if(pourcentage >= 0) {
      $('.charging-pourcentage').text(pourcentage + '%');
      pourcentage--;
      if (pourcentage == 0) {
        $('.no-battery').delay(1000).fadeIn("slow");
      }

      else if (pourcentage <= 5) {
        $('.charging-battery').html('<i class="fa fa-battery-empty"></i>').css({'color':'red'});
      }

      else if (pourcentage <= 25) {
        $('.charging-battery').html('<i class="fa fa-battery-quarter"></i>').css({'color':'yellow'});
      }

      else if (pourcentage <= 50) {
        $('.charging-battery').html('<i class="fa fa-battery-half"></i>');
      }

      else if (pourcentage <= 75) {
        $('.charging-battery').html('<i class="fa fa-battery-three-quarters"></i>');
      }

      else if (pourcentage <= 100) {
        $('.charging-battery').html('<i class="fa fa-battery-full"></i>');
      }

    }

    else {
      clearInterval(counting);
    }
  }, 1000);


  // PAGE MESSAGES

  var timePressed = 0;
  $('#writing-area').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);

    if(keycode == '13'){
      timePressed ++;
      var inputContent = $("input[name=writing-area]").val();
      $('#messages-sent').append('<div class="row message user"><p>'+ inputContent +'</p></div>');
      if (timePressed%3 == 0) {
        $('#messages-sent').append('<div class="row message other-user"><p>Yeah great !</p></div>');
      }

      else if (timePressed%5 == 0) {
        $('#messages-sent').append('<div class="row message other-user"><p>Cant talk to U right now. Call u later</p></div>');
      }
      $("input[name=writing-area]").val("");
      $('#messages-sent').animate({scrollTop: 5000}, 1200);
    }

  });


  // APPARITION CLAVIER MESSAGES
  //   var keyboard = false;
  //   $('#writing-area').click(function(){
  //     keyboard = true;
  //     if (keyboard === true) {
  //       $('#keyboard').slideDown(500);
  //     }
  //     else {
  //       $('#keyboard').slideUp(500);
  //     }
  //   });
  //
  //   $('#messages-sent').click(function(){
  //     keyboard = false;
  //     $('#keyboard').slideUp(500)
  //   });
  //
  //   // TOUCHE MAJUSCULE
  //   $('.maj').click(function(){
  //     $('.letter').toggleClass('toUppercase');
  //   });
});
