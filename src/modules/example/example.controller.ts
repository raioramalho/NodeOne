import { FastifyReply, FastifyRequest } from 'fastify';
import { exampleService } from './example.service';

class ExampleController {
	async findById(request:  FastifyRequest, response: FastifyReply) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const { id }: any = request.params;
		try {
			return await exampleService.findById(+id);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			response.status(error?.code).send({ message: error?.message });
		}
	}
}

export const exampleController = new ExampleController();
