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
    this.err = null;
    this.loading = false;

    // Bind to todo actions
    this.bindActions(TodoActions);
  }

  fetchTodos() {
    this.loading = true;
    this.todos = [];
    this.err = null;
  }

  receiveTodos(todos) {
    this.loading = false;
    this.err = null;
    this.todos = todos;
  }

  receiveTodosError(err) {
    this.err = err;
    this.loading = false;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    let idx = _.findIndex(this.todos, { _id: id });
    this.todos.splice(idx, 1);
  }

  finishTodo(id) {
    let idx = _.findIndex(this.todos, { _id: id });
    this.todos[idx].complete = true;
  }

}

export default alt.createStore(TodoStore);
