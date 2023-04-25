import { FastifyInstance } from 'fastify';
import { exampleController } from './example.controller';

export async function ExampleRouter(app: FastifyInstance) {
	app.post('/example', exampleController.create);
	app.get('/example/:id', exampleController.findById);
}
