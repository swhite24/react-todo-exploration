/**
 * server/models/user.js
 * User model
 */

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT = 10;

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true },
  firstName: String,
  lastName: String,
  password: { type: String, require: true }
});

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

UserSchema.methods.checkPassword = function(candidate, cb) {
  bcrypt.compare(candidate, this.password, (err, valid) => {
    if (err) return cb(err);
    cb(null, valid);
  });
};

export default mongoose.model('User', UserSchema);
