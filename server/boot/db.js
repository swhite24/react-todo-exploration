/**
 * boot/db.js
 * Initializes mongoose connection
 */

import mongoose from 'mongoose';
import config from 'config';

export default function() {
  let dbConfig = config.get('db');

  mongoose.connect(dbConfig.connect);
}
