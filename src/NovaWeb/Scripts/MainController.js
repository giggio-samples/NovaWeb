(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var MainController;
    MainController = (function(_super) {

      __extends(MainController, _super);

      MainController.name = 'MainController';

      function MainController() {
        return MainController.__super__.constructor.apply(this, arguments);
      }

      MainController.prototype.initialize = function(options) {
        try {
          return Backbone.history.start({
            root: "/"
          });
        } catch (erro) {
          return console.debug('erro history, nao iniciou com root = /');
        }
      };

      MainController.prototype.routes = {
        ":controller/:acao/*params": "defaultRoute",
        ":controller/*acao": "defaultRoute",
        ":controller": "defaultRoute"
      };

      MainController.prototype.defaultRoute = function(controller, acao, params) {
        var splitedParams;
        if (acao === void 0) {
          acao = "index";
        }
        if (params !== void 0) {
          splitedParams = params.split("/");
        }
        return require(["Controllers/" + controller + "Controller"], function(Controller) {
          var _ref;
          return (_ref = new Controller())[acao].apply(_ref, splitedParams);
        });
      };

      MainController.prototype.dispose = function() {
        return Backbone.history.stop();
      };

      return MainController;

    })(Backbone.Router);
    return new MainController();
  });

}).call(this);
