import { Router } from 'express';



import AcessoController from './app/controllers/AcessoController';
import EmailController from './app/controllers/EmailController';




const routes = new Router();



routes.post('/sendEmail', EmailController.index);
routes.post('/acesso', AcessoController.store);



export default routes;