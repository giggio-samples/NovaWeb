(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'mustache', 'ProdutosModel', 'text!Views/Produtos.htm'], function($, _, Backbone, mustache, ProdutosModel, produtosTemplate) {
    var ProdutosView;
    return ProdutosView = (function(_super) {

      __extends(ProdutosView, _super);

      ProdutosView.name = 'ProdutosView';

      function ProdutosView() {
        ProdutosView.__super__.constructor.call(this, {
          el: "#conteudo"
        });
      }

      ProdutosView.prototype.render = function() {
        var html;
        html = Mustache.to_html(produtosTemplate, this.model.toJSON());
        return this.$el.html(html);
      };

      ProdutosView.prototype.renderError = function() {
        return this.$el.html('<p>Houve um erro ao carregar as informações do produto');
      };

      ProdutosView.prototype.buscaProduto = function(id) {
        var _this = this;
        this.model = new ProdutosModel({
          Id: id
        });
        return this.model.fetch({
          success: function() {
            return _this.render();
          },
          error: function() {
            return _this.renderError();
          }
        });
      };

      return ProdutosView;

    })(Backbone.View);
  });

}).call(this);
