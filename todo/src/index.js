const express = require('express');

const app = express();
const todosRouter = require('./routes/todos.js'); 

const port = 3000;

app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    const now = new Date();
    console.log('Time: ', now.toISOString());
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World !!');
});

// Use the router for /todos
app.use('/todos', todosRouter); // Assuming todosRouter is correctly defined in 'router.js'

// Showing server is running
app.listen(port, () => {
  console.log('Server is running on port ', port);
});
