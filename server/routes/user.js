/**
 * server/routes/user.js
 * User routes
 */

import User from '../models/user';
import config from 'config';
import jwt from 'jsonwebtoken';

// JWT Configuration
const jwtConfig = config.get('jwt');

/**
 * Register a new user
 */
export function register(req, res) {
  let user = new User(req.body);

  user.save((err, user) => {
    if (err) return res.status(409).send(err);

    let token = getToken(user);
    req.session.token = token.token;
    res.status(200).send(token);
  });
}

/**
 * Login a user
 */
export function login(req, res) {
  let email = req.body.email;
  let password = req.body.password;

  User.findOne({ email: email }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send({ message: 'User not found' });

    user.checkPassword(password, (err, valid) => {
      if (err) return res.status(500).send(err);
      if (!valid) return res.status(404).send({ message: 'User not found' });

      let token = getToken(user);
      req.session.token = token.token;
      res.status(200).send(token);
    });
  });
}

/**
 * Logout a user
 */
export function logout(req, res) {
  delete req.session.token;
  res.status(200).end();
}

/**
 * Generate token object
 */
function getToken(user) {
  let token = jwt.sign(user, jwtConfig.secret, { expiresInMinutes: jwtConfig.exp });

  return { token };
}
