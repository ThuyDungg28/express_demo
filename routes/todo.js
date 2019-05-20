var express = require('express');
var db = require('../db/db');
var router = express.Router();

/* GET home page. */
router.get('/api/v1/todos', function(req, res) {
	res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});

// router.post('', function(req, res) {
//   if(!req.body.title) {
//     return res.status(400).send({
//       success: 'false',
//       message: 'title is required'
//     });
//   } else if(!req.body.description) {
//     return res.status(400).send({
//       success: 'false',
//       message: 'description is required'
//     });
//   }
//  const todo = {
//    id: db.length + 1,
//    title: req.body.title,
//    description: req.body.description
//  }
//  db.push(todo);
//  return res.status(201).send({
//    success: 'true',
//    message: 'todo added successfully',
//    todo
//  })
// });

 module.exports = router;
