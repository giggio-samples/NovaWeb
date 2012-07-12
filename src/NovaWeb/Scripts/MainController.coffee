define [ 'jquery', 'underscore', 'backbone'], 
($, _, Backbone) ->
    class MainController extends Backbone.Router                
        initialize: (options) ->
            try
                Backbone.history.start( root: "/")
            catch erro
                console.debug('erro history, nao iniciou com root = /')
        routes:
            ":controller/:acao/*params":"defaultRoute"
            ":controller/*acao":"defaultRoute"
            ":controller":"defaultRoute"
        defaultRoute: (controller, acao, params) ->
            acao = "index" if acao is undefined
            splitedParams = params.split("/") if params isnt undefined
            require ["Controllers/#{controller}Controller"], (Controller) -> new Controller()[acao](splitedParams...)
        dispose: ->
            Backbone.history.stop()
    new MainController()