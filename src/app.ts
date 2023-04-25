import fastify from 'fastify';
import { ExampleRouter } from './modules/example/example.routes';
import { AppRouter } from './app.routes';

export const app = fastify();

app.register(AppRouter);
app.register(ExampleRouter);
