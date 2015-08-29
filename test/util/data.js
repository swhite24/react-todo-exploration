/**
 * test/util/data.js
 * Data used in tests
 */

export default {
  todo: {
    _id: 1,
    content: 'Test',
    complete: false
  },
  todos: [{
    _id: 1,
    content: 'Test',
    complete: false
  }, {
    _id: 2,
    content: 'Test 2',
    complete: false
  }],

  // JWT created at jwt.io using random secret
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiZmlyc3ROYW1lIjoiZm9vIiwibGFzdE5hbWUiOiJiYXIifQ.7D_tm6hl2sBd3EttbDK19T2konR68KuvKm4YthAJKyk',
  user: {
    firstName: 'foo',
    lastName: 'bar',
    email: 'test@test.com'
  }
};
