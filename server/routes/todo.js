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
  req.user.getTodos((err, todos) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(todos);
  });
}

/**
 * create
 * Create new todo
 */
export function create(req, res) {
  req.user.addTodo(req.body, (err, todo) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(todo);
  });
}

/**
 * update
 * Update todo
 */
export function update(req, res) {
  let id = req.params.id;
  if (!req.user.owns(id)) return res.status(401).send({ message: 'Todo not owned by user'});

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

/**
 * toggle
 * Toggles todo completion status
 */
export function toggle(req, res) {
  let id = req.params.id;
  if (!req.user.owns(id)) return res.status(401).send({ message: 'Todo not owned by user'});

  Todo.findById(id, (err, todo) => {
    if (err) return res.status(500).send(err);
    if (!todo) return res.status(404).send({ message: 'Todo not found.' });

    todo.complete = !todo.complete;
    todo.save((err, todo) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(todo);
    });
  });
}

/**
 * remove
 * Removes existing todo
 */
export function remove(req, res) {
  let id = req.params.id;
  if (!req.user.owns(id)) return res.status(401).send({ message: 'Todo not owned by user'});

  Todo.findByIdAndRemove(id, (err) => {
    if (err) return res.status(500).send(err);
    res.status(200).end();
  });
}
