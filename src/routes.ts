import express, {Request, Response} from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesController = new ClassesController();
const conenctionsController = new ConnectionsController();

routes.get('/', (request: Request, response: Response) => {
    return response.json({'hello': 'World'});
});

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', conenctionsController.index);
routes.post('/connections', conenctionsController.create);

export default routes;
