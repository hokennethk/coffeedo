class window.App extends Backbone.Model
  initialize: ->
    console.log 'App initialized'
    @set 'todoList', new TodoList()

  addTodo: (item) ->
    @get('todoList').add(item)

  removeTodo: (item) ->
    @get('todoList').remove(item)

  clear: ->
    @get('todoList').reset(null)