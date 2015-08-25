/**
 * client/js/util/Api.js
 * Wrapper for Api calls
 */

import request from 'superagent';

class API {

  /**
   * Send login request
   */
  login(email, password, cb) {
    this._request('post', '/api/login', { email, password }, cb);
  }

  /**
   * Send register request
   */
  register(user, cb) {
    this._request('post', '/api/register', user, cb);
  }

  /**
   * Generic request abstraction
   */
  _request(method, url, body, cb) {
    if (typeof body === 'function') {
      cb = body;
      body = null;
    }

    let chain = request[method](url)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    if (body) chain.send(body);

    chain.end(cb);

  }
}

export default new API();
