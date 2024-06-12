import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload.js';

import SessionController from './app/controllers/SessionController.js';
import HauseController from './app/controllers/HauseController.js';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/hauses', upload.single('thumbnail') ,HauseController.store);

export default routes;
