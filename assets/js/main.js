$(function()) {

  // Cashe the window object
  var $window = $(window);

  // Parallax background effect
  $('section[data-type="background"]').each(function()){

    var $bgobj = $(this); // assigning the object

    $(window).scroll(function()){

      // scroll the background at var speed
      // the yPos is a negative value because we're scrolling up.

      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      // Put together our final background position
      var coords = '50% '+ yPos + 'px';

      // Move the background
      $bgojb.css({ backgroundPosition: coords});

    };
  };
};
