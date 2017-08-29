// Google map coding
  var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.516059, lng: -0.127088},
        zoom: 13,
      });
      marker = new google.maps.Marker({
        position: {lat: 51.516059, lng: -0.127088},
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP
      });
      marker.addListener('click', toggleBounce);
    }

  function toggleBounce() {
    if (marker.getAnimation() !==null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

//this lets jQuery know to wait until the document is ready before trying to run the code inside the function.
$(document).ready(function(){

  var $root = $('html, body');
      $('.section-link, .button, .navbar .navbar-collapse .navbar-nav a, .navbar .navbar-header .navbar-brand a, .footer .row .col-md-4 .navbar-brand a').click(function() {
        var href = $.attr(this, 'href');
          $root.animate({
            scrollTop: $(href).offset().top
          }, 500, function () {
            window.location.hash = href;
        });
      return false;
    });

  // Stellar
  $.stellar({
    horizontalOffset: 0,
    verticalOffset: 10
  });


}); // End of $(document).ready