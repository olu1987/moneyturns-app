import { Router } from 'express';
import * as SavingGroupController from './controller';
import authenticate from '../../middlewares/authenticate';

const routes = new Router();

routes.post('/saving-group/create', authenticate, SavingGroupController.createSavingGroup);
routes.post('/saving-group/add-member/:group', SavingGroupController.addMember);
routes.get('/saving-group', SavingGroupController.getAllSavingGroups);

export default routes;
