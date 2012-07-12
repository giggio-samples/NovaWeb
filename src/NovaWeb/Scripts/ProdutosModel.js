(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var ProdutosModel;
    return ProdutosModel = (function(_super) {

      __extends(ProdutosModel, _super);

      ProdutosModel.name = 'ProdutosModel';

      function ProdutosModel() {
        return ProdutosModel.__super__.constructor.apply(this, arguments);
      }

      ProdutosModel.prototype.urlRoot = "/api/Produtos";

      ProdutosModel.prototype.idAttribute = "Id";

      return ProdutosModel;

    })(Backbone.Model);
  });

}).call(this);
