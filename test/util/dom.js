/**
 * test/util/dom.js
 * Configure test environment
 */

// Dependencies
let jsdom = require('jsdom');

// Setup the simplest document possible
let doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

// Get the window object out of the document
let win = doc.defaultView;

// Set globals for mocha to provide access to document and window
global.document = doc;
global.window = win;

// Extend global with window properties
for (let key in win) {
  if (!win.hasOwnProperty(key) || key in global) continue;
  global[key] = window[key];
}
