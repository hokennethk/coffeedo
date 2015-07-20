class window.AppView extends Backbone.View
  el: $ '#todoapp'

  initialize: ->
    console.log 'AppView initialized'
    @input = @$ '#new-todo'
    @todoList = @model.get('todoList')
    @render()

  render: ->
    @$el.append(new TodoListView(collection: @todoList).$el)

  events:
    'keypress #new-todo' : 'createOnEnter'

  createOnEnter: (e) ->
    if e.keyCode isnt 13 then return
    if not @input.val() then return
    @todoList.add(description: @input.val())
    console.log @todoList
    @input.val ''


