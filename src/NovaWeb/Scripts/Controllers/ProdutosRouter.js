(function() {

  define(['jquery', 'underscore', 'backbone', 'ProdutosView', 'MainController'], function($, _, Backbone, ProdutosView, mainController) {
    var ProdutosRouter;
    ProdutosRouter = (function() {

      ProdutosRouter.name = 'ProdutosRouter';

      function ProdutosRouter() {}

      ProdutosRouter.prototype.index = function() {
        return console.log('index');
      };

      ProdutosRouter.prototype.about = function() {
        return console.log('about');
      };

      ProdutosRouter.prototype.get = function(id) {
        return console.log("get " + id);
      };

      ProdutosRouter.prototype.getMult = function(id1, id2) {
        return console.log("get " + id1 + " " + id2);
      };

      return ProdutosRouter;

    })();
    return new ProdutosRouter();
  });

}).call(this);
