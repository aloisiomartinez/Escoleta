import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.send('Hello FastFeet'));

export default routes;
