/**
 * client/js/stores/TodoStore.js
 * Alt todo store
 */

import alt from '../alt';
import _ from 'lodash';
import TodoActions from '../actions/TodoActions';

class TodoStore {

  constructor() {
    // Setup state
    this.todos = [];
    this.loading = false;

    // Bind to todo actions
    this.bindActions(TodoActions);
  }

  fetchTodos() {
    this.loading = true;
    this.todos = [];
  }

  receiveTodos(todos) {
    this.loading = false;
    this.todos = todos;
  }

  todoAdded(todo) {
    this.todos.push(todo);
  }

  todoUpdated(todo) {
    let idx = _.findIndex(this.todos, { _id: todo._id });
    this.todos[idx] = todo;
  }

  todoRemoved(id) {
    let idx = _.findIndex(this.todos, { _id: id });
    this.todos.splice(idx, 1);
  }

}

export default alt.createStore(TodoStore);
