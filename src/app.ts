import fastify from 'fastify';
import { ExampleRouter } from './modules/example/example.routes';

export const app = fastify();

app.register(ExampleRouter);
