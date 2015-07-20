class window.TodoList extends Backbone.Collection
  model: TodoItem,

  initialize: ->
    console.log 'todoList initialized'

  completed: ->
    return @where(completed: true)

  remaining: ->
    return @where(completed: false)