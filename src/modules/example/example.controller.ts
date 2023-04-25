import { FastifyReply, FastifyRequest } from 'fastify';
import { exampleService } from './example.service';

class ExampleController {
	async create(request: FastifyRequest, response: FastifyReply) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const data = request.body;
		try {
			return await exampleService.create(data);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			console.log('🤯 - ', error?.code, error?.message);
			response.status(error?.code).send({error: error?.message});
		}
	}

	async findAll(request: FastifyRequest, response: FastifyReply) {
		try {
			return await exampleService.findMany();
		} catch (error: any) {
			console.log('🤯 - ', error?.code, error?.message);
			response.status(error?.code).send({error: error?.message});
		}
	}

	async findById(request:  FastifyRequest, response: FastifyReply) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const { id }: any = request.params;
		try {
			return await exampleService.findById(id);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			console.log('🤯 - ', error?.code, error?.message);
			response.status(error?.code).send({ message: error?.message });
		}
	}

	async deleteMany(request: FastifyRequest, response: FastifyReply) {
		try {
			return await exampleService.deleteMany();
		} catch (error: any) {
			console.log('🤯 - ', error?.code, error?.message);
			response.status(error?.code).send({ message: error?.message });
		}
	}
}

export const exampleController = new ExampleController();
