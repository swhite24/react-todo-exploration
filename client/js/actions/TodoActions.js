/**
 * client/js/actions/TodoActions.js
 * Actions for manipulating Todos
 */

import alt from '../alt';
import request from 'superagent';

class TodoActions {
  constructor() {
    this.generateActions('receiveTodos', 'receiveTodosError');
  }

  /**
   * Fetch list of all todos
   */
  fetchTodos() {
    // Complete action
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
}

export default alt.createActions(TodoActions);
