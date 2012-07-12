define ->
    class BootstrapDeTeste
        initialize: (cb) ->
            require.config
                paths:
                    jasmineRunner: '../ScriptTestes/JasmineRunner'
            , -> cb() if cb
    new BootstrapDeTeste()