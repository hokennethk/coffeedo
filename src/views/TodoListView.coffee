class window.TodoListView extends Backbone.View

  tagName: 'ul'

  initialize: ->
    @collection.on 'add remove change', => @render()
    @render()

  render: ->
    @$el.children().detach()
    @$el.append @collection.map (todo) ->
      new TodoItemView(model: todo).$el
    @