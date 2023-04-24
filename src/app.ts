import fastify from 'fastify';
import { ExampleRouter } from './modules/example/example.routes';

const app = fastify();
app.register(ExampleRouter);

export default app;
