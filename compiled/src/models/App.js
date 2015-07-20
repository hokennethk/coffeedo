// Generated by CoffeeScript 1.9.3
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.App = (function(superClass) {
    extend(App, superClass);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      console.log('App initialized');
      return this.set('todoList', new TodoList());
    };

    App.prototype.addTodo = function(item) {
      return this.get('todoList').add(item);
    };

    App.prototype.removeTodo = function(item) {
      return this.get('todoList').remove(item);
    };

    App.prototype.clear = function() {
      return this.get('todoList').reset(null);
    };

    return App;

  })(Backbone.Model);

}).call(this);

//# sourceMappingURL=App.js.map