(function() {

  define(function() {
    var BootstrapDeTeste;
    BootstrapDeTeste = (function() {

      BootstrapDeTeste.name = 'BootstrapDeTeste';

      function BootstrapDeTeste() {}

      BootstrapDeTeste.prototype.initialize = function(cb) {
        return require.config({
          paths: {
            jasmineRunner: '../ScriptTestes/JasmineRunner'
          }
        }, function() {
          if (cb) {
            return cb();
          }
        });
      };

      return BootstrapDeTeste;

    })();
    return new BootstrapDeTeste();
  });

}).call(this);
