import express from 'express';
import { list, get } from '../controller/movieController.js';

let router = express.Router();

router.get('/', list);
router.get('/:name', get);

export default router;