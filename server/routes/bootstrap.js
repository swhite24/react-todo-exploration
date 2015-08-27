/**
 * server/routes/bootstrap.js
 * Fills res.locals with bootstrap data for specific routes
 */

import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';

// Create router
let router = express.Router();

// Handle auth bootstrap
router.use((req, res, next) => {
  if (req.session.token) res.locals.AuthStore = { token: req.session.token };
  next();
});

// Bootstrap user todos if needed
// Matches / and /profile
router.get(/\/(profile)?\/?$/, (req, res, next) => {
  // Ensure user is loggged in
  if (!req.session.token) return next();

  // Decode token for user info
  let user = jwt.decode(req.session.token);

  // Find user / populate todos
  User.findOne({ _id: user._id }).populate('todos').exec((err, user) => {
    if (err) return next();

    // Provide data to bootstrap TodoStore
    res.locals.TodoStore = { todos: user.todos };
    next();
  });
});

router.use((req, res, next) => {
  next();
});

export default router;
