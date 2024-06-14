import express from 'express';
import users from './dummydata/users.json';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World 1 !');
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
