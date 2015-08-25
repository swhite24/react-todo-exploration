/**
 * server/routes/user.js
 * User routes
 */

import User from '../models/user';
import config from 'config';
import jwt from 'jsonwebtoken';

const jwtConfig = config.get('jwt');

export function register(req, res) {
  let user = new User(req.body);

  user.save((err, user) => {
    if (err) return res.status(409).send(err);

    // TODO: jwt
    res.status(200).send(getToken(user));
  });
}

export function login(req, res) {
  let email = req.body.email;
  let password = req.body.password;

  User.findOne({ email: email }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(404).send({ message: 'User not found' });

    user.checkPassword(password, (err, valid) => {
      if (err) return res.status(500).send(err);
      if (!valid) return res.status(404).send({ message: 'User not found' });

      // TODO: jwt
      res.status(200).send(getToken(user));
    });
  });
}

function getToken(user) {
  let token = jwt.sign(user, jwtConfig.secret, { expiresInMinutes: jwtConfig.exp });

  return {
    token: token,
    expires: Date.now() + jwtConfig.exp * 60 * 1000,
    user: user
  };
}
