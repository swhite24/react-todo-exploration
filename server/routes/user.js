/**
 * server/routes/user.js
 * User routes
 */

import User from '../models/user';

export function register(req, res) {
  let user = new User(req.body);
  user.save((err, user) => {
    if (err) return res.status(409).send(err);

    // TODO: jwt
    res.status(200).send(user);
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
      res.status(200).send(user);
    });
  });
}
