import { Router } from 'express'; // importa somente4 o Router
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/usersList', UserController.index);

routes.post('/sessions', SessionController.store);

export default routes;
