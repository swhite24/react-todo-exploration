/**
 * test/util/setup.js
 * Setup test env
 */

let chai = require('chai');
let sinonChai = require('sinon-chai');

global.expect = chai.expect;
chai.use(sinonChai);
