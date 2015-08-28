/**
 * boot/db.js
 * Initializes mongoose connection
 */

import mongoose from 'mongoose';
import config from 'config';

export default function() {
  let dbConfig = config.get('db');
  let port = process.env.MONGO_PORT || 27017;
  let db = dbConfig.name;

  mongoose.connect(`mongodb://localhost:${port}/${db}`);
}
