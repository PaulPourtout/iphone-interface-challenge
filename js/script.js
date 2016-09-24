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



  // APPAREIL PHOTO WEBCAM

  // HEADER BOUTONS CAMERA
  $('#left-header').click(function(){
    $('.non').toggle();  
  });

  $('.hdr').click(function(){
    $('.hdr').toggle();
  });

  // Grab elements, create settings, etc.
  var video = document.getElementById('inner-camera');

  // Get access to the camera!
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    });
  }
  /* Legacy code below: getUserMedia
  else if(navigator.getUserMedia) { // Standard
  navigator.getUserMedia({ video: true }, function(stream) {
  video.src = stream;
  video.play();
}, errBack);
} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
navigator.webkitGetUserMedia({ video: true }, function(stream){
video.src = window.webkitURL.createObjectURL(stream);
video.play();
}, errBack);
} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
navigator.mozGetUserMedia({ video: true }, function(stream){
video.src = window.URL.createObjectURL(stream);
video.play();
}, errBack);
}
*/

// BOUTONS CAMERA
$('#picture-mode li').click(function(){
  $('.yellow-round').fadeOut();
  $('.yellow-round', this).fadeToggle();

});


// DATE PAGE LOCK

// INSTANT PRESENT
var now = new Date();

// JOURS DE LA SEMAINE
var weekday = new Array(7);
weekday[0]=  "Sunday";
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

// AFFICHAGE DATE PAGE LOCK
$('#date h1').text(now.getHours() + ":" + now.getMinutes());
$('#date p').text(day + " " + now.getDate() + " " + TodaysMonth);

// AFFICHAGE HEURE HEADER
$('.currentHour').text(now.getHours() + ":" + now.getMinutes());

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
  var musicplay = new Audio('../sound/Tool - Schism.mp3');
  var playing = false;
  if (playing === false) {
    musicplay.play();
    playing = true;
  }
  else {
    alert('gogog');
    $('.musicplay')[1].pause();
    playing = false;
  }

});

// MUSIC PLAYER

// $('.musicplay').trigger('.fa-pause');

// ANIMATION AIRPLAY
$('.container-airplay').click(function(){
  $(this).children().toggleClass('airplay-active');
});







// PAGE MESSAGES

$(window).keypress(function(e){
  if (e.wich == 13) {
    alert('okkkkk');
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
