 	$(document).ready(function(){
  $('.main')
      .transition('fade in');
  $('.ui.dropdown')
      .dropdown();

  var $dimmer = $('.ui.page.dimmer');

  window.dimmerMessage = function(title, subtitle, callback, timeout) {
    $dimmer.find('h1').html(title);
    $dimmer.find('h2').html(subtitle);
    $dimmer
      .dimmer('show');
    setTimeout(function(){
      $dimmer.dimmer('hide');
      callback();
    }, timeout)
  }

});


 	$(document).ready(function() {

particlesJS.load("particles-js", 'assets/particles-config.json');
  $('#main')
    .transition('fade up in', 2000);

  $("#next").click(function() {
    $('html, body').animate({
      scrollTop: $("#info").offset().top
    }, 1000);
  });

  $('#c')
    .click(function(){
      location.href = '/6361746d6974'
    })

});