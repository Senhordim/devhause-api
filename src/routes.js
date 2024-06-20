import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload.js';

import SessionController from './app/controllers/SessionController.js';
import HauseController from './app/controllers/HauseController.js';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/hause', upload.single('thumbnail'), HauseController.store);
routes.get('/hauses', HauseController.index);
routes.get('/hause/:id', HauseController.show);
routes.put('/hause/:id', upload.single('thumbnail'), HauseController.update);
routes.delete('/hause/:id', HauseController.destroy);

export default routes;
