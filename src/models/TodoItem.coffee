class window.TodoItem extends Backbone.Model
  defaults:
    description: ''
    completed: false

  toggle: ->
    @set 'completed', !@get 'completed'