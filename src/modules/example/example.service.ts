import { CustomError } from '../../helpers/errors/custom.error';
import { Repository } from '../base/repository';

class ExampleService {
	Repository = new Repository('Example');
	async findById(id: number) {
		try {
			const verify = await this.Repository.findById(id);
			if (verify) {
				throw new CustomError('NotFound Error',404,'Item not found');
			}
			return verify;
		} catch (error) {
			throw new CustomError('Internal Error',500,'Internal server error');
		}
	}
}

export const exampleService = new ExampleService();
