import { Router } from 'express';
import content from '../dummydata/todos.json';

// Router works as a plug-in express application
const router = Router();

router.get('/todos', (req, res) => {
  res.send(content);
});

module.exports = router;
