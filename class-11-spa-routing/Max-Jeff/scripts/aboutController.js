(function(module) {
  var aboutController = {};

  // **DONE**: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = function() {
    $('#blog-stats').hide();
    $('#articles').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
