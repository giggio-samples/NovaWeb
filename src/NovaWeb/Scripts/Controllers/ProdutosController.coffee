define ['jquery', 'underscore', 'backbone', 'Views/ProdutosView', 'MainController'], 
($, _, Backbone, ProdutosView, mainController) ->
    class ProdutosRouter
        #constructor: ->
            #mainController.route "produtos/:id","produtos",(id) ->
            #    produtosView.buscaProduto id
        index: -> console.log 'index'
        about: -> console.log 'about'
        get: (id)-> console.log "get #{id}"
        getMult: (id1, id2)-> console.log "get #{id1} #{id2}"
        buscaProduto: (id) -> new ProdutosView().buscaProduto id