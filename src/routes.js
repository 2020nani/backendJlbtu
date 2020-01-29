import {Router} from'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';

import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import PosicaoController from './app/controllers/PosicaoController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

  routes.post('/users', UserController.store);
  routes.post('/sessions', SessionController.store);
  
  routes.use(authMiddleware);

  routes.put('/users' , UserController.update);
  routes.post('/files', upload.array('file',10), FileController.store);
  routes.post('/posicaos', PosicaoController.store);
  
  


export default routes;