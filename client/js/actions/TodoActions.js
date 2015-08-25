/**
 * client/js/actions/TodoActions.js
 * Actions for manipulating Todos
 */

import alt from '../alt';
import request from 'superagent';
import Api from '../util/Api';

class TodoActions {
  constructor() {
    // Generate actions to allow store to bind to async results
    this.generateActions('receiveTodos', 'receiveTodosError');
    this.generateActions('todoAdded', 'todoAddedError');
    this.generateActions('todoUpdated', 'todoUpdatedError');
    this.generateActions('todoRemoved', 'todoRemovedError');
  }

  /**
   * Fetch list of all todos
   */
  fetchTodos() {
    // Finish current
    this.dispatch();

    Api.fetchTodos((err, res) => {
      if (err) return this.actions.receiveTodosError(err);
      this.actions.receiveTodos(res.body);
    });
  }

  /**
   * Create new todo
   */
  createTodo(todo) {
    // Finish current
    this.dispatch();

    Api.createTodo(todo, (err, res) => {
      if (err) return this.actions.todoAddedError(err);
      this.actions.todoAdded(res.body);
    });
  }

  /**
   * Toggle todo completion status
   */
  toggleTodo(id) {
    this.dispatch();

    Api.toggleTodo(id, (err, res) => {
      if (err) return this.actions.todoUpdatedError(err);
      this.actions.todoUpdated(res.body);
    });
  }

  /**
   * Remove todo
   */
  removeTodo(id) {
    this.dispatch();

    Api.removeTodo(id, (err, res) => {
      if (err) return this.actions.todoRemovedError(err);
      this.actions.todoRemoved(id);
    });
  }
}

export default alt.createActions(TodoActions);
