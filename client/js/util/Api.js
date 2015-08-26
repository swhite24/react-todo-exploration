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
    this._genericRequest('post', '/api/login', { email, password }, cb);
  }

  /**
   * Register a new user.
   */
  register(user, cb) {
    this._genericRequest('post', '/api/register', user, cb);
  }

  /**
   * Fetch all user todos
   */
  fetchTodos(cb) {
    this._authRequest('get', '/api/todos', cb);
  }

  /**
   * Create new user todo
   */
  createTodo(todo, cb) {
    this._authRequest('post', '/api/todos', todo, cb);
  }

  /**
   * Toggle user todo
   */
  toggleTodo(id, cb) {
    this._authRequest('post', '/api/todos/' + id + '/toggle', cb);
  }

  /**
   * Remove usre todo
   */
  removeTodo(id, cb) {
    this._authRequest('del', '/api/todos/' + id, cb);
  }

  _authRequest(method, url, body, cb) {
    if (typeof body === 'function') {
      cb = body;
      body = null;
    }

    let chain = this._request(method, url);
    chain.set('Authorization', 'Bearer ' + AuthStore.getState().token);

    if (body) chain.send(body);
    chain.end(cb);
  }

  _genericRequest(method, url, body, cb) {
    if (typeof body === 'function') {
      cb = body;
      body = null;
    }

    let chain = this._request(method, url);

    if (body) chain.send(body);
    chain.end(cb);
  }



  /**
   * Generic request abstraction
   */
  _request(method, url) {
    return request[method](url)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }
}

export default new API();
