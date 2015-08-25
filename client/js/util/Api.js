/**
 * client/js/util/Api.js
 * Wrapper for Api calls
 */

import request from 'superagent';
import AuthStore from '../stores/AuthStore';

class API {

  /**
   * Login a user.
   */
  login(email, password, cb) {
    this._request('post', '/api/login', { email, password }, cb);
  }

  /**
   * Register a new user.
   */
  register(user, cb) {
    this._request('post', '/api/register', user, cb);
  }

  /**
   * Fetch all user todos
   */
  fetchTodos(cb) {
    this._request('get', '/api/todos', true, cb);
  }

  /**
   * Create new user todo
   */
  createTodo(todo, cb) {
    this._request('post', '/api/todos', true, todo, cb);
  }

  /**
   * Toggle user todo
   */
  toggleTodo(id, cb) {
    this._request('post', '/api/todos/' + id + '/toggle', true, cb);
  }

  /**
   * Remove usre todo
   */
  removeTodo(id, cb) {
    this._request('del', '/api/todos/' + id, true, cb);
  }

  /**
   * Generic request abstraction
   */
  _request(method, url, auth, body, cb) {
    if (typeof auth === 'function') {
      cb = auth;
      body = null;
      auth = null;
    } else if (typeof body === 'function') {
      cb = body;
      body = null;
    }

    let chain = request[method](url)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    if (auth) chain.set('Authorization', 'Bearer ' + AuthStore.getState().token);
    if (body) chain.send(body);

    chain.end(cb);
  }
}

export default new API();
