(function(module) {
  var adminController = {};

  adminController.index = function() {
    $('.tab-content').hide();
    $('#blog-stats').fadeIn();
  };

  module.adminController = adminController;
})(window);
