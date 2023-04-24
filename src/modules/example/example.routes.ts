import { FastifyInstance } from 'fastify';
import { exampleController } from './example.controller';

export async function ExampleRouter(app: FastifyInstance) {
	app.get('/example', exampleController.findById);
}
