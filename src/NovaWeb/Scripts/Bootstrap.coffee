class window.Bootstrap
    initialize: (baseUrl, cb) ->
        config =
            paths:
                jquery: 'jquery-1.7.2'
                underscore: 'underscore'
                backbone: 'backbone'
                mustache: 'mustache'
                jqueryui: 'jquery-ui-1.8.20'
            shim:
                'jqueryui':
                    deps: ['jquery']
                'underscore':
                    exports: -> window._ 
                'backbone':
                    deps: ['underscore', 'jquery']
                    exports: 'Backbone'

        config.baseUrl = baseUrl if baseUrl
        require.config config
        require [
                'Application' 
                'jquery'
                'jqueryui'
                'underscore' 
                'backbone'
                'mustache'
        ], (App, $, _, Backbone, mustache) ->            
            cb() if cb