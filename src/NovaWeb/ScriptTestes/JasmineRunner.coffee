define ->
    jasmineEnv = jasmine.getEnv()
    trivialReporter = new jasmine.TrivialReporter()
    jasmineEnv.addReporter(trivialReporter)
    window.console_reporter = new jasmine.ConsoleReporter()
    jasmineEnv.addReporter(console_reporter)
    jasmineEnv.specFilter = (spec) ->
        trivialReporter.specFilter(spec)
    jasmineEnv.execute()