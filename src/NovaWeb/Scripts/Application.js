(function() {

  define(['MainController'], function(MainController) {
    var app;
    window.Application = (function() {

      Application.name = 'Application';

      function Application() {}

      return Application;

    })();
    return app = new window.Application();
  });

}).call(this);
