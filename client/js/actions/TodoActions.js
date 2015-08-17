/**
 * client/js/actions/TodoActions.js
 * Actions for manipulating Todos
 */

import alt from '../alt';
import request from 'superagent';

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

    // Request data
    request
      .get('/api/todos')
      .set('Accept', 'application/json')
      .end((err, res) => {
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

    // Create new todo
    request
      .post('/api/todos')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(todo)
      .end((err, res) => {
        if (err) return this.actions.todoAddedError(err);
        this.actions.todoAdded(res.body);
      });
  }

  /**
   * Toggle todo completion status
   */
  toggleTodo(id) {
    this.dispatch();

    request
      .post('/api/todos/' + id + '/toggle')
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return this.actions.todoUpdatedError(err);
        this.actions.todoUpdated(res.body);
      });
  }

  /**
   * Remove todo
   */
  removeTodo(id) {
    this.dispatch();

    request
      .del('/api/todos/' + id)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return this.actions.todoRemovedError(err);
        this.actions.todoRemoved(id);
      });
  }
}

export default alt.createActions(TodoActions);
