(function(module) {
  var articlesController = {};

  // Done: Create the `articles` table when the controller first loads, with the code that used to be in index.html:
  Article.createTable();
  // Done: Complete this function below that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Done: Also be sure to hide all the main section elements, and reveal the #articles section:
  articlesController.index = function() {
    Article.fetchAll(articleView.initIndexPage);
    $('#about').hide();
    $('#articles').fadeIn();
  };

  module.articlesController = articlesController;
})(window);
