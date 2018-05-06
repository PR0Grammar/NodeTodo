const Todos = require('../models/todoModel');

module.exports = function(app) {
  app.get('/api/setupTodos', (req, res) => {

    //Seed Data
    let starterTodos = [
      {
        username: 'test',
        todo: 'Eat',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Code',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Sleep',
        isDone: false,
        hasAttachment: false
      }
    ];

    Todos.create(starterTodos, (err, results) => {
      res.send(results);
    });

  });
};
