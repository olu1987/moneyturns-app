import { Router } from 'express';
import * as UserController from './controller';

const routes = new Router();

routes.post('/create-user', UserController.createUser);
routes.get('/get-all-users', UserController.getAllUsers);
routes.get('/get-user/:identifier', UserController.checkUserExists);
routes.post('/user/auth', UserController.auth);

export default routes;
