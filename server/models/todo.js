/**
 * server/models/todo.js
 * Todo model
 */

import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  content: String,
  complete: { type: Boolean, default: false }
});

export default mongoose.model('Todo', TodoSchema);
