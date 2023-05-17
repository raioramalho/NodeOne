import { FastifyReply, FastifyRequest } from 'fastify';
import { exampleService } from './example.service';
import { ExampleCreateSchema } from './schemas/screate.schema';
import { HttpStatus } from '@nestjs/common';

class ExampleController {
	async create(request: FastifyRequest, response: FastifyReply) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const data = request.body;

		const check = ExampleCreateSchema.safeParse(data);

		if (!check.success) {
			const message = JSON.parse(check.error.message)[0];
			response.status(HttpStatus.BAD_REQUEST).send(message);
		}

		try {
			const create = await exampleService.create(data);
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

	async deleteOne(request: FastifyRequest, response: FastifyReply) {
		try {
			const { id }: any = request.params;
			return await exampleService.deleteOne(+id);
		} catch (error: any) {
			console.log('🤯 - ', error?.code, error?.message);
			response.status(error?.code).send({ message: error?.message });
		}
	}
}

export const exampleController = new ExampleController();
