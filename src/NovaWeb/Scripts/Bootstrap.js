(function() {

  window.Bootstrap = (function() {

    Bootstrap.name = 'Bootstrap';

    function Bootstrap() {}

    Bootstrap.prototype.initialize = function(baseUrl, cb) {
      var config;
      config = {
        paths: {
          jquery: 'jquery-1.7.2',
          underscore: 'underscore',
          backbone: 'backbone',
          mustache: 'mustache',
          jqueryui: 'jquery-ui-1.8.20'
        },
        shim: {
          'jqueryui': {
            deps: ['jquery']
          },
          'underscore': {
            exports: function() {
              return window._;
            }
          },
          'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
          }
        }
      };
      if (baseUrl) {
        config.baseUrl = baseUrl;
      }
      require.config(config);
      return require(['Application', 'jquery', 'jqueryui', 'underscore', 'backbone', 'mustache'], function(App, $, _, Backbone, mustache) {
        if (cb) {
          return cb();
        }
      });
    };

    return Bootstrap;

  })();

}).call(this);
