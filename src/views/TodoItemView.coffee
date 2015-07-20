class window.TodoItemView extends Backbone.View

  tagName: 'li'

  className: ->
    if @model.get('completed') then "completed"

  template: _.template('<input type="checkbox" class="checkbox">
    <%= description %>
    <a href="#" class="delete">[remove]</a>')

  initialize: ->
    @render()

  render: ->
    @$el.children().detach()
    @$el.html @template @model.attributes
    @

  events:
    'click .checkbox' : 'toggle'
    'click a.delete'  : 'deleteItem'

  toggle: ->
    @model.toggle()

  deleteItem: ->
    @model.destroy()