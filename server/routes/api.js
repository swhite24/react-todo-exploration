/**
 * server/routes/api.js
 * Api handlers
 */

import _ from 'lodash';
import Todo from '../models/todo';

/**
 * list
 * List all available todos
 */
export function list(req, res) {
  Todo.find({}, (err, todos) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(todos);
  });
}

/**
 * create
 * Create new todo
 */
export function create(req, res) {
  var todo = new Todo(req.body);
  todo.save((err, todo) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(todo);
  });
}

/**
 * update
 * Update todo
 */
export function update(req, res) {
  var id = req.params.id;

  Todo.findById(id, (err, todo) => {
    if (err) return res.status(500).send(err);
    if (!todo) return res.status(404).send({ message: 'Todo not found.' });

    _.extend(todo, req.body);
    todo.save((err, todo) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(todo);
    });
  });
}
