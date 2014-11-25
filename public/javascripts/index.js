(function() {
  $(document).ready( function() {
    var topOfMainBody = $('#main-body').offset().top;
    $(window).scroll(function() {
      if($(window).scrollTop() > topOfMainBody) {
        // Once user scrolls passed banner, add background to navbar
        $('#navbar').css('background-color', 'white');
      } else {
        $('#navbar').css('background-color', 'transparent');
      }
    });
  });
}());
