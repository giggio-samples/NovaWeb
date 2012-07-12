define [ 'jquery', 'underscore', 'backbone', 'mustache', 'ProdutosModel', 'text!Views/Produtos.htm'],
($, _, Backbone, mustache, ProdutosModel, produtosTemplate) ->
    class ProdutosView extends Backbone.View
        constructor: ->
            super(el: "#conteudo")
        render:->
            html = Mustache.to_html(produtosTemplate, @model.toJSON())
            @$el.html(html)
        renderError: ->
            @$el.html '<p>Houve um erro ao carregar as informações do produto'
        buscaProduto: (id) ->
            @model = new ProdutosModel({Id: id})
            @model.fetch
                success: => @render()
                error: => @renderError()