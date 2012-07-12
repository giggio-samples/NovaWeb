(function() {

  define(['jquery', 'underscore', 'backbone', 'Views/ProdutosView', 'MainController'], function($, _, Backbone, ProdutosView, mainController) {
    var ProdutosRouter;
    return ProdutosRouter = (function() {

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

      ProdutosRouter.prototype.buscaProduto = function(id) {
        return new ProdutosView().buscaProduto(id);
      };

      return ProdutosRouter;

    })();
  });

}).call(this);
