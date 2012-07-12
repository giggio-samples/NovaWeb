define [
    'jquery',
    'underscore',
    'backbone',
], ($, _, Backbone) ->
    class ProdutosModel extends Backbone.Model
        urlRoot:"/api/Produtos"
        idAttribute:"Id"