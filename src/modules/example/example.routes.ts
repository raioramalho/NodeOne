import { FastifyInstance } from 'fastify';
import { exampleController } from './example.controller';

export async function userRouter(app: FastifyInstance) {
	app.get('/example', exampleController.findById);
}
