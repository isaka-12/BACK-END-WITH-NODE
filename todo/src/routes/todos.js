const express = require("express");
const router = express.Router();

let todos = [
  { id: 1, title: "Write a blog post", author: "John Doe", is_completed: true,timeStamp: new Date() },
  { id: 2, title: "Learn Node.js", author: "Jane Smith", is_completed: false,timeStamp: new Date() },
  { id: 3, title: "Buy groceries", author: "John Doe", is_completed: false,timeStamp: new Date() },
  
];

router.get("/", (req, res) => {
  res.json(todos);
});

//route to get a single todo
router.get("/:id", (req, res) => {
  const todo = todos.find((b) => b.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("Todo not found");
  res.json(todo);
});

//route to create a new todo
router.post("/", (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    author: req.body.author,
    timeStamp: new Date(),
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo by id
router.put('/:id', (req, res) => {
  const todo = todos.find(todo => todo.id === parseInt(req.params.id));
  if (todo) {
    todo.title = req.body.title || todo.title;
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    todo.timestamp = new Date(); // Update the timestamp
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});


//route to delete a todo
router.delete("/:id", (req, res) => {
  const todoIndex = todos.findIndex((b) => b.id === parseInt(req.params.id));
  if (todoIndex === -1) return res.status(404).send("Todo not found");

  todos.splice(todoIndex, 1);
  res.status(204).send();
});

// Search for todos by title
router.get('/search', (req, res) => {
  const title = req.query.title.toLowerCase();
  const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(title));
  if (filteredTodos.length > 0) {
    res.json(filteredTodos);
  } else {
    res.status(404).json({ message: 'No todos found with that title' });
  }
});


module.exports = router;
