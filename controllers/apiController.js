const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');

module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //Find todos by username
  app.get('/api/todos/:uname', (req, res) => {
    Todos.find({ username: req.params.uname }, (err, todos) => {
      if(err)
        throw err;
      res.send(todos);
    });
  });

  //Find todo by ID
  app.get('/api/todo/:id', (req, res) => {
    Todos.findById({ _id: req.params.id }, (err, todo) => {
      if(err)
        throw err;
      res.send(todo);
    });
  });

  app.post('/api/todo', (req, res) => {
    //Updates todo if ID exist
    if(req.body.id){

      Todos.findByIdAndUpdate(req.body.id,
        {
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment
        },
        (err, todo) => {
          if(err)
            throw err;
          res.send('Todo Updated!');
        }
      );

    }
    //Create a new todo
    else {

      let newTodo = Todos({
        username: 'test',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      });

      newTodo.save((err) => {
        if (err)
          throw err;
        res.send('New TODO!');
      });
    }

  });

  //Delete todo by ID
  app.delete('/api/todo', (req,res) => {

    Todos.findByIdAndRemove(req.body.id, (err) => {
      if (err)
        throw err;
      res.send('Todo Deleted');
    });

  });

};
