import { CustomError } from '../../helpers/errors/custom.error';
import { exampleService } from './example.service';

class ExampleController {
	async findById(request:  any, response: any) {
		const { id } = request.params;
		try {
			const example = await exampleService.findById(+id);
		} catch (error: any  | CustomError) {
			response.status(error?.code).send({ message: error?.message });
		}
	}
}

export const exampleController = new ExampleController();
