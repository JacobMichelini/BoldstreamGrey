(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

    var options = [
        {selector: '#bartrigger', offset: 250, callback: '$(".seethru").velocity({ backgroundColor: "#000", backgroundColorAlpha: 0.85}, {duration: 400}); ' }
      ];
      Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space