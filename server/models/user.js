/**
 * server/models/user.js
 * User model
 */

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Todo from './todo';

// Bcrypt salt factor
const SALT = 10;

// Define schema
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true },
  firstName: String,
  lastName: String,
  password: { type: String, required: true },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }]
});

// Encrypt password on the way down
UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) return next();

  bcrypt.genSalt(SALT, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      this.password = hash;
      next();
    });
  });
});

// Attach methods
UserSchema.methods.checkPassword = checkPassword;
UserSchema.methods.getTodos = getTodos;
UserSchema.methods.addTodo = addTodo;
UserSchema.methods.owns = owns;

/**
 * Check password with bcrypt
 */
function checkPassword(candidate, cb) {
  bcrypt.compare(candidate, this.password, (err, valid) => {
    if (err) return cb(err);
    cb(null, valid);
  });
}

/**
 * Fetch all todos owned by user
 */
function getTodos(cb) {
  this.populate('todos', (err, user) => {
    if (err) return cb(err);
    cb(null, user.todos || []);
  });
}

/**
 * Add new todo for user
 */
function addTodo(todo, cb) {
  todo = new Todo(todo);
  todo.save((err, todo) => {
    if (err) return cb(err);
    this.todos.push(todo);
    this.save((err, user) => {
      if (err) return cb(err);
      cb(null, todo);
    });
  });
}

/**
 * Check if user owns todo
 */
function owns(id) {
  return this.todos.some((todo) => todo.equals(id));
}

// Export model
export default mongoose.model('User', UserSchema);
