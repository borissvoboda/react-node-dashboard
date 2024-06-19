import { Router } from 'express';
import content from '../dummydata/content.json';

// Router works as a plug-in express application
const router = Router();

router.get('/contentCard', (req, res) => {
  res.send('Ahoj');
});

module.exports = router;
