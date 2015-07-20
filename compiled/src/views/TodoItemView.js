// Generated by CoffeeScript 1.9.3
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.TodoItemView = (function(superClass) {
    extend(TodoItemView, superClass);

    function TodoItemView() {
      return TodoItemView.__super__.constructor.apply(this, arguments);
    }

    TodoItemView.prototype.tagName = 'li';

    TodoItemView.prototype.className = function() {
      if (this.model.get('completed')) {
        return "completed";
      }
    };

    TodoItemView.prototype.template = _.template('<input type="checkbox" class="checkbox"> <%= description %> <a href="#" class="delete">[remove]</a>');

    TodoItemView.prototype.initialize = function() {
      return this.render();
    };

    TodoItemView.prototype.render = function() {
      this.$el.children().detach();
      this.$el.html(this.template(this.model.attributes));
      return this;
    };

    TodoItemView.prototype.events = {
      'click .checkbox': 'toggle',
      'click a.delete': 'deleteItem'
    };

    TodoItemView.prototype.toggle = function() {
      return this.model.toggle();
    };

    TodoItemView.prototype.deleteItem = function() {
      return this.model.destroy();
    };

    return TodoItemView;

  })(Backbone.View);

}).call(this);

//# sourceMappingURL=TodoItemView.js.map