(function() {

  define(function() {
    var jasmineEnv, trivialReporter;
    jasmineEnv = jasmine.getEnv();
    trivialReporter = new jasmine.TrivialReporter();
    jasmineEnv.addReporter(trivialReporter);
    window.console_reporter = new jasmine.ConsoleReporter();
    jasmineEnv.addReporter(console_reporter);
    jasmineEnv.specFilter = function(spec) {
      return trivialReporter.specFilter(spec);
    };
    return jasmineEnv.execute();
  });

}).call(this);
