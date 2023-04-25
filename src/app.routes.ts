import { FastifyInstance } from 'fastify';

export async function AppRouter(app: FastifyInstance) {
	app.get('/', () => {
		return {status: 'App is running!'};
	});
}
