import express from 'express';
import { create } from '../controller/userController.js';

let router = express.Router();

router.post('/', create);

export default router;