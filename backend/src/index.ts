import express from 'express';
import users from './dummydata/users.json';
const contentCard = require('./routes/contentCard');
const todos = require('./routes/todos');

const app = express();

const port = 3000;

app.use(contentCard);
app.use(todos);

app.get('/', (req, res) => {
  res.send('Hello World 1 !');
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
