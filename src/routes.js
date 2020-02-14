import { Router } from 'express'; // importa somente4 o Router
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('users', UserController.store);

export default routes;
